let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/No esta.mp3'
conn.sendFile(m.chat, vn, 'No esta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /No está|No esta/
handler.command = new RegExp
module.exports = handler