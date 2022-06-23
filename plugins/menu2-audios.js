let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/ja.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡  ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶🎧𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝄣⃟🎧_Noche de paz_
├⇶𝄣⃟🎧_Miau_
├⇶𝄣⃟🎧_Buenos dias_
├⇶𝄣⃟🎧_La cumbia del tilín_
├⇶𝄣⃟🎧_buenas noches_
├⇶𝄣⃟🎧_No pedí tu opinión_
├⇶𝄣⃟🎧_Senpai_
├⇶𝄣⃟🎧_esto va a ser épico_
├⇶𝄣⃟🎧_insulta_
├⇶𝄣⃟🎧_Audio hentai_
├⇶𝄣⃟🎧_Tiene la cara_
├⇶𝄣⃟🎧_Fiesta del admin_
├⇶𝄣⃟🎧_tengo_
├⇶𝄣⃟🎧_tranquilo_    
├⇶𝄣⃟🎧_Viernes_
├⇶𝄣⃟🎧_Chica lgante_
├⇶𝄣⃟🎧_No soy pati_
├⇶𝄣⃟🎧_Baneado_
├⇶𝄣⃟🎧_Bien pensado woody_ 
├⇶𝄣⃟🎧_Homero chino_
├⇶𝄣⃟🎧_El pepe_
├⇶𝄣⃟🎧_A nadie le importa_
├⇶𝄣⃟🎧_Sexo_
├⇶𝄣⃟🎧_nadie te pregunto_
├⇶𝄣⃟🎧_Vete a la vrg_
├⇶𝄣⃟🎧_Hola_
├⇶𝄣⃟🎧_Oye Bot te amo_
├⇶𝄣⃟🎧_Te amo_
├⇶𝄣⃟🎧_Yamete_
├⇶𝄣⃟🎧_y que agarra y qué me dice_
├⇶𝄣⃟🎧_Te diagnostico con gay_
├⇶𝄣⃟🎧_Eres fuerte_
├⇶𝄣⃟🎧_Su nivel de pendejo_
├⇶𝄣⃟🎧_Que pasa_
├⇶𝄣⃟🎧_cállese señora_
├⇶𝄣⃟🎧_Quien es tu sempai botsito 7w7_
├⇶𝄣⃟🎧_BiTCH_
├⇶𝄣⃟🎧_Bañate_
├⇶𝄣⃟🎧_cuándo se muera_
├⇶𝄣⃟🎧_Que rico_
├⇶𝄣⃟🎧_Feliz jueves_
├⇶𝄣⃟🎧_Lo puede todo_
├⇶𝄣⃟🎧_Gemime_
├⇶𝄣⃟🎧_Vivan los novios_
├⇶𝄣⃟🎧_sigues con vida_
├⇶𝄣⃟🎧_Marica quien_.
├⇶𝄣⃟🎧_Es puto_
├⇶𝄣⃟🎧_Onichan_
├⇶𝄣⃟🎧_Feliz cumpleaños_
├⇶𝄣⃟🎧_O omosa_
├⇶𝄣⃟🎧_Atencion grupo_
├⇶𝄣⃟🎧_Oh me vengo_
├⇶𝄣⃟🎧_Que linda noche_
├⇶𝄣⃟🎧_Te siento mía_
├⇶𝄣⃟🎧_hentai2_
├⇶𝄣⃟🎧_detengase admin_
├⇶𝄣⃟🎧_Canta2_
├⇶𝄣⃟🎧_Murio el grupo_
├⇶𝄣⃟🎧_Siuuu_ 
├⇶𝄣⃟🎧_Se enojan_
├⇶𝄣⃟🎧_Al unico_
├⇶𝄣⃟🎧_Se van a dormir_
├⇶𝄣⃟🎧_Hare mi rutina_
├⇶𝄣⃟🎧_Te sabes_    
├⇶𝄣⃟🎧_:c_
├⇶𝄣⃟🎧_Hay el amor_
├⇶𝄣⃟🎧_Orale_
├⇶𝄣⃟🎧_Se ríe_
├⇶𝄣⃟🎧_Que es eso_
├⇶𝄣⃟🎧_anana_
├⇶𝄣⃟🎧_No trabajo_
├⇶𝄣⃟🎧_asen_
├⇶𝄣⃟🎧_confeti_
├⇶𝄣⃟🎧_flash_
├⇶𝄣⃟🎧_Una pregunta_
├⇶𝄣⃟🎧_pinches bot_
├⇶𝄣⃟🎧_mmm_
├⇶𝄣⃟🎧_Oxxo_
├⇶𝄣⃟🎧_Mi bot es le mejor_
├⇶𝄣⃟🎧_Soy nuevo_
├⇶𝄣⃟🎧_La voz de hombre_
├⇶𝄣⃟🎧_Picachu_
├⇶𝄣⃟🎧_La voz de hombre_
├⇶𝄣⃟🎧_Pokemon_
├⇶𝄣⃟🎧_ñaña
├⇶𝄣⃟🎧_yutki_
├⇶𝄣⃟🎧_Ya basta jovenes_
├⇶𝄣⃟🎧_Verdad que te engañe_
├⇶𝄣⃟🎧_Calla maldita puta_
├⇶𝄣⃟🎧_YoShi_
├⇶𝄣⃟🎧_Me los voy a coger_
├⇶𝄣⃟🎧_manco_
├⇶𝄣⃟🎧_Me voy_
├⇶𝄣⃟🎧_Música desamor_
├⇶𝄣⃟🎧_mitamita_
├⇶𝄣⃟🎧_tuturu_
├⇶𝄣⃟🎧_woau_
├⇶𝄣⃟🎧_unga_
├⇶𝄣⃟🎧_umai_
├⇶𝄣⃟🎧_tututu_
├⇶𝄣⃟🎧_uma_
├⇶𝄣⃟🎧_uff_
├⇶𝄣⃟🎧_Tara_
├⇶𝄣⃟🎧_uchinchi_
├⇶𝄣⃟🎧_talcho_
├⇶𝄣⃟🎧_sss_
├⇶𝄣⃟🎧_a_
├⇶𝄣⃟🎧_Triste enojada toy_
├⇶𝄣⃟🎧_Bot maricon_
├⇶𝄣⃟🎧_Bot puto_
├⇶𝄣⃟🎧_estúpido_
├⇶𝄣⃟🎧_Un pato_.   
├⇶𝄣⃟🎧_Nyanpasu_
├⇶𝄣⃟🎧_El amor no existe_
├⇶𝄣⃟🎧_Es todo lo que tiene que decir_ 
├⇶𝄣⃟🎧_Muere por los humanos_
├⇶𝄣⃟🎧_La biblia_
├⇶𝄣⃟🎧_Otaku_
├⇶𝄣⃟🎧_Hace frío_
├⇶𝄣⃟🎧_Pikachu_
├⇶𝄣⃟🎧_Niconi_
├⇶𝄣⃟🎧_Mimir_
├⇶𝄣⃟🎧_Beastars_
├⇶𝄣⃟🎧_Manos_
├⇶𝄣⃟🎧_Facha_.      
├⇶𝄣⃟🎧_Sexual_
├⇶𝄣⃟🎧_Mujer_
├⇶𝄣⃟🎧_Cringe_
├⇶𝄣⃟🎧_Konede_
├⇶𝄣⃟🎧_Gambare_
├⇶𝄣⃟🎧_Pack_
├⇶𝄣⃟🎧_Temon_
├⇶𝄣⃟🎧_Primo_
├⇶𝄣⃟🎧_jaja quiero_
├⇶𝄣⃟🎧_Kya_
├⇶𝄣⃟🎧_rawr_
├⇶𝄣⃟🎧_El mundo_
├⇶𝄣⃟🎧_Nos vale_
├⇶𝄣⃟🎧_Bot gemine_.   
├⇶𝄣⃟🎧_Pespes_
├⇶𝄣⃟🎧_Ora_
├⇶𝄣⃟🎧_Hades bot_
├⇶𝄣⃟🎧_Tori_
├⇶𝄣⃟🎧_Oxxo_
├⇶𝄣⃟🎧_Mi bot es le mejor_
├⇶𝄣⃟🎧_Bunny_
├⇶𝄣⃟🎧_cancion hades2_
├⇶𝄣⃟🎧_cancion de hades_
├⇶𝄣⃟🎧_Hades es un Dios_
├⇶𝄣⃟🎧_llamando a seguridad_
├⇶𝄣⃟🎧_Atena_
├⇶𝄣⃟🎧_Que tonta eres_
├⇶𝄣⃟🎧_Bts_.         
├⇶𝄣⃟🎧_ara ara_
├⇶𝄣⃟🎧_La bebecita_
├⇶𝄣⃟🎧_Lol_
├⇶𝄣⃟🎧_Feliz navidad_
├⇶𝄣⃟🎧_Risa diabolica_
├⇶𝄣⃟🎧_Te pasas_. 
├⇶𝄣⃟🎧_Darling_
├⇶𝄣⃟🎧_Elmo_
├⇶𝄣⃟🎧_La lechuza_
├⇶𝄣⃟🎧_ñi_
├⇶𝄣⃟🎧_Éxtasis_
├⇶𝄣⃟🎧_no te acerques_
├⇶𝄣⃟🎧_Por que_
├⇶𝄣⃟🎧_La mamare_
├⇶𝄣⃟🎧_Lala_
├⇶𝄣⃟🎧_okey_
├⇶𝄣⃟🎧_Ya paso_
├⇶𝄣⃟🎧_UwU_
├⇶𝄣⃟🎧_Gracias bot_ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ᰰ', '𝕄 𝔼 ℕ 𝕌   ℙ ℝ 𝕀 ℕ ℂ 𝕀 ℙ 𝔸 𝕃', `#menu`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'jq.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|Menu muaudios|memuaudio|audios|audio)$/i
handler.fail = null
module.exports = handler