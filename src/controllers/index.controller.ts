import { NextFunction, Request, Response } from "express";
import indexService from "@services/index.service";
import { CreateTestDto } from "@dtos/index.dto"

class IndexController {
  public indexService = new indexService();

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({data: "", message: "hello world"});
    } catch (error) {
      next(error);
    }
  };

  public dbGetTest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const testId = Number(req.params.id);
      const findTest = await this.indexService.findTestById(testId);

      res.status(200).json({data: findTest, message: "findOne"});
    } catch (error) {
      next(error);
    }
  };

  public createTest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const testData: CreateTestDto = req.body;
      const createTest = await this.indexService.createTest(testData);

      res.status(200).json({data: createTest, message: "create"});
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
