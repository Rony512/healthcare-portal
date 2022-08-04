import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, ValidateNested } from "class-validator";
import { Types } from "mongoose";

const requestType = {
    BASIC: 'BASIC',
    PLENNA: 'PLENNA',
    PLUS: 'PLUS'
}

class physicalExamclass {
    @ApiProperty() @IsNotEmpty()
    inspection:string;

    @ApiProperty() @IsNotEmpty()
    palpation:string;

    @ApiProperty() @IsNotEmpty()
    auscultation:string;

    @ApiProperty() @IsNotEmpty()
    percussion:string;
}

export class CreateRequestDto {
    @ApiProperty() @IsNotEmpty()
    patientId: string;

    @ApiProperty() @IsNotEmpty() @IsEnum(requestType)
    requestType: string;

    @ApiProperty() @IsNotEmpty()
    patientName: string;

    @ApiProperty() @IsNotEmpty()
    patientAge: number;

    @ApiProperty() @IsNotEmpty()
    condition: string;

    @ApiProperty() @IsNotEmpty() @ValidateNested() @Type(() => physicalExamclass)
    physicalExam: physicalExamclass;

    @ApiProperty() @IsNotEmpty()
    diagnose: string;

    @ApiProperty()
    prescription: string;

    @ApiProperty() @IsNotEmpty()
    createdBy: string;

    @ApiProperty() @IsNotEmpty()
    updatedBy: string;
}
