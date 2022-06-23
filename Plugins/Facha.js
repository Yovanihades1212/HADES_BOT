let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Facha.mp3'
conn.sendFile(m.chat, vn, 'Facha.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Facha|Facha/
handler.command = new RegExp
module.exports = handler