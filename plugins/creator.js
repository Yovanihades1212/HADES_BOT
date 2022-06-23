function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '5212411347465', 'Creador Yovani', m)
this.sendContact(m.chat, '5212412377467', 'Creadoro hades_bot', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
