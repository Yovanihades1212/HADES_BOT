let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu5.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡  ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├☙⃝♡〫𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍☙⃝♡〫
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶☙⃝♡〫_${usedPrefix}sc_
├⇶☙⃝♡〫_${usedPrefix}donar_
├⇶☙⃝♡〫_${usedPrefix}infobot_
├⇶☙⃝♡〫_${usedPrefix}grupos_
├⇶☙⃝♡〫_${usedPrefix}instalarbot_
├⇶☙⃝♡〫_${usedPrefix}menusimple_
├⇶☙⃝♡〫_${usedPrefix}menuaudios_
├⇶☙⃝♡〫_${usedPrefix}menu2_
├⇶☙⃝♡〫_${usedPrefix}labiblia_
├⇶☙⃝♡〫_${usedPrefix}estado_
├⇶☙⃝♡〫_${usedPrefix}Bot_
├⇶☙⃝♡〫_¿Qué es un Bot?_
├⇶☙⃝♡〫_Codigos para audios_
├⇶☙⃝♡〫_Términos y condiciones_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒❍͜͡➣', `#DESCARGAS`, '❍͜͡➣𝐆𝐄𝐒𝐓𝐈𝐎𝐍❍͜͡➣', `#GESTION`, '❍͜͡➣𝐌𝐄𝐍Ú 𝐒𝐈𝐌𝐏𝐋𝐄❍͜͡➣️️', `#menusimple`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(información|informacion)$/i
handler.fail = null
module.exports = handler