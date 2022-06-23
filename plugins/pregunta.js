let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮  
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶⁉️ PREGUNTAS ⁉️
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯  
├⇶Pregunta:* ${text}
├⇶Respuesta:* ${pickRandom(['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible'])}
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.command = /^apakah|pregunta/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

