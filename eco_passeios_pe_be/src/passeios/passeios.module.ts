import { Module } from '@nestjs/common';
import { PasseiosService } from './passeios.service';
import { PasseiosController } from './passeios.controller';

@Module({
  providers: [PasseiosService],
  controllers: [PasseiosController]
})
export class PasseiosModule {}
