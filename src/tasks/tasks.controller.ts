import { Controller, Get, Post, Body, Delete, Param, NotFoundException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body('title') title: string): Promise<Task> {
    return this.tasksService.create(title);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
  
}
