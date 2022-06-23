let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
const getGroupAdmins = (participants) => { admins = []
for (let i of participants) { i.isAdmin ? admins.push(i.jid) : '' } return admins }
const mentions = (teks, memberr, id) => { (id == null || id == undefined || id == false) ? conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { contextInfo: { "mentionedJid": memberr } }) : 
conn.sendButton(m.chat, teks.trim(), '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ᰰ', 'VOLVER A INVOCAR', `#invocar`, MessageType.extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })}
const isGroup = m.chat.endsWith('@g.us')
let grupmeta = await conn.groupMetadata(m.chat)
const groupMembers = isGroup ? grupmeta.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const info = await conn.groupMetadata(m.chat)
let vn = './media/Invocar.mp3'
let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let pesan = args.join` `
let oi = `❍͜͡➣𝐌𝐄𝐍𝐒𝐀𝐉𝐄❍͜͡➣ ${pesan}`
let hmm = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶❍͜͡➣𝐀𝐂𝐓Í𝐕𝐄𝐍𝐒𝐄 𝐆𝐑𝐔𝐏𝐎❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
\n\n`
let duh = `└\n\n❏̸̷ִْ ❏̸̷ִْ ❏̸̷ִْ ❏̸̷ִْ ❏̸̷ִْ ❏̸̷ִْ ❏̸̷ִْ ❏̸̷̸̷ִִْْ`
var teks = `${oi}\n\n❏̸̷ִْ\n`
for (let admon of groupMembers) { teks += `├⇶❍͜͡➣ @${admon.jid.split('@')[0]}\n`} mentions(hmm+teks+duh, users, true,{ contextInfo: { mentionedJid: users } })
await await await await await await conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, {   
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^invocar|tagall|invocacion|invocación$/i
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
