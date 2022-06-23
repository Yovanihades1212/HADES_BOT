let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Pero esto.mp3'
conn.sendFile(m.chat, vn, 'Pero esto .mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /pero esto|Pero esto/
handler.command = new RegExp
module.exports = handler