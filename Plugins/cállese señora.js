let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/cállese.mp3'
conn.sendFile(m.chat, vn, 'cállese.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /cállese señora|Callese señora|cállese|callese|Cállese|Callese/
handler.command = new RegExp
module.exports = handler
