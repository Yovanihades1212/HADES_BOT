let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Elmo.mp3'
conn.sendFile(m.chat, vn, 'Elmo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Elmo|Elmo|Elmo|Elmo/
handler.command = new RegExp
module.exports = handler
