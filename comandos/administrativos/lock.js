message.channel.overwritePermissions([{
     id: message.guild.id,
     deny: ['SEND_MESSAGES'],
     }]);
     return message.reply("🥀・Chat lockado!")