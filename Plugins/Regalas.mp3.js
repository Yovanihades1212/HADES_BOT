let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Regalas.mp3'
conn.sendFile(m.chat, vn, 'Regalas.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /De que trata el grupo|Soy nuevo|Soy nueva|de que trata el grupo/
handler.command = new RegExp
module.exports = handler
