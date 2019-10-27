<template>
  <div class="Login">
    <div class="login">
        <h1>管理员登录</h1><br>
        <input type="text" placeholder="请输入用户名" autofocus="autofocus" autocomplete v-model="userName" @keyup.13="showl()"><br>
        <input type="password" name="" id="" placeholder="请输入用户密码" v-model="passWord" @keyup.13="showl()"><br>
        <el-button type="button" @click="sigin()">登录</el-button>
    </div>
  </div>
</template>

<script>
import Qs from 'qs';
export default {
  data () {
    return {
     bodyBgImage: 'url(' + require('../assets/bg.png') + ')',
     background: 'no-repeat',
     userName:"",
     passWord:"",
     show:true
    }
  },
  methods: {
        // 添加body图片
        setBodyBackGround () {
            document.body.style.backgroundImage = this.bodyBgImage;
            document.body.style.backgroundRepeat = this.background;
      },
        // 清除背景图
        clearBodyBackGround () {
            document.body.style.backgroundImage = ''
      },
      open() {
        this.$message.error('用户名或密码有误');
      },
      showl(){
          this.sigin();
      },
      sigin(){
        
        console.log(this.userName+''+this.passWord)
        this.axios.post("/api/WSHD/login",
          Qs.stringify({
            username:this.userName,
            password:this.passWord,
            remember:true
          })
        ).then(res=>{
            console.log(res);
            if(res.data.code==200){
              sessionStorage.setItem("usern",this.userName);
              this.$router.push({path:'/Wzlb'});
              this.show="false";
            }else{
              //document.getElementByclassName("alert--error").style.display='block';
              console.log("用户名或密码错误");
              this.open();
              
            }
          }
        )
      }
  },
  mounted(){
      // 进来的时候调用添加
        this.setBodyBackGround();
      
  },
  beforeDestroy(){
      // 离开页面的时候清除
        this.clearBodyBackGround()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    text-align: center;
    background-color: #fff;
    width: 400px;
    position: absolute;
    top: 52%;
    left: 48%;
    margin-left: -130px;
    margin-top: -150px;
    border: 1px solid #ccc;
    box-shadow: 0 0 2px #fff;
    border-radius: 3px;
    width: 400px;
    height: 262px;
    /* overflow: hidden; */
}
.login h1{
    font-size: 24px;
    font-weight: normal;
    margin-top: 22px;
    text-align: center;
}
.login input{
    width: 300px;
    height: 40px;
    background-color: antiquewhite;
    margin-bottom: 20px;
    padding-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
}
.login button{
    display: inline-block;
    width: 300px;
    height: 40px;
    background-color: #1AA194;
    color: #fff;
    margin-bottom: 20px;
    border-radius: 6px;
    border: none;
}
/* 提示插件 */
#app .Login .login .el-alert--error{
  position: absolute;
  top: 94px;
  left: -2px;
  opacity: .8;
  height: 40px;
}
</style>
