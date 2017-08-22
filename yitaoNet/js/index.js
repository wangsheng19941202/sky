/**
 * Created by Administrator on 2017/8/5.
 */
function init() {
   $(".header-top-login").click(function () {
      new Login(function (user) {
         $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>")
      });
   });
   // 导航
   new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function (event) {
      console.log(event);
      // 商品列表

   });
   new Goods(PRODUCT_HOST+GOODS,null,$(".goods-container"),function (event) {
      console.log(event.data);
   });
}
init();