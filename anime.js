module.exports = {
    'معلومات_أنمي': (client, message, args) => {
        if (!args[0]) return message.reply('❌ يرجى إدخال اسم الأنمي.');
        message.reply(`🔍 جارٍ البحث عن معلومات الأنمي: ${args.join(' ')}`);
        // يمكن إضافة API لجلب معلومات الأنمي مثل MyAnimeList
    },
    'شخصية_أنمي': (client, message, args) => {
        if (!args[0]) return message.reply('❌ يرجى إدخال اسم الشخصية.');
        message.reply(`🧐 معلومات عن الشخصية: ${args.join(' ')}`);
    }
};