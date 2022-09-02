import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  // Swagger documentation config
  const options = new DocumentBuilder()
    .setTitle('PDF TO HTML')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .addCookieAuth('Authentication')
    .build();
  const doc = SwaggerModule.createDocument(app, options);

  // Swagger API Documentation
  SwaggerModule.setup(`v1/docs`, app, doc, {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
  await app.listen(3000);
}
bootstrap();
