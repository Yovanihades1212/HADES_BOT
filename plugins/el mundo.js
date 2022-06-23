let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/El mundo.mp3'
conn.sendFile(m.chat, vn, 'El mundo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /El mundo|El mundo|el mundo|El mundo|El mundo/
handler.command = new RegExp
module.exports = handler