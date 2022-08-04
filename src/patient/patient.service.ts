import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private readonly patientModel: Model<PatientDocument>) { }


  create(createPatientDto: CreatePatientDto) {
    return this.patientModel.create(createPatientDto);
  }

  findAll() {
    return this.patientModel.find()
  }

  findOne(id: string) {
    return this.patientModel.findById(id)
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    return this.patientModel.updateOne({ _id: id }, { $set: updatePatientDto });
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
