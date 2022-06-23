let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Cringe.mp3'
conn.sendFile(m.chat, vn, 'Cringe.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Cringe|Cringe/
handler.command = new RegExp
module.exports = handler