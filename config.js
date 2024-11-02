const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "BLUE DEMON" 


global.devs = "BLUE DEMON" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347041039367";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_39_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqWTdnclQzemZ5NnFhQ2FmT1I1enBEKzhnOEY2K0hvK2l0a05YeS9VYW1nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOeVFBRW0wMVJhU3hZUl9sWDdZT2pBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3NjQyNzZkLTZlMjAtNDRiYS1iOGViLTM4OGVkMmU1ODUzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxODYsXG4gICAgICAxOTAsXG4gICAgICAyMDEsXG4gICAgICAxOTcsXG4gICAgICA5NixcbiAgICAgIDExNyxcbiAgICAgIDIzNyxcbiAgICAgIDEwNCxcbiAgICAgIDY2LFxuICAgICAgMTM2LFxuICAgICAgMjksXG4gICAgICAyMTUsXG4gICAgICAyMTMsXG4gICAgICA4OCxcbiAgICAgIDcsXG4gICAgICA5OCxcbiAgICAgIDk3LFxuICAgICAgMTcwLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDE0NSxcbiAgICAgIDExNyxcbiAgICAgIDQsXG4gICAgICAxODIsXG4gICAgICAxNixcbiAgICAgIDE1MyxcbiAgICAgIDEyNyxcbiAgICAgIDI4LFxuICAgICAgMjAwLFxuICAgICAgMTksXG4gICAgICAzOSxcbiAgICAgIDYyLFxuICAgICAgMTY3LFxuICAgICAgNyxcbiAgICAgIDE5MSxcbiAgICAgIDE1MCxcbiAgICAgIDIzNSxcbiAgICAgIDg1LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzJZMjZHU0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDEwMzkzNjc6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNDYxNTU3MzE0MzcxMjo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEk4T1lGRVBLYm1ya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllKd1dtZDFmZk1lcHBVSE9mRzZiSlpod0d2dUZMeGpPRklDekk4c3FvRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHg2VWVFYW9Vdm4xNlkwNWxoSkhXd0ZpT0J6T2REaS81anphRjlEQ1M1TEphUmhVNitadEdsbU0yYnFCRTQ0V0J5RmFTdlNETTJYRFgwcWtUVmNNQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0ZyMzc4QjQrbi9iVTZUMEpUSU1kTEIxZ29IY1NjcExHTURtVFpCUU5tQXdyZjIya3pZZlhQc3ZOSXAzQjV3ZmdWMVRiVkhqdlRsZ2FlQmJVTEc0Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MTAzOTM2Nzo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU3OTk1OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "BLUE DEMON" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "BLUE-DEMON",
  packname: process.env.PACK_NAME || "BLUE-DEMON",
  botname : process.env.BOT_NAME  || "BLUE-DEMON",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
