let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Ya paso.mp3'
conn.sendFile(m.chat, vn, 'Ya paso.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Ya paso|ya pasó|ya paso|Ya paso/
handler.command = new RegExp
module.exports = handler
