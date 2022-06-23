const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/messi")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, url, "*Messi*", '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ᰰᰰ', '⚽ SIGUIENTE ⚽', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(messi)$/i
module.exports = handler
