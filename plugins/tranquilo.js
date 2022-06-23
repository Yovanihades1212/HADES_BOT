let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/tranquilo.mp3'
conn.sendFile(m.chat, vn, 'tranquilo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /tranquilo|Tranquilo|Tranquilo|tranquilo|nadie se fija en mi/
handler.command = new RegExp
module.exports = handler
