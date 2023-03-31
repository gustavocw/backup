import { NextFunction, Response } from "express";
import { CustomRequest } from '../interfaces/Request.interface';
import { Injectable, NestMiddleware } from '@nestjs/common';

interface Payload{
  id: string;
  escort:boolean;
  iat: number;
  exp: number;
};

@Injectable()
export class isEscort implements NestMiddleware{
    async use(req: CustomRequest, res: Response, next:NextFunction) {
        console.log("HAHA:",req.escort)
        if(!req.escort){
            return res.status(500).json({error:true, escort:false, message:'Vc não é acompanhante'});
        };
        return next();
    };
};
