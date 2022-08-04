import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request, RequestDocument } from './schemas/request.schema';

@Injectable()
export class RequestService {
  constructor(@InjectModel(Request.name) private readonly RequestModel: Model<RequestDocument>) { }

  async create(createRequestDto: CreateRequestDto) {
    return await this.RequestModel.create(createRequestDto);
  }

  async findAll() {
    return await this.RequestModel.find()
  }

  async findOne(id: string) {
    return await this.RequestModel.findById(id);
  }

  async findRequests(patient_id: string) {
    return await this.RequestModel.find({ patientId: patient_id })

  }

  async update(id: string, updateRequestDto: UpdateRequestDto) {
    return await this.RequestModel.updateOne({ _id: id }, updateRequestDto);
  }

  async remove(id: number) {
    return await `This action removes a #${id} request`;
  }
}
