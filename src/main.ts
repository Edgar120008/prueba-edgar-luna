import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
    forbidNonWhitelisted: true, 
    validationError: { target: false, value: false }
  }));

  await app.listen(3000);
}
bootstrap();