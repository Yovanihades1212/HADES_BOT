let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Tengo.mp3'
conn.sendFile(m.chat, vn, 'Tengo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /tengo|TENGO|Tengo/
handler.command = new RegExp
module.exports = handler
