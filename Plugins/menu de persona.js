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
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐋𝐎𝐆𝐎𝐒 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├☙꙰⃝📝𝐏𝐄𝐑𝐒𝐎𝐍𝐀☙꙰⃝📝️
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶☙꙰⃝📝️ _${usedPrefix}logos_ (lista)
├⇶☙꙰⃝📝️_${usedPrefix}lolice_
├⇶☙꙰⃝📝️_${usedPrefix}simpcard_
├⇶☙꙰⃝📝️_${usedPrefix}hornycard_ 
├⇶☙꙰⃝📝️_${usedPrefix}lblackpink_
├⇶☙꙰⃝📝️_${usedPrefix}coffe *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}tahta *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}nulis *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}nulis2 *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}lolice *@tag*_
├⇶☙꙰⃝📝️_${usedPrefix}simpcard *@tag*_
├⇶☙꙰⃝📝️_${usedPrefix}logotaza *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}logocesped *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}logotaza2 *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}flaming *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}logofire *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}logosky *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}logocorazon *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}logorandom *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}neonfire *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}technology *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}playa *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}ytcomment *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}lovemessages *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}cementerio *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}romanticdouble *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}romanticmessages *texto*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ ', '❍͜͡➣𝐉𝐔𝐄𝐆𝐎𝐒❍͜͡➣', `#JUEGOS`, '❍͜͡➣𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒❍͜͡➣', `#DESCARGAS`, '❍͜͡➣𝐆𝐄𝐒𝐓𝐈𝐎𝐍❍͜͡➣', `#GESTION`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(PERSONALIZADOS|personalizavos)$/i
handler.fail = null
module.exports = handler