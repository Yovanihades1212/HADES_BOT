let util = require('util')
let path = require('path')
let fs = require('fs')

let caption = `
hades!!! 🤩
`.trim()

let handler = async (m, { conn }) => {
let video = fs.readFileSync(`./hades/${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}.jpeg`)

     conn.sendFile(m.chat, video, '1.jpeg', caption, m)
}
handler.command = /^hades/i
module.exports = handler
handler.tags = ['images']

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
