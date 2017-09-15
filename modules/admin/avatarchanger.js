const Discord = require("discord.js");
const config = require('../../config.json');
const prefix = config.prefix;
const os = require('os')

module.exports = (bot) => {

function isCommander(id) {
	if(id === config.owner_id) {
		return true;
	}
	for(var i = 0; i < admins.length; i++){
		if(admins[i] == id) {
			return true;
		}
	}
	return false;
}

	bot.addTraditionalCommand("avatarchange", message => {
          if (isCommander(message.author.id)) {
		var suffix = message.content.split(" ").slice(1).join(" ");
                bot.client.user.setAvatar(suffix)
                   .then(user => console.log(`My new Avatar Set!`))
                      message.channel.send(`\o/ My new Avatar been made <3!`)
                     .catch(console.error);
          } else {
		message.channel.send("Sorry, you do not have permissisons to use this command, **" + message.author.username + "**.")
	}
        
    })
}