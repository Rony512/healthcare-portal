import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {

    @Prop({ required: true })
    patientName: string;

    @Prop({ required: true })
    patientLastName: string;

    @Prop({ required: true })
    patientAge: number;

    @Prop({ required: true })
    patientWeight: number;

    @Prop({ required: true })
    patientHeight: number;

    @Prop({ required: true })
    patientAllergies: string[];

    @Prop()
    requestHistory: Object[];

    @Prop({ required: true })
    patientMobile_1: number;

    @Prop()
    patientMobile_2: number;

    @Prop()
    createdBy: string;

    @Prop()
    updatedBy: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);