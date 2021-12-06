import { IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  public body: string;
}