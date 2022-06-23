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
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐀𝐍𝐎𝐍𝐈𝐌𝐎
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶𖥨⸽⃟👻𝐀𝐍𝐎𝐍𝐈𝐌𝐎𖥨⸽⃟👻
├✶⊶⊷⊶⊷𝟐𝟎𝟐𝟐⊶⊷⊶⊷✶
├⇶𖥨⸽⃟👻_${usedPrefix}start_
├⇶𖥨⸽⃟👻_${usedPrefix}next_
├⇶𖥨⸽⃟👻_${usedPrefix}leave_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐌𝐄𝐍Ú 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎❍͜͡➣', `#Menucompleto`, '❍͜͡➣𝐈𝐍𝐅𝐎𝐁𝐎𝐓❍͜͡➣', `#infobot`, '❍͜͡➣𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒❍͜͡➣', `#CREADORES`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(ANONIMO|Anónimo)$/i
handler.fail = null
module.exports = handler