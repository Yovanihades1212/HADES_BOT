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
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐆𝐄𝐒𝐓𝐈𝐎𝐍
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶✧͢⃟ᤢ💎𝐆𝐄𝐒𝐓𝐈𝐎𝐍✧͢⃟ᤢ💎
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶✧͢⃟ᤢ💎_${usedPrefix}admins *texto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}añadir *numero*_ 
├⇶✧͢⃟ᤢ💎_${usedPrefix}sacar @tag_
├⇶✧͢⃟ᤢ💎_${usedPrefix}save *@tag + nombre de contacto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}daradmin *@tag*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}quitaradmin *@tag*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}grupo *abrir / cerrar*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable welcome_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable welcome_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable antilink_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable antilink_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable antilink2_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable antilink2_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable delete_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable  delete_ 
├⇶✧͢⃟ᤢ💎_${usedPrefix}link_
├⇶✧͢⃟ᤢ💎_${usedPrefix}online
├⇶✧͢⃟ᤢ💎_${usedPrefix}notificar *texto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}setname *Nuevo nombre del grupo*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}setdesc *Nueva descripción del grupo*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}infogrupo_
├⇶✧͢⃟ᤢ💎_${usedPrefix}invocar *texto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}del *responder a un mensaje del bot*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}fantasmas_
├⇶✧͢⃟ᤢ💎_${usedPrefix}banchat_
├⇶✧͢⃟ᤢ💎_${usedPrefix}unbanchat_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐓É𝐑𝐌𝐈𝐍𝐎𝐒❍͜͡➣', `#Terminó se uso`, '❍͜͡➣𝐑𝐄𝐏𝐎𝐑𝐓𝐄❍͜͡➣️', `#reporte`, '❍͜͡➣¡мpεя¡σ мครтεя❍͜͡➣', `#Reclutamiento`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(GESTION|gestión)$/i
handler.fail = null
module.exports = handler