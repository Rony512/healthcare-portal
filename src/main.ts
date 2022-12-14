import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('HealthCare API Request')
    .setDescription('All the request needed in order to integrate with HealthCare Frontend')
    .setVersion('1.0')
    .addTag('HealthCare')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
