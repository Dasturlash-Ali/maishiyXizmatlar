import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function start() {
  try {
    const PORT = process.env.PORT ?? 3000
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api");
    app.enableCors({
      origin: (origin, callback) => {
        const allowedOrigins = [
          "http://localhost:8000",
          "http://localhost:3000",
          "http://skidkachi.uz",
          "http://api.skidkachi.uz",
          "http://skidkachi.vercel.app",
        ];
        if(!origin || allowedOrigins.includes(origin)){
          callback(null, true);
        } else{
          callback(new BadRequestException("Not allowed by Cors"));
        }
      },
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
      credentials: true, //cookie va header
    })

    const config = new DocumentBuilder()
    .setTitle('Skitkachi project')
    .setDescription('Skitkachi project REST Api')
    .setVersion('1.0')
    .addTag(
      "NESTJS validation, swagger, guard, sequelize, pg, mailer"
    )
    .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    await app.listen(PORT, () => {
      console.log(`Server stared at: http://localhost:${PORT}`);
    });
    
  } catch (error) {
    console.log(error);
  }
}
start();
