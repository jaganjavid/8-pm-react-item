let val;

const today = new Date();

const birthDay = new Date("05-09-1996 11:20:00");

const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "June",
 "July", "August", "Sep", "Oct", "Nov", "Dec"];

const dayArr = ["sun", "mon", "tue","wed","thur","fri","sat"];

val = today.getMonth();
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDay.setMonth(09)
birthDay.setDate(09)
birthDay.setFullYear(2000)
birthDay.setHours(5)
birthDay.setMinutes(5)
birthDay.setSeconds(5)





console.log(birthDay);

