import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './configs/typeorm.config';
import { StringModule } from './string/string.module';
import { StringService } from './string/string.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), StringModule],
  controllers: [],
  providers: [StringService],
})
export class AppModule {}