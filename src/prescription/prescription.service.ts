import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { Prescription, PrescriptionDocument } from './schemas/prescription.schema';

@Injectable()
export class PrescriptionService {
  constructor(@InjectModel(Prescription.name) private readonly patientModel: Model<PrescriptionDocument>) { }
  async create(createPrescriptionDto: CreatePrescriptionDto) {
    return await this.patientModel.create(createPrescriptionDto);
  }

  async findAll() {
    return await this.patientModel.find();
  }

  async findOne(id: string) {
    return await this.patientModel.findById(id);
  }

  async update(id: string, updatePrescriptionDto: UpdatePrescriptionDto) {
    return await this.patientModel.updateOne({ _id: id }, updatePrescriptionDto);
  }

  async remove(id: number) {
    return await `This action removes a #${id} prescription`;
  }
}
