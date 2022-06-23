let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/inori?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*inori*', '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ᰰ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(inori|Inori)$/i

module.exports = handler


