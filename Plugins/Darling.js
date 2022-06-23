let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Darling.mp3'
conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Darling|Darling/
handler.command = new RegExp
module.exports = handler