import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['573012482597', 'Dev Diego 👑', true],
   ['573218138672', 'Owner 🍭', true]]
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = ["221760263631"]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.7'
global.sessions = 'MiniSession'
global.jadi = 'MiniJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰Bicom±Lab ✰⪜'
global.botname = '𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶 - 𝗠𝗗 🍭'
global.wm = '𝗬𝗮𝗲𝗺𝗼𝗿𝗶 𝗕𝗼𝘁 - 𝗠𝗗 ⭐️'
global.author = 'Bicomaru.Shogunai👑'
global.dev = '© Powered By Sunlight Team ⚡︎'
6
global.textbot = '𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶 : 𝗢𝗳𝗰𝗗𝗶𝗲𝗴𝗼 🚩'
global.vs = '2.0.6'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./media/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')
global.miniurl = fs.readFileSync('./media/miniurl.jpg')
global.avatar = fs.readFileSync('./media/avatar_contact.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/BeukLUNoHtNJDKmMDTfQnd' //YaemoriBot
global.grupo2 = 'https://chat.whatsapp.com/EVc2XJuZwjnKKdWUsRYmms' //YaemoriBot2
global.grupo3 = 'https://chat.whatsapp.com/Fy74b6fgE9SJJpHVi6CKJY' //team oficial
global.grupo4 = 'https://chat.whatsapp.com/Ksd32KH9zFoDmO1PJt44M7' //GataBot & YaemoriBot
global.channel = 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A'
global.channel2 = 'https://whatsapp.com/channel/0029Vam7yUg77qVaz3sIAp0z'
global.md = 'https://github.com/Dev-Diego/YaemoriBot-MD' 
global.yt = 'https://www.youtube.com/@OfcDiego'
global.tiktok = 'https://tiktok.com/@theyaemoribot'
global.correo = 'theyaemoribot@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '🌱 𝗦𝘂𝗽𝗲𝗿 𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶 🍟', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
