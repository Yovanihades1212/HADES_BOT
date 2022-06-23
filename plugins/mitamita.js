let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/mitamita.mp3'
conn.sendFile(m.chat, vn, 'mitamita.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /mitamita|mitamita|mitamita|mitamita/
handler.command = new RegExp
module.exports = handler
