let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/uff.mp3'
conn.sendFile(m.chat, vn, 'uff.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /uff|Uff|uff|uff/
handler.command = new RegExp
module.exports = handler
