let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/No pedí tu opinión.mp3'
conn.sendFile(m.chat, vn, 'No pedí tu opinión.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /No pedí tu opinión|No pedí tu opinion/
handler.command = new RegExp
module.exports = handler
