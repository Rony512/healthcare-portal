import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestModule } from './request/request.module';
import { PrescriptionModule } from './prescription/prescription.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://testing:ragnarok@testingarea.hmcf7.mongodb.net/healthCare?retryWrites=true&w=majority'),
    PatientModule,
    RequestModule,
    PrescriptionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
