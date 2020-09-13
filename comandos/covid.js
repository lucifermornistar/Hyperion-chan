const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",

    async run (client, message, args){

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Perdendo argumentos')
        .setColor(0xFF0000)
        .setDescription(' Você está colocando errado! (ex: h!covid all || h!covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`<a:sirene:732842806179004427> COVID 19 STATUS DO MUNDO  🌎`)
                .addField('<a:pin:732816943538503762> Casos Confirmados', confirmed)
                .addField('<a:pin:732816943538503762> recuperados ', recovered)
                .addField('<a:pin:732816943538503762> Mortos', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`<a:sirene:732842806179004427> COVID-19 status de **${countries}**`)
                .addField('<a:pin:732816943538503762> Casos confirmados', confirmed)
                .addField('<a:pin:732816943538503762> recuperados', recovered)
                .addField('<a:pin:732816943538503762> Mortes', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('O pais que você colocou está inválido.')
            })
        }
    }
}