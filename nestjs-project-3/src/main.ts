import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import tracing from './tracing';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Start the tracing service
  tracing.start();

  const app = await NestFactory.create(AppModule);

  const openApiConfig = new DocumentBuilder()
    .setTitle('NestJS Tracing Example API')
    .setDescription('The NestJS Tracing Example API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
