let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/kaga?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*kaga*', 'ᰰ❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(kaga|Kaga)$/i

module.exports = handler


