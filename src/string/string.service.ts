import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncriptarRepository } from './string.repository'
import { Encriptar } from './string.entity';
import { CreateStringDto } from './dtos/create-string.dto';

@Injectable()
export class StringService {
    constructor(
        @InjectRepository(EncriptarRepository)
        private encriptarRepository: EncriptarRepository,
      ) {}

      async createEncript(createStringDto: CreateStringDto): Promise<Encriptar> {
          return this.encriptarRepository.createTexto(createStringDto);
      }
	  
	   async getById(id: number) {
		
        return await this.encriptarRepository.findOne(id);
    }
}
