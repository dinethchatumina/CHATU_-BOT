const menuText = `
*🔰 Welcome to Chatuwa Bot 🔰*

Select an option:
1️⃣ Info
2️⃣ Help
3️⃣ Settings
4️⃣ Exit
`;

async function onMessageReceived(message, sendMessage) {
  if (message === "menu" || message === "Menu") {
    await sendMessage(menuText);
  } else if (message === "1" || message.toLowerCase() === "info") {
    await sendMessage("Bot info: This bot does XYZ...");
  } else if (message === "2" || message.toLowerCase() === "help") {
    await sendMessage("Help: You can do this and that...");
  } else if (message === "3" || message.toLowerCase() === "settings") {
    await sendMessage("Settings: Choose your preferences...");
  } else if (message === "4" || message.toLowerCase() === "exit") {
    await sendMessage("Thank you! Bye!");
  } else {
    await sendMessage("Invalid option! Send 'menu' to see options.");
  }
}


---
