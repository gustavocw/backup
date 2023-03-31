import * as path from "path";
import * as crypto from 'crypto';
import * as multer_s3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

import { FileFilterCallback } from 'multer';
import { Request, Response } from 'express';

const s3_ = new S3Client({
    region: 'us-east-1',
    credentials:{
        accessKeyId: 'AKIAZNOBTDBO5PQTTGVH',
        secretAccessKey: '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'
    },
});

export default{
    dest: './',
    storage: multer_s3({
        s3: s3_,
        bucket: 'lessons-apollo',
        contentType: multer_s3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) =>{
            const hash = crypto.randomBytes(16).toString('hex');
            const filename = `${hash} - ${file.originalname}`;
            callback(null, filename);
        },
    }),
    fileFilter: (req:Request, file:Express.Multer.File, cb:FileFilterCallback) => {
        const allowFiles = ['image/png','image/jpg', 'image/jpeg'];
        if(!allowFiles.includes(file.mimetype)){
            cb(new Error('Invalid file types'));
        }else{
            cb(null, true);
        };
    },
    limits:{
        fileSize: 50 * 1024 * 1024,
    },
};
