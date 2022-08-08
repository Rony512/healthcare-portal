import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";


class TestClass {
    @ApiProperty()
    name: string;

    @ApiProperty()
    advice: string
}
export class CreatePrescriptionDto {
    @ApiProperty() @IsNotEmpty()
    PatientId: string;

    @ApiProperty() @IsNotEmpty()
    requestId: string;

    @ApiProperty({ type: [TestClass] }) @ValidateNested({ each: true }) @Type(() => TestClass)
    labTests: TestClass[];

    @ApiProperty({ type: [TestClass] }) @ValidateNested({ each: true }) @Type(() => TestClass)
    radiology: TestClass[];

    @ApiProperty({ type: [TestClass] }) @ValidateNested({ each: true }) @Type(() => TestClass)
    medicine: TestClass[];

    @ApiProperty() @IsNotEmpty()
    additionalAdvice: string;

    @ApiProperty() @IsNotEmpty()
    expectedOutcome: string;

    @ApiProperty()
    status: string;

    @ApiProperty() @IsNotEmpty()
    createdBy: string;
}
