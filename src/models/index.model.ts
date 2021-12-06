import { getRepository } from "typeorm";
import { TestEntity } from "@entity/test.entity";
import { CreateTestDto } from "@dtos/index.dto"
import { Test } from "@interfaces/tests.interface"; 

class IndexModel {
  public test = TestEntity;

  public async findTestById(testId: number): Promise<Test> {
    const testRepository = getRepository(this.test);
    const findTest: Test = await testRepository.findOne(testId);

    return findTest;
  }

  public async createTest(testData: CreateTestDto): Promise<Test> {
    const testRepository = getRepository(this.test);
    const createTestData: Test = await testRepository.save({...testData});

    return createTestData;
  }
}


export default IndexModel;