import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { Express } from 'express';

@Injectable()
export class S3Service {
  private s3Client: S3Client;

  constructor(private configService: ConfigService) {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const { originalname, buffer } = file;
    const bucketName = process.env.AWS_BUCKET_NAME;

    const params = {
      Bucket: bucketName,
      Key: originalname,
      Body: buffer,
    };

    const command = new PutObjectCommand(params);
    const response = await this.s3Client.send(command);
    return `https://${bucketName}.s3.${this.configService.get<string>('AWS_REGION')}.amazonaws.com/${originalname}`;
  }
}