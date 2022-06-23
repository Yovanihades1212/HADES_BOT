let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/cuándo se muera.mp3'
conn.sendFile(m.chat, vn, 'cuándo se muera.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /cuándo se muera|cuando se muera|Cuándo se muera|Cuando se muera/
handler.command = new RegExp
module.exports = handler
