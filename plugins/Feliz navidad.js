let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Feliz navidad.mp3'
conn.sendFile(m.chat, vn, 'Feliz navidad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Feliz navidad|Feliz navidad|Feliz navidad|Feliz navidad|Feliz navidad/
handler.command = new RegExp
module.exports = handler