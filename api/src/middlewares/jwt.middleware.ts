import { NextFunction, Request, RequestHandler, Response } from "express"
import { verify } from "jsonwebtoken";
import { CustomRequest } from '../interfaces/Request.interface';
import { Injectable, NestMiddleware } from '@nestjs/common';

interface Payload{
  id: string;
  escort:boolean;
  iat: number;
  exp: number;
};

@Injectable()
export class token_middleware implements NestMiddleware{
    async use(req: CustomRequest, res: Response, next:NextFunction) {
        const { authorization } = req.headers;
        if(!authorization){
            return res.status(500).json({token:false, message:'Sem token!!'});
        };
        const parts = authorization.split(' ');
        if(parts.length !== 2){
            return res.status(500).json({token:false, message:'Header mal formado!'});
        };
        const [key, token] = parts;
        if(!/^Bearer/i.test(key)){
            return res.status(500).json({token:false,  message:'Token mal formado!'});
        };
        try {
            const decoded_token = verify(token, "8297a83ba8203dab9b11428cc425c998");
            const { id, escort } = decoded_token as Payload;
            req.userId = id;
            req.escort = escort;
            return next();
        } catch (error) {
            return res.status(500).json({erro:false, message:`${error}`});
        };
    };
};
