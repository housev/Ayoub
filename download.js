const axios = require('axios');

module.exports = {
    'تحميل': async (client, message, args) => {
        if (!args[0]) return message.reply('❌ يرجى إدخال رابط الفيديو.');
        message.reply(`📥 جارٍ تحميل الفيديو من: ${args[0]}`);
        // هنا يمكن إضافة كود تحميل الفيديو باستخدام API خارجي مثل ytdl-core
    }
};