import { IsNotEmpty } from "class-validator";

export class IDescriptionEscortDTO {
  @IsNotEmpty()
  price:string;
  
  @IsNotEmpty()    
  description:string;
  
  @IsNotEmpty()
  contact:string;

  @IsNotEmpty()
  type:string;

  @IsNotEmpty()
  eyes:string;

  @IsNotEmpty()
  tatoo:number;

  @IsNotEmpty()
  piercing:number;

  @IsNotEmpty()
  weight:string;

  @IsNotEmpty()
  height:string;
  
  @IsNotEmpty()
  obsScheduling:string
  
  @IsNotEmpty()
  age:number;

  @IsNotEmpty()
  userId:string;
};
