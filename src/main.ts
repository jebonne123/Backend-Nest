import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors({
      origin: ['http://localhost:5174', '*'],// Allow frontend to access API
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Allow cookies or authentication headers
    });


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
