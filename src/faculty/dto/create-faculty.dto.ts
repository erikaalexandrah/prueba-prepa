import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateFacultyDto {

    @ApiProperty( { example: 'Faculty of Science' } )
    @IsString()
    name: string;

    @ApiProperty( { example: 'Esta es la descripción de que hace la facultad de Ciencias' } )
    @IsString()
    @IsOptional()
    description?: string;
    
    @ApiProperty( { example: 'Dr. Juan Pérez' } )
    @IsString()
    dean: string;

    @ApiProperty( { example: 'juan.perez@unimet.edu.ve' } )
    @IsEmail()
    dean_email: string;
}
