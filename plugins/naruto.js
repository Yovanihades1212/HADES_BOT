let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/naruto?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*naruto*', 'ᰰ❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(naruto|Naruto)$/i

module.exports = handler


