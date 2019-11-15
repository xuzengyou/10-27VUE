<template>
  <div class="c" @click="xsyc($event)">
        <!-- 头部开始 -->
        <div class="head">
            <router-link to="Wzlb"><img src="../assets/logo.png" alt=""></router-link>
            <router-link to="Wzlb">首页</router-link>
            <router-link id="user" to="">你好欢迎XXX登录</router-link>
            <a id="tc" @click="sig()" style="cursor: pointer;">退出</a>
        </div>
        <!-- 头部结束 -->
        <!-- 主体部分开始 -->
        <div class="main">
            <!-- 主题左边开始 -->
            <div class="mainL">
                <!-- 主题左边第一部分 -->
                <div class="mLo">
                    <div class="mLoo" @click="downo()">
                        <span :class="{ac:showo==true}"></span><span>栏目管理</span>
                    </div>
                    <div class="mLot" v-show="showo">
                        <p><router-link to="Wzlb">网站栏目管理</router-link></p>
                        <p><router-link to="Wzlb">所有文档列表</router-link></p>
                    </div>
                </div>
                <!-- 主题左边第二部分 -->
                <div class="mLt">
                    <div class="mLto" @click="downt()">
                        <span :class="{ac:showt==true}"></span><span>图片管理</span>
                    </div>
                    <div class="mLtt" v-show="showt">
                        <p><router-link to="GGtp">广告区图片</router-link></p>
                        <p><router-link to="GGtp">直播区图片</router-link></p>
                        <p><router-link to="GGtp">视频区图片</router-link></p>
                    </div>
                </div>
            </div>
            <!-- 主体左边结束 -->

            <!-- 主体右边开始 -->
            <div class="mainR">
                <!-- 主题右边第一部分开始 -->
                <div class="mRo">
                    <div class="mRoo">
                        <router-link to="Wzlb">所有栏目</router-link>
                        <span style="color: #ccc;">></span>
                        <router-link to="Wzlb">文章列表</router-link>
                        <span style="color: #ccc;">></span>
                        <span>发布文章</span>
                    </div>
                    <div class="mRot">
                        <div class="mRoto">
                            <span>文章标题</span>
                        </div>
                        <div class="mRott">
                            <input type="text" placeholder="请输入文章标题" autofocus class="wzbt" v-model="titlebt">
                        </div>
                    </div>
                    <div class="mRoth">
                        <div class="mRotho">
                            <span>自定义属性</span>
                        </div>
                        <div class="mRotht">
                            <div class="mRothto">
                                <span>首页</span><span>√</span>
                            </div>
                            <div class="mRothtt">
                                <span class="jiac">加粗</span><span>√</span>
                            </div>
                            <div class="mRothtth">
                                <span>图片</span><span>√</span>
                            </div>
                            <div class="mRothtf">
                                <span>视频</span><span>√</span>
                            </div>
                        </div>
                    </div>
                    <div class="mRof">
                        <div class="mRofo">
                            <span>缩略图</span>
                        </div>
                        <div class="mRoft">
                            <input type="text" autofocus class="lj" v-model="thumbsrc">
                            <input type="file" name="" class="bdsc">
                            <span>本地上传</span>
                            <a style="cursor: pointer;" class="znxz" @click="znselect()">站内选择</a>
                        </div>
                        <div class="slt">
                            <img :src="thumbsrc" alt="">
                        </div>
                    </div>
                    <div class="mRofi">
                        <div class="mRofio">
                            <span>幻灯所属栏目</span>
                        </div>
                        <div class="c1">
                            <div class="block">
                              <el-cascader
                                v-model="value"
                                :options="options"
                                @change="handleChange(value)">
                              </el-cascader>
                            </div>
                        </div>
                    </div>
                    
                   <!--<input type="button" value="显示弹窗" @click="showToast" id="mount-point">-->
                </div>
                <!-- 主体右边站内选择开始 -->
                <div class="zn" v-show="znxz">
                    <div class="zNl">
                        <div class="zNlo">
                            <p>
                                <span>选择</span>
                            </p>
                            <p>
                                <span>点击文件或本地上传，即可上传图片</span>
                            </p>
                        </div>
                        <div class="zNlt">
                            <ul>
                                <li v-for="item in znlists" :key="item.iid" style="cursor:pointer;" @click="loadPic(item.folderName)">
                                    <span></span><span>{{item.folderName}}</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="zNlth">
                            <span class="New">新建文件夹</span>
                            <span class="Dle">删除文件夹</span>
                            <input type="text" placeholder="请输入新建或者要删除的文件夹名称..." autofocus class="wjjsc">
                        </div>
                    </div>
                    <div class="zNr">
                        <div class="zNro">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>点击名称选择图片</td>
                                        <td>文件大小</td>
                                        <td>上传时间</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in piclists" :key="item.iid">
                                        <td>
                                            <input type="checkbox" :checked="delIds.indexOf(item.articleId)>=0" @click="checked(item.iid)">
                                        </td>
                                        <td>
                                            <span @click="showImg(item.imageUrl,item.imageName)"></span>
                                            <span @click="showImg(item.imageUrl,item.imageName)">{{item.imageName}}</span>
                                        </td>
                                        <td>{{item.imageSize}}K</td>
                                        <td>{{item.imageTime}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="zNrt">
                            <div class="zNrto">
                                <!-- 分页 -->
                                <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="total"
                                    :page-size="7"
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    >
                                </el-pagination>
                            </div>
                            <div class="zNrtt" style="overflow: hidden;">
                                <span>上传:</span>
                                <input type="file" class="shangc" @change="change($event)">
                                <span class="shanc" @click="deleteTr()">删除图片</span>
                                <span class="shangch" @click="deletPic()">点击选择图片</span>
                            </div>
                        </div>
                        <div id="yulan" v-show="isshowImg" class="yulan">
                            <img :src="ylSrc" alt="" class="shixiao">
                        </div>
                    </div>
                    
                </div>

                <!-- 主体右边第二部分开始 -->
                <div class="mRt">
                   <div class="mRto">
                       <span>文章内容:</span>
                   </div>
                   <div class="mRtt">
                   <!--文本编辑器-->
                        <tinymce-editor ref="editor"
                        v-model="msg"
                        :disabled="disabled"
                        :base-url="baseUrl"
                        :language="language"
                        :skin="skin"
                       >
                        </tinymce-editor>
                        <!-- <button @click="clear">清空内容</button>
                        <button @click="disabled = true">禁用</button>
                        <button @click="disabled = false">启用</button> -->
                   </div>
                   <div class="mRtth">
                       <div class="mRttho">
                           <span>浏览次数</span><span>31651</span>
                       </div>
                       <div class="mRttht">
                           <div class="mRtthto">
                               <span>文章排序</span>
                           </div>
                           <div class="mRtthtt">
                               <div class="mr">
                                   <span>默认排序</span><span></span>
                               </div>
                               <div class="lb"></div>
                           </div>
                       </div>
                       <div class="mRtthth">
                           <span>发布时间</span><span class="shij">2019-09-11 13:57:55</span>
                       </div>
                   </div>
                   <div class="mRtf">
                       <button type="button" class="fb" @click="publishAticle()">发布普通文章</button>
                       <button type="button" class="fbHD" @click="publishHD()">发布幻灯文章</button>
                   </div>
                </div>

            </div>
            <!-- 主体右边结束 -->
            
                
            
            
        </div>
        <!-- 主体部分结束 -->
    </div>
</template>
<script>
//引入toast组件
//import toast from '../components/toast'
import Qs from 'qs';
//引入编辑器
import TinymceEditor from '../components/tinymce-editor/tinymce-editor'
export default {
    components: {
        TinymceEditor,
        //toast
  },
  data(){
    return{
      znlists:[{},{}],
      folderName:"",
      piclists:[],
      total:0,
      currentPage: 1,
      num:7,
      showo:false,
      showt:false,
      showth:true,
      id:null,
      src:"",
      titlebt:"",
      thumbsrc:"",
      content:"",
      value:"",
      options:[
        {value: '1',
          label: '财经幻灯1',
          children:[{
            value: '1',
            label: '第一张图片',
          },{
            value: '2',
            label: '第二张图片',
          },{
            value: '3',
            label: '第三张图片',
          }]
        },
        {value: '2',
          label: '财经幻灯2',
          children:[{
            value: '1',
            label: '第一张图片',
          },{
            value: '2',
            label: '第二张图片',
          },{
            value: '3',
            label: '第三张图片',
          }]
        },
        {value: '3',
          label: '股票幻灯',
          children:[{
            value: '1',
            label: '第一张图片',
          },{
            value: '2',
            label: '第二张图片',
          },{
            value: '3',
            label: '第三张图片',
          }]
        },
        {value: '4',
          label: '外汇幻灯',
          children:[{
            value: '1',
            label: '第一张图片',
          },{
            value: '2',
            label: '第二张图片',
          },{
            value: '3',
            label: '第三张图片',
          }]
        },
        {value: '5',
          label: '最终页面幻灯',
          children:[{
            value: '1',
            label: '第一张图片',
          },{
            value: '2',
            label: '第二张图片',
          },{
            value: '3',
            label: '第三张图片',
          }]
        }
      ],
      znxz:false,
      valo:null,
      valt:null,
      isDelet:false,
      ylSrc:"",
      isshowImg:true,
      fileList:[],
      reader:null,
      uploadimgSrc:"",
      msg: '',
      disabled: false,
      baseUrl: process.env.NODE_ENV === 'production' ? '/vue-use-tinymce' : '',
      language: 'zh_CN',
      skin: 'oxide',
      recod:{                  //发布文章
            aid:null,
            articleId:null,
            sortId:null,
            title:null,
            intro:null,
            authorImg:null,
            author:null,
            copyfrom:null,
            inputer:null,
            httpUrl:null,
            keyword:null,
            hits:null,
            postNum:null,
            ontop:null,
            iselite:null,
            deleted:null,
            addTime:null,
            updateTime:null,
            createTime:null,
            lastPost:null,
            ownerTag:null,
            ownerRemark:null,
            htmlPath:null,
            filesPath:null,
            tempPath:null,
            thumb:null,
            htmlStatus:null,
            articleStatus:null,
            tableName:null,
            content:null
      },
      delIds:[],
      imageName:"",
      shangcid:"",
      
    }
  },
  methods:{
    //   showToast () {
    //     this.$toast()
    //     console.log(this.$toast())
    //   },
    sig(){
      window.sessionStorage.clear();
      this.$router.push('login');
    },
    downo(){
        this.showo=!this.showo;
    },
    downt(){
        this.showt=!this.showt;
    },
    downth(){
        this.showth=!this.showth;
    },
    load(){
      this.axios.post("/api/WSHD/jiekou6/selectById",Qs.stringify({
        id:this.id
      })).then(res=>{
        console.log(res);
        this.titlebt=res.data.data.title;
        this.thumbsrc=res.data.data.thumb;
        this.msg=res.data.data.content;
        this.recod.aid=this.id;
        this.recod.thumb=res.data.data.thumb;
        this.recod.title=res.data.data.title;
        this.recod.articleId=res.data.data.articleId;
        this.recod.sortId=res.data.data.sortId;
        this.recod.author=res.data.data.author;
        this.recod.copyfrom=res.data.data.copyfrom;
        this.recod.httpUrl=res.data.data.httpUrl;
        this.recod.content=this.msg;
        console.log(this.recod)
      })
    },
    loadFolder(){
      this.axios.post("/api/WSHD/jiekou7/selectFolder",Qs.stringify({

      })).then(res=>{
          
          this.znlists=res.data.data;
          console.log(this.znlists)
      })
    },
    loadPic(folderName){
        
        this.folderName=folderName;
        console.log(this.folderName);
        this.axios.post("/api/WSHD/jiekou7/selectImage2",
        Qs.stringify({
           folder:this.folderName,
           page:this.currentPage,
           num:this.num
        }),
        {
          headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(res=>{
          console.log(res.data)
          this.piclists=res.data.data;
          this.total=res.data.sum;

        })
    },
    handleCurrentChange(currentPage){
        this.currentPage=currentPage;
        // console.log(this.currentPage);
        this.loadPic(this.folderName);//分页调用请求
        
        
    },
    handleSizeChange(size){
        this.num=size;
        // console.log(this.num)
        
    },
    znselect(){
        this.znxz=!this.znxz;
    },
    handleChange(value){
      this.valo=value[0];
      this.valt=value[1];
      console.log(this.valo+""+this.valt);

    },
    checked(articleId){
        this.shangcid=articleId;
        let iddl=this.delIds.indexOf(articleId);
        if (iddl >= 0) {
          // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
          this.delIds.splice(iddl, 1);
          console.log(this.delIds)
        } else {
          // 选中该checkbox
          this.delIds.push(articleId);
          console.log(this.delIds)
          console.log('啥时候shan')
        }

    },
    deleteTr(){
            var arr = [];
            var len = this.piclists.length;
            for(var i=0;i<len;i++){
                if(this.delIds.indexOf(this.piclists[i].iid)>=0){
                    // console.log(this.delIds.indexOf(this.lists[i].id))
                    // console.log(this.delIds.indexOf(i));
                    //console.log(this.lists[i]);
                    // arr.push(this.lists[i]);
                    this.axios.post("/api/WSHD/jiekou7/deleteImage1",Qs.stringify({
                        folder:this.folderName,
                        filename:this.imageName
                    }),
                    {
                        headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).then((res)=>{
                        console.log("删除成功")
                        // window.location.reload()
                        //普通的文字toast
                        this.$ftoast({
                            text: '删除成功！',
                            background: 'rgba(0, 0, 0, 0)',
                            textColor: '#fff',
                            toastBackground: '#ccc',
                            duration:1000
                        })
                    })
                }else {
                    // console.log(this.lists[i]);
                    arr.push(this.piclists[i]);
                }
            }
            this.piclists = arr;
            this.delIds = [];

    },
    showImg(imgsrc,imgeName){
      this.ylSrc=imgsrc;
      this.imageName=imgeName;
    },
    xsyc(event){
      var sp = document.getElementById("yulan");
      //console.log(event.target)
      if(sp){
        // if((event.target).contains(sp)){
        //   this.isshowImg=false;
        // }else{
        //   this.isshowImg=true;
        // }
      }
    },
    change(e){
        console.log(this.folderName)
        let file = e.target.files[0];
        //readFile(file);
        this.fileList=file;
        let reader = new FileReader();
        
        reader.readAsDataURL(file);
        //let foldname=this.folderName;
        //console.log(this)
        var _this=this;
        //console.log(Qs)
        // var _Qs=Qs;
        reader.addEventListener('load',function () {
              var img = document.createElement('img');
              img.src = reader.result;
              // console.log(img.src);
              _this.uploadimgSrc=img.src;
              console.log(_this.uploadimgSrc)
              // console.log(foldname)
            //   console.log(_this);
            //   consoel.log(Qs)
              _this.axios.post("/api/WSHD/jiekou7/Image",
                    Qs.stringify({
                      folder:_this.folderName,
                      image:_this.uploadimgSrc
                    }),
                    {
                      headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'}
                    }
                    ).then(res=>{
                        console.log(res)
                    })
          });
     
        
    },
    publishAticle(){
        this.axios.post("/api/WSHD/jiekou6/Update",
        JSON.stringify(
           this.recod
        ),
        {
            headers:{'Content-type':'application/json; charset=UTF-8'}
        }).then(res=>{
            console.log(res)
            if(res.status==200){
                setTimeout(()=>{
                    this.$router.push("Wzlb")
                },1000)
                //普通的文字toast
                this.$ftoast({
                text: '发布普通文章成功！',
                background: 'rgba(0, 0, 0, 0)',
                textColor: '#fff',
                toastBackground: '#ccc',
                duration:1000
                })
                
            }else{
                //普通的文字toast
                this.$ftoast({
                    text: '发布失败！',
                    background: 'rgba(0, 0, 0, 0)',
                    textColor: '#fff',
                    toastBackground: '#ccc',
                    duration:1000
                })
            }
        })


    },
    publishHD(){
        this.axios.post("/api/WSHD/jiekou7/huanDengImage",
        Qs.stringify({
            style:this.valo,
            id:this.valt,
            articleId:this.id
        })).then(res=>{
            if(res.status==200){
                setTimeout(()=>{
                    this.$router.push("Wzlb")
                },1000)
                //普通的文字toast
                this.$ftoast({
                text: '发布幻灯文章成功！',
                background: 'rgba(0, 0, 0, 0)',
                textColor: '#fff',
                toastBackground: '#ccc',
                duration:1000
                })
                
            }else{
                //普通的文字toast
                this.$ftoast({
                text: '发布失败！',
                background: 'rgba(0, 0, 0, 0)',
                textColor: '#fff',
                toastBackground: '#ccc',
                duration:1000
                })
            }
        })
    },
    getNowFormatDate(){
            var date = new Date();
            var seperator1 = "-";
            
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var hour = date.getHours();
            var minutes = date.getMinutes() ;
            var seconds = date.getSeconds();
            var strDate = date.getDate();
            
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate+"  "+hour+":" +minutes+":" +seconds;
            this.updateTime=currentdate;
            return currentdate;
    },
    deletPic(){
        var arr = [];
        var len = this.piclists.length;
        for(var i=0;i<len;i++){
            if(this.delIds.indexOf(this.piclists[i].iid)>=0){
                
                this.axios.post("/api/WSHD/jiekou7/selectImage1",Qs.stringify({
                    id:this.shangcid
                })).then(res=>{
                    console.log(res);
                    //普通的文字toast
                    this.$ftoast({
                    text: '上传成功！',
                    background: 'rgba(0, 0, 0, 0)',
                    textColor: '#fff',
                    toastBackground: '#ccc',
                    duration:1000
                    });
                    

                });
            }else {
                // console.log(this.lists[i]);
                arr.push(this.piclists[i]);
            }
        }
        this.piclists = arr;
        this.delIds = [];


    }

    
  }, //methods结束 
  created(){
    this.loadFolder();
    // this.loadPic();
    this.getNowFormatDate();
  },
  mounted(){
    let usern=sessionStorage.getItem("usern");
    if(usern){
        console.log(usern);
        document.getElementById("user").innerHTML="你好欢迎"+usern+"登录";
    };
    var id=window.location.search.split("?")[1].split("=")[1];
    this.id=id;
    if(this.id){
      this.load()
      
    };
    



  }

}
</script>
<style scoped>
/* 头部开始 */
*{
  text-align: left;
}
.c{
    width: 1920px;
    height: 1920px;
}
.c .head{
    width: 1920px;
    line-height: 125px;
    background-color: #046EB8;
    vertical-align: middle;
    position: fixed;
    top: 0;
    left: 0;
}
.c .head a{
    font-size: 24px;
    color: #fff;
}
.c .head a:nth-child(1){
    display: inline-block;
    width: 300px;
    height: 45px;
    margin-left: 20px;
    position: relative;
    top: 10px;
}
.c .head a:nth-child(1) img{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.c .head a:nth-child(2){
    margin-left: 20px;
    margin-right: 1000px;
}
.c .head a:nth-child(3){
    margin-right: 20px;
}
/* 头部结束 */
.c .main{
    width: 1920px;
    display: flex;
}
/* 主题左边开始 */
.c .main .mainL{
    width: 170px;
    height: 1300px;
    /* background-color: antiquewhite; */
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
    position: fixed;
    top: 130px;
}
/* 主题左边第一部分 */
.c .main .mainL .mLo{
    width: 170px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 5px;
}
.c .main .mainL .mLo span{
    cursor: pointer;
    font-size: 18px;
}
.c .main .mainL .mLo .mLoo{
    width: 170px;
}
.c .main .mainL .mLo .mLoo span:first-child{
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid #000;
    margin-right: 10px;
}
.c .main .mainL .mLo .mLoo span.ac{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #000;
    margin-right: 10px;
    position: relative;
    top: 5px;
    left: -2px;
}
.c .main .mainL .mLo .mLot{
    margin-left: 30px;
    
}
.c .main .mainL .mLo .mLot p{
    margin: 0;
    line-height: 35px;
}
.c .main .mainL .mLo .mLot p a{
    font-size: 18px;
}
/* 主题左边第二部分 */
.c .main .mainL .mLt{
    width: 170px;
    margin-left: 20px;
}
.c .main .mainL .mLt span{
    cursor: pointer;
    font-size: 18px;
}
.c .main .mainL .mLt .mLto{
    width: 170px;
}
.c .main .mainL .mLt .mLto span:first-child{
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid #000;
    margin-right: 10px;
}
.c .main .mainL .mLt .mLto span.ac{
    
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #000;
    margin-right: 10px;
    position: relative;
    top: 5px;
    left: -2px;
}
.c .main .mainL .mLt .mLtt{
    margin-left: 30px;
    
}
.c .main .mainL .mLt .mLtt p{
    margin: 0;
    line-height: 35px;
}
.c .main .mainL .mLt .mLtt p a{
    font-size: 18px;
}
/* 主体右边开始 */
.c .mainR{
    width: 1750px;
    margin-left: 200px;
    margin-top: 130px;
}
/* 主体右边第一部分开始 */
.c .mainR .mRo{
    width: 1700px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.c .mainR .mRo .mRoo a{
    font-size: 16px;
}
.c .mainR .mRo .mRoo span{
    font-size: 16px;
}
.c .mainR .mRo .mRot{
    margin-top: 15px;
}
.c .mainR .mRo .mRot:after{
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}
.c .mainR .mRo .mRot div{
    float: left;
    border: 1px solid #ccc;
}
.c .mainR .mRo .mRot .mRoto{
    width: 160px;
    line-height: 60px;
    text-align: center;
}
.c .mainR .mRo .mRot .mRott{
    width: 1540px;
    line-height: 60px;
    border: 1px solid #ccc;
}
.c .mainR .mRo .mRot .mRott{
    border-left: none;
}
.c .mainR .mRo .mRot .mRott input{
    padding-left: 5px;
    width: 500px;
}
.c .mainR .mRo .mRoth{
    margin-top: 20px;
}
.c .mainR .mRo .mRoth:after{
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}
.c .mainR .mRo .mRoth>div{
    float: left;
    border: 1px solid #ccc;
    height: 60px;
}
.c .mainR .mRo .mRoth .mRotho{
    width: 160px;
    line-height: 60px;
    text-align: center;
}
.c .mainR .mRo .mRoth .mRotht{
    width: 1540px;
    border-left: none;
    display: flex;
    height: 60px;
    /* justify-content: center; */
    /* item-align: middle; */
}
.c .mainR .mRo .mRoth .mRotht>div{
    width: 160px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    /* text-align: center; */
    margin-top: 10px;
    margin-left: 50px;
}
.c .mainR .mRo .mRoth .mRotht>div span{
    display: inline-block;
    line-height: 38px;
    cursor: pointer;
    vertical-align: middle;
}
.c .mainR .mRo .mRoth .mRotht>div span:first-child{
    width: 100px;
    background-color: #ccc;
    color: #fff;
    text-align: center;
}
.c .mainR .mRo .mRoth .mRotht>div span.ac{
    width: 100px;
    background-color: #60B878;
    color: #fff;
    display: inline-block;
}
.c .mainR .mRo .mRoth .mRotht>div span:last-child{
    width: 55px;
    font-size: 24px;
    font-weight: bold;
    color: #60B878;
    text-align: center;
    display: none;
}
.c .mainR .mRo .mRoth .mRotht>div span.ab{
    display: inline-block;
}
.c .mainR .mRo .mRof{
    margin-top: 20px;
}
.c .mainR .mRo .mRof:after{
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}
.c .mainR .mRo .mRof>div{
    float: left;
    border: 1px solid #ccc;
    height: 60px;
}
.c .mainR .mRo .mRof .mRofo{
    width: 160px;
    line-height: 60px;
    text-align: center;
}
.c .mainR .mRo .mRof .slt{
    width: 130px;
    height: 80px;
    margin-left: 20px;
    border: none;
    overflow: hidden;
}
.c .mainR .mRo .mRof .slt img{
    display: block;
    width: 100%;
    height: 100%;
}
.c .mainR .mRo .mRof .mRoft{
    width: 640px;
    line-height: 60px;
    border-left: none;
    display: flex;
}
.c .mainR .mRo .mRof .mRoft input:nth-child(1){
    border: 1px solid #ccc;
    width: 250px;
    height: 40px;
    margin-top: 10px;
    margin-left: 5px;
    padding-left: 5px;
    overflow: hidden;
}
.c .mainR .mRo .mRof .mRoft input:nth-child(2){
    border: 1px solid #ccc;
    width: 130px;
    height: 40px;
    margin-top: 10px;
    opacity: 0;
    z-index: 1;
    cursor: pointer;

}
.c .mainR .mRo .mRof .mRoft span{
    display: inline-block;
    width: 130px;
    line-height: 40px;
    background-color: #C20E22;
    color: #fff;
    text-align: center;
    padding-top: 10px;
    /* vertical-align: middle; */
    cursor: pointer;
    position: relative;
    /* top: 10px; */
    left: -120px;
    z-index: -1;

}
.c .mainR .mRo .mRof .mRoft a{
    display: inline-block;
    width: 130px;
    line-height: 40px;
    background-color: #046EB8;
    color: #fff;
    text-align: center;
    padding-top: 10px;
    /* position: relative;
    left: -110px; */
}
.c .mainR .mRo .mRofi{
    display: flex;
    margin-top: 20px;
    line-height: 60px;
}
.c .mainR .mRo .mRofi .mRofio{
    width: 160px;
    height: 60px;
    border: 1px solid #ccc;
    text-align: center;
}
.c .mainR .mRo .mRofi .mRofit{
    width: 160px;
    line-height: 60px;
    border: 1px solid #ccc;
    text-align: center;
    margin-left: 10px;
}
.c .mainR .mRo .mRofi .mRofit span:last-child{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #ccc;
    margin-left: 10px;
    cursor: pointer;
}
.c .mainR .mRo .mRofi .mRofit span.ac{
    transform: rotate(180deg);
    transition: all .6s;
}
.c .mainR .mRo .mRofi .mRofith{
    width: 160px;
    line-height: 60px;
    border: 1px solid #ccc;
    text-align: center;
    margin-left: 15px;
}
.c .mainR .mRo .mRofi .mRofit span{
    cursor: pointer;
}
.c .mainR .mRo .mRofi .mRofit span:first-child{
    display: inline-block;
    width: 96px;
    height: 21px;
    text-align: center;
}
.c .mainR .mRo .mRofi .mRofith span:last-child{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #ccc;
    margin-left: 10px;
    cursor: pointer;
}
.c .mainR .mRo .mRofi .mRofith span{
    cursor: pointer;
}
.c .mainR .mRo .mRofi .mRofith span:first-child{
    display: inline-block;
    width: 96px;
    height: 21px;
    text-align: center;
}
.c .mainR .mRo .mRofi .mRofith span.ac{
    transform: rotate(180deg);
    transition: all .6s;
}
.c .mainR .mRo .mRofi .c1{
  margin-left: 15px;
  line-height: 60px;
}

/* 主体站内选择部分 */
.c .mainR .zn{
    width: 1700px;
    display: flex;
    margin-top: 10px;
    /*display: none;*/
    margin-bottom: 20px;
}
.c .mainR .zn.ac{
    display: block;
    display: flex;
}
.c .mainR .zn .zNl{
    width: 350px;
    /* height: 300px;
    overflow-y: scroll;*/
    border: 1px solid #ccc; 
    /* border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc; */
}
.c .mainR .zn .zNr{
    width: 800px;
    border: 1px solid #ccc;
    /* border-left: none; */
    margin-left: 5px;
}
.c .mainR .zn .zNl .zNlo p{
    line-height: 35px;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
}
.c .mainR .zn .zNl .zNlo p:first-child{
    background-color: #A9DDFF;
    font-size: 18px;
}
.c .mainR .zn .zNl .zNlo p:last-child{
    border-bottom: 1px dashed #ccc;
}
.c .mainR .zn .zNl .zNlt{
    width: 350px;
    height: 230px;
    overflow-y: scroll;
}
.c .mainR .zn .zNl .zNlt ul li{
    line-height: 35px;
    border-bottom: 1px dashed #ccc;
}
.c .mainR .zn .zNl .zNlt ul li.gg{
    background-color: #dcdcdc;
}
.c .mainR .zn .zNl .zNlt ul li span{
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}
.c .mainR .zn .zNl .zNlt ul li span:first-child{
    display: inline-block;
    background-image:url(../assets/tpjh.png);
    background-repeat: no-repeat;
    background-position: -290px -748px;
    width: 79px;
    height: 54px
}
.c .mainR .zn .zNl .zNlth{
    width: 350px;
    height: 80px;
    border-top: 1px solid #ccc;
}
.c .mainR .zn .zNl .zNlth span{
    display: inline-block;
    width: 110px;
    line-height: 30px;
    text-align: center;
    background-color: #ccc;
    cursor: pointer;
    margin-left: 40px;
    border-radius: 3px;
    margin-top: 7px;
    margin-bottom: 7px;
}
.c .mainR .zn .zNl .zNlth input{
    border: 1px solid #ccc;
    margin-bottom: 4px;
    width: 300px;
    line-height: 30px;
    margin-left: 22px;
    border-radius: 3px;
    padding-left: 5px;
}
.c .mainR .zn .zNr{
    
}
.c .mainR .zn .zNr.ac{
    display: block;
}
.c .mainR .zn .zNr .zNro{
    width: 800px;
    height: 302px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.c .mainR .zn .zNr .zNro table{
    width: 800px;
    text-align: center;
    line-height: 46px;
}
.c .mainR .zn .zNr .zNro table thead{
    background-color: #A9DDFF;
    line-height: 35px;
}
.c .mainR .zn .zNr .zNro table tbody tr:hover{
  background-color: #A9DDFF;
}
.c .mainR .zn .zNr .zNro table thead tr td{
    text-align: center;
}
.c .mainR .zn .zNr .zNro table tbody tr td:first-child input{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-top: -2px;
}
.c .mainR .zn .zNr .zNro table tbody tr{
    border-bottom: 1px dashed #ccc;
    
}
.c .mainR .zn .zNr .zNro table tbody tr td{
  text-align: center;
}
.c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span{
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}
.c .mainR .zn .zNr .zNro table tbody tr td:nth-child(2) span:first-child{
    background-image:url(../assets/tpjh.png);
    background-repeat: no-repeat;
    background-position: -247px -753px;
    width: 45px;
    height: 45px
}
.c .mainR .zn .zNr .zNrt{
    width: 800px;
    border-top: 1px solid #ccc;
    /* display: flex; */
    height: 80px;
}
.c .mainR .zn .zNr .zNrt .zNrto{
    margin-left: 130px;
    margin-top: 5px;
}
/* 引入分页 */
.m-style {
    position: relative;
    text-align: center;
    zoom: 1;
}

.m-style:before,
.m-style:after {
    content: "";
    display: table;
}

.m-style:after {
    clear: both;
    overflow: hidden;
}

.m-style span {
    float: left;
    margin: 0 5px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    color: #bdbdbd;
    font-size: 14px;
}

.m-style .active {
    float: left;
    margin: 0 5px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    background: #046EB8;
    color: #fff;
    font-size: 14px;
    border: 1px solid #046EB8;
}

.m-style a {
    float: left;
    margin: 0 5px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    background: #fff;
    border: 1px solid #ebebeb;
    color: #bdbdbd;
    font-size: 14px;
}

.m-style a:hover {
    color: #fff;
    background: #046EB8;
}

.m-style .next,
.m-style .prev {
    font-family: "Simsun";
    font-size: 16px;
    font-weight: bold;
}

.now,
.count {
    padding: 0 5px;
    color: #046EB8;
}
/* 引入分页结束 */
.c .mainR .zn .zNr .zNrt .zNrtt{
    display: flex;
    vertical-align: middle;
    line-height: 30px;
    margin-top: 2px;
}
.c .mainR .zn .zNr .zNrt .zNrtt span:first-child{
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 10px;
    width: 40px;
    height: 30px;
}
.c .mainR .zn .zNr .zNrt .zNrtt input{
    vertical-align: middle;
    width: 215px;
}
.c .mainR .zn .zNr .zNrt .zNrtt span:nth-child(3){
    display: inline-block;
    width: 80px;
    line-height: 30px;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    margin-top: 1px;
    margin-left: 10px;
}
.c .mainR .zn .zNr .zNrt .zNrtt span:nth-child(4){
    display: inline-block;
    width: 115px;
    line-height: 30px;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    margin-top: 1px;
    margin-left: 15px;
}
.c .mainR .zn .zNr .zNrt .zNrtt span.ac{
    display: inline-block;
    width: 170px;
    background-color: #fff;
    border-radius: 3px;
    text-align: center;
    cursor: text;
    margin-top: 1px;
    margin-left: 15px;
}
.c .mainR .zn .zNr .yulan{
    width: 180px;
    height: 120px;
    position: absolute;
    top: 440px;
    left: 794px;
}
.c .mainR .zn .zNr .yulan.xs{
    display: block;
}
.c .mainR .zn .zNr .yulan img{
    display: inline-block;
    width: 100%;
    height: 100%;
}


/* 主体右边第二部分 */
.c .mainR .mRt{
    width: 1700px;
}
.c .mainR .mRt .mRto{
    width: 1700px;
    height: 80px;
    background-color: #ccc;
    padding-left: 25px;
    padding-top: 20px;
}
.c .mainR .mRt .mRto span{
    font-size: 24px;
    display: block;
    /* font-weight: bold; */
}
.c .mainR .mRt .mRtt{
    width: 1700px;
    height: 500px;
    border: 1px solid #ccc;
    overflow: hidden;
}
.c .mainR .mRt .mRtt form textarea{
    resize: none;
}
.c .mainR .mRt .mRtt .tinymce-editor{
    height: 500px;
}
.c .mainR .mRt .mRtt .tinymce-editor .tox{
    height: 500px !important;
}
.c .mainR .mRt .mRtt .tinymce-editor .tox-tinymce .tox-editor-container{
    height: 500px;
}
.c .mainR .mRt .mRtth{
    margin-top: 10px;
    width: 1700px;
    height: 60px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
}
.c .mainR .mRt .mRtth .mRttho{
    margin-left: 15px;
}
.c .mainR .mRt .mRtth .mRttho span{
    font-size: 24px;
    display: inline-block;
}
.c .mainR .mRt .mRtth .mRttho span:last-child{
    width: 110px;
    height: 35px;
    text-align: center;
    border: 1px solid #ccc;
    margin-left: 5px;
}
.c .mainR .mRt .mRtth .mRttht{
    display: flex;
    margin-left: 80px;
    font-size: 24px;
}
.c .mainR .mRt .mRtth .mRttht .mRtthtt{
    margin-left: 10px;
}
.c .mainR .mRt .mRtth .mRttht .mRtthtt .mr{
    border: 1px solid #ccc;
    width: 145px;
    line-height: 35px;
}
.c .mainR .mRt .mRtth .mRttht .mRtthtt .mr span:first-child{
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    cursor: pointer;
}
.c .mainR .mRt .mRtth .mRttht .mRtthtt .mr span:last-child{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #ccc;
    margin-left: 25px;
    vertical-align: middle;
    cursor: pointer;
}
.c .mainR .mRt .mRtth .mRtthth{
    margin-left: 80px;
    font-size: 24px;
}
.c .mainR .mRt .mRtth .mRtthth span{
    display: inline-block;
    margin-right: 10px;
}
.c .mainR .mRt .mRtth .mRtthth span:last-child{
    width: 260px;
    height: 35px;
    border: 1px solid #ccc;
    text-align: center;
}
.c .mainR .mRt .mRtf{
    margin-top: 20px;
}
.c .mainR .mRt .mRtf button{
    display: inline-block;
    width: 200px;
    height: 80px;
    background-color: #046EB8;
    color: #fff;
    border-radius: 3px;
    font-size: 28px;
    margin-right: 15px;
    text-align: center;
    cursor: pointer;
}


</style>