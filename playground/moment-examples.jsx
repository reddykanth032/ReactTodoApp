var moment=require('moment');

console.log(moment().format());
var date=moment();

console.log(date.unix());
var timestamp=1582872177;
var currentMoment=moment.unix(timestamp);
console.log('current time',currentMoment.format('MM D, YY @h:mm a'));
console.log('current time',currentMoment.format('MMM Do, YYYY @h:mm A'));
