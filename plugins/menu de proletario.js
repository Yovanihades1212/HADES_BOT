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
├⇶👑⃟⟫𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐎👑⃟⟫
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶👑⃟⟫⛥ _${usedPrefix}boost_
├⇶👑⃟⟫⛥ _${usedPrefix}restart_
├⇶👑⃟⟫⛥ _${usedPrefix}banlist_
├⇶👑⃟⟫⛥ _${usedPrefix}binario1_
├⇶👑⃟⟫⛥ _${usedPrefix}binario2_
├⇶👑⃟⟫⛥ _${usedPrefix}banchat2_
├⇶👑⃟⟫⛥ _${usedPrefix}actualizar_
├⇶👑⃟⟫⛥ _${usedPrefix}CajaFuerte_
├⇶👑⃟⟫⛥ _${usedPrefix}unbanchat2_
├⇶👑⃟⟫⛥ _${usedPrefix}bc *texto*_
├⇶👑⃟⟫⛥ _${usedPrefix}deletechat_
├⇶👑⃟⟫⛥ _${usedPrefix}mutechat_
├⇶👑⃟⟫⛥ _${usedPrefix}bcgc *texto*_
├⇶👑⃟⟫⛥ _${usedPrefix}bcbot *texto*_
├⇶👑⃟⟫⛥ _${usedPrefix}mutechat *all*_
├⇶👑⃟⟫⛥ _${usedPrefix}setbye *@tag*_
├⇶👑⃟⟫⛥ _${usedPrefix}banuser *@tag*_
├⇶👑⃟⟫⛥ _${usedPrefix}deletechat *all*_
├⇶👑⃟⟫⛥ _${usedPrefix}mutechat *chat*_
├⇶👑⃟⟫⛥ _${usedPrefix}mutechat *group*_
├⇶👑⃟⟫⛥ _${usedPrefix}enable *public*_
├⇶👑⃟⟫⛥ _${usedPrefix}disable *public*_
├⇶👑⃟⟫⛥ _${usedPrefix}deletechat *chat*_
├⇶👑⃟⟫⛥ _${usedPrefix}deletechat *group*_
├⇶👑⃟⟫⛥ _${usedPrefix}unbanuser *@tag*_
├⇶👑⃟⟫⛥ _${usedPrefix}listgroup *@tag*_
├⇶👑⃟⟫⛥ _${usedPrefix}enable *restrict*_
├⇶👑⃟⟫⛥ _${usedPrefix}enable *autoread*_
├⇶👑⃟⟫⛥ _${usedPrefix}setwelcome *@tag*_
├⇶👑⃟⟫⛥ _${usedPrefix}enable *autoread*_
├⇶👑⃟⟫⛥ _${usedPrefix}disable *autoread*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ ', '❍͜͡➣𝐌𝐄𝐍Ú 𝐒𝐈𝐌𝐏𝐋𝐄️️❍͜͡➣', `#menusimple`, '❍͜͡➣𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒❍͜͡➣', `#menuaudios`, '❍͜͡➣𝐈𝐍𝐕𝐎𝐂𝐀𝐑 𝐆𝐔𝐑𝐏𝐎❍͜͡➣', `#tagall`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(PROPIETARO|propietario|proletario|proletario)$/i
handler.fail = null
module.exports = handler