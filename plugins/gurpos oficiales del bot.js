let handler  = async (m, { conn, usedPrefix: _p }) => {
let info =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├🙌HOLA TE ENVIAMOS 
├⇶UNIRTE AL LOS💖
├⇶ GRUPOS OFICIALES 
├⇶ DEL BOT DE👩‍🏫✨
├⇶𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓 SOMOS👩‍💻
├⇶ UNA FAMILIA DE BOT
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:1❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:2❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:3❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶https://chat.whatsapp.com/KnpPbr8BN4VDLtwJFMNTtw
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', 'status@broadcast')
}
handler.command = /^(grupos|grupos oficiales|grupos oficiales)$/i

module.exports = handler
