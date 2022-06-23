let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/concha tu madre.mp3'
conn.sendFile(m.chat, vn, 'concha de tu madre.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /insulta|Concha tu madre|no me insultes/
handler.command = new RegExp
module.exports = handler
