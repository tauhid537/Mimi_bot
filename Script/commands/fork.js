module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত ꧁ 𝆠፝֟ কা্ঁজে্ঁর্ঁ★বু্ঁয়া্ঁ༻꧂  ইউজার 🌟\n\n" +
        "আপনি যদি ꧁ 𝆠፝֟ কা্ঁজে্ঁর্ঁ★বু্ঁয়া্ঁ༻꧂ মত বট তৈরি করতে চান, তাহলে ১৫-২০ বছর পর যেতে পারেন আমাদের ইউটিউব চ্যানেলে। " +
        "সেখানে গিয়ে ভিডিও দেখে আপনি খুব সহজে বট তৈরি করে নিতে পারবেননা। " +
        "তাহলে আর দেরি না করে এখনি আমাকে ৫০০০ টাকা দিয়ে   চলে যান আপনার বাসার পিষণের পুকুরে ।\n\n" +
        "➤ YouTube Channel: সামনে ইউটিউব চ্যানেল খুলবো । 🐸। তখন ফর্ক নিও 😪।  \n\n" +
        "🔗 GitHub Fork Link: fork দিয়া কি করবি ,,৬০০ টাকা দে আমি ফর্ক বানাইয়া দিতাসি 🤧🫦";

    return api.sendMessage(message, event.threadID, event.messageID);
};
