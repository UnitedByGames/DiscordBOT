const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const os = require('os')

module.exports = (bot) => {
	bot.addTraditionalCommand("mcserver", message => {
		let embed = new Discord.RichEmbed();
		embed.setTitle("Coming SOON!")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("Coming SOON!", "SOON!", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})        
    })
	
/*
	bot.addTraditionalCommand("mcserver", message => {
		let embed = new Discord.RichEmbed();
		embed.setTitle("Join us on the MGN Minecraft Server!")
		embed.setColor(0x008000)
		embed.setThumbnail(bot.client.user.avatarURL)
		embed.addField("IP: ", "mc.mgn.tm", true)
		embed.addField("Version: ", "1.11.2 (with 1.12 support)", true)
		embed.addField("MGN Twitch APP: ", "https://app.twitch.tv/servers/m2T4Da", true)
		embed.addField("MGN Minecraft Discord: ", "https://discord.gg/nxkR7Rh", true)
		embed.setFooter("Sent via "+bot.client.user.username, bot.client.user.avatarURL)
		embed.setTimestamp()
		message.channel.send({embed})        
    })
*/
}
