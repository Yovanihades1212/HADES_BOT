let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './menu4.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡  ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐑𝐀𝐍𝐃𝐎𝐌
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶🌹⃟🔮𝐑𝐀𝐍𝐃𝐎𝐌🌹⃟🔮
├✶⊶⊷⊶⊷𝟐𝟎𝟐𝟐⊶⊷⊶⊷✶
├⇶🌹⃟🔮_${usedPrefix}frase_
├⇶🌹⃟🔮_${usedPrefix}futbol_
├⇶🌹⃟🔮_${usedPrefix}Messi_
├⇶🌹⃟🔮_${usedPrefix}animal_
├⇶🌹⃟🔮_${usedPrefix}meme_
├⇶🌹⃟🔮_${usedPrefix}meme2_
├⇶🌹⃟🔮_${usedPrefix}meme3_
├⇶🌹⃟🔮_${usedPrefix}cat_
├⇶🌹⃟🔮_${usedPrefix}dog_
├⇶🌹⃟🔮_${usedPrefix}pikachu_
├⇶🌹⃟🔮_${usedPrefix}waifu_
├⇶🌹⃟🔮_${usedPrefix}blackpink_
├⇶🌹⃟🔮_${usedPrefix}reto_
├⇶🌹⃟🔮_${usedPrefix}verdad_
├⇶🌹⃟🔮_${usedPrefix}imagenrandom_
├⇶🌹⃟🔮_${usedPrefix}neko_
├⇶🌹⃟🔮_${usedPrefix}lolivid_
├⇶🌹⃟🔮_${usedPrefix}iqtest_
├⇶🌹⃟🔮_${usedPrefix}kpopitzy_
├⇶🌹⃟🔮_${usedPrefix}navidad_
├⇶🌹⃟🔮_${usedPrefix}fondomountain
├⇶🌹⃟🔮_${usedPrefix}wpaesthetic
├⇶🌹⃟🔮_${usedPrefix}rose
├⇶🌹⃟🔮_${usedPrefix}wpgaming
├⇶🌹⃟🔮_${usedPrefix}jisoo
├⇶🌹⃟🔮_${usedPrefix}jeni
├⇶🌹⃟🔮_${usedPrefix}loli_
├⇶🌹⃟🔮_${usedPrefix}Akira_
├⇶🌹⃟🔮_${usedPrefix}Anna_
├⇶🌹⃟🔮_${usedPrefix}Asuna_
├⇶🌹⃟🔮_${usedPrefix}boruto_
├⇶🌹⃟🔮_${usedPrefix}elaina_
├⇶🌹⃟🔮_${usedPrefix}hestia_
├⇶🌹⃟🔮_${usedPrefix}cosplay_
├⇶🌹⃟🔮_${usedPrefix}mikasa_
├⇶🌹⃟🔮_${usedPrefix}madara_
├⇶🌹⃟🔮_${usedPrefix}itachi_
├⇶🌹⃟🔮_${usedPrefix}Keneki_
├⇶🌹⃟🔮_${usedPrefix}itori_
├⇶🌹⃟🔮_${usedPrefix}Nezuko_
├⇶🌹⃟🔮_${usedPrefix}Sagiri_
├⇶🌹⃟🔮_${usedPrefix}Naruto_
├⇶🌹⃟🔮_${usedPrefix}Minato_
├⇶🌹⃟🔮_${usedPrefix}Sakura_
├⇶🌹⃟🔮_${usedPrefix}Kurumi_
├⇶🌹⃟🔮_${usedPrefix}Kaori_
├⇶🌹⃟🔮_${usedPrefix}Kagura_
├⇶🌹⃟🔮_${usedPrefix}Kaga_
├⇶🌹⃟🔮_${usedPrefix}isuzu_
├⇶🌹⃟🔮_${usedPrefix}inori_
├⇶🌹⃟🔮_${usedPrefix}Hinata_
├⇶🌹⃟🔮_${usedPrefix}Emilia_
├⇶🌹⃟🔮_${usedPrefix}Eba_
├⇶🌹⃟🔮_${usedPrefix}Deidara_
├⇶🌹⃟🔮_${usedPrefix}Chitoge_
├⇶🌹⃟🔮_${usedPrefix}Chiho_
├⇶🌹⃟🔮_${usedPrefix}Asuna_
├⇶🌹⃟🔮_${usedPrefix}Akiyama_
├⇶🌹⃟🔮_${usedPrefix}gawrgura_
├⇶🌹⃟🔮_${usedPrefix}miku_
├⇶🌹⃟🔮_${usedPrefix}nyan_
├⇶🌹⃟🔮_${usedPrefix}pat_
├⇶🌹⃟🔮_${usedPrefix}itachi_
├⇶🌹⃟🔮_${usedPrefix}slap_
├⇶🌹⃟🔮_${usedPrefix}pat_
├⇶🌹⃟🔮_${usedPrefix}perfil_
├⇶🌹⃟🔮_${usedPrefix}scan_
├⇶🌹⃟🔮_${usedPrefix}kpop_
├⇶🌹⃟🔮_${usedPrefix}qr *texto*_
├⇶🌹⃟🔮_${usedPrefix}afk *motivo*_
├⇶🌹⃟🔮_${usedPrefix}CristianoRonaldo_
├⇶🌹⃟🔮_${usedPrefix}pregunta *pregunta*_
├⇶🌹⃟🔮_${usedPrefix}mention *texto*_
├⇶🌹⃟🔮_${usedPrefix}spamchat *texto*_
├⇶🌹⃟🔮_${usedPrefix}traducir es *texto*_
├⇶🌹⃟🔮_${usedPrefix}zodiac *AAAA MM DD*_
├⇶🌹⃟🔮_${usedPrefix}readmore *texto1| texto2*_
├⇶🌹⃟🔮_${usedPrefix}calc *expresión matemática*_ 
├⇶🌹⃟🔮_${usedPrefix}spamwa *numero|texto|cantidad*_
├⇶🌹⃟🔮_${usedPrefix}readqr *responde a un código QR*_
├⇶🌹⃟🔮_${usedPrefix}anime *random / waifu / husbu /neko*_
├⇶🌹⃟🔮_${usedPrefix}subirestado *texto / responder video, imagen o gif*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐂𝐎𝐍𝐕𝐈𝐄𝐑𝐓𝐄𝐓𝐄❍͜͡➣', `#CONVIERTETE`, '️❍͜͡➣𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍❍͜͡➣️', `#información`, '❍͜͡➣𝐓𝐎𝐏𝐒❍͜͡➣', `#TOPS`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(RANDOM EXTRAS|RANDOM|ranbom extras|random)$/i
handler.fail = null
module.exports = handler