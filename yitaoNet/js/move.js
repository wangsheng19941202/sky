/**
 * Created by Administrator on 2017/8/13.
 */
/**
 * Created by Administrator on 2017/6/29.
 */

// 获取非行间样式的代码
function getStyle(obj, attr) {
    // 主要针对IE8
    if(obj.currentStyle){
        return obj.currentStyle[attr];
        // 主要针对其他浏览器
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
// 用来写中间的过程的
function startMove(obj,json,fn) {//obj:操作对象，json最终效果
    clearInterval(obj.timer);
    obj.timer=setInterval(function() {
        for (attr in json) {
            //获取当前的属性值
            var iCur=parseInt(getStyle(obj,attr));
            //给运动速度
            var speed=(json[attr]-iCur)/8;
            speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
            //判断
            if(iCur==json[attr]){
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }else{
                obj.style[attr]=(iCur+speed)+"px";
            }
        }
    },30)
}
