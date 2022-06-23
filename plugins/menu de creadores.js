let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡  ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❤️⃟⃪͡ꦽ𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒❤️⃟⃪͡ꦽ
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}s_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}sticker_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}semoji_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}wasted_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stonks_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trash_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}rainbow_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}circle_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trigger_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stickermaker_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}attp *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}style *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}attp2 *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stickerfilter_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trigger *@tag*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}mp3 *responde a un video*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}img *responde a un sticker*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}blur *responde a una imagen*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}swm *link de imagen de google*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}gif *responde a un sticker/video*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}tovideo *responde a una nota de voz*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐔𝐍𝐄 𝐔𝐍 𝐁𝐎𝐓❍͜͡➣', `#EntraBot`, '❍͜͡➣𝐑𝐄𝐏𝐎𝐑𝐓𝐀️❍͜͡➣', `#REPORTA`, '❍͜͡➣𝐀𝐍𝐎𝐍𝐈𝐌𝐎❍͜͡➣', `#ANONIMO`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(CREADORES|creabores)$/i
handler.fail = null
module.exports = handler