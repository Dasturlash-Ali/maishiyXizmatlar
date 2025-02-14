import { Context } from "telegraf";
import { BotService } from "./bot.service";
import { Command, Ctx, Hears, Start, Update } from "nestjs-telegraf";

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx : Context){
    await this.botService.onStart(ctx)
  }

  @Hears("Ro'yxatdan o'tish 👨‍🔧")
  async onRegistration(@Ctx() ctx : Context){
    await this.botService.onRegistration(ctx)
  }
  
  @Hears("Usta 👨‍🔧")
  async onClickMaster(@Ctx() ctx : Context){
    await this.botService.onClickMaster(ctx)
  }

  @Hears("SARTAROSHXONA 💇🏻‍♂️")
  async onWorkShop(@Ctx() ctx: Context){
    await this.botService.onWorkShop(ctx)
  }

}
