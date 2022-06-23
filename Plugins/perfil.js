let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './undefined.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣    
├━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━╯  
├⇶🔥Nombre🔥 :* ${username} 
├⇶🔰Etiqueta🔰 :* @${who.replace(/@.+/, '')}${about ? 
'\n┃• *🦙Descripcion🦙 :* ' + about : ''}
├⇶✨Numero✨ :* 
├⇶${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
├⇶💢Link💢 :* 
├⇶wa.me/${who.split`@`[0]}${registered ? '\n┃• *Edad:* ' + age : ''}
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣ 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^perfil|profile$/i
module.exports = handler
