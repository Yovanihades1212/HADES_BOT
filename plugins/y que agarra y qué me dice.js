let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/y que agarra y qué me dice.mp3'
conn.sendFile(m.chat, vn, 'y que agarra y qué me dice.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /y que agarra y qué me dice|Y que agarra y que me dice|y que agarró Y qué le digo |Y que agarro y que le digo/
handler.command = new RegExp
module.exports = handler
