const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const os = require('os')

module.exports = (bot) => {
	bot.addTraditionalCommand("arkserver", message => {
		let embed = new Discord.RichEmbed();
		embed.setTitle("Coming SOON!")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("Coming SOON!", "", true)
		embed.addField("Coming SOON!", "", true)
		embed.addField("Coming SOON!", "", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})        
    })
	
/*

bot.addTraditionalCommand("arkserver", message => {
		let embed = new Discord.RichEmbed();
		embed.setTitle("Play MGN - Ark Survival Evolved? Join us on one of our three servers!")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("Extinction Core - The Center [PVE/Cluster]: ", "steam://connect/31.214.194.233:27015", true)
		embed.addField("Extinction Core - The Island [PVE/Cluster]: ", "steam://connect/5.62.104.43:27015", true)
		embed.addField("Extinction Core - Ragnarok [PVE/Cluster]: ", "steam://connect/185.9.107.231:27015", true)
		embed.addField("MGN ARK Discord: ", "https://discord.gg/s47tGFy", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})        
    })
	
*/
}
