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
    },

    'بوم': async (client, message) => {
        // إرسال المقطع الصوتي قبل العد التنازلي
        const media = MessageMedia.fromFilePath('./boom.mp4');
        await client.sendMessage(message.from, media, { sendAudioAsVoice: true });

        // بدء العد التنازلي
        setTimeout(() => message.reply('3...'), 2000);
        setTimeout(() => message.reply('2...'), 4000);
        setTimeout(() => message.reply('1...'), 6000);
        setTimeout(() => message.reply('💥 بـــوووم 💥'), 8000);
    }
};
