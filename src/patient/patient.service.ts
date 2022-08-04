import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private readonly patientModel: Model<PatientDocument>) { }


  async create(createPatientDto: CreatePatientDto) {
    return await this.patientModel.create(createPatientDto);
  }

  async findAll() {
    return await this.patientModel.find()
  }

  async findOne(id: string) {
    return await this.patientModel.findById(id)
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    return await this.patientModel.updateOne({ _id: id }, { $set: updatePatientDto });
  }

  async remove(id: number) {
    return await `This action removes a #${id} patient`;
  }
}
