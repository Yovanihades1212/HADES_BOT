let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Lol.mp3'
conn.sendFile(m.chat, vn, 'Lol.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Lol|Lol/
handler.command = new RegExp
module.exports = handler