let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Gracias bot.mp3'
conn.sendFile(m.chat, vn, 'Gracias bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Gracias bot|Gracias bot/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler
