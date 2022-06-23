let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/tiene la cara.mp3'
conn.sendFile(m.chat, vn, 'tiene la cara.pm3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /tiene la cara|TIENE LA CARA|Tiene la cara|tiene la/
handler.command = new RegExp
module.exports = handler
