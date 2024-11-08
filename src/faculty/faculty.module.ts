import { Module } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { FacultyController } from './faculty.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultySchema } from './entities/faculty.entity';
import { Faculty } from './entities/faculty.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Faculty.name,
        schema: FacultySchema,
      },
    ]),
  ],
  controllers: [FacultyController],
  providers: [FacultyService],
})
export class FacultyModule {}
