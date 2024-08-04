//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Prexzyvilla" //ur yt chanel name
global.socialm = "GitHub: Prexzybooster" //ur github or insta name
global.location = "Nigeria, Osun, Osogbo" //ur location

//new
global.botname = 'Queen Anita V1' //ur bot name
global.ownernumber = ['2349159895444'] //ur owner number, dont add more than one
global.ownername = 'Precious Ayomide👑' //ur owner name
global.websitex = "https://github.com/Prexzybooster"
global.wagc = "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/Prexzybooster/Queen-Priya-V1' //script link
global.packname = "Sticker By"
global.author = "Precious Ayomide👑\n\n+2349159895444"
global.creator = "2349159895444@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349159895444"] // Premium User

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v12'
global.typereply = 'v1' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '234' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
