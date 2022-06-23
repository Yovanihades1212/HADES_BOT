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
├⇶ 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶ 𝐦𝐞𝐧ú 𝐝𝐞 𝐓𝐎𝐏𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶𑁍〪〫⃕͜⛧🏅𝐓𝐎𝐏𝐒.🏅۪̇𑁍〪〫⃕͜⛧
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}top10gays_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}toplind@s_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}topput@s_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}toppajer@s_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}topotakus_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣INVOCAR GURPO❍͜͡➣', `#tagall`, '❍͜͡➣𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒❍͜͡➣', `#menuaudios`, '️❍͜͡➣MENÚ COMPLETO❍͜͡➣', `#Menucompleto`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(TOPS|tops)$/i
handler.fail = null
module.exports = handler