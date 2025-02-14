import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Context, Markup } from "telegraf";
import { Bot } from "./models/bot.models";

@Injectable()
export class BotService {
  constructor(@InjectModel(Bot) private readonly botModel: typeof Bot) {}

  async onStart(ctx: Context) {
    const user_id = ctx.from?.id;
    const user = await this.botModel.findByPk(user_id);

    if (!user) {
      await this.botModel.create({
        user_id,
        user_name: ctx.from?.username,
        first_name: ctx.from?.first_name,
        last_name: ctx.from?.last_name,
        language: ctx.from?.language_code,
      });

      await ctx.reply(`Iltimos Ro'yxatdan o'tish tugmasini bosing:`, {
        parse_mode: "HTML",
        ...Markup.keyboard([["Ro'yxatdan o'tish 👨‍🔧"]])
          .resize()
          .oneTime(),
      });
    } else {
      await ctx.reply(
        `BU BOT MAQSADI MAISHIY XIZMATLARGA NAVBATNI TELEGRAM ORQALI TIZIMLASHTIRISH`,
        {
          ...Markup.removeKeyboard(),
        }
      );
    }
  }

  async onRegistration(ctx: Context) {
    const user_id = ctx.from?.id;
    const user = await this.botModel.findByPk(user_id);

    if (!user) {
      await ctx.reply(`Iltimos oldin botni qayta ishga tushuring`, {
        parse_mode: "HTML",
        ...Markup.keyboard([["/start"]])
          .resize()
          .oneTime(),
      });
    } else {
      await ctx.reply(`Ro'yxatdan o'tish turini tanlang: 👇`, {
        parse_mode: "HTML",
        ...Markup.keyboard([["Usta 👨‍🔧", "Mijoz 👤"]])
          .resize()
          .oneTime(),
      });
    }
  }

  async onClickMaster(ctx: Context) {
    const user_id = ctx.from?.id;
    const user = await this.botModel.findByPk(user_id);

    if (!user) {
      await ctx.reply(`Iltimos oldin botni qayta ishga tushuring`, {
        parse_mode: "HTML",
        ...Markup.keyboard([["/start"]])
          .resize()
          .oneTime(),
      });
    } else if (!user.role) {
      user.role = "master";
      await user.save();

      await ctx.reply("Iltimos ish turini tanlang:", {
        parse_mode: "HTML",
        ...Markup.keyboard([
          ["SARTAROSHXONA 💇🏻‍♂️", "GO'ZALLIK SALONI 💄"],
          ["ZARGARLIK USTAXONASI 🎗", "SOATSOZ 🕰"],
          ["POYABZAL USTASI 👞"],
        ]),
      });
    }
  }

  async onWorkShop(ctx: Context){
      const user_id = ctx.from?.id;
      const user = await this.botModel.findByPk(user_id);

      try {
          await this.botModel.create({user_id, last_state: "name"});
          await ctx.reply(`Ismingizni kiriting`, {
            parse_mode: "HTML",
            ...Markup.removeKeyboard(),
          })
      } catch (error) {
          console.log("ON WORK SHOP ERROR", error);
      }
  }
}
