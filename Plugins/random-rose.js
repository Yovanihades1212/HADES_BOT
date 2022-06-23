let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/rose?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '💚 *Lo que oigo puede ser sierto*', '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(rose|rosé|Rose|Rosé)$/i
module.exports = handler
