let axios = require("axios")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*UN TRAPITO <3*", '❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣', '🥵 SIGUIENTE 🥵', `${usedPrefix + command}`, '🔥 LABIBLIA 🔥', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }}) }
handler.command = /^htrap$/i
module.exports = handler
