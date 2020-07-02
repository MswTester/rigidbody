const Discord = require('discord.js');
const random = require('random');
const fs = require('fs');
const jsonfile = require('jsonfile');
const { createCanvas, loadImage } = require("canvas");

const bot = new Discord.Client();

const token = 'Njc3MTI2MzE1MDI3MjAyMDY4.XsuOPQ.kJX9ttoNX3nSMBTE85IOz9ELQ-Q';

const PREFIX = "'";

bot.on('ready', () =>{
    console.log('This bot is online!');
})

var stats = {};
if(fs.existsSync('stats.json')){
    stats = jsonfile.readFileSync('stats.json');
}

bot.on('message', message=>{

    var xv=8
    var yv=9

    if(message.author.bot){
        return;
    }

    if(message.guild.id in stats === false){
        stats[message.guild.id] = {};
    }

    const guildStats = stats[message.guild.id];
    if(message.author.id in guildStats === false){
        guildStats[message.author.id] = {
            xp: 0,
            level: 1,
            rankLevel: 1,
            rank: 1,
            rankName: "언랭크"
        };
    }

    const userStats = guildStats[message.author.id];
    if(!message.member.roles.cache.find(role => role.name == "레벨제한")){
        userStats.xp += random.int(xv,yv);
    }
    

    xpToNextLeve = 85 + userStats.level * 5;
    const xpToNextLevel = xpToNextLeve * userStats.level;
    levelToNextRan = 4;
    const levelToNextRank = levelToNextRan;


    if(userStats.xp >= xpToNextLevel) {
        userStats.level++;
        userStats.rankLevel++;
        if(userStats.rankLevel === levelToNextRank) {
            userStats.rankLevel = userStats.rankLevel - levelToNextRank
            userStats.rank = userStats.rank + 1
            if(userStats.rank === 1){
                userStats.rankName = "언랭크"
            }
            if(userStats.rank === 2){
                userStats.rankName = "브론즈"
            }
            if(userStats.rank === 3){
                userStats.rankName = "실버"
            }
            if(userStats.rank === 4){
                userStats.rankName = "골드"
            }
            if(userStats.rank === 5){
                userStats.rankName = "플레티넘"
            }
            if(userStats.rank === 6){
                userStats.rankName = "다이아몬드"
            }
            if(userStats.rank === 7){
                userStats.rankName = "마스터"
            }
            if(userStats.rank === 8){
                userStats.rankName = "그랜드 마스터"
            }
            if(userStats.rank === 9){
                userStats.rankName = "히어로"
            }
            if(userStats.rank === 10){
                userStats.rankName = "슈퍼 히어로"
            }
            if(userStats.rank === 11){
                userStats.rankName = "페르소나"
            }
            if(userStats.rank === 12){
                userStats.rankName = "데미갓"
            }
            if(userStats.rank === 13){
                userStats.rankName = "타이탄"
            }
            if(userStats.rank === 14){
                userStats.rankName = "안젤루스"
            }
            if(userStats.rank === 15){
                userStats.rankName = "오파님"
            }
            if(userStats.rank === 16){
                userStats.rankName = "헤루빔"
            }
            if(userStats.rank === 17){
                userStats.rankName = "세라핌"
            }
            if(userStats.rank === 18){
                userStats.rankName = "올마이티"
            }
            if(userStats.rank === 19){
                userStats.rankName = "레지아피드"
            }
            if(userStats.rank === 20){
                userStats.rankName = "나이트메어"
            }
            if(userStats.rank === 21){
                userStats.rankName = "아코드 미니스터"
            }
            if(userStats.rank === 22){
                userStats.rankName = "하이퍼 랭커"
            }
            if(userStats.rank === 23){
                userStats.rankName = "리메트로"
            }
            if(userStats.rank === 24){
                userStats.rankName = "로얄라이트"
            }
            if(userStats.rank === 25){
                userStats.rankName = "언노운 프레임"
            }
            if(userStats.rank === 26){
                userStats.rankName = "코드네임 키넬"
            }
            if(userStats.rank === 27){
                userStats.rankName = "코드네임 프로"
            }
            if(userStats.rank === 28){
                userStats.rankName = "코드네임 레코드"
            }
            if(userStats.rank === 29){
                userStats.rankName = "코드네임 레나"
            }
            if(userStats.rank === 30){
                userStats.rankName = "코드네임 넥플"
            }
            if(userStats.rank === 31){
                userStats.rankName = "코드네임 duSaFYQ"
            }
        }
        
        userStats.xp = userStats.xp - xpToNextLevel;
        message.channel.send('축하합니다! ' + message.author.username + '님이 ' + userStats.level + '레벨이 되었습니다.')

        jsonfile.writeFileSync('stats.json', stats);

    }


    if(userStats.xp < 0) {
        userStats.level--;
        userStats.rankLevel--;
        if(userStats.rankLevel < 0) {
            userStats.rankLevel = 3
            userStats.rank = userStats.rank - 1
            if(userStats.rank === 1){
                userStats.rankName = "언랭크"
            }
            if(userStats.rank === 2){
                userStats.rankName = "브론즈"
            }
            if(userStats.rank === 3){
                userStats.rankName = "실버"
            }
            if(userStats.rank === 4){
                userStats.rankName = "골드"
            }
            if(userStats.rank === 5){
                userStats.rankName = "플레티넘"
            }
            if(userStats.rank === 6){
                userStats.rankName = "다이아몬드"
            }
            if(userStats.rank === 7){
                userStats.rankName = "마스터"
            }
            if(userStats.rank === 8){
                userStats.rankName = "그랜드 마스터"
            }
            if(userStats.rank === 9){
                userStats.rankName = "히어로"
            }
            if(userStats.rank === 10){
                userStats.rankName = "슈퍼 히어로"
            }
            if(userStats.rank === 11){
                userStats.rankName = "페르소나"
            }
            if(userStats.rank === 12){
                userStats.rankName = "데미갓"
            }
            if(userStats.rank === 13){
                userStats.rankName = "타이탄"
            }
            if(userStats.rank === 14){
                userStats.rankName = "안젤루스"
            }
            if(userStats.rank === 15){
                userStats.rankName = "오파님"
            }
            if(userStats.rank === 16){
                userStats.rankName = "헤루빔"
            }
            if(userStats.rank === 17){
                userStats.rankName = "세라핌"
            }
            if(userStats.rank === 18){
                userStats.rankName = "올마이티"
            }
            if(userStats.rank === 19){
                userStats.rankName = "레지아피드"
            }
            if(userStats.rank === 20){
                userStats.rankName = "나이트메어"
            }
            if(userStats.rank === 21){
                userStats.rankName = "아코드 미니스터"
            }
            if(userStats.rank === 22){
                userStats.rankName = "하이퍼 랭커"
            }
            if(userStats.rank === 23){
                userStats.rankName = "리메트로"
            }
            if(userStats.rank === 24){
                userStats.rankName = "로얄라이트"
            }
            if(userStats.rank === 25){
                userStats.rankName = "언노운 프레임"
            }
            if(userStats.rank === 26){
                userStats.rankName = "코드네임 키넬"
            }
            if(userStats.rank === 27){
                userStats.rankName = "코드네임 프로"
            }
            if(userStats.rank === 28){
                userStats.rankName = "코드네임 레코드"
            }
            if(userStats.rank === 29){
                userStats.rankName = "코드네임 레나"
            }
            if(userStats.rank === 30){
                userStats.rankName = "코드네임 넥플"
            }
            if(userStats.rank === 31){
                userStats.rankName = "코드네임 duSaFYQ"
            }
        }
        
        xpToNextLeve = 85 + userStats.level * 5;
        const xpToNextLevel = xpToNextLeve * userStats.level;

        userStats.xp = userStats.xp + xpToNextLevel;
        message.channel.send('이런! ' + message.author.username + '님이 ' + userStats.level + '레벨로 하락하셨습니다.')

        jsonfile.writeFileSync('stats.json', stats);

    }



    jsonfile.writeFileSync('stats.json', stats);

    console.log(message.author.username + ' exp ' + userStats.xp);
    console.log(message.author.username + ' level ' + userStats.level);
    console.log(message.author.username + ' rankLevel ' + userStats.rankLevel);
    console.log(message.author.username + ' rank ' + userStats.rank);
    console.log(message.author.username + ' rankName ' + userStats.rankName);
    console.log(message.author.username + ' level to rank ' + levelToNextRank);

    let args = message.content.slice(PREFIX.length).split(' ');

    if(!message.content.startsWith(PREFIX)) return;

    switch(args[0]){

        case '랭크':
            if(args[1]){
                const user = message.mentions.users.first();
                const memeber = message.guild.member(user);
                const guildStats = stats[message.guild.id];
                const userStats = guildStats[memeber.id];
                xpToNextLeve = 85 + userStats.level * 5;
                const xpToNextLevel = xpToNextLeve * userStats.level;
                const embed = new Discord.MessageEmbed()
                .setTitle(memeber.user.username)
                .setColor(0x66FF33)
                .addField('랭크', userStats.rankName)
                .addField('레벨', userStats.level + '레벨', true)
                .addField('경험치', userStats.xp + '/' + xpToNextLevel)
                .setThumbnail(memeber.user.displayAvatarURL());
                message.channel.send(embed);
            }else{
                const guildStats = stats[message.guild.id];
                const userStats = guildStats[message.author.id];
                const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .setColor(0x66FF33)
                .addField('랭크', userStats.rankName)
                .addField('레벨', userStats.level + '레벨', true)
                .addField('경험치', userStats.xp + '/' + xpToNextLevel)
                .setThumbnail(message.author.displayAvatarURL());
                message.channel.send(embed);
            }
        break;

        case '명령어':
            if(message.guild.id == 714752155377991731){
                const embed = new Discord.MessageEmbed()
                .setTitle('명령어 목록')
                .setColor(0xE62EA3)
                .addField(PREFIX + '`명령어`', '입력 명령을 알려줍니다.', true)
                .addField(PREFIX + '`랭크 <사용자 태그>`', '랭크 정보를 알려줍니다.');
                message.channel.send(embed);
            }else{
                message.channel.send('```APID에 와서 확인하세요 : https://discord.gg/duSaFYQ```');
            }
        break;
        

        case 'setxp':
            if(message.author.id==='636464070555598849' || message.author.id==='693391365341708298a'){
                if(args[1]){
                    if(args[2]){
                        const user = message.mentions.users.first();
                        const memeber = message.guild.member(user);
                        const guildStats = stats[message.guild.id];
                        const userStats = guildStats[memeber.id];
                        const zv = eval(args[1]);
                        userStats.xp += zv;
                        message.channel.send(memeber.user.username + "님께 " + zv + "xp가 주어졌습니다.")
                    }else{
                        const zv = eval(args[1]);
                        userStats.xp += zv;
                        message.channel.send(message.author.username + "님께 " + zv + "xp가 주어졌습니다.")
                    }
                }
                if(!args[1]){
                    message.channel.send('값이 빠졌습니다.');
                }
            }else{
                message.channel.send('개발자 전용');
            }
        break;

    }
})

bot.on('message', (message) => {
    if (message.content == '!log') {
        console.log(message.guild);
        message.channel.bulkDelete(1);
    }

    if (message.content == '!re') {
        console.log('rebooting ...');
        message.channel.bulkDelete(1);
        setTimeout(function(){maownALJKLWJv ;a3h4.bnkbj}, 1000);
    }
})

bot.login(token);
