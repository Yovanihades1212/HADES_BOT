let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Sexual.mp3'
conn.sendFile(m.chat, vn, 'Sexual.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Sexual|Sexual/
handler.command = new RegExp
module.exports = handler