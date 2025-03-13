import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async create(title: string): Promise<Task> {
    const newTask = new this.taskModel({ title });
    return newTask.save();
  }

  async delete(id: string): Promise<Task | null> {
    try {
      const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
      if (!deletedTask) {
        throw new InternalServerErrorException(`Task with id ${id} not found`);
      }
      return deletedTask;
    } catch (error) {
      console.error(`Failed to delete task with id ${id}:`, error);
      throw new InternalServerErrorException('Failed to delete task');
    }
  }
}
