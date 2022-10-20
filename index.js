process.title = `ARVIS DDoS V0.0.1`;
var readline = require('readline');
const colors = require('colors');

var amix = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

amix.question("Lütfen Sahte Bir IP/URL Gir ", function(answer) {
  setInterval(() => {
    process.title = `⡿ ArviS#0011`;
    setTimeout(function(){ 
      process.title = `⣟ ArviS#0011`;
    }, 50);
    setTimeout(function(){ 
      process.title = `⣯ ArviS#0011`;
    }, 100);
    setTimeout(function(){ 
      process.title = `⣷ ArviS#0011`;
    }, 150);
    setTimeout(function(){ 
      process.title = `⣾ ArviS#0011`;
    }, 200);
    setTimeout(function(){ 
      process.title = `⣽ ArviS#0011`;
    }, 250);
    setTimeout(function(){ 
      process.title = `⣻ ArviS#0011`;
    }, 300);
    setTimeout(function(){ 
      process.title = `⢿ ArviS#0011`;
    }, 350);
  }, 400);

  setInterval(function() {
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    console.log("Şuradan ".yellow +ip.white+ " DDoS Gönderildi ==> ".yellow +answer.white)
  }, 5);
});









//ArviS#0011