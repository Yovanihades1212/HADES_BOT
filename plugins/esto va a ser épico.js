let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/esto va a ser épico.mp3'
conn.sendFile(m.chat, vn, 'esto va a ser épico.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /esto va a ser épico|Esto va a ser epico|esto va s ser epico/
handler.command = new RegExp
module.exports = handler
