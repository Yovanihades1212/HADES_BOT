let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶𝐄𝐬𝐭𝐚𝐝𝐨 𝐝𝐞𝐥 𝐁𝐨𝐭
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶➶⃟🅦𝐁𝐨𝐭 𝐚𝐜𝐭𝐢𝐯𝐨➶⃟🅦 
├⇶❀⃯⃝⃯👥𝐁𝐨𝐭 𝐮𝐬𝐨 𝐩ú𝐛𝐥𝐢𝐜𝐨❀⃯⃝⃯੭👥 
├⇶ °⃟᮪݇⃟⃟⚕️ 𝐚𝐜𝐭𝐢𝐯𝐨 24/7 °⃟᮪݇⃟⃟⚕️
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim(), '°❍͜͡➣𝐇𝐚𝐝𝐞𝐬_𝐛𝐨𝐭❍͜͡➣ᰰ', '❍͜͡➣𝐌𝐄𝐍𝐔❍͜͡➣', `${usedPrefix}menu`, '❍͜͡➣𝐌𝐄𝐍Ú𝐒𝐈𝐌𝐏𝐋𝐄❍͜͡➣️️️', `${usedPrefix}menusimple`, '❍͜͡➣𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒❍͜͡➣️', `${usedPrefix}menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
