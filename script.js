console.log('clock!');
setInterval(()=>{
    let date = new Date();
    let hour=30*date.getHours()+date.getMinutes()/2+270;
    let min= 6*date.getMinutes()+270;
    let sec= 6*date.getSeconds()+270;
    hours.style.transform=`rotate(${hour}deg)`;
    minutes.style.transform=`rotate(${min}deg)`;
    seconds.style.transform=`rotate(${sec}deg)`;
},1000)