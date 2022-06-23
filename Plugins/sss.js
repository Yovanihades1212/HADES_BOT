let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/sss.mp3'
conn.sendFile(m.chat, vn, 'sss.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /sss|Sss|sss|sss/
handler.command = new RegExp
module.exports = handler
