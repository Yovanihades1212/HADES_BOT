let handler = async (m, { conn, text}) => {
    if (!text) throw '*_A QUIEN QUIERE BANEAR?_*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*_ETIQUETE A ALGUN USUARIO_*'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣    
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶❏̸̷̸̷ִִْْ 𝐅𝐔𝐈𝐒𝐓𝐄 𝐁𝐀𝐍𝐄𝐀𝐃𝐎
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶❏̸̷̸̷ִִْْ𝐍𝐎 𝐏𝐎𝐃𝐑Á 𝐔𝐒𝐀𝐑 
├⇶❏𝐀❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
├⇶❏̸̷̸̷ִִْْ 𝐑𝐎𝐌𝐏𝐈𝐒𝐓𝐄 𝐔𝐍𝐀 
├⇶❏̸̷̸̷ִִْْ𝐑𝐄𝐆𝐋𝐀 𝐃𝐄𝐋 𝐁𝐎𝐓 𝐏𝐎𝐑
├⇶❏̸̷̸̷ִִْْ 𝐄𝐒𝐎 𝐅𝐔𝐈𝐒𝐓𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯`, m)
}
handler.help = ['banuser']
handler.tags = ['General']
handler.command = /^banuser|ponerbanusuario|sinbot$/i
handler.admin = true
handler.botAdmin = true

module.exports = handler
