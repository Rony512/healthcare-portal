import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';

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

    @ApiProperty()
    requestHistory: Object[];

    @ApiProperty()
    patientMobile_1: number;

    @ApiProperty()
    patientMobile_2: number;

    @ApiProperty()
    @IsNotEmpty()
    updatedBy: string;
}
