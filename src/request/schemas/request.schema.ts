import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes, Types } from 'mongoose';

export type RequestDocument = Request & Document;

@Schema()
export class Request {
    @Prop({ required: true, type: SchemaTypes.ObjectId })
    patientId: Types.ObjectId;

    @Prop({ required: true })
    requestType: string;

    @Prop({ required: true })
    patientName: string;

    @Prop({ required: true })
    patientAge: number;

    @Prop({ required: true })
    condition: string;

    @Prop({ required: true, type: Object })
    physicalExam: Object;

    @Prop({ required: true })
    diagnose: string;

    @Prop()
    prescription: string;

    @Prop({ required: true })
    createdBy: string;

    @Prop({ required: true })
    updatedBy: string;
}

export const RequestSchema = SchemaFactory.createForClass(Request);