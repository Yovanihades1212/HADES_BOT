let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/te sabes.mp3'
conn.sendFile(m.chat, vn, 'te sabes.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /te sabes|todas las respuestas|Te sabes/
handler.command = new RegExp
module.exports = handler
