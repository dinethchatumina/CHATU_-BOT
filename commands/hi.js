module.exports = {
  name: "hi",
  alias: ["hello", "yo"],
  description: "Send a friendly greeting",
  category: "general",
  async execute(m, sock, args, store) {
    await sock.sendMessage(m.chat, { text: "Heyy! 😄 මොකද කෙරෙන්නේ?" }, { quoted: m });
  },
};
