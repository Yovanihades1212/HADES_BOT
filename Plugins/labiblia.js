let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './+18.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mariana.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶๖ۣۜۜ͜͡Holaঔৣֳ᷌᷈͜͡  ${username} 
├⇶aquí tienes le menu
├⇶ ⋆⃟ۣۜ🔞𝐌𝐄𝐍𝐔+18
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶⋆⃟ۣۜ🔞𝐋𝐀𝐁𝐈𝐁𝐋𝐈𝐀 ⃘่͜͡☔
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶⋆⃟ۣۜ🔞_${usedPrefix}video_
├⇶ ⃘่͜͡☔_${usedPrefix}imglesbians_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}porno_
├⇶ ⃘่͜͡☔_${usedPrefix}randomnsfw_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}pornogif_
├⇶ ⃘่͜͡☔_${usedPrefix}sideboobs_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}hentai_
├⇶ ⃘่͜͡☔_${usedPrefix}pene_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}ecchi_
├⇶ ⃘่͜͡☔_${usedPrefix}pussy_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}boobs_
├⇶ ⃘่͜͡☔_${usedPrefix}panties_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}nekogif_
├⇶ ⃘่͜͡☔_${usedPrefix}porno2_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}yaoi_
├⇶ ⃘่͜͡☔_${usedPrefix}yuri_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}yaoigif_
├⇶ ⃘่͜͡☔_${usedPrefix}yurigif_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}pack_
├⇶ ⃘่͜͡☔_${usedPrefix}pack2_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}pack3_
├⇶ ⃘่͜͡☔_${usedPrefix}loli2_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}muslos_
├⇶ ⃘่͜͡☔_${usedPrefix}muslitos_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}booty_
├⇶ ⃘่͜͡☔_${usedPrefix}htrap_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}furro_
├⇶ ⃘่͜͡☔_${usedPrefix}nsfwass_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}bdsm_
├⇶ ⃘่͜͡☔_${usedPrefix}cum_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}ero_
├⇶ ⃘่͜͡☔_${usedPrefix}femdom_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}foot_
├⇶ ⃘่͜͡☔_${usedPrefix}pies_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}glass_
├⇶ ⃘่͜͡☔_${usedPrefix}yuri_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}yaoigif_
├⇶ ⃘่͜͡☔_${usedPrefix}yurigif_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}nsfwloli_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣ᰰ', '𝕄 𝔼 ℕ 𝕌   ℙ ℝ 𝕀 ℕ ℂ 𝕀 ℙ 𝔸 𝕃', `#menu`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(labiblia)$/i
handler.fail = null
module.exports = handler