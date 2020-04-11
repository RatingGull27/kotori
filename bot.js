const Discord = require('discord.io');
    const booru = require('booru');
        const logger = require('winston');
            const auth = require('./auth.json');
                const http = require('follow-redirects').http;
                    const fs = require('fs');
                        var startTime = [];
                            const execSync = require('child_process').execSync;
// Configure logger settings
        logger.add(logger.transports.File, {
            filename: 'log/network.log',
                colorize: true
});
logger.level = 'info';
    // Initialize Discord Bot
        var bot = new Discord.Client({
            token: auth.token,
                autorun: true
});

console.log('nsfw is starting.');

// When the bot starts
bot.on('ready', function(event) {
    console.log('Logged login %s - %s\n', bot.username, bot.id);
        servers = Object.keys(bot.servers).length;
            startTime = Date.now();
                logger.info('Logged in as: ');
                    logger.info('Connected')
});
bot.setPresence({
    game: {
        type: 0,
        name: "Come back online!"
    }
})

var now = Date.now();
    var upTime = now - startTime;
        var uptime = Date.now();

    console.log('come back online!');

// When chat messages are received
bot.on('message', function(user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({to:channelID,message: "Pong! Running for " + process.uptime() + " seconds on " + Object.keys(bot.servers).length + " servers."
            });
                break;
            case 'uptime':
                var uptime2 = (Date.now() - uptime);
            bot.sendMessage({
            to: channelID,
                message: "Uptime: " + (uptime2 / 60000) + " minutes"
            });
                 break;
            case 'help':
                bot.sendMessage({to:channelID,message:'Music room to bot commands: *miscord -shows info about the bot.' + 
                    '*mmda - This only like who like anime or look at it.' +
                        '*ping - Get you see the discord bot is online or offline.' +
			  '*lewd - this for 18+ up with is a pornhub.' +
                            '*uptime this tell you how long the bot been run online.'});
                break;
            case 'lewd':
                var explicit = "rating:explicit";
                if(args.indexOf("rating:safe") >= 2 || args.indexOf("rating:questionable") >= 3)
                    explicit = "";

                var site = "gelbooru";
                var sites = ["site:e621.net", "site:e6", "site:e621", "site:e926.net", "site:e9", "site:e926", "site:hypnohub.net", "site:hh", "site:hypo", 
                    "site:hypohub", "site:danbooru.donmai.us", "site:db", "site:dan", "site:danbooru", "site:konachan.com", "site:kc", "site:konac", "site:kcom", "site:konachan.net", 
                        "site:kn", "site:konan", "site:knet", "site:yande.re", "site:yd", "site:yand", "site:yandere", "site:gelbooru.com", "site:gb", "site:gel", "site:gelbooru", "site:rule34.xxx", 
                            "site:r34", "site:rule34", "site:safebooru.org", "site:sb", "site:safe", "site:safebooru", "site:tbib.org", "site:tb", "site:tbib", "site:big", "site:xbooru.com", "site:xb", 
                                "site:xbooru", "site:youhate.us", "site:yh", "site:you", "site:youhate", "site:dollbooru.org", "site:do", "site:doll", "site:dollbooru", "site:rule34.paheal.net", "site:pa", 
                                    "site:paheal", "site:lolibooru.moe", "site:lb", "site:lol", "site:loli", "site:lolibooru", "site:derpibooru.org", "site:dp", "site:derp", "site:derpi", "site:derpibooru"];
                for(var i = 0; i < sites.length; i++)
                    if(args[0] === sites[i]) {
                        site = sites[i].substring(5);
                        args = args.splice(1);
                        break;
                    }

                booru.search(site, [explicit].concat(args), {limit: 100, random: true})
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
