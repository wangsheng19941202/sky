/**
 * Created by Administrator on 2017/8/13.
 */




var banner=document.querySelector("#big-banner");
var btn=document.getElementsByTagName("button");
var navlast=document.querySelector("#bannernavlast");
console.log(navlast);
var imglast=document.querySelector("#bannerimglast");
var num=0;
var timer=setInterval(move,3000);
// var timer=setInterval(move,3000);
imglast.innerHTML=imglast.innerHTML+imglast.innerHTML;
               // 无缝滑动
function move() {
    num++;
    if (num==4){
        num=1;
        imglast.style.marginLeft=0;
    }
    if (num>imglast.children.length-1){
        imglast.style.marginLeft=0;
        num =1;
    }
    startMove(imglast,{marginLeft:-num*750});
    for(var j=0;j<navlast.children.length;j++){
        navlast.children[j].className=" ";
    }
    navlast.children[num>2 ? 0 : num].className="navactive"
}
                     // 小按钮
    for(var j=0;j<navlast.children.length;j++){
        navlast.children[j].index=j;
        navlast.children[j].onclick=function () {
            num=this.index;
            startMove(imglast,{marginLeft:-num*750});
            for (var j=0;j<navlast.children.length;j++){
                navlast.children[j].className=" "
            }
            navlast.children[num>2 ? 0 : num].className = "navactive";
        }
    }
    btn[1].onclick=move;
    btn[0].onclick= function move() {
    if(num==0){	//如果为第一张
        num=3;	//自动改到第5张
        imglast.style.marginLeft="-2250px";//改为第五张位置
    }
    num--;
    if(num<0){
        imglast.style.marginLeft=(imglast.children.length-1)*750;
        num=imglast.children.length-2;
    }
    startMove(imglast,{marginLeft:-num*750});
    for(var j=0;j<navlast.children.length;j++){
        navlast.children[j].className="";
    }
    navlast.children[num>=4?0:num].className="navactive";
};
banner.onmouseover=function(){
    btn[0].style.display="block";
    btn[1].style.display="block";
    clearInterval(timer);
};
banner.onmouseout=function(){
    btn[0].style.display="none";
    btn[1].style.display="none";
    timer=setInterval(move,3000);
};


(function () {
        var banner=document.querySelector("#small-banner");
        var imglast=document.querySelector("#sbannerimglast");
        var timer=setInterval(smove,1000);
        var num=0;
        imglast.innerHTML=imglast.innerHTML+imglast.innerHTML;
        function smove() {
            num++;
            if (num==3){
                num=1;
                imglast.style.marginLeft=0;
            }
            if (num>imglast.children.length-1){
                imglast.style.marginLeft=0;
                num =1;
            }
            startMove(imglast,{marginLeft:-num*225});
        }
})();
