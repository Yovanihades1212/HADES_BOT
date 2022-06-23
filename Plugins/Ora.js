let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Ora.mp3'
conn.sendFile(m.chat, vn, 'Ora.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Ora|Ora|Ora|Ora/
handler.command = new RegExp
module.exports = handler