import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

class historyClass {
    @ApiProperty()
    date: Date;

    @ApiProperty()
    title: string;

    @ApiProperty()
    requestId:string
}
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

    @ApiProperty({ type: [historyClass] })
    @ValidateNested({ each: true }) 
    @Type(() => historyClass)
    @IsNotEmpty()
    requestHistory: historyClass[];

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
