import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bot } from './models/bot.models';
import { Master } from './models/master.models';
import { Profession } from './models/professions.model';


@Module({
  imports:[SequelizeModule.forFeature([Bot, Master, Profession])],
  providers: [BotService, BotUpdate],
  exports:[BotService],
})
export class BotModule {}
