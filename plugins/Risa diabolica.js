let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Risa diabolica.mp3'
conn.sendFile(m.chat, vn, 'Risa diabolica.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Risa diabolica|Risa diabolica|El amor no existe|Risa diabolica|Risa diabolica/
handler.command = new RegExp
module.exports = handler


