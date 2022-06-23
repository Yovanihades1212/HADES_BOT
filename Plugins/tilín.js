let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/eso tilín.mp3'
conn.sendFile(m.chat, vn, 'eso tilín.pm3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /La cumbia del tilín|La cumbia del tilín|eso tilín|Eso tilín/
handler.command = new RegExp
module.exports = handler
