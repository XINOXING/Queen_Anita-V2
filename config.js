//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFIOWRoQTcxOTV1KzMwRDFQOUFrQ2VUSm15cXhybVZraUwwOGJVZlZuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjBiNzFIVzd6ZnhmWWs4N1V5VFp2TUM1MEtFOGFlNVA5bW9EdmpNSXZBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QWxWOWZoL2xTaTNzUEtvTmJuMmlobzlpc0dOT1I2VlEyYTlVbXNqS0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdnAwbDg0Y0NRcnloQzBWRXFOYWY3cGFnRDB3T2pFcEVRK1RUaFF2ZFRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJL2U0VktMK25nTVFEWDNDdVRaQlFSM1NxeHo1cmNFb3lIeHcwaER3R0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZhdE80aWRJRWp4SGJ1aEVCNmc0aDBWTW94NVdKamRaT1g4YmYyR0tCQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUQ4MTlWdnE4dzhqbDhZV1hFSmpVTTBnbmJHRWh4ei9UQ0krTjRxakxIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JiN3l1dWdjMzZiZFBqbFFLUTlQNllSYXdMblFjTlFwZy9DY2x0LzNFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklRR1ZxVWdEaXZqM09GUG8vK3BJb2ZkM3gxdEViK0JMQnlhNXJTNWVhUjZVSXJXNG1jTkZ1b2dVZ2tjWUtRYnJVMWFpZ3ZVQ3dRWWp5SW5pTThuSGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJzRlhBWTF6OXNsdEIrUnpmYkF6ZkFkNzl0YjAvUGo4K2FsRXhjTDZoWFVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJRC1iNHZIa1RETzFiXy1ISUtobVFBIiwicGhvbmVJZCI6IjkwYTdmM2RkLTQyMWItNGQ5MS05MmZmLTQyZjIxNzE2ZjQ3MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVWFndG95MzR5ODFncUhSQitwdmllejNMems9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2hleldBdlRwZkFxcHo0eXlWK0pMeStuUGZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlMzSkpWREZHIiwibWUiOnsiaWQiOiIyMzQ3MDY2NTA2ODk5OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlhJTk9YSU5HIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNRDdrK3dCRVBMeHNiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWQ0xZSUFIMStrNWsrVDFBNmVhRUNnUjVoS1A1Qnh1VHRKNjRoVVJ0b1c4PSIsImFjY291bnRTaWduYXR1cmUiOiJYcTJoN2M0UTZJMVVxUmd3QWQ0WHV2VmlkQUd4RmFqM3BXanB2SlNuQTNTNXMya3NTVlNhbHJVUWptQkJZbVhzV1hSbWtSNWZ1WFl0aG5KSHpLaStDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRmx3d2VVTGZvd3dvVjJBdVN1Y3ROS3ZrS0hJcVpLckJ3NUZrNUVVS2pRQnRYd1NmV2R4NE81d2o3cUhvMU84NlcvU3I5ek9hUDlFT1Z1emRMT0M4amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY2NTA2ODk5OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZRaTJDQUI5ZnBPWlBrOVFPbm1oQW9FZVlTaitRY2JrN1NldUlWRWJhRnYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI1NzkyMDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWJVIn0=|
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
