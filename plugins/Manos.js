let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Manos.mp3'
conn.sendFile(m.chat, vn, 'Manos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Manos|Manos/
handler.command = new RegExp
module.exports = handler