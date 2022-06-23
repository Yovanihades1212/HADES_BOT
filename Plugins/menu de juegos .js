let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/ven.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡  ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐉𝐔𝐄𝐆𝐎𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶🌹⃟🎮𝐉𝐔𝐄𝐆𝐎𝐒🌹⃟🎳
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶🌹⃟🎲  _${usedPrefix}math *modo*_
├⇶🌹⃟🎮 _${usedPrefix}ttt *nombre del la sala*_
├⇶🌹⃟🕹️ _${usedPrefix}delttt *nombre del la sala*_
├⇶🌹⃟♟️ _${usedPrefix}2gay *@tag*_
├⇶🌹⃟🎰 _${usedPrefix}gay *@tag / nombre*_
├⇶🌹⃟⛳ _${usedPrefix}lesbi *@tag / nombre*_
├⇶🌹⃟🏹 _${usedPrefix}pajero *@tag / nombre*_
├⇶🌹⃟🎲 _${usedPrefix}pajera *@tag / nombre*_
├⇶🌹⃟🎮 _${usedPrefix}puta *@tag / nombre*_
├⇶🌹⃟🕹️ _${usedPrefix}puto *@tag / nombre*_
├⇶🌹⃟♟️ _${usedPrefix}rata *@tag / nombre*_
├⇶🌹⃟🎰 _${usedPrefix}manco *@tag / nombre*_
├🌹⃟⛳ _${usedPrefix}manca *@tag / nombre*_
├⇶🌹⃟🏹 _${usedPrefix}formarpareja_
├⇶🌹⃟🎲 _${usedPrefix}dado_
├⇶🌹⃟🎮 _${usedPrefix}simsimi *texto*_
├⇶🌹⃟🕹️ _${usedPrefix}formartrio_
├⇶🌹⃟♟️ _${usedPrefix}love *@tag / nombre*_
├⇶🌹⃟🎰_${usedPrefix}amigorandom_
├⇶🌹⃟⛳ _${usedPrefix}slot *cantidad*_
├⇶🌹⃟🏹 _${usedPrefix}ppt *piedra / papel / tijera*_
├⇶🌹⃟🎲 _${usedPrefix}prostituta *@tag / nombre*_
├⇶🌹⃟🎮 _${usedPrefix}prostituto *@tag / nombre*_
├⇶🌹⃟🕹️_$ {usedPrefix}doxear *@tag / nombre*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐈𝐍𝐅𝐎𝐁𝐎𝐓❍͜͡➣', `#infobot`, '❍͜͡➣𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒❍͜͡➣', `#CREADORES`, '❍͜͡➣𝐑𝐀𝐍𝐃𝐎𝐌 𝐄𝐗𝐓𝐑𝐀𝐒❍͜͡➣', `#RANDOM`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'ven.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|JUEGOS|juegos)$/i
handler.fail = null
module.exports = handler