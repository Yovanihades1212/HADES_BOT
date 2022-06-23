let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/La lechuza.mp3'
conn.sendFile(m.chat, vn, 'La lechuza.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /La lechuza|La lechuza|La lechuza|La lechuza|La lechuza/
handler.command = new RegExp
module.exports = handler