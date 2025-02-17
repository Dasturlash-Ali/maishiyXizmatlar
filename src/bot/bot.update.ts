import { Context } from "telegraf";
import { BotService } from "./bot.service";
import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from "nestjs-telegraf";
import { UseFilters, UseGuards } from "@nestjs/common";
import { TelegrafExceptionFilter } from "src/filters/telegraf-exception.filter";
import { AdminBotGuard } from "../guards/admin.guards";

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    
    await this.botService.onStart(ctx);
  }
  @Command("stop")
  async onStop(@Ctx() ctx: Context) {
    await this.botService.onStop(ctx);
  }

  @Hears("Ro'yxatdan o'tish 👨‍💻")
  async onRegistration(@Ctx() ctx: Context) {
    await this.botService.onRegistration(ctx);
  }

  @Hears("Usta 👨‍🔧")
  async onClickMaster(@Ctx() ctx: Context) {
    await this.botService.onClickMaster(ctx);
  }
  @Action(/^profession_+\d+/)
  async onClickProfession(@Ctx() ctx: Context) {
    await this.botService.onClickProfession(ctx);
  }
  @Action(/^start_work_time__+\d+/)
  async onClickStartWorkTime(@Ctx() ctx: Context) {    
    await this.botService.onClickStartWorkTime(ctx);
  }
  @Action(/^one_working_time__+\d+/)
  async onClickOneWorkingTime(@Ctx() ctx: Context) {    
    await this.botService.onClickOneWorkingTime(ctx);
  }

  
  @Action(/^end_work_time__+\d+/)
  async onClickEndWorkTime(@Ctx() ctx: Context) {    
    await this.botService.onClickEndWorkTime(ctx);
  }


  @UseFilters(TelegrafExceptionFilter)
  @UseGuards(AdminBotGuard)
  @Command("admin")
  async onCommanAdmin(@Ctx() ctx: Context) {
    await this.botService.onCommanAdmin(ctx);
  }


  @UseFilters(TelegrafExceptionFilter)
  @UseGuards(AdminBotGuard)
  @Hears("Kasb qo'shish 🧑‍💻")
  async onAddProfession(@Ctx() ctx: Context) {
    await this.botService.onAddProfession(ctx);
  }

  @Hears("Tashlab ketish ➡️")
  async onSkip(@Ctx() ctx: Context) {
    await this.botService.onSkip(ctx);
  }

  @On("contact")
  async onContact(@Ctx() ctx: Context) {
    await this.botService.onContact(ctx);
  }
  @On("location")
  async onLocation(@Ctx() ctx: Context) {
    await this.botService.onLocation(ctx);
  }

  @On("text")
  async onText(@Ctx() ctx: Context) {
    await this.botService.onText(ctx);
  }
}
