const Discord = require('discord.js')
const Canvas = require('canvas');

module.exports.run = async (bot, message) => { 

const { registerFont, createCanvas } = require('canvas')
registerFont('././fontes/Lobster.ttf', { family: 'Lobster' })
  const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');



    const background = await Canvas.loadImage('https://img.freepik.com/fotos-gratis/fundo-futurista-moderno-da-luz-de-neon_33739-414.jpg?size=626&ext=jpg');
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
          ctx.strokeRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(125, 125, 480, 0, Math.PI * 2, true);
          ctx.closePath();
        ctx.clip();

ctx.font = '28px "Lobster"';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Seja Bem vindo ao seu Perfil', canvas.width / 2.5, canvas.height / 3.5);

      const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

	const imagem = new Discord.MessageAttachment(canvas.toBuffer(), 'tutozin.png');

let tutorial = new Discord.MessageEmbed()
   .setColor('#00DEFF')
      .setTitle('Perfil') 
   .setDescription(' ')
      .setFooter('', message.author.displayAvatarURL({dynamic: 'gif', format: 'png', size: 32}))
     .setAuthor(message.author.username, message.author.displayAvatarURL({size: 128}))
      .setThumbnail(message.author.displayAvatarURL({dynamic: 'gif', format: 'png', size: 128}))
      .attachFiles([imagem]).setImage('attachment://tutozin.png')
   .setTimestamp()
    


    message.channel.send(tutorial)

}
