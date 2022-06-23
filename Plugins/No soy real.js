let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/No soy real.mp3'
conn.sendFile(m.chat, vn, 'No soy real.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Oye Bot te amo||oyebot te amo/
handler.command = new RegExp
module.exports = handler
