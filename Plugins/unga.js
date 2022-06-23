let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/unga.mp3'
conn.sendFile(m.chat, vn, 'unga.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /unga|unga|unga|unga/
handler.command = new RegExp
module.exports = handler
