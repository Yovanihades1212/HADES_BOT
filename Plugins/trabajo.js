let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/trabajo.mp3'
conn.sendFile(m.chat, vn, 'trabajo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /mañana no trabajo|Mañana no trabajo|No trabajo|notrabajo/
handler.command = new RegExp
module.exports = handler
