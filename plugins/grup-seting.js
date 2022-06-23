let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = { // Switch Case Like :v
		'abierto': false,
		'cerrado': true,
                'abrir': false,
		'cerrar': true,
	}[(args[0] || '')]
	await conn.updatePresence(m.chat, Presence.composing)
	if (isClose === undefined)
		throw `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣    
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶─❲ *✨Ejemplo✨:* ❳─
├⇶❏̸̷̸̷ִִْْ${usedPrefix + command} abrir🔓
├⇶❏̸̷̸̷ִִْْ${usedPrefix + command} cerrar🔐
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
{m.reply('✨👩‍💻𝐓𝐮 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐡𝐚 𝐡𝐢𝐝𝐨 𝐫𝐞𝐚𝐥𝐢𝐳ó 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨🥳✅')}
}
handler.command = /^(grupo)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
