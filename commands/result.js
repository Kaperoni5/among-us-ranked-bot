module.exports = {
    name: 'result',
    description: "",
    execute(message, messageContent){
        message.guild.channels.cache.find(i => i.name === 'results').send(messageContent)
    }
}