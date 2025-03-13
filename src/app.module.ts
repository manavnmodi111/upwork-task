import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // MongoDB connection string here
    MongooseModule.forRoot('mongodb+srv://admin:admin@todo.jpqae.mongodb.net/?retryWrites=true&w=majority&appName=todo'),
    TasksModule, // <-- Import the tasks module
  ],
})
export class AppModule {}
