let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Que tonta eres.mp3'
conn.sendFile(m.chat, vn, 'Que tonta eres.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Que tonta eres|Que tonta eres|por qué|Que tonta eres/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler