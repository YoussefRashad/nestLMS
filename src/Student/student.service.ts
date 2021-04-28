import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student)
    private studentModel: typeof Student,
  ) {}

  async findAll() {
    return this.studentModel.findAll();
  }

  async findOne(id: number) {
    const student = await this.studentModel.findOne({
      where: {
        id,
      },
    });
    if (!student) {
      throw new NotFoundException(`student ${id} not found`);
    }
    return student;
  }

  async add(data) {
    const student = await this.studentModel.create({ ...data });
    return student
  }

  async remove(id: number) {
    const student = await this.findOne(id);
    await student.destroy();
  }
}
