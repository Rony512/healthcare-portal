import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type RequestDocument = Request & Document;

@Schema()
export class Request {
    @Prop({ required: true, type: Object })
    patientId: ObjectId;
    
    @Prop({ required: true })
    requestType: string;

    @Prop({ required: true })
    patientName: string;

    @Prop({ required: true })
    patientAge: number;

    @Prop({ required: true })
    condition: number;

    @Prop({ required: true })
    physicalExam: Object[];

    @Prop({ required: true })
    diagnose: string[];

    @Prop()
    prescription: string;

    @Prop({ required: true })
    createdBy: string;

    @Prop({ required: true })
    updatedBy: string;
}

export const RequestSchema = SchemaFactory.createForClass(Request);