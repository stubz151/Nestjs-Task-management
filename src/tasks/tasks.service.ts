import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository : TaskRepository,
  ){}

  async getTaskById(id : number) : Promise<Task> {
      const found = await this.taskRepository.findOne(id);
      
      if (!found)
      {
        throw new NotFoundException(`Task with ID "${id}" not found`);
      }

      return found;
    }

  async createTask(createTaskDto : CreateTaskDto) : Promise<Task>{
    const {title, description} = createTaskDto;
    
    const task = new Task();

    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;

    await task.save();

    return task;

  }



}
