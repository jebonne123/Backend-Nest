import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jebonne:taroy123@bon.iw2hm.mongodb.net/'),
    PostsModule,
  ],
})
export class AppModule {}

