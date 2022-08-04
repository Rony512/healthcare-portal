import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { Prescription, PrescriptionDocument } from './schemas/prescription.schema';

@Injectable()
export class PrescriptionService {
  constructor(@InjectModel(Prescription.name) private readonly patientModel: Model<PrescriptionDocument>) { }
  create(createPrescriptionDto: CreatePrescriptionDto) {
    return 'This action adds a new prescription';
  }

  findAll() {
    return this.patientModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} prescription`;
  }

  update(id: number, updatePrescriptionDto: UpdatePrescriptionDto) {
    return `This action updates a #${id} prescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescription`;
  }
}
