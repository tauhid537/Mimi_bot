const axios = require("axios");

const apiList = "https://gitlab.com/shahadat-sahu/sahu-api/-/raw/main/API.json";

const getMainAPI = async () => (await axios.get(apiList)).data.simsimi;

module.exports.config = {
  name: "autoreplybot",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  usePrefix: false,
  commandCategory: "Chat",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;
  if (!body) return;

  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস সাহু রে হাঙ্গা করো😶👻😘",
    "miss u too": "হুম আমি ও তোমাকে Miss করি... কিন্তু বস বেশি করে 😏💖",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "bc": "SAME TO YOU😊",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "good night": "Sweet Dream babu… তবে আগে  বস কে GN বলে নিও 😏💤",
    "tor ball": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "tauhid": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ 𝐓𝐚𝐮𝐡𝐢𝐝 𝐇𝐚𝐬𝐬𝐚𝐧 ☜\nFacebook: https://www.facebook.com/profile.php?id=100084234082357\nWhatsApp: +8801614978048",
    "admin": "He is 𝐓𝐚𝐮𝐡𝐢𝐝 𝐇𝐚𝐬𝐬𝐚𝐧 তাকে সবাই Owner হিসেবে চিনে😘☺️",
    "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "Assalamualaikum": "Walaikumassalam❤️‍🩹",
    "fork": "কালকে রাত ১২ টার পর তাওহীদ এর সাথে দেখা কইরো fork দিবেনি তুমাকে 🌚",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস  রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস তাওহীদ এর ইনবক্সে এখুনি গুঁতা দিন🫢😻",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss  এর ইনবক্সে গুতা দিন 😘",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "ami tauhid": "হ্যা বস কেমন আছেন..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS ─꯭─⃝‌‌𝐌𝐢𝐦𝐢 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭💖",
    "pic de": "এন থেকে সর দুরে গিয়া মর😒",
    "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "bal": "রাগ করে না সোনা পাখি 🥰",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু 😚",
    "ki koros": "বস তাওহীদ এর সাথে প্রেমে ব্যস্ত আছি 😏💘",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈",
    "valo aso": "হ্যাঁ রে প্রিও, বস এর দোয়ায় ভালো আছি 😌💞",
    "pagol": "হুম পাগল, কিন্তু তোমারই পাগল 😏😂",
    "breakup": "চিন্তা করিস না… সাহু বস তো আছেই তোকে নতুন জন দিয়া দিবে 😎🔥",
    "tui ke": "আমি তোর বস  এর ChatBot 😏",
    "umm": "এতো Umm কেনো জানু… কিছু বলবা? 😉",
    "hmm": "Hmmm কিসের হুমম জানু 🥵",
    "love": "Love করলে সরাসরি  বস কে বল জানু 😻🔥",
    "kire": "বকার মতো চিল্লাইতেসিস কেনো রে 🙄",
    "tithi koi": "sali sweetmarani Khali vondami Kore 😌👊",
    "Baby": "hea hea bolo monu 🌚 ",
    "Ki Koro": "মুড়ি খাই,খাবা ? 🥴",
    "Jah": "accah chole gelam 😌❤️‍🩹",
    "Na": "accah 😗🫰 ",
    "Ho": "ki sudu ho ho korosh 😒👋",
    "Khaiso": "hum ,,Tumi ?😊 ",
    "Khaisos": "ho 😂",
    "Oii": "hum baby bolo 😌❤️‍🩹",
    "Haii": "hum bolo moyna 😜",
    "Usta": "Tor nanire 😞💔",
    "Usta khabi": "ehhh aise 😒 ",
    "Oi": "polapain mod kha r valo ho 😅",
    "Alabio": "lebu kha 🤕",
    "seii": "ho asolei 🙂 ",
    "sagol": "oh accah tui cagol 😂👌 ",
    "Moyna": "eij Ami pakhi 🥺 ",
    "Pakhi": "hea pakhi bolo 😌 ",
    "tauhid koi": "kamla dite gese 🙂 ",
    "Bot": "Jan hanga korba  ",
    "🫦": "kire লুচ্ছা beda 🙄👋",
    "🙄": "Jan Ami eidik e ",
    "😒": "hussssss ,,,jah sorrr😏",
    "mor": "কেনো ৪০ শা খাবি নাকি ? 🥴",
    "ki accah": "তর নানীরে আলাবিও 🙂👋",
    "valobashi": "ওহ ,,তাহলে নদীতে ঝাপ দিয়ে প্রমাণ দাউ 😊",
    "jaiga": "দেইখা যাইস কি কিসু দিলে খাইস না কিন্তু 🐸",
    "abal": "তর নানা আবল তর ১৯ গুষ্টি আবল 😞",
    
  };

  if (!responses[msg]) return;

  if (!global.client.handleReply) global.client.handleReply = [];

  return api.sendMessage(
    responses[msg],
    threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID,
        type: "sahu"
      });
    },
    messageID
  );
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (event.senderID !== handleReply.author) return;

  try {
    const text = event.body.trim();

    const base = await getMainAPI();
    const link = `${base}/simsimi?text=${encodeURIComponent(text)}`;

    const res = await axios.get(link);

    const reply = Array.isArray(res.data.response)
      ? res.data.response[0]
      : res.data.response;

    if (!global.client.handleReply) global.client.handleReply = [];

    return api.sendMessage(
      reply,
      event.threadID,
      (err, info) => {
        global.client.handleReply.push({
          name: module.exports.config.name,
          messageID: info.messageID,
          author: event.senderID,
          type: "tauhid"
        });
      },
      event.messageID
    );

  } catch {
    return api.sendMessage("🙂 একটু পরে আবার বলো", event.threadID, event.messageID);
  }
};

module.exports.run = async function ({ api, event }) {
  return module.exports.handleEvent({ api, event });
};
