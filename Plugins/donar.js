let handler  = async (m, { conn, usedPrefix: _p }) => {
let info =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶  「 DONAR 」
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶Hola persona hermosa 💙*
├⇶👉🏻 les pedimos su apoyo para
├⇶mantener el bot gratis *
├⇶para que puedas apoyar <3*
├⇶para donar peude Recarga la número 
├⇶52 241 171 9888
├⇶Telcel lo que tu puedas y gracias
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶no pongo número de cuenta ya que
├⇶alguien me la robaron
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶💖gracias por su apoyo 🙌 <3*
├⇶😘Gracias por usar hades bot 🌹
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', 'status@broadcast')
}
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i

module.exports = handler