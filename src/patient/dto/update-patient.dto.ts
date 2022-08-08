import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';

class historyClass {
    @ApiProperty() @IsNotEmpty()
    date: Date;

    @ApiProperty() @IsNotEmpty()
    title: string;

    @ApiProperty() @IsNotEmpty()
    requestId:string
}
export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @ApiProperty()
    patientName: string;

    @ApiProperty()
    patientLastName: string;

    @ApiProperty()
    patientAge: number;

    @ApiProperty()
    patientWeight: number;

    @ApiProperty()
    patientHeight: number;

    @ApiProperty()
    patientAllergies: string[];

    @ApiProperty({ type: [historyClass] })
    @ValidateNested({ each: true })
    @Type(() => historyClass)
    @IsNotEmpty()
    requestHistory: historyClass[];

    @ApiProperty()
    patientMobile_1: number;

    @ApiProperty()
    patientMobile_2: number;

    @ApiProperty()
    @IsNotEmpty()
    updatedBy: string;
}
