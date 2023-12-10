import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GuiasModule } from './guias/guias.module';
import { PasseiosModule } from './passeios/passeios.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ReservaModule } from './reserva/reserva.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { LocalidadeModule } from './localidade/localidade.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/'), UsersModule, GuiasModule, PasseiosModule, CategoriaModule, ReservaModule, AvaliacaoModule, LocalidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
