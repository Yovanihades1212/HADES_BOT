let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu3.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mus.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡  ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶🗃️⃟ᮬ᮫፝𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒🗃️⃟ᮬ᮫፝
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}imagen *texto*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}ytsearch *texto*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}dlaudio *link yt*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}dlvid *link yt*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}ytmp3 *link yt*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}ytmp4 *link yt*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}ytmp4.2 *link yt*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}play *titulo del audio*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}play2 *titulo del video*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}play3 *titulo del audio/video*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}play4 *titulo del video*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}letra *nombredelacanción*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}google *texto*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}googlef *texto*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}wikipedia *palabra clave*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}pinterestvideo *link de pinterest*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}tiktokaudio *link del tiktok*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}tiktok *link*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}spotify *autor, cancion*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}acortar *link*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}pinterest *texto*_
├⇶_${usedPrefix}xnxx *link de xnxx*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}xnxxsearch *texto*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}ssweb *link*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}igstory *username*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}igstalk *username*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}animeinfo *nombre del anime*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}twvid *link de video de twitter*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}facebook
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}instagramver
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}doxxeo
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐍𝐎𝐓𝐀𝐒 𝐃𝐄 𝐕𝐎𝐙❍͜͡➣️', `#EFECTOS AUDIOS`, '❍͜͡➣𝐐𝐔𝐄 𝐄𝐒 Ú𝐍 𝐁𝐎𝐓❍͜͡➣', `#Que es un Bot? `, '❍͜͡➣𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋❍͜͡➣️', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'mus.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(DESCARGAS|DESCARGAS|DESCARGAS|DESCARGAS|Menudescargas|menudescargas|DESCARGAS|DESCARGAS|DESCARGAS|DESCARGAS|DESCARGAS|MenuDESCARGAS|descargas)$/i
handler.fail = null
module.exports = handler