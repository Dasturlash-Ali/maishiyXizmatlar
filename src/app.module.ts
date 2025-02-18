import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { BotModule } from './bot/bot.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bot } from './bot/models/bot.models';
import { Profession } from './bot/models/professions.model';
import { Master } from './bot/models/master.models';
import { Customer } from './bot/models/customer.model';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN || "123456",
        middlewares: [],
        include: [BotModule]
      })
    }),
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host:process.env.POSTGRES_HOST,
      username:process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models:[
        Bot, Profession, Master, Customer
      ],
      autoLoadModels: true,
      sync: { alter:true },
      logging: false,
    }),
    BotModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
