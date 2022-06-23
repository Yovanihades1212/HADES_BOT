let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/La biblia.mp3'
conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /La biblia|La biblia||La biblia|la biblia/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler