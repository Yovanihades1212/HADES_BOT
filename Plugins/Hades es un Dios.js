let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Hades es un Dios.mp3'
conn.sendFile(m.chat, vn, 'Hades es un Dios.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Hades es un Dios|Hades es un Dios|Hades es un Dios/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler
