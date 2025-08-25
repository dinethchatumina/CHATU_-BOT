const config = require('../../settings');
const { cmd, commands } = require('../lib/command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://i.ibb.co/5WMr0yHZ/Golden-Queen-MD-VIMAMODS-1klcgrow.jpg';

cmd({
  pattern: "menu",
  alias: ["මෙනු", "මෙනූ", 'MENU'],
  desc: "Commands panel",
  react: '🗂️',
  filename: __filename
}, async (bot, message, args, options) => {
  const { from, quoted, reply, pushname } = options;

  try {

    const menuText = `╭•╼━═━━≺• 𝕄𝔼ℕ𝕌 •≻━━═━╾•╮
*👋 𝐻𝑜𝑤 𝐴𝑟𝑒 𝑌𝑜𝑢 ${pushname} 😊*

* ⌚ *яυи τιмє* - 
> ${runtime(process.uptime())}
* 💾 *яαм υѕє* - 
> ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
* 🧬 *νєяѕιοи* - 
> 2.00
* 🗃️ *нοѕτ иαмє* - 
> ${os.hostname()}

*➥ 𝐒𝐀𝐍𝐍𝐔 𝐗 𝐌𝐃 🔐*

╭────❲ *ʀᴇᴘʟʏ ɴᴜᴍʙᴇʀ* ❳────╮
┃✺╭────────────···▸
┻✺│⥃◈ *1  • 𝐎ᴡɴᴇʀ 𝐌ᴇɴᴜ*
│✺│⥃◈ *2  • 𝐂ᴏɴᴠᴇʀᴛ 𝐌ᴇɴᴜ*
│✺│⥃◈ *3  • 𝐁ᴜɢ 𝐌ᴇɴᴜ*
│✺│⥃◈ *4  • 𝐒ᴇᴀʀᴄʜ 𝐌ᴇɴᴜ*
│✺│⥃◈ *5  • 𝐃ᴀᴡɴʟᴏᴀᴅ 𝐌ᴇɴᴜ*
│✺│⥃◈ *6  • 𝐌ᴀɪɴ 𝐌ᴇɴᴜ*
│✺│⥃◈ *7  • 𝐆ʀᴏᴜᴘ 𝐌ᴇɴᴜ*
│✺│⥃◈ *8  • 𝐅ᴜɴ 𝐌ᴇɴᴜ*
│✺│⥃◈ *9  • 𝐀ɪ 𝐌ᴇɴᴜ*
┳✺│⥃◈ *10 • 𝐎ᴛʜᴇʀ 𝐌ᴇɴᴜ*
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟

> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️';

    // Send Menu Message
 const sentMenuMessage = await bot.sendMessage(
  from,
  {
    image: { url: "https://i.ibb.co/5WMr0yHZ/Golden-Queen-MD-VIMAMODS-1klcgrow.jpg" },
    caption: menuText,
    contextInfo: {
      mentionedJid: [],
      isForwarded: true,
      forwardingScore: 1,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363368882758119@newsletter",
        newsletterName: "🌹𝗦𝗔𝗡𝗡𝗨 𝗫 𝗠𝗗 𝗕𝗢𝗧‼️",
        serverMessageId: 999,
      },
    },
  },
  { quoted: message }
);

    const menuMessageId = sentMenuMessage.key.id;

    // Define responses for each option
    const menuResponses = {
      '1': { imageCaption: `*꧁◈╾───☉ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *setting*
> ʙᴏᴛ ꜱᴇᴛᴛɪɴɢ  ᴄʜᴀɴɢᴇ
│ ➽ *block*
> ᴜꜱᴇʀ ʙʟᴏᴄᴋ
│ ➽ *unblock*
> ʙʟᴏᴄᴋ ᴜꜱᴇʀ  ᴜɴʙʟᴏᴄᴋ
│ ➽ *shutdown*
> ʙᴏᴛ ꜱᴛᴏᴘ
│ ➽ *broadcast*
> ᴀʟʟ ɢʀᴏᴜᴘ ꜱᴇɴᴅ ᴍꜱɢ
│ ➽ *setpp*
> ᴘʀᴏꜰɪʟᴇ ᴘɪᴄ ᴄʜᴀɴɢᴇ
│ ➽ *clearchats*
> ᴀʟʟ ᴄʜᴀᴛ ᴄʟᴇᴀʀ 
│ ➽ *jid*
> ᴄʜᴀᴛ ᴊɪᴅ 
│ ➽ *gjid*
> ɢʀᴏᴜᴘ ᴊɪᴅ
│ ➽ *botupdate*
> ʙᴏᴛ ᴜᴘᴅᴀᴛᴇ
│ ➽ *updatecmd*
> ᴜᴘᴅᴀᴛᴇ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ
│ ➽ *boom*
> ꜱᴇɴᴅ ᴜɴʟɪᴍɪᴛᴇᴅ ᴄᴏꜱᴛᴜᴍᴇꜱ ᴍᴇꜱꜱᴀɢᴇ
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '2': { imageCaption: 
`*꧁◈╾───☉ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *sticker*
> ᴘʜᴏᴛᴏ ᴄᴏɴᴠᴇʀᴛ ꜱᴛɪᴄᴋᴇʀ
│ ➽ *trt*
> ᴛʀᴀɴꜱʟᴀᴛᴇ ᴛᴇxᴛ ʙᴇᴛᴡᴇᴇɴ  ʟᴀɴɢᴜᴀɢᴇꜱ
│ ➽ *tts*
> ᴅᴀᴡɴʟᴏᴀᴅ ᴛʏᴘᴇ ᴛᴇxᴛ ᴛᴏ ᴠᴏɪᴄᴇ
│ ➽ *vv*
> ᴠɪᴇᴡᴏɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇ ᴀɢɪɴ ᴠɪᴇᴡ
│ ➽ *fancy*
> ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴛᴇxᴛ ɪɴᴛᴏ ᴠᴀʀɪᴏᴜꜱ ꜰᴏɴᴛ
│ ➽ *pickupline*
> ɢᴇᴛ ᴀ ʀᴀɴᴅᴏᴍ ᴘɪᴄᴜᴘ ʟɪɴᴇ ᴛʜᴇ ᴀᴘɪ
│ ➽ *img2url*
> ɪᴍᴀɢᴇ ᴜʀʟ ᴄʀᴇᴀᴛᴇᴅ
│ ➽ *rbg*
> ʀᴇᴍᴏᴠᴇ ᴘʜᴏᴛᴏ ʙᴀᴄᴋʀᴏᴜɴᴅ
│ ➽ *tinyurl*
> ᴜʀʟ ᴛᴏ ɢᴇᴛ ꜱʜᴏʀᴛᴛ ʟɪɴᴋ
│ ➽ *qr*
> ɢᴀɴᴀʀᴀᴛᴇ ᴀ Qʀ ᴄᴏᴅᴇ
│ ➽ *gpass*
> ɢᴀɴᴀʀᴀᴛᴇ ꜱᴛʀᴏɴɢ ᴘᴀꜱꜱᴡᴇᴀʀᴅ
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '3': { imageCaption: 
`*꧁◈╾───☉ ʙᴜɢ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ **
> 
│ ➽ **
> 
│ ➽ **
> 
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '4': { imageCaption: 
`*꧁◈╾───☉ ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *yts*
> ꜱᴇᴀʀᴄʜ ꜰᴏʀ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏꜱ ᴜꜱɪɴɢ ᴀ Qᴜᴇʀʏ
│ ➽ *save*
> ꜱᴀᴠᴇ ᴀɴᴅ ꜱᴇɴᴅ ʙᴀᴄᴋ ᴀ ᴍᴇᴅɪᴀ ꜰɪʟᴇ ( ɪᴍᴀɢᴇꜱ / ᴠɪᴅᴇᴏ ᴏʀ ᴀᴜᴅɪᴏ )
│ ➽ *rashunews*
> ɢᴇᴛ ᴀ ꜱɪɴʜᴀʟᴀ ʙʀᴇᴋɪɴɢ ɴᴇᴡꜱ ʜᴇᴅʟɪɴᴇꜱ
│ ➽ *news*
> ɢᴇᴛ ᴀ ʟᴀꜱᴛᴇꜱᴛ ɴᴇᴡꜱ ʜᴇᴅʟɪɴᴇꜱ
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '5': { imageCaption: 
`*꧁◈╾───☉ ᴅᴀᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *song*
> ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ  ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *songpro*
> ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ ᴅᴀᴡɴʟᴏᴀᴅ  
│ ➽ *video*
> ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *videopro*
> ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *apk*
> ᴘʟᴀʏꜱᴛᴏʀʏ ᴀᴘᴘ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *tiktok*
> ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *tiktok2*
> ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *fb*
> ꜰᴀᴄᴇʙᴏᴏᴄᴋ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *mediafire*
> ᴍᴇᴅɪᴀꜰɪʀᴇ ʟɪɴᴋ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *ig*
> ɪɴꜱᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *twitter*
> ᴛᴡɪᴛᴛᴇʀ ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *xnxxdown*
> (18+) ᴠɪᴅᴇᴏ ᴅᴀᴡɴʟᴏᴀᴅ
│ ➽ *gdrive*
> ɢᴅʀɪᴠᴇ ᴛᴏ ᴅᴀᴡɴʟᴏᴀᴅ ꜰɪʟᴇ
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '6': { imageCaption: 
`*꧁◈╾───☉ ᴍᴀɪɴ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *wiki*
> ꜱᴇᴀʀᴄʜ ᴡɪᴋɪᴘᴇᴅɪᴀ ꜰᴏʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ
│ ➽ *env*
> ɢᴇᴛ ʙᴏᴛ ꜱᴇᴛᴛɪɴɢ ʟɪꜱᴛ
│ ➽ *system*
> ᴄʜᴇᴄᴋ ᴜᴘᴛɪᴍᴇ
│ ➽ *ping*
> ᴄʜᴇᴄᴋ ʙᴏᴛ ꜱᴘᴇᴇᴅ
│ ➽ *owner*
> ɢᴇᴛ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ
│ ➽ *alive*
> ʙᴏᴛ ᴏɴʟɪɴᴇ ᴄʜᴇᴄᴋ
│ ➽ *list*
> ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅ ᴛᴡᴏ ʟɪꜱᴛ
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '7': { imageCaption: 
`*꧁◈╾───☉ ɢʀᴏᴜᴘ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *closetime*
> ᴍᴜᴛᴇ ᴛʜɪꜱ ɢʀᴏᴜᴘ
│ ➽ *opentime*
> ᴜɴᴍᴜᴛᴇ ᴛʜɪꜱ ɢʀᴏᴜᴘ
│ ➽ *kick*
> ʀᴇᴍᴏᴠᴇ ᴏɴᴇ ᴍᴇᴍʙᴇʀꜱ
│ ➽ *kickall*
> ʀᴇᴍᴏᴠᴇ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ 
│ ➽ *msgall*
> ꜱᴇɴᴅ ɢʀᴏᴜᴘ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ɪɴʙᴏx ᴍꜱɢ 
│ ➽ *promote*
> ꜱᴇᴛ ᴀᴅᴍɪɴɢ
│ ➽ *demote*
> ᴜɴꜱᴇᴛ ᴀᴅᴍɪɴɢ
│ ➽ *add*
> ᴀᴅᴅ ᴏɴᴇ  ᴍᴇᴍʙᴇʀꜱ
│ ➽ *delete*
> ᴅᴇʟᴇᴛᴇ ᴛʜɪꜱ ᴍᴇꜱꜱᴀɢᴇ
│ ➽ *gname*
> ɢʀᴏᴜᴘ ɴᴀᴍᴇ ᴄʜᴀɴɢᴇ
│ ➽ *tagall*
> ᴛᴀɢ ᴀʟʟ ᴍᴇᴍʙᴀʀꜱ
│ ➽ *tagadmin*
> ᴛᴀɢ ᴀʟʟ  ᴀᴅᴍɪɴɢ
│ ➽ *invite*
> ɢʀᴏᴜᴘ ʟɪɴᴋ ɢᴇɴᴇʀᴀᴛᴛᴇ
│ ➽ *join*
> ᴊᴏɪɴ ᴀ ɢʀᴏᴜᴘ ᴜꜱɪɴɢ ᴏɴ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
│ ➽ *leave*
> ᴍᴀᴋᴇ ᴛʜᴇ ʙᴏᴛ ʟᴇꜰᴛ ᴛʜᴇ ᴄᴜʀʀᴇɴᴛ ɢʀᴏᴜᴘ
│ ➽ *setdesc*
> ᴄʜᴀɴɢᴇ ɢʀᴏᴜᴘ ᴅᴇꜱᴄᴛʀɪᴘᴛɪᴏɴ
│ ➽ *setwelcome*
> ꜱᴇᴛ ᴛʜᴇ ᴡᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ᴛʜᴇ ɢʀᴏᴜᴘ
│ ➽ *setgoodbye*
> ꜱᴇᴛ ᴛʜᴇ ɢᴏᴏᴅ ʙʏᴇ  ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ᴛʜᴇ ɢʀᴏᴜᴘ
│ ➽ *gend*
> ɢʀᴏᴜᴘ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ʀᴇᴍᴏᴠᴇ ᴀɴᴅ ɢʀᴏᴜᴘ ᴄʟᴏꜱᴇ
│ ➽ *allreq*
> ᴀᴘᴘʀᴏᴠᴇ ᴏʀ ʀᴇᴊᴇᴄᴛ ᴀʟʟ ᴊᴏɪɴ ʀᴇQᴜᴇꜱᴛꜱ
│ ➽ *disappear*
> ᴛʀᴜɴ ᴏɴ/ᴏꜰꜰ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇᴢꜱᴀɢᴇꜱ
│ ➽ *senddm*
> ꜱᴇɴᴅ ᴀ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇ
│ ➽ *lockgs*
> ᴄʜᴀɴɢᴇ ᴛᴏ ɢʀᴏᴜᴘ ꜱᴇᴛᴛɪɴɢꜱ ᴛᴏ ᴏɴʟʏ ᴀᴅᴍɪɴꜱ ᴄᴀɴ ᴇᴅɪᴛ ɢʀᴏᴜᴘ ᴏɴꜰᴏ
│ ➽ *unlockgs*
> ᴄʜᴀɴɢᴇ ᴛᴏ ɢʀᴏᴜᴘ ꜱᴇᴛᴛɪɴɢꜱ ᴛᴏ ᴀʟʟ ᴍᴇᴍʙᴀʀꜱ ᴄᴀɴ ᴇᴅɪᴛ ɢʀᴏᴜᴘ ᴏɴꜰᴏ
│ ➽ *left*
> ᴛᴏ ʟᴇᴀᴠᴇ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ
│ ➽ *gdesc*
> ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴅɪꜱᴄʀɪᴘᴛɪᴏɴ
│ ➽ *tag*
> ᴛᴏ ᴛᴀɢ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ꜰᴏʀ ᴍᴇꜱꜱᴀɢᴇ
│ ➽ *tagx*
> ᴛᴏ ᴛᴀɢ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ꜰᴏʀ ᴍᴇꜱꜱᴀɢᴇ
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '8': { imageCaption: 
`*꧁◈╾───☉ ꜰᴜɴ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *ship*
│ ➽ *dare*
│ ➽ *character*
│ ➽ *fact*
│ ➽ *insult*
│ ➽ *truth*
│ ➽ *pickupline*
│ ➽ *joke*
│ ➽ *dog*
│ ➽ *hack*
│ ➽ *animegirl*
│ ➽ *animegirl1*
│ ➽ *animegirl2*
│ ➽ *animegirl3*
│ ➽ *animegirl4*
│ ➽ *animegirl5*
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️ },

      '9': { imageCaption: 
`*꧁◈╾───☉ ᴀɪ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *ai*
│ ➽ *mistra*
│ ➽ *gpt3*
│ ➽ *gpt4*
│ ➽ *llama3*
│ ➽ *meta*
│ ➽ *ai4*
│ ➽ *sd2*
│ ➽ *sd*
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },

      '10': { imageCaption: 
`*꧁◈╾───☉ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
│ ➽ *anime*
│ ➽ *anime1*
│ ➽ *anime2*
│ ➽ *anime3*
│ ➽ *anime4*
│ ➽ *anime5*
│ ➽ *githubstalk*
│ ➽ *weather*
│ ➽ *fancy*
╰────────────────────●●►


> 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈  ꜱᴀɴɴᴜ x ᴍᴅ ʙᴏᴛ ᴏꜰꜰ🛡️` },
    };

    // Listen for replies to the menu message
    bot.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToMenu = newMessage.message.extendedTextMessage?.contextInfo?.stanzaId === menuMessageId;

if (isReplyToMenu) {
  const response = menuResponses[userReply];
  if (response) {
    // Send image response
    await bot.sendMessage(
  from,
  {
    image: { url: "https://i.ibb.co/5WMr0yHZ/Golden-Queen-MD-VIMAMODS-1klcgrow.jpg" },
    caption: response.imageCaption,
    contextInfo: {
      mentionedJid: [],
      isForwarded: true,
      forwardingScore: 1,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363368882758119@newsletter",
        newsletterName: "🌹𝗦𝗔𝗡𝗡𝗨 𝗫 𝗠𝗗 𝗕𝗢𝗧‼️",
        serverMessageId: 999,
      },
    },
  },
  { quoted: newMessage }
);
  } else {
    // Handle invalid input
    await bot.sendMessage(from, {
      text: "Invalid option! Please reply with a valid number."
    }, { quoted: newMessage });
  }
}
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});
