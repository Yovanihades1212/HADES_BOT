let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/El amor no existe.mp3'
conn.sendFile(m.chat, vn, 'El amor no existe.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /El amor no existe|El amor no existe|El amor no existe|El amor no existe|El amor no existe/
handler.command = new RegExp
module.exports = handler