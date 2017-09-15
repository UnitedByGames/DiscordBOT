const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const os = require('os')

module.exports = (bot) => {
	bot.addTraditionalCommand("discords", message => {
		let embed = new Discord.RichEmbed();
		embed.setTitle("UBG Invites Discords")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("UBG", "https://discord.gg/cjGYR8n", true)
		embed.addField("More Discords SOON!", "", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})        
    })
}