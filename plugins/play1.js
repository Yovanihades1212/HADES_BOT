let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text }) => {
  if (!text) throw '*「 ⚠ 」 Inserte el nombre/título del video o audio a bucar*\n\n*Ejemplo:*\n*#play Farruko beba *'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '*「 ❌ 」Error video/Audio No encontrado* '
  {await m.reply('*「 ༴⃟🌹๋ོ࣭」En un momento te entrego tu ➤͜͡📂pedido por favor espere su pedido➤͜͡📂 ésto poder tomar algunos segundos si su pedido➤͜͡📂 no ha sido entregado puedes pedirlo de nuevo͜͡⚡「 ༴⃟🌹๋ོ࣭」 *')}
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  //let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesizesLimit
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', ` 
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶⇄ ◁   ❚❚ㅤ ▷ㅤ↻
├⇶   ༴⃟🌹๋ོ࣭ꦿ⁩PLAY
├⇶╭─➤͜͡🎶Título: ${title}
├⇶╰➤͜͡🎧Tamaño del archivo:*
├⇶╭─➤͜͡📂${filesizeF}
├⇶╰➤͜͡⚡El archivo se esta mandando, si no
├⇶llega inténtelo nuevamente*
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶⇄ ◁   ❚❚ㅤ ▷ㅤ↻
├⇶   ༴⃟🌹๋ོ࣭ꦿ⁩PLAY
├⇶╭─➤͜͡🎶*Título: ${title}*
├⇶╭─➤͜͡📂 *Tamaño del archivo:*
├⇶╰➤͜͡⚡${filesizeF}
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim(), m, false, _thumb || {})}
handler.help = ['play' , 'play2']
handler.command = /^play2?$/i
handler.group = false
handler.registrar = false
handler.limit = false
module.exports = handler
