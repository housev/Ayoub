const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config();
const commands = require('./commands');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR كود البوت:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ البوت جاهز للعمل!');
});

client.on('message', async message => {
    if (message.body.startsWith('!')) {
        const args = message.body.slice(1).trim().split(/\s+/);
        const command = args.shift().toLowerCase();

        if (commands[command]) {
            commands[command](client, message, args);
        } else {
            message.reply('❌ هذا الأمر غير موجود!');
        }
    }
});

client.initialize();
