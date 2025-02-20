module.exports = {
    'ملك_اليوم': (client, message) => {
        const members = ['@user1', '@user2', '@user3']; // استبدلها بأعضاء المجموعة الفعليين
        const king = members[Math.floor(Math.random() * members.length)];
        message.reply(`👑 ملك اليوم هو: ${king}`);
    },
    'لعبة_الألقاب': (client, message) => {
        const titles = ['🔥 القوي', '😂 المهرج', '😎 الزعيم', '🤓 الذكي'];
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        message.reply(`🎭 لقبك العشوائي: ${randomTitle}`);
    }
};