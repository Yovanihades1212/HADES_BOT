let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/O omosa.mp3'
conn.sendFile(m.chat, vn, 'O omosa.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /O omosa|o omosa|omosa|Omosa/
handler.command = new RegExp
module.exports = handler
