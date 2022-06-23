let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/naa.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 𝐦𝐞𝐧ú
├⇶𝐝𝐞 𝐌𝐄𝐍Ú 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├☙⃝♡〫𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍☙⃝♡〫
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶☙⃝♡〫_${usedPrefix}sc_
├⇶☙⃝♡〫_${usedPrefix}donar_
├⇶☙⃝♡〫_${usedPrefix}infobot_
├⇶☙⃝♡〫_${usedPrefix}grupos_
├⇶☙⃝♡〫_${usedPrefix}instalarbot_
├⇶☙⃝♡〫_${usedPrefix}menusimple_
├⇶☙⃝♡〫_${usedPrefix}menuaudios_
├⇶☙⃝♡〫_${usedPrefix}menu2_
├⇶☙⃝♡〫_${usedPrefix}labiblia_
├⇶☙⃝♡〫_${usedPrefix}estado_
├⇶☙⃝♡〫_${usedPrefix}Bot_
├⇶☙⃝♡〫_¿Qué es un Bot?_
├⇶☙⃝♡〫_Codigos para audios_
├⇶☙⃝♡〫_Términos y condiciones_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭─────✯𓆩ֶ፝֟𓆪⁩✯─────╮
├⇶🜲͜͡⃟REPORTA FALLOS🜲͜͡⃟ 
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶🜲͜͡⃟➣ Reporta cualquier comando que falle para poder solucionarlo
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶🜲͜͡⃟➣_${usedPrefix}bug *comando con fallas*_
├⇶🜲͜͡⃟➣_${usedPrefix}report *comando con fallas*_
╰─────✯𓆩ֶ፝֟𓆪⁩✯─────╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├✾⃝᭄🤖𝐔𝐍𝐄 𝐔𝐍 𝐁𝐎𝐓✾⃝᭄🤖 
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶✾⃝᭄🤖_${usedPrefix}join *link del grupo*_ 
├⇶✾⃝᭄🤖_${usedPrefix}bots_
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

╭─────✯𓆩ֶ፝֟𓆪⁩✯─────╮
├⇶ ݈݇➭ꪖCREADORA ݈݇➭ꪖ
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶ ݈݇➭ꪖ_${usedPrefix}owner_
╰─────✯𓆩ֶ፝֟𓆪⁩✯─────╯

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
├⇶❤️⃟⃪͡ꦽ𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒❤️⃟⃪͡ꦽ
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}s_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}sticker_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}semoji_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}wasted_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stonks_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trash_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}rainbow_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}circle_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trigger_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stickermaker_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}attp *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}style *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}attp2 *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stickerfilter_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trigger *@tag*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}mp3 *responde a un video*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}img *responde a un sticker*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}blur *responde a una imagen*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}swm *link de imagen de google*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}gif *responde a un sticker/video*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}tovideo *responde a una nota de voz*_
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

╭─────✯𓆩ֶ፝֟𓆪⁩✯─────╮
├⇶⋆⃟ۣۜ☔Menu+18⋆⃟ۣۜ🔞
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶⋆⃟ۣۜ🔞Usar bajo su responsabilidad 
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶⋆⃟ۣۜ☔_${usedPrefix}labiblia_
╰─────✯𓆩ֶ፝֟𓆪⁩✯─────╯

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

╭─────✯𓆩ֶ፝֟𓆪⁩✯─────╮
├⇶𝄣⃟🎧AUDIOS𝄣⃟🎧
├─────✯𓆩ֶ፝֟𓆪⁩✯────╯
├⇶𝄣⃟🎧_${usedPrefix}menu2_
├⇶𝄣⃟🎧_${usedPrefix}menuaudios_
╰─────✯𓆩ֶ፝֟𓆪⁩✯─────╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶𖥨⸽⃟👻𝐀𝐍𝐎𝐍𝐈𝐌𝐎𖥨⸽⃟👻
├✶⊶⊷⊶⊷𝟐𝟎𝟐𝟐⊶⊷⊶⊷✶
├⇶𖥨⸽⃟👻_${usedPrefix}start_
├⇶𖥨⸽⃟👻_${usedPrefix}next_
├⇶𖥨⸽⃟👻_${usedPrefix}leave_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶➶⃟🅦CONVIERTETE EN BOT➶⃟🅦
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶➶⃟🅦 _${usedPrefix}stop_
├⇶➶⃟🅦 _${usedPrefix}serbot_
├⇶➶⃟🅦 _${usedPrefix}getcode_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶☙꙰⃝📝️𝐋𝐎𝐆𝐎𝐒☙꙰⃝📝️
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
conn.send3ButtonImg(m.chat, pp, menu,'❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍❍͜͡➣〫️️', `#información`, '.❍͜͡➣۪̇〬𝐓𝐎𝐏𝐒.❍͜͡➣۪̇〬', `#tops`, '❍͜͡➣𝐉𝐔𝐄𝐆𝐎𝐒❍͜͡➣', `#JUEGOS`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(Menucompleto|menucompleto)$/i
handler.fail = null
module.exports = handler