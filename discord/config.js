/**
 * Configuration settings specifically for the Discord Bot
 * @see {@link DiscordAdapter}.
 */

module.exports = {
  // Prefix for bot commands.
  prefix: "lo!",
  // Bot token (see: https://discord.com/developers/applications/)
  token: process.env.DISCORD_BOT_TOKEN,
  // The guild (or server) ID.
  guildId: process.env.DISCORD_SERVER_ID,
  // Channel to post welcome messages.
  welcomeChannel: "👋｜bienvenida",
  // Channel to log messages to.
  logChannel: "📃｜logs",
  // Default role for new members.
  defaultRole: "Novate",
  // Reactions => roles
  roles: {
    "🎓": "Novate",
    "👵": "Colade",
  },
};
