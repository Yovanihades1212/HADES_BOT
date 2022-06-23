let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/no funciona.mp3'
conn.sendFile(m.chat, vn, 'no funciona.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /no funciona|Pinche Bot|Pinche bot|Pinchè bot|pinche bot|pinche bot|le bot no jala |pinches bot/
handler.command = new RegExp
module.exports = handler
