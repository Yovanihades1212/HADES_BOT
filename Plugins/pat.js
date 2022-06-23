let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn}) => {
try {
let res = await fetch('https://api.waifu.pics/sfw/pat')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, 'pat', '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ ')
conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
} catch (e) { }}
handler.command = /^(pat|palmaditas|cariños|mimos)$/i
module.exports = handler
