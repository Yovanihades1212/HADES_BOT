let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Que pasa.mp3'
conn.sendFile(m.chat, vn, 'Que pasa.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Qué pasa|que pasa|que pasa|Que pasa/
handler.command = new RegExp
module.exports = handler
