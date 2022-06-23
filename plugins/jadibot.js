let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new global.conn.constructor()
    conn.version = global.conn.version
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png',`╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣    
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶𝐂𝐎𝐌𝐎 𝐒𝐄𝐑 𝐒𝐔𝐁 𝐁𝐎𝐓
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝐋𝐄 𝐋𝐎𝐒 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐏𝐀𝐒𝐎 𝐏𝐀𝐑𝐀 𝐒𝐄𝐑 𝐁𝐎𝐓
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝐍Ú𝐌𝐄𝐑𝐎1️⃣=𝐂𝐎𝐍 𝐎𝐓𝐑𝐎 𝐓𝐄𝐋É𝐅𝐎𝐍𝐎 𝐐𝐔𝐄 𝐓𝐄𝐍𝐆𝐀𝐒 𝐎 𝐄𝐍 𝐋𝐀 𝐏𝐂 𝐄𝐒𝐂𝐀𝐍𝐄𝐀 𝐄𝐒𝐓𝐄 𝐐𝐑 𝐏𝐀𝐑𝐀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑𝐓𝐄 𝐄𝐍 𝐔𝐍𝐎 𝐃𝐄 𝐒𝐔𝐁 𝐁𝐎𝐓
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝐍Ú𝐌𝐄𝐑𝐎2️⃣=𝐇𝐀𝐆𝐀 𝐂𝐋𝐈𝐂 𝐄𝐍 𝐋𝐎𝐒 𝐓𝐑𝐄𝐒 𝐏𝐔𝐍𝐓𝐎𝐒 𝐄𝐍 𝐋𝐀 𝐄𝐒𝐐𝐔𝐈𝐍𝐀 𝐒𝐔𝐏𝐄𝐑𝐈𝐎𝐑 
𝐃𝐄𝐑𝐄𝐂𝐇𝐀
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝐍Ú𝐌𝐄𝐑𝐎3️⃣=𝐓𝐎𝐂𝐀 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐖𝐄𝐁 
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝐍Ú𝐌𝐄𝐑𝐎4️⃣=𝐄𝐒𝐂𝐀𝐍𝐄𝐀 𝐄𝐒𝐓𝐄 𝐂Ó𝐃𝐈𝐆𝐎 𝐃𝐄 𝐐𝐑 𝐄𝐗𝐏𝐈𝐑𝐀 𝐄𝐍 20 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶ [ 🛑 ️]️𝐀𝐋𝐄𝐑𝐓𝐀[ 🛑 ️]️
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶𝐍𝐎 𝐍𝐎𝐒 𝐇𝐀𝐂𝐄𝐌𝐎𝐒 𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐀𝐁𝐋𝐄 𝐃𝐄𝐋 𝐌𝐀𝐋 𝐔𝐒𝐎 𝐐𝐔𝐄 𝐒𝐄 𝐋𝐄 𝐏𝐔𝐄𝐃𝐀 𝐃𝐀𝐑 𝐎 𝐒𝐈𝐄𝐋 𝐍Ú𝐌𝐄𝐑𝐎 𝐒𝐄 𝐌𝐀𝐍𝐃𝐀 𝐀 𝐒𝐎𝐏𝐎𝐑𝐓É... 𝐔𝐒𝐓𝐄𝐃𝐄𝐒 𝐓𝐈𝐄𝐍𝐄𝐍 𝐄𝐋 𝐃𝐄𝐁𝐄𝐑 𝐒𝐄 𝐒𝐄𝐆𝐔𝐈𝐑 𝐀𝐋 𝐏𝐈𝐄 𝐃𝐄 𝐋𝐀 𝐋𝐄𝐓𝐑𝐀 𝐋𝐎𝐒 𝐓É𝐑𝐌𝐈𝐍𝐎𝐒 𝐘 𝐂𝐎𝐍𝐃𝐈𝐂𝐈𝐎𝐍𝐄𝐒 𝐘 𝐏𝐑𝐈𝐕𝐀𝐂𝐈𝐃𝐀𝐃 ( 𝐄𝐒𝐂𝐑𝐈𝐁𝐄 𝐄𝐒𝐎 𝐘 𝐓𝐄 𝐋𝐎𝐒 𝐃𝐀𝐑𝐀
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣    
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯`, m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.welcome = global.conn.welcome + ''
    conn.bye = global.conn.bye + ''
    conn.spromote = global.conn.spromote + ''
    conn.sdemote = global.conn.sdemote + ''
    conn.handler = global.conn.handler.bind(conn)
    conn.onDelete = global.conn.onDelete.bind(conn)
    conn.onParticipantsUpdate = global.conn.onParticipantsUpdate.bind(conn)
    conn.on('chat-update', conn.handler)
    conn.on('message-delete', conn.onDelete)
    conn.on('group-participants-update', conn.onParticipantsUpdate)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({user}) => {
      parent.reply(m.chat, '*Conectado exitosamente con WhatsApp*\n*Nota: Esto es temporal*\n*Si el Bot principal se reinicia o se desactiva, todos los sub bots tambien lo haran*\n\n' + JSON.stringify(user, null, 2), m)
      if (auth) return
      await parent.sendMessage(user.jid, `*Puede iniciar sesión sin el codigo qr con el siguiente mensaje, envialo cuando no funcione el bot y/o haya o no dicho conexion perdida..*\n\n*Puede obtener nuevamente este código QR con col comando #getcode, debe se seguir siendo sub bot para poder recibirlo*`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }, 60000)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state != 'close') return
          if (conn.user && conn.user.jid)
            parent.sendMessage(conn.user.jid, `*⚠️ Conexión perdida.. envie el mensaje que se envio al numero donde escaneo el codigo qr*`, MessageType.extendedText)
          let i = global.conns.indexOf(conn)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { conn.logger.error(e) }
      }, 30000)
    })
    global.conns.push(conn)
  } else throw '╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮\n\n├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣    \n\n├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯\n\n├⇶❏̸̷̸̷ִִْْ👋𝐇𝐎𝐋𝐀 𝐆𝐑𝐀𝐂𝐈𝐀𝐒🥳 𝐏𝐎𝐑\n\n 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐑 👩‍💻/𝐒ᴱᴿᴮᴼᵀ, 👩‍🏫𝐒𝐈 𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐒𝐄𝐑 𝐁𝐎𝐓🤖 𝐕𝐄 𝐀𝐋 𝐍Ú𝐌𝐄𝐑𝐎📲 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋 𝐃𝐄𝐋 𝐁𝐎𝐓👩‍💻𝐎 𝐀𝐋 𝐍Ú𝐌𝐄𝐑𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋  𝐃𝐄𝐋 𝐁𝐎𝐓 𝐘 𝐏𝐎𝐍 𝐋𝐀 𝐏𝐀𝐋𝐀𝐁𝐑𝐀 /ˢᴱᴿᴮᴼᵀ 𝐏𝐀𝐑Á 𝐒𝐄𝐑𝐁𝐎𝐓\n\n🥳✨𝐆𝐑𝐀𝐂𝐈𝐀𝐒 𝐏𝐎𝐑 𝐓𝐔 𝐀𝐓𝐄𝐍𝐂𝐈Ó𝐍 💖✨\n\n├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯\n\n├⇶ https://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=/srebot\n\n╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯'
}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^serbot|jadibot|sersubbot|sersubot$/i
handler.prems = false
handler.private = false

handler.limit = false

module.exports = handler
