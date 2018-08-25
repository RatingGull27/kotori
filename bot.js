const Discord = require('discord.io');
const booru = require('booru');
const logger = require('winston');
const auth = require('./auth.json');
const http = require('follow-redirects').http;
const fs = require('fs');
const execSync = require('child_process').execSync;

logger.add(logger.transports.File, {
    filename: 'log/network.log',
});
var bot = new Discord.Client({
   token: auth.token,
   autorun: true,
});

serverId = "Put Your Server Id";

bot.on('ready', function (evt) {
    logger.info('Connected');
    (function nonconformist(i) {
        setTimeout(function() {
            switch(i) {
                case 1:
                    bot.editRole({"serverID":serverID,"roleID":"400727123876118528",color:0x000EFF},function(err,response) {
                    if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472453836913770536",color:0x000EFF},function(err,response) {
                        if(err) logger.error(err);
                    });
                case 2:
                    bot.editRole({"serverID":serverID,"roleID":"472453889170472973",color:0xFF0000},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472453952458457102",color:0xE91E63},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 3:
                    bot.editRole({"serverID":serverID,"roleID":"472453988693049344",color:0xFF6700},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472453988693049344",color:0xED457D},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 4:
                    bot.editRole({"serverID":serverID,"roleID":"472454077159178241",color:0x00FBFF},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454122239426561",color:0xF1749E},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 5:
                    bot.editRole({"serverID":serverID,"roleID":"472454160088956929",color:0xFFAC00},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454209560641536",color:0xF6A2BE},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 6:
                    bot.editRole({"serverID":serverID,"roleID":"472454274207711232",color:0xFF00EE},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454276824956948",color:0xFAD1DF},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454315668275201",color:0xED457D},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 7:
                    bot.editRole({"serverID":serverID,"roleID":"472454280142520320",color:0xBC00FF},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454283024007188",color:0xF6A2BE},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454304217825281",color:0xED457D},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 8:
                    bot.editRole({"serverID":serverID,"roleID":"472454286123728900",color:0x00FF26},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454291723124738",color:0xF1749E},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454308080910366",color:0xED457D},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                case 9:
                    bot.editRole({"serverID":serverID,"roleID":"472454295036362754",color:0xFFF200},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454297519521792",color:0xED457D},function(err,response) {
                        if(err) logger.error(err);
                    });
                    bot.editRole({"serverID":serverID,"roleID":"472454300866445322",color:0xED457D},function(err,response) {
                        if(err) logger.error(err);
                    });
                    break;
                    i = 0;
                    break;
            }
            ++i;
            nonconformist(i);
        }, 111);
    });
});

bot.on('message', function(user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({to:channelID,message:'Pong! --> Connected to back to the discord bot your Discord server.'});
                break;
                case 'lewd':
                var explicit = "rating:explicit";
                if(args.indexOf("rating:safe") >= 0 || args.indexOf("rating:questionable") >= 0)
                    explicit = "";

                var site = "gelbooru";
                var sites = ["site:e621.net", "site:e6", "site:e621", "site:e926.net", "site:e9", "site:e926", "site:hypnohub.net", "site:hh", "site:hypo", "site:hypohub", "site:danbooru.donmai.us", "site:db", "site:dan", "site:danbooru", "site:konachan.com", "site:kc", "site:konac", "site:kcom", "site:konachan.net", "site:kn", "site:konan", "site:knet", "site:yande.re", "site:yd", "site:yand", "site:yandere", "site:gelbooru.com", "site:gb", "site:gel", "site:gelbooru", "site:rule34.xxx", "site:r34", "site:rule34", "site:safebooru.org", "site:sb", "site:safe", "site:safebooru", "site:tbib.org", "site:tb", "site:tbib", "site:big", "site:xbooru.com", "site:xb", "site:xbooru", "site:youhate.us", "site:yh", "site:you", "site:youhate", "site:dollbooru.org", "site:do", "site:doll", "site:dollbooru", "site:rule34.paheal.net", "site:pa", "site:paheal", "site:lolibooru.moe", "site:lb", "site:lol", "site:loli", "site:lolibooru", "site:derpibooru.org", "site:dp", "site:derp", "site:derpi", "site:derpibooru"];
                for(var i = 0; i < sites.length; i++)
                    if(args[0] === sites[i]) {
                        site = sites[i].substring(5);
                        args = args.splice(1);
                        break;
                    }

                booru.search(site, [explicit].concat(args), {limit: 1, random: true})
                .then(booru.commonfy)
                .then(images => {
                    for(let image of images)
                        bot.sendMessage({to:channelID,message:image.common.file_url});
                })
                .catch(err => {
                    if(err.name === 'BooruError')
                        logger.error(err.message);
                    else
                        logger.error(err);
                })
                break;
            case 'mmda':
                var tags="all" + message.substring(5).replace(/ /g , "%20");
                http.get({host:'mmda.booru.org', port: 80, path: '/index.php?page=post&s=random&tags=' + tags}, function(res) {
                    var body = '';
                    res.on('data', function(chunk) {
                        body += chunk;
                    });
                    res.on('end', function() {
                        var re = /http:\/\/img.booru.org(.*?)(?=")/g;
                        var img = re.exec(body)[0];
                        bot.sendMessage({to:channelID,message:img});
                        re = /Source: (.*?)(?= )/g;
                        var link = re.exec(body)[1];
                        bot.sendMessage({to:channelID,message:link});
                    });
	            }).on('error', function(e) {

                    logger.error(e.message)});
                break;
            }
        };
    }
)
