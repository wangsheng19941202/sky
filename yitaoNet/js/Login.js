/**
 * Created by Administrator on 2017/8/5.
 */
// 为了防止其他插件与jQuery同名 可以通过noconflict知道jQuery对象 重新更改表示jQuery的符号
var $=jQuery.noConflict();
(function () {
    function Login(success) {
        this.showLogin(success);
    }
    Login.prototype.showLogin=function (success) {
        var loginContainer=$("<div class='loginContainer'></div>");
        var loginContainerTop=$("<div></div>");
        var closeButton=$("<span>关闭</span>");
        var usernameInput=$("<p><input type='text' placeholder='请输入用户名'></p>");
        var passwordInput=$("<p><input type='password' placeholder='请输入密码'></p>");
        var loginButton=$("<p>登录</p>");
        var inputCSS={
            width:"300px",
            height:"50px",
            margin:"0 auto",
            "text-align":"center",
            padding:"20px 0"
        };
       loginButton.click(function () {
          $.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function (data) {
                      console.log(data);
              if(data.code==0){
                  loginContainer.remove();
                      // todo 执行外面的操作
                      success(data.data);

              }else {
                  alert(data.message);
              }
          }
          );
       });
        loginButton.css({
            width:"300px",
            height:"50px",
            "line-height":"50px",
            "text-align":"center",
            "background-color":"red",
            margin:"0 auto"
        });
        passwordInput.css(inputCSS);
        usernameInput.css(inputCSS);
        closeButton.css({
            position:"absolute",
            top:"0",
            right:"0",
            color:"white",
            padding:"4px",
            "background":"#ed0a25",
            height:"27px",
            "line-height":"27px"
        });
        closeButton.click(function () {
            loginContainer.slideUp(500,"linear",function () {
                loginContainer.remove();
            })
        });
        loginContainerTop.css({
            width:"344px",
            height:"35px",
            "background-color":"#2121a3"
        });
        loginContainer.css({
            width:"350px",
            height:"450px",
            "background-color":"#9177f1",
            border:"3px solid #979292",
            position:"absolute",
            top:"50%",
            left:"50%",
            "box-sizing":"border-box",
            margin:"-225px  0 0 -175px"

        });
        loginContainer.append(loginContainerTop);
        loginContainer.append(closeButton);
        loginContainer.append(usernameInput);
        loginContainer.append(passwordInput);
        loginContainer.append(loginButton);
        $(document.body).append(loginContainer);
    };
    window.Login=Login;
})();