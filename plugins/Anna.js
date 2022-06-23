let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api.sekha.tech/api/wallpaper/ana?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Anna*', 'ᰰ❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(anna|Anna)$/i

module.exports = handler
