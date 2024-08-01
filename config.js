const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="alvinmwangi2018@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254781263753";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID ||  "SUHAIL_19_51_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmYzRVdBcFlVLzFEZHRKS1p6c3dGOWFMUW03WEJmZHl4aUZEbUd2b0dsND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ0NDJDQzMxNzVFN0I2QjRBQzdENTk0QjJCM0VERTlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU0MTg2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUYyMUU1ODg0Q0M0ODk0MUIwQThEQTE0NDFFQkExNjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTQxODYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzgxMjYzNzUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxODZCMUJFQzdCNUZCMDg0QkI0RjQzRjJEOUJFMDkwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDE4NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFMTNGMjRDRTRGRkQxMDVCNUM2N0REMTI4Mjg5QTQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU0MTg2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlajV2a0NiblM2cTNzNE94QWFrZkpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImUwYTJiY2VjLTZlZjMtNDc5Yy1hOGI0LWMzZGMwM2Q2OGNmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDIwNSxcbiAgICAgIDE2LFxuICAgICAgOTgsXG4gICAgICA2MSxcbiAgICAgIDI0MixcbiAgICAgIDcwLFxuICAgICAgMjEwLFxuICAgICAgNTcsXG4gICAgICAyNDcsXG4gICAgICAxMzEsXG4gICAgICAxOTAsXG4gICAgICAyNTMsXG4gICAgICAyMDIsXG4gICAgICAxNDIsXG4gICAgICAxODcsXG4gICAgICAyMzksXG4gICAgICA2MyxcbiAgICAgIDE3NSxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxMSxcbiAgICAgIDIwMixcbiAgICAgIDk1LFxuICAgICAgNDYsXG4gICAgICAyMzcsXG4gICAgICA2NyxcbiAgICAgIDM5LFxuICAgICAgMjQ0LFxuICAgICAgMTgyLFxuICAgICAgNTEsXG4gICAgICA0LFxuICAgICAgMTA1LFxuICAgICAgMTI2LFxuICAgICAgNTgsXG4gICAgICAxMTQsXG4gICAgICA1OSxcbiAgICAgIDkwLFxuICAgICAgNixcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4NDdXRjU0S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzgxMjYzNzUzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY2MTQzMDY2ODI4ODQ1OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiYWx2aW5td2FuZ2kyMDE4XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTitidEpRR0VLRE9yN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2akdEVEc5NFRBZGFiMUk4cUpSNUxLRnlJQ0hDNGlZdmhram8yT3l2cVE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIittNGN0NTZNNmlZWnZrWkdKZVl3eHpTbVFhRXFJdkoxM2JaM3oydDAyZ3Z2bHhIK0pKQXBNMjZsSHo5TWU0VnM4VVVFUmQyRFZVekthUm5mbk5tU0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpuR1hTZ3lHYStrSU5iQnhrZzRCV0pCWTNtYklhTlZFTGR0ejVzVnFnSnM3ZkdDWVN6R3dOR1hwUmd2TzdxU1V5Z2NKSEVzZ3dlcnBEelVmRXd4Q0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc4MTI2Mzc1Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTQxODU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVR0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPZkR5L3ExRUJsemZST1NUYzF4NEY1TmxXWHRlV2drREFnQ1NyM0JIbkdnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTM0MTEyOTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU0MTg2MTI0MFwifSIKfQ==" // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
