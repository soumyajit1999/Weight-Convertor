let btn= document.getElementById('btn');
btn.addEventListener('click',function() {
    let kg=document.getElementById('kg').value;
    let lbs=document.getElementById('lbs').value;
    let result=document.getElementById('conRes');

    if(kg){
        result.innerHTML = kg *2.2;
    }else if (lbs){
        result.innerHTML=lbs/2.2;
    }
})