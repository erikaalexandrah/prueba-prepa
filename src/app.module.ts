import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FacultyModule } from './faculty/faculty.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      },
    ),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        dbName: process.env.MONGODB_DB,
      }),
    }),
    FacultyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
