import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import { connectDB } from "@databases";
import { Routes } from '@/interfaces/routes.interface';
import errorMiddleware from '@/middlewares/error.middleware';



class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || "development"
    
    // NODE_ENV가 test인 경우 DB연결 X
    this.env !== "test" && this.connectDatabase();
    
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private async connectDatabase() {
    await connectDB();
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;