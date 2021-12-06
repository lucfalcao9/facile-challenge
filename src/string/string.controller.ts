import { Controller, Post, Body } from '@nestjs/common';
import { CreateStringDto } from './dtos/create-string.dto';
import { StringService } from './string.service';
import { ReturnStringDto } from './dtos/return-string.dto';

@Controller('string')
export class StringController {
    constructor(private stringService: StringService) {}

  @Post()
  async createEncript(
    @Body() createStringDto: CreateStringDto,
  ): Promise<ReturnStringDto> {
    const string = await this.stringService.createEncript(createStringDto);
    return {
      string,
      message: 'Administrador cadastrado com sucesso',
    };
  }
}
