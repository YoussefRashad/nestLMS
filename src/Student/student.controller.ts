import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() {
    return this.studentService.findAll();
  }

  @Get(':id')
  getStudent(@Param('id') stuId: number) {
    return this.studentService.findOne(stuId);
  }

  @Post()
  async addStudent(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('username') username: string,
  ) {
    const student = await this.studentService.add({
      email,
      password,
      username,
    });
    return student;
  }

  @Patch(':id')
  async updateStudent(@Param('id') stuId: number, @Body() stuData: {}) {
    console.log(stuId);
    console.log(stuData);
    return;
  }

  @Delete(':id')
  async deleteStudent(@Param('id') stuId: number) {
    await this.studentService.remove(stuId);
    return;
  }
}
