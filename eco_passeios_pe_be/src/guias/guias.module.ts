import { Module } from '@nestjs/common';
import { GuiasService } from './guias.service';
import { GuiasController } from './guias.controller';

@Module({
  providers: [GuiasService],
  controllers: [GuiasController]
})
export class GuiasModule {}
