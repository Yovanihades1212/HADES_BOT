let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/woahh.mp3'
conn.sendFile(m.chat, vn, 'woahh.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /mi bot es le mejor|Mi bot es le mejor/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler


