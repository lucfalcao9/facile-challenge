import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncriptarRepository } from './string.repository';
import { StringService } from './string.service';
import { StringController } from './string.controller';

@Module({ imports: [TypeOrmModule.forFeature([EncriptarRepository])], providers: [StringService], controllers: [StringController], })
export class StringModule {}

