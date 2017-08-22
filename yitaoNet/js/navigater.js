/**
 * Created by Administrator on 2017/8/6.
 */
var $=jQuery.noConflict();
(function () {
    function NavigaterItem(obj) {
        var obj=obj||{};
        this.name=obj.cat_name;
        this.id = obj.cat_id;
        this.item = $("<li>"+this.name+"</li>");
    }
    NavigaterItem.prototype.itemClick=function (callback) {
        this.item.on("click",this,callback);
        return this;
    };
    window.NavigaterItem=NavigaterItem;
    function Navigater() {
        
    }
    Navigater.prototype.createView=function (url,superView,callback) {
        $.get(url,function (result) {
            console.log(result);
            if(result.code==0){
                result.data.forEach(function (obj) {
                     superView.append(new NavigaterItem(obj).itemClick(callback).item)
                });
            }
        });
        return this;
    };
    window.Navigater=Navigater;
})();