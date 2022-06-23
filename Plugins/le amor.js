let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/El amor.mp3'
conn.sendFile(m.chat, vn, 'El amor.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ay el amor|que lindo el amor|Hay el amor|qué bonita pareja|Que bonita pareja |El amor/
handler.command = new RegExp
module.exports = handler
