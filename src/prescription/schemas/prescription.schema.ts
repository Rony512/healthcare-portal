import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PrescriptionDocument = Prescription & Document;

@Schema()
export class Prescription {
    @Prop({ required: true })
    PatientId: string;

    @Prop({ required: true })
    requestId: string;

    @Prop()
    labTests: Object[];

    @Prop()
    radiology: Object[];

    @Prop()
    medicine: Object[]

    @Prop({ required: true })
    additionalAdvice: string;

    @Prop({ required: true })
    expectedOutcome: string;

    @Prop()
    status: string;

    @Prop({ required: true })
    createdBy: string;

    @Prop({ required: true })
    updatedBy: string;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);