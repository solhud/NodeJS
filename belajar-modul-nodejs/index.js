// import modul moment and semangat
var moment = require("moment");
var semangat = require("./semangat");

// use modul moment
// will show time
console.log("sekarang: "+moment().format('D MMMM YYYY, h:mm:ss a'));
console.log(semangat.semangatPagi());