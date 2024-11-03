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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_04_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRDg4RVpyb3BRWlRrUlo3TEFFS2VNRkI4eEFJTDg4VEdzNy9rYTBCbDNwVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEthNENBYi1Ud3FQQ3BkR2k4OVJmZ1wiLFxuICBcInBob25lSWRcIjogXCI2NmEyZmUxZS02MDI4LTQ0MmMtYjI2MC01NDk0MzgyMTc5MzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMjI4LFxuICAgICAgMzcsXG4gICAgICAyMDUsXG4gICAgICAxODQsXG4gICAgICAxOSxcbiAgICAgIDE1NyxcbiAgICAgIDEwNSxcbiAgICAgIDMyLFxuICAgICAgODgsXG4gICAgICAyMzQsXG4gICAgICAyNTQsXG4gICAgICAyMCxcbiAgICAgIDIyMSxcbiAgICAgIDE4MixcbiAgICAgIDE2MixcbiAgICAgIDk2LFxuICAgICAgOTMsXG4gICAgICAyMDEsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgODIsXG4gICAgICA1NixcbiAgICAgIDI0MyxcbiAgICAgIDE2MyxcbiAgICAgIDIzNSxcbiAgICAgIDUzLFxuICAgICAgMTQ2LFxuICAgICAgMjU1LFxuICAgICAgNjQsXG4gICAgICAxNjQsXG4gICAgICA2NixcbiAgICAgIDcyLFxuICAgICAgMTc2LFxuICAgICAgNTcsXG4gICAgICAxMTUsXG4gICAgICAxOTksXG4gICAgICAyMjgsXG4gICAgICAyMTIsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUU00Qk1BN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTAzOTM2Nzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjE1NTczMTQzNzEyOjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01USThPWUZFSkw1bkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWUp3V21kMWZmTWVwcFVIT2ZHNmJKWmh3R3Z1Rkx4ak9GSUN6SThzcW9FST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDUnhoVXNLUWhlWFRwQk52UkZCQ0wrRWJmck5USlJwbUg0Q3pMVXNnNWsyRm8zVzMwVHpDeVQ4VGJtL3U0WGpyZ0VocERRYndBUlBZMjFCNU1Ec3FBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBUkN4YnhBdHRaL3pEVEhsQjBmb2h2ZnBOZUFKOUZGMmlveVFrYkxHTEJVN3ZCMWRTRGtKMFpkUWJTZDludGgrcU9XRWowU1ZrUlFkNGdlRWVQY1poZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxMDM5MzY3OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjI0NjYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWlnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNaWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0VDFIOXRoY1RyU1A1R09rSDNOR2c4Y3lhVk9MaUxnbDZXcUpIVVBhK2swPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NTc5MzEwNzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1NzU4MTU1MjBcIn0iCn0="  // PUT your SESSION_ID 


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
