import { EntityRepository, Repository } from 'typeorm';
import { Encriptar } from './string.entity';
import { CreateStringDto } from './dtos/create-string.dto';
import * as crypto from 'crypto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Encriptar)
export class EncriptarRepository extends Repository<Encriptar> {
    async createTexto(
        createStringDto: CreateStringDto
      ): Promise<Encriptar> {
          
        const texto = CreateStringDto;
    
        const user = this.create();
        user.texto = crypto.randomBytes(32).toString('hex');
        try {
          await user.save();
          return user;
        } catch (error) {
          if (error.code.toString() === '23505') {
            throw new ConflictException('O campo Texto é obrigatório');
          } else {
            throw new InternalServerErrorException(
              'Erro ao salvar o texto no banco de dados',
            );
          }
        }
      }
    }