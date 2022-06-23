let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/nivel.mp3'
conn.sendFile(m.chat, vn, 'nivel.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Su nivel de pendejo|que pasa|su Nivel de pendejo|Su nivel de pendejo/
handler.command = new RegExp
module.exports = handler
