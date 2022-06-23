let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Oxxo.mp3'
conn.sendFile(m.chat, vn, 'Oxxo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Oxxo|oxxo|Oxxo/i
handler.command = new RegExp
module.exports = handler
