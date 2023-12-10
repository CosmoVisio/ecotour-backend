import { Module } from '@nestjs/common';
import { LocalidadeService } from './localidade.service';
import { LocalidadeController } from './localidade.controller';

@Module({
  providers: [LocalidadeService],
  controllers: [LocalidadeController]
})
export class LocalidadeModule {}
