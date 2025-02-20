module.exports = {
    'نكتة': (client, message) => {
        const jokes = ['😂 نكتة 1', '🤣 نكتة 2', '😆 نكتة 3'];
        message.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    },
    'زواج': (client, message) => {
        const members = ['@user1', '@user2', '@user3', '@user4'];
        const partner1 = members[Math.floor(Math.random() * members.length)];
        let partner2;
        do {
            partner2 = members[Math.floor(Math.random() * members.length)];
        } while (partner1 === partner2);
        message.reply(`💍 تم الزواج بين ${partner1} و ${partner2}! مبروك!`);
    },
    'اقتباس': (client, message) => {
        const quotes = ['🔥 اقتباس أنمي 1', '⚔️ اقتباس أنمي 2', '🌟 اقتباس أنمي 3'];
        message.reply(quotes[Math.floor(Math.random() * quotes.length)]);
    }
};