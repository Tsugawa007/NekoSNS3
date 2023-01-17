/*
window.onload = function () {
    alert("Just Start JavaScript!");
};
*/
//setting Button
var btn = document.getElementById('cat-button');

//setting SpeechRecognition API
const catName = new webkitSpeechRecognition();
catName.continious = false;
catName.interiumResults = false;
catName.lang = 'ja-JP';
var text = "";

window.addEventListener('load',function(){
    //setting  nums of tapping
    var countTap = 0;
    //setting Button 
    var btn = document.getElementById('cat-button');
    var content = document.getElementById('cat-name-content');
    if(!btn || !content){
        return false;
    }

    btn.addEventListener('click',function(){
        countTap += 1;
        if(countTap == 1){
            catName.start();
            catName.onresult = (event) => {
                text = event.results[0][0].transcript;
            };
            btn.textContent='終了する';       
        }else{
            catName.stop();
            btn.textContent='マイク';
            countTap = 0;
        };
        if(text != ""){
            content.value = text;
        }
        console.log(countTap);
    },false);

    catName.addEventListener('result',function(e){
        var text = e.results[0][0].transcript;     
        if(text.length == 0){
            content.value = "聞き取れませんでした";
        }else{
            content.value = text;
        };
        
        console.log(content.value);
     },false);
},false);


