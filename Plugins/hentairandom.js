let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hentai By ,❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣', 'ᰰ❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(hentai|hentay)$/i

module.exports = handler
