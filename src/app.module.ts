import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // <-- Add this line to enable env access
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/mydb'), // <-- Use env var
    TasksModule,
  ],
})
export class AppModule {}