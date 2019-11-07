<template>
    <div class="c">
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
                        <router-link to="Wzlb">首页</router-link>
                        <span style="color: #ccc;">></span>
                        <router-link to="Wzlb">所有栏目</router-link>
                        <span style="color: #ccc;">></span>
                        <span>文档列表</span>
                    </div>
                    <div class="mRot">
                        <div class="mRoto">
                            <router-link to="XFbwz" style="cursor: text;">+</router-link>
                            <router-link to="XFbwz" class="zjia">增加</router-link>
                            <span style="cursor: text;">&minus;</span>
                            <span class="schu" @click="Deltr()">删除</span>
                        </div>
                        <div class="lxC">
                            <!-- <div class="lxCo" @click="downth()">
                                <span>选择栏目</span><span></span>
                            </div>
                            <div class="lxCt" v-show="showth">
                                <div class="lxCto">
                                    <span id="0" data-id="#z">全部文章</span>
                                </div>
                                <div class="lxCto">
                                    <span id="1" data-id="#one">财经文章</span>
                                </div>
                                <div class="lxCto">
                                    <span id="2" data-id="#two">股票文章</span>
                                </div>
                                <div class="lxCto">
                                    <span id="3" data-id="#three">外汇文章</span>
                                </div>
                                <div class="lxCto">
                                    <span id="4" data-id="#four">幻灯文章</span>
                                </div>
                                <div class="lxCto">
                                    <span id="5" data-id="#fi">新手学习</span>
                                </div>
                            </div> -->
                            <el-select v-model="value" placeholder="请选择" @change="change(value)">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :dataId="item.dataId"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="mRott">
                            <span>关键字</span>
                            <input type="text" placeholder="标题" autofocus="autofocus">
                            <span>搜索</span>
                        </div>
                    </div>
                </div>
                <!-- 主体右边第二部分开始 -->
                <div class="cont">
                    <div class="mRt ac" id="z">
                        <div class="mRto" id="zz">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>文章标题</td>
                                        <td>发布时间</td>
                                        <td>所属栏目</td>
                                        <td>发布人</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in lists" :key="item.articleId" :id="item.articleId">
                                        <td>
                                            <input type="checkbox" :checked="delIds.indexOf(item.articleId)>=0" @click="checkone(item.articleId)"></td>
                                        <td>
                                            <span>
                                            {{item.title}}
                                            </span>
                                        </td>
                                        <td>{{(item.addTime)|getTime}}</td>
                                        <td>{{item.sortId}}</td>
                                        <td>{{item.author}}</td>
                                        <td>
                                            <router-link :to="{path:'Fbwz',query:{id:item.articleId}}"></router-link>
                                            <router-link :to="{path:'Fbwz',query:{id:item.articleId}}">编辑</router-link>
                                            <a @click="yl(item.articleId,item.tableName,item.httpUrl)" style="cursor:pointer;"></a>
                                            <a @click="yl(item.articleId,item.tableName,item.httpUrl)" style="cursor:pointer;">预览</a>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                        <div class="mRtt">
                            <div class="mRtto">
                                <span class="quanx" @click="checkAll()">全选</span>
                                <span class="qux" @click="checkNo()">取消</span>
                                <!-- <span>增加属性</span>
                                <span>删除属性</span> -->
                            </div>
                            <div class="mRttt">
                                <!-- 分页 -->
                                <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="total"
                                    :page-size="21"
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    >
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                    <div class="mRt" id="one">
                        <div class="mRto" id="oneo">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>文章标题</td>
                                        <td>发布时间</td>
                                        <td>所属栏目</td>
                                        <td>发布人</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                            haah表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                            </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="../Fbwz/Fbwz.html"></a>
                                            <a href="../Fbwz/Fbwz.html">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="#"></a>
                                            <a href="#">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </div>
                        <div class="mRtt">
                            <div class="mRtto">
                                <span class="quanxcj">全选</span>
                                <span class="quxcj">取消</span>
                                <!-- <span>增加属性</span>
                                <span>删除属性</span> -->
                            </div>
                            <div class="mRttt">
                                <!-- 分页 -->
                                <div class="m-style M-box12"></div>
                            </div>
                        </div>
                    </div>
                    <div class="mRt" id="two">
                        <div class="mRto" id="twot">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>文章标题</td>
                                        <td>发布时间</td>
                                        <td>所属栏目</td>
                                        <td>发布人</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                            gaga表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                            </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="../Fbwz/Fbwz.html"></a>
                                            <a href="../Fbwz/Fbwz.html">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="#"></a>
                                            <a href="#">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </div>
                        <div class="mRtt">
                            <div class="mRtto">
                                <span class="quanxgp">全选</span>
                                <span class="quxgp">取消</span>
                                <!-- <span>增加属性</span>
                                <span>删除属性</span> -->
                            </div>
                            <div class="mRttt">
                                <!-- 分页 -->
                                <el-pagination background layout="prev, pager, next" :total="10">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                    <div class="mRt" id="three">
                        <div class="mRto" id="threeth">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>文章标题</td>
                                        <td>发布时间</td>
                                        <td>所属栏目</td>
                                        <td>发布人</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                            表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                            </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="../Fbwz/Fbwz.html"></a>
                                            <a href="../Fbwz/Fbwz.html">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="#"></a>
                                            <a href="#">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </div>
                        <div class="mRtt">
                            <div class="mRtto">
                                <span class="quanxwh">全选</span>
                                <span class="quxwh">取消</span>
                                <!-- <span>增加属性</span>
                                <span>删除属性</span> -->
                            </div>
                            <div class="mRttt">
                                <!-- 分页 -->
                                <el-pagination background layout="prev, pager, next" :total="10">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                    <div class="mRt" id="four">
                        <div class="mRto" id="fourf">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>文章标题</td>
                                        <td>发布时间</td>
                                        <td>所属栏目</td>
                                        <td>发布人</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                            表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </div>
                        <div class="mRtt">
                            <div class="mRtto">
                                <span class="quanxhd">全选</span>
                                <span class="quxhd">取消</span>
                                <!-- <span>增加属性</span>
                                <span>删除属性</span> -->
                            </div>
                            <div class="mRttt">
                                <!-- 分页 -->
                                <el-pagination background layout="prev, pager, next" :total="10">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                    <div class="mRt" id="fi">
                        <div class="mRto" id="fif">
                            <table>
                                <thead>
                                    <tr>
                                        <td>选择</td>
                                        <td>文章标题</td>
                                        <td>发布时间</td>
                                        <td>所属栏目</td>
                                        <td>发布人</td>
                                        <td>操作</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                            表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="../Fbwz/Fbwz.html"></a>
                                            <a href="../Fbwz/Fbwz.html">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <span>
                                                表单域标签的宽度，作为 Form 直接子元素的
                                            </span>
                                        </td>
                                        <td>2019-09-10</td>
                                        <td>财经</td>
                                        <td>小兰</td>
                                        <td>
                                            <a href="#"></a>
                                            <a href="#">编辑</a>
                                            <a href="#"></a>
                                            <a href="../ZZYM/zzym.html">预览</a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </div>
                        <div class="mRtt">
                            <div class="mRtto">
                                <span class="quanx">全选</span>
                                <span class="qux">取消</span>
                                <!-- <span>增加属性</span>
                                <span>删除属性</span> -->
                            </div>
                            <div class="mRttt">
                                <!-- 分页 -->
                                <el-pagination background layout="prev, pager, next" :total="10">

                                </el-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 主体右边结束 -->
        </div>
        <!-- 主体部分结束 -->
    </div>
</template>

<script>
import Vue from 'vue'
import Qs from 'qs'
Vue.filter("getTime",function(val){
    var time=val.split(" ")[0];
    return time;
});
export default {
  data(){
    return{
        showo:false,
        showt:false,
        showth:false,
        options: [
            {
            value: '0',
            label: '全部文章',
            dataId:'#z'
            },{
            value: '1',
            label: '财经文章',
            dataId:'#one'
            }, {
            value: '2',
            label: '股票文章',
            dataId:'#two'
            }, {
            value: '3',
            label: '外汇文章',
            dataId:'#three'
            },{
            value: '4',
            label: '幻灯文章',
            dataId:'#four'
            }, {
            value: '5',
            label: '新手学习',
            dataId:'#fi'
            }],
        value: '',
        lists:[],
        delIds:[],
        total:0,
        page:1,
        num:21,
        currentPage: 1,
        dq:true,
        val:0
    }
  },
  methods:{
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
    checkone(articleId){
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
    checkAll(){
        console.log(123);
        // 全选时
        this.delIds = [];
        this.lists.forEach(function (item) {
          this.delIds.push(item.articleId)
        },this);
        console.log(this.delIds);
        // this.fruits.forEach((val,index) =>{
		// 				this.fruitIds.push(val.fruitId)
		// 			})
        //         }else{
        //             this.fruitIds = []
        //         }
    },
    checkNo(){
        
        this.delIds = [];
        console.log(this.delIds)

    },
    Deltr(){
            var arr = [];
            var len = this.lists.length;
            for(var i=0;i<len;i++){
                if(this.delIds.indexOf(this.lists[i].articleId)>=0){
                    // console.log(this.delIds.indexOf(this.lists[i].id))
                    // console.log(this.delIds.indexOf(i));
                    console.log(this.lists[i]);
                    // arr.push(this.lists[i]);
                    this.axios.post("/api/WSHD/jiekou6/Delete",Qs.stringify({
                        id:this.lists[i].articleId
                    })).then((res)=>{
                        console.log("删除成功")
                        
                    })
                }else {
                    // console.log(this.lists[i]);
                    arr.push(this.lists[i]);
                }
            }
            this.lists = arr;
            this.delIds = [];
				
    },
    require(){
        //页面打开发送post请求
        this.axios.post("/api/WSHD/jiekou6/select",Qs.stringify({
            page:this.currentPage,
            num:this.num
        })).then((res)=>{
            console.log(res.data)
            this.lists=res.data.data;
            this.total=res.data.sum;
            console.log(this.lists)
        })

    },
    handleCurrentChange(currentPage){
        this.currentPage=currentPage;
        console.log(this.currentPage);
        if(this.dq){
            this.require();
        }else{
            this.change(this.val)
        }
        
        
    },
    handleSizeChange(size){
        this.num=size;
        console.log(this.num)
    },
    yl(articleId,tableName,httpUrl){
        window.location.href=httpUrl+"?aid="+articleId+"&tableName="+tableName;
        
    },
    change(val){
        // alert(val);
        if(val==0){
            window.location.reload();
        }
        this.lists=[];
        this.val=val;
        //点击具体文章发送post请求
        this.axios.post("/api/WSHD/jiekou6/selectByType",Qs.stringify({
            page:this.currentPage,
            num:this.num,
            style:this.val
        })).then((res)=>{
            console.log(res.data)
            this.lists=res.data.data;
            this.total=res.data.sum;
            this.dq=false;
            console.log(this.lists);
            
        })
    }


  },
  created(){
   this.require();
  },
  mounted(){
    let usern=sessionStorage.getItem("usern");
    if(usern){
        console.log(usern);
        document.getElementById("user").innerHTML="你好欢迎"+usern+"登录";
        
    };
    
    
    // this.change();
  }
}

</script>
<style scoped>
/* 头部开始 */
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
    text-align: left;
}
.c .head a{
    font-size: 24px;
    color: #fff;
}
.c .head a:nth-child(1){
    display: inline-block;
    width: 300px;
    height: 45px;
    margin-left: 60px;
    /* margin-top: -5px; */
    position: relative;
    top: 10px;
}
.c .head a:nth-child(1) img{
    display:block;
    width: 100%;
    height: 100%;
}
.c .head a:nth-child(2){
    margin-left: 20px;
    margin-right: 1100px;
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
    /* height: 1300px; */
    /* background-color: antiquewhite; */
    overflow: hidden;
    /* margin-left: 20px; */
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
    text-align: left;
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
    /* display: none; */
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
    text-align: left;
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
    /* display: none; */
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
    margin-top: 130px;
    margin-left: 205px;
}
/* 主体右边第一部分开始 */
.c .mainR .mRo{
    width: 1700px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: left;
}
.c .mainR .mRo .mRoo a{
    font-size: 16px;
}
.c .mainR .mRo .mRoo span{
    font-size: 16px;
}
.c .mainR .mRo .mRot{
    display: flex;
    width: 1700px;
}
.c .mainR .mRo .mRot .lxC{
    width: 125px;
    margin-left: 1000px;
    margin-right: 30px;
    /* border: 1px solid #ccc; */
    text-align: center;
    position: relative;
    height: 30px;
    overflow: hidden;
}
/* #app .c .mainR .mRo .mRot .lxC .el-select .el-input .el-input__inner{
    height: 30px !important;
    line-height: 30px !important;
} */
.c .mainR .mRo .mRot .lxC .lxCo{
    width: 125px;
    height: 25px;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 3px;
    text-align: center;
}
.c .mainR .mRo .mRot .lxC .lxCo span{
    display: inline-block;
}
.c .mainR .mRo .mRot .lxC .lxCo span:last-child{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #ccc;
    margin-left: 20px;
}
.c .mainR .mRo .mRot .lxC .lxCt{
    width: 125px;
    height: 100px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    position: absolute;
    background-color: #fff;
    text-align: center;

    /* display: none; */
}
.c .mainR .mRo .mRot .lxC .lxCt.ac{
    display: none;
}
.c .mainR .mRo .mRot .lxC .lxCt .lxCto:hover{
    background-color: #DCDCDC;
}
.c .mainR .mRo .mRot .lxC .lxCt .lxCto{
    cursor: pointer;
    border-bottom: 1px dashed #ccc;
    margin-left: 15px;
}
.c .mainR .mRo .mRot .lxC .lxCt .lxCto:last-child{
    border-bottom: none;
}

.c .mainR .mRo .mRot .mRoto span{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    cursor: pointer;
}
.c .mainR .mRo .mRot .mRoto a{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    cursor: pointer;
    margin-right: 5px;
}
.c .mainR .mRo .mRot .mRoto span{
  margin-right: 5px;
}
.c .mainR .mRo .mRot .mRoto a:nth-child(1){
    display: inline-block;
    border-radius: 50%;
    background-color: #FE6641;
    color: #fff;
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
    width: 20px;
    height: 20px
}
.c .mainR .mRo .mRot .mRoto span:nth-child(3){
    display: inline-block;
    border-radius: 50%;
    background-color: #046EB8;
    color: #fff;
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
    width: 20px;
    height: 20px
}
.c .mainR .mRo .mRot .mRott:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}
.c .mainR .mRo .mRot .mRott *{
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    float: left;
}
.c .mainR .mRo .mRot .mRott span:first-child{
    display: inline-block;
    width: 80px;
    line-height: 27px;
    background-color: #ccc;
    /* border-radius: 5px; */
    text-align: center;
}
.c .mainR .mRo .mRot .mRott input{
    border: 1px solid #ccc;
    padding-left: 5px;
    width: 150px;
    height: 27px;
}
.c .mainR .mRo .mRot .mRott span:last-child{
    display: inline-block;
    width: 50px;
    line-height: 27px;
    background-color: #046EB8;
    /* border-radius: 5px; */
    color: #fff;
    text-align: center;
    cursor: pointer;
}
/* 主体右边第二部分开始 */
.c .mainR .mRt{
    width: 1700px;
    margin-top: 10px;
    display: none;
}
.c .mainR .mRt.ac{
    display: block;
}
.c .mainR .mRt .mRto{
    width: 1700px;
}
.c .mainR .mRt .mRto table tr td{
    border: 1px solid #CDCDCD;
}
.c .mainR .mRt .mRto table thead{
    background-color: #DCDCDC;
}
.c .mainR .mRt .mRto table thead tr td:nth-child(1){
    width: 100px;
    height: 40px;
    text-align: center;
}
.c .mainR .mRt .mRto table thead tr td:nth-child(2){
    width: 800px;
    padding-left: 10px;
}
.c .mainR .mRt .mRto table thead tr td:nth-child(3){
    width: 200px;
    text-align: center;
}
.c .mainR .mRt .mRto table thead tr td:nth-child(4){
    width: 180px;
    text-align: center;
}
.c .mainR .mRt .mRto table thead tr td:nth-child(5){
    width: 180px;
    text-align: center;
}
.c .mainR .mRt .mRto table thead tr td:nth-child(6){
    width: 260px;
    text-align: center;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(1){
    width: 100px;
    height: 40px;
    text-align: center;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(1) input{
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(2){
    width: 800px;
    padding-left: 10px;
    
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(2) span{
    display: inline-block;
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    text-align: left;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(3){
    width: 200px;
    text-align: center;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(4){
    width: 180px;
    text-align: center;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(5){
    width: 180px;
    text-align: center;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(6){
    width: 260px;
    text-align: center;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(6) a{
    display: inline-block;
    vertical-align: middle;
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(6) a:nth-child(1){
    background-image:url(../assets/tpjh.png);
    background-repeat: no-repeat;
    background-position: -347px -720px;
    width: 25px;
    height: 25px
}
.c .mainR .mRt .mRto table tbody tr td:nth-child(6) a:nth-child(3){
    background-image:url(../assets/tpjh.png);
    background-repeat: no-repeat;
    background-position: -307px -723px;
    width: 35px;
    height: 25px
}
.c .mainR .mRt .mRtt{
    width: 1700px;
    line-height: 50px;
    display: flex;
    border: 1px solid #CDCDCD;
    border-top: none;
}
.c .mainR .mRt .mRtt .mRtto span{
    display: inline-block;
    width: 80px;
    line-height: 30px;
    background-color: #046EB8;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    margin-left: 15px;
    cursor: pointer;
}
/* 引入分页 */
.c .mainR .mRt .mRtt .mRttt{
  line-height: 50px;
}
.c .mainR .mRt .mRtt .mRttt .el-pagination{
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  margin-top: 10px;
}
/* 引入分页结束 */
.m-style{
    margin-top: 7px;
    margin-left: 120px;
}

</style>
