let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Incluso el más fuerte de los oponentes tiene siempre una debilidad*', '❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(itachi)$/i

module.exports = handler
