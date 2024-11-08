import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultyService {

  constructor(
    @InjectModel(Faculty.name) private facultyModel: Model<Faculty>,
  ) {}
 
  async create(createProductDto: CreateFacultyDto): Promise<Faculty> {
    const createdFaculty = new this.facultyModel(createProductDto);
    return createdFaculty.save();
  }

  async findAll(): Promise<Faculty[]> {
    return this.facultyModel.find().exec();
  }

  async findOne(id: string): Promise<Faculty> {
    const faculty = await this.facultyModel.findById(id).exec();
    if (!faculty) {
      throw new NotFoundException(`Faculty #${id} not found`);
    }
    return faculty;
  }

  async update(id: string, updateFacultyDto: UpdateFacultyDto): Promise<Faculty> {
    const existingFaculty = await this.facultyModel.findByIdAndUpdate(id,updateFacultyDto).exec();
    if (!existingFaculty) {
      throw new NotFoundException(`Faculty #${id} not found`);
    }
    return existingFaculty;
  }

  async remove(id: string): Promise<Faculty> {
    const deleteFaculty = await this.facultyModel.findByIdAndDelete(id).exec();
    if (!deleteFaculty) {
      throw new NotFoundException(`Faculty #${id} not found`);
    }
    return deleteFaculty;
  }
}
