let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/sagiri?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*sagiri*', 'ᰰ❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(sagiri|Sagiri)$/i

module.exports = handler


