const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/06/Backgrounds-HD-Barbie-Wallpapers.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Ameer Suhail*
*Creator number : wa.me/919567091981?text=Hi%20Tbc%20Jerry.%20*
*Subscribe my channel : https://youtube.com/channel/UClhrCK46MWPHZdZUGkitKug*
*Githublink (Setup)  :    https://github.com/JERRY-SER/BarbieV5*
*Audio commands :   https://github.com/JERRY-SER/BarbieV5/tree/master/uploads*
*Sticker commands : https://github.com/JERRY-SER/BarbieV5/tree/master/uploads*
`}) 

}));
