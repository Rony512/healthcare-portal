import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateRequestDto } from './create-request.dto';

const requestType = {
    BASIC: 'BASIC',
    PLENNA: 'PLENNA',
    PLUS: 'PLUS'
}

const requestStatus = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
}
class physicalExamclass {
    @ApiProperty() @IsNotEmpty()
    inspection: string;

    @ApiProperty() @IsNotEmpty()
    palpation: string;

    @ApiProperty() @IsNotEmpty()
    auscultation: string;

    @ApiProperty() @IsNotEmpty()
    percussion: string;
}
export class UpdateRequestDto extends PartialType(CreateRequestDto) {
    @ApiProperty() @IsNotEmpty()
    patientId: string;

    @ApiProperty() @IsNotEmpty() @IsEnum(requestType)
    requestType: string;

    @ApiProperty() @IsNotEmpty() @IsEnum(requestStatus)
    requestStatus: string;

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
    updatedBy: string;
}
