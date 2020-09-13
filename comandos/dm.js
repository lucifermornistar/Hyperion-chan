module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(" Você não tem permissão para usar esse comando.");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        ` Você não mencionou um usuário,ou O id é inválido.`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send(" Você não específicou essa mensagem. ");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("That user could not be DMed!"))
      .then(() => message.channel.send(` Mensagem enviada com sucesso para. ${user.user.tag}`));
  },
};