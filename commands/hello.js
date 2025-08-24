module.exports = {
  name: "hello",
  alias: ["hi", "hey"],
  description: "Say hello",
  category: "general",
  async execute(m, sock, args) {
    await sock.sendMessage(m.chat, { text: "Hello! කෙසේද?" }, { quoted: m });
  },
};
