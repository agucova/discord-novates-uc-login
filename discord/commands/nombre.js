const debug = require("debug")("discord-user-manager:discord:commands:kick");
const discord = require("discord.js");
const { User } = require("../../models");


module.exports = {
  name: "nombre",
  aliases: ["n", "name"],
  description: "Obtiene el nombre real de un usuario.",
  args: true,
  usage: "<guildUser>",
  permissions: [discord.Permissions.FLAGS.BAN_MEMBERS],
  guildOnly: true,
  cooldown: 1,
  execute: async (message) => {
    if (!message.mentions.users.size) {
      return message.reply("Falta el usuario.");
    }

    const user = message.mentions.users.first();

    const member = message.guild.member(user);

    const internalUser = await User.findOne({
      where: {
        discordId: member.id,
      },
    });

    if (member) {
      if (internalUser) {
        message.reply(`el usuario ${user.tag} se llama ${internalUser.name}.`);
      } else {
        message.reply(`el usuario ${user.tag} no está en la BBDD.`);
      }
    } else {
      message.reply(`el usuario ${user.tag} no pertenece al servidor.`);
    }
  },
};
