import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  delete: any;
  constructor(
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
  ) {}

  // Example: Get all tasks
  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  // Example: Create task
  async create(title: string): Promise<Task> {
    const newTask = new this.taskModel({ title });
    return newTask.save();
  }
}
