import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressListRoutes from 'express-list-routes';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );
  app.enableCors();

  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(expressListRoutes({}, 'API:', router));

  await app.listen(3000);
}
bootstrap();
