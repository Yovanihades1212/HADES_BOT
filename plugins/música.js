let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Musica.mp3'
conn.sendFile(m.chat, vn, 'Musica.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /canta2|Canta2/
handler.command = new RegExp
module.exports = handler
