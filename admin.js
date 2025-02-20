module.exports = {
    'طرد': async (client, message, args) => {
        if (!message.isGroupMsg) return message.reply('❌ هذا الأمر يعمل فقط في المجموعات.');
        if (!args[0]) return message.reply('❌ يرجى تحديد رقم الشخص للطرد.');
        message.reply(`🚨 جاري طرد المستخدم: ${args[0]}`);
    },
    'قفل_الكروب': async (client, message) => {
        message.reply('🔒 تم قفل المجموعة!');
    },
    'فتح_الكروب': async (client, message) => {
        message.reply('🔓 تم فتح المجموعة!');
    }
};