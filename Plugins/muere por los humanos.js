let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Muere por los humanos.mp3'
conn.sendFile(m.chat, vn, 'Muere por los humanos.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Muere por los humanos|Muere por los humanos|happy birthday/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler