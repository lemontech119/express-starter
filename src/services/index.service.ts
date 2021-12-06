import { HttpException } from "@exceptions/HttpException";
import { Test } from "@interfaces/tests.interface"; 
import { CreateTestDto } from "@dtos/index.dto"
import { isEmpty } from "@utils/util";
import indexModel from "@models/index.model";

// for the test
class IndexService {
  public indexModel = new indexModel();

  public async findTestById(testId: number): Promise<Test> {
    if (isEmpty(testId)) throw new HttpException(400, "You're not testId");
    const findTest = await this.indexModel.findTestById(testId);
    
    if (!findTest) {
      throw new HttpException(409, "It's data that doesn't");
    }
    return findTest;
  }

  public async createTest(testData: CreateTestDto): Promise<Test> {
    if (isEmpty(testData)) throw new HttpException(400, "You're not userData");

    const createTest = await this.indexModel.createTest(testData);

    return createTest;
  }

}


export default IndexService;