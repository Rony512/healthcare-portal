import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";


export class CreatePatientDto {
    @ApiProperty()
    @IsNotEmpty()
    patientName: string;

    @ApiProperty()
    @IsNotEmpty()
    patientLastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    patientAge: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    patientWeight: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    patientHeight: number;

    @ApiProperty()
    @IsNotEmpty()
    patientAllergies: string[];

    @ApiProperty()
    @IsNotEmpty()
    requestHistory: Object[];

    @ApiProperty() @IsNotEmpty() @IsNumber()
    patientMobile_1: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    patientMobile_2: number;

    @ApiProperty()
    @IsNotEmpty()
    createdBy: string;

}
