const fs = require("fs");
const path = require("path");
const commands = new Map();

const files = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of files) {
  const command = require(`./commands/${file}`);
  commands.set(command.name, command);
}


---
