import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Faculty extends Document  {
        
        @ApiProperty( { example: 'Faculty of Science' } )
        @Prop( { required: true } )
        name: string;

        @ApiProperty( { example: 'Esta es la descripción de que hace la facultad de Ciencias' } )
        @Prop()
        description: string;

        @ApiProperty( { example: 'Dr. Juan Pérez' } )
        @Prop( { required: true } )
        dean: string;

        @ApiProperty( { example: 'juan.perez@unimet.edu.ve'})
        @Prop( { required: true } )
        dean_email: string;
    
}

export const FacultySchema = SchemaFactory.createForClass(Faculty);
