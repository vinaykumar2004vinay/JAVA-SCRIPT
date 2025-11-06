// let curentTime = new Date().toLocaleTimeString();
// document.getElementsByTagName('p')[0].innerHTML=curentTime


setInterval(()=>{
    document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString()
},1000)