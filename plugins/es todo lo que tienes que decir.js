let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Es todo lo que tienes que decir.mp3'
conn.sendFile(m.chat, vn, 'Es todo lo que tienes que decir.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Es todo lo que tienes que decir|Es todo lo que tienes que decir|Es todo lo que tienes que decir/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler

