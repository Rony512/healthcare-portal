import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type PrescriptionDocument = Prescription & Document;

@Schema()
export class Prescription {
    @Prop({ required: true, type: SchemaTypes.ObjectId })
    PatientId: Types.ObjectId;

    @Prop({ required: true, type: SchemaTypes.ObjectId })
    requestId: Types.ObjectId;

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