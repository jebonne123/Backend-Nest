import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsMiddleware } from './cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use CORS middleware
  app.use(new CorsMiddleware().use);

  // Enable CORS explicitly
  app.enableCors({
    origin: 'https://reddit-clone-concept.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

