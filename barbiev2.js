/* Copyright (C) 2021 Chunkindepadayali.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

*/

const BarbieV5 = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

BarbieV5.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

// send a list message!

    const rows = [

        {title: '.HELP', description: "\n\n╭────────────────╮\n         🅱🅰🆁🅱🅸🅴 \n ╰────────────────╯\n ❏ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs \n ╭──────────────── \n │ ▢ ᴀᴅᴅ \n │ ▢ ʙᴀɴ \n │ ▢ ᴍᴜᴛᴇ \n │ ▢ ᴜɴᴍᴜᴛᴇ \n │ ▢ ᴘʀᴏᴍᴏᴛᴇ \n │ ▢ ᴅᴇᴍᴏᴛᴇ \n │ ▢ ɪɴᴠɪᴛᴇ \n │ ▢ ᴊᴏɪɴ \n │ ▢ ᴡᴇʟᴄᴏᴍᴇ \n │ ▢ ɢᴏᴏᴅʙʏᴇ \n │ ▢ ᴋɪᴄᴋᴍᴇ \n │ ▢ ᴛᴀɢᴀʟʟ \n╰──────────────── \n ❏ ᴏᴡɴᴇʀ ᴄᴜᴍᴍᴇɴᴅs \n ╭──────────────── \n │ ▢ʙɢᴍ ᴏɴ/ᴏғғ \n │ ▢ᴛʜᴇʀɪ ᴏɴ/ᴏғғ \n │ ▢ʙᴀɴ │ ▢ᴛᴀɢᴀᴅᴍɪɴ \n │ ▢ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ ᴏɴ/ᴏғғ \n │ ▢ ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ \n │ ▢ ᴡᴀʀɴ \n │ ▢ ʙᴏᴛɴᴀᴍᴇ \n ╰──────────────── \n ❏ ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs \n ╭──────────────── \n │ ▢ sᴏɴɢ \n │ ▢ sɪɴɢ \n │ ▢ ʟʏʀɪᴄ \n │ ▢ ᴠɪᴅᴇᴏ \n │ ▢ ɪɴsᴛᴀ \n │ ▢ ɪᴍɢ \n │ ▢ ss \n │ ▢ ᴡɪᴋɪ \n ╰──────────────── \n ❏ ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs \n │ ▢ ɢɪᴛ \n │ ▢ ᴏᴡɴᴇʀ \n │ ▢ ᴏᴡɴᴇʀᴄᴍɴᴅ \n │ ▢ ᴀʟɪᴠᴇ \n │ ▢ xᴍᴇᴅɪᴀ \n │ ▢ ɢɪᴛʜᴜʙ \n │ ▢ sᴄᴀɴ \n │ ▢ ʀᴅᴍᴏʀᴇ \n │ ▢ ɴᴇᴡs \n │ ▢ ᴇᴍᴏ \n │ ▢ ғғɪʀᴇ \n │ ▢ ᴀɴɪᴍᴇ \n │ ▢ ʀᴇɴᴀᴍᴇ \n │ ▢ ᴍᴘ3 \n │ ▢ ᴍᴘ4 \n │ ▢ sᴛɪᴄᴋᴇʀ \n │ ▢ ᴘʜᴏᴛᴏ \n │ ▢ ᴛᴛs \n │ ▢ ᴜɴᴠᴏɪᴄᴇ \n │ ▢ ʀᴇᴍᴏᴠᴇʙɢ \n │ ▢ ᴀᴛᴛᴘ \n │ ▢ ᴛʀᴛ \n │ ▢ ᴄᴀʟᴄ \n │ ▢ ᴊᴏᴋᴇ \n │ ▢ ᴍᴏʟᴜ \n │ ▢ ɪɴsᴜʟᴛ \n │ ▢ ᴡᴀᴍᴇ \n │ ▢ ᴘʟᴜɢɪɴ \n │ ▢ ʀᴇᴍᴏᴠᴇ \n │ ▢ ғɪʟᴛᴇʀ \n │ ▢ ᴊɪᴅ \n │ ▢ ʙʟᴏᴄᴋ \n │ ▢ ᴜɴʙʟᴏᴄᴋ \n │ ▢ sʜᴏʀᴛ \n │ ▢ ᴡʜᴏɪs \n │ ▢ ᴡᴀʟʟᴘᴀᴘᴇʀ \n │ ▢ sʜᴏᴡ \n │ ▢ ᴍᴏᴠɪᴇ \n │ ▢ ᴄᴏᴠɪᴅ \n │ ▢ ᴘɪɴɢ \n ╰──────────────── \n ❏ ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs \n ╭──────────────── \n │ ▢ ʀᴇsᴛᴀʀᴛ \n │ ▢ sʜᴜᴛᴅᴏᴡɴ \n │ ▢ sᴇᴛᴠᴀʀ \n │ ▢ ɢᴇᴛᴠᴀʀ \n │ ▢ ᴀʟʟᴠᴀʀ \n │ ▢ sᴜᴅᴏ \n │ ▢ ᴜᴘᴅᴀᴛᴇ \n │ ▢ ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ \n ╰──────────────── ", rowId:" rowid1"},

        {title: '.XMEDIA', description: "XMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n  ", rowId:" rowid2"},

        {title: '.OWNER', description: "\n\n\n```Created by Jerry-Ser```\n\n```owner number wa.me/919567091981```\n\n```owner number wa.me/919567091981```\n\n ", rowId:" rowid3"},

        {title: '.GIT', description: "\n\n\n```Created by Jerry-Ser```\n\n```owner number wa.me/919567091981```\n\n```owner number wa.me/919567091981```\n\n```whatsapp group : https://chat.whatsapp.com/FY5rW7tPVEm9hpRRgHAY6f```\n\n```github link       https://github.com/JERRY-SER/BarbieV5```\n\n```audio commads    https://github.com/JERRY-SER/BarbieV5/media/tree/main/uploads```\n\n```sticker commands  https://github.com/JERRY-SER/BarbieV5/media/tree/main/stickers```\n  ", rowId:" rowid4"}

       ]

       const sections = [{title: "ωнαтsαρρ вσт™", rows: rows}]

       const button = {

        buttonText: '𝗖𝗟𝗜𝗖𝗞 ',

        description: "*~________~ 🅱🅰🆁🅱🅸🅴~______~*",

        sections: sections,

        listType: 1

       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
