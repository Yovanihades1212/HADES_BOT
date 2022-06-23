let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/manco.mp3'
conn.sendFile(m.chat, vn, 'manco.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /manco|MI COMPA EL MANCO|Manco/ 
handler.command = new RegExp
module.exports = handler
