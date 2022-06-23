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
├⇶ 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 𝐦𝐞𝐧ú 
├⇶𝐝𝐞 𝐍𝐎𝐓𝐀𝐒 𝐃𝐄 𝐕𝐎𝐙
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├🍷⃟🎧𝐍𝐎𝐓𝐀𝐒 𝐃𝐄 𝐕𝐎𝐙🍷⃟🎧
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶🍷⃟🎧_${usedPrefix}bass_
├⇶🍷⃟🎧_${usedPrefix}deep_
├⇶🍷⃟🎧_${usedPrefix}earrape_
├⇶🍷⃟🎧_${usedPrefix}fast_
├⇶🍷⃟🎧_${usedPrefix}fat_
├⇶🍷⃟🎧_${usedPrefix}nightcore_
├⇶🍷⃟🎧_${usedPrefix}reverse_
├⇶🍷⃟🎧_${usedPrefix}robot_
├⇶🍷⃟🎧_${usedPrefix}slow_
├⇶🍷⃟🎧_${usedPrefix}smooth_
├⇶🍷⃟🎧_${usedPrefix}vibracion *cantidad*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐎❍͜͡➣', `#PROPIETARO`, '❍͜͡➣𝐋𝐀𝐁𝐈𝐁𝐋𝐈𝐀❍͜͡➣', `#labiblia`, '❍͜͡➣𝐃𝐎𝐍𝐀𝐑❍͜͡➣️', `#donar`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(EFECTOS|EFECTOS AUDIOS|Efectos audios)$/i
handler.fail = null
module.exports = handler