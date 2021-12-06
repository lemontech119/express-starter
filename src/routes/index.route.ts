import { Router } from "express";
import IndexController from "@controllers/index.controller"; 
import { Routes } from "@interfaces/routes.interface";

class IndexRoutes implements Routes {
  public path = "/";
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    // model test
    this.router.get(`${this.path}:id(\\d+)`, this.indexController.dbGetTest);
    this.router.post(`${this.path}`, this.indexController.createTest);
  }
}


export default IndexRoutes;