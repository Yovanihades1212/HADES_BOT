async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply( '╭━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━━╮\n├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣\n├━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━╯\n├⇶🤖 Aquí tienes la lista\n├⇶de algunos sub bots\n├⇶(jadibot/serbot) 🤖\n├⇶️👉🏻 Puedes contactarlos \n├⇶para ver si se unen \n├⇶a tu grupo Te pedimos\n├⇶de favor que\n├⇶Seas amable No insistas\n├⇶ni discutas ✅ ️Si le aparece\n├⇶el siguiente texto en blanco\n├⇶es que no hay ningún sub bot\n├⇶disponible en este momento\n├⇶inténtelo mas tarde_⚠ NOTA\n├⇶ELLOS SON PERSONAS QUE\n├⇶NO CONOCEMOS.. POR LO QUE\n├⇶EL EQUIPO DE \n├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ \n├⇶NO SE HACE RESPONSABLE DE \n├⇶LO QUE PUEDA\n├⇶👩‍💻OCURRIR AHI.\n╰━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━━╯')
  m.reply(users.map(v => '├⇶₂₀ᷳ₂ᷫ₁ͨꦿ wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})\n`).join('\n'))
}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']

module.exports = handler 
