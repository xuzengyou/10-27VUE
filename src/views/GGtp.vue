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
                        <router-link to="Wzlb">所有栏目</router-link>
                        <span style="color: #ccc;">></span>
                        <router-link to="GGtp">图片管理</router-link>
                        <span style="color: #ccc;">></span>
                        <span>广告区图片</span>
                    </div>
                </div>
                <!-- 主体右边第二部分开始 -->
                <div class="mRt">
                    <div class="mRto">
                        <span :class="{ac:showth==true}" @click="downth()">财经</span>
                        <span :class="{ac:showf==true}" @click="downf()">股票</span>
                        <span :class="{ac:showfi==true}" @click="downfi()">外汇</span>
                    </div>
                    <div class="con">
                        <!-- 财经开始 -->
                        <div class="mRtt" id="one" v-show="showth">
                            <div class="mRtto">
                                <div class="cs">
                                    <span>首页</span>
                                </div>
                                <div class="cso" style="margin-left: 0;">
                                    <div class="csoo"></div>
                                    <div class="csot">
                                        <input type="file" name="" class="fileinput1" data-id="1" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cso">
                                    <div class="csoo"></div>
                                    <div class="csot">
                                        <input type="file" name="" class="fileinput1" data-id="2" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cso">
                                    <div class="csoo"></div>
                                    <div class="csot">
                                        <input type="file" name="" class="fileinput1" data-id="3" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cso">
                                    <div class="csoo"></div>
                                    <div class="csot">
                                        <input type="file" name="" class="fileinput1" data-id="4" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cso">
                                    <div class="csoo"></div>
                                    <div class="csot">
                                        <input type="file" name="" class="fileinput1" data-id="5" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mRttt">
                                <div class="chg">
                                    <span>宏观</span>
                                </div>
                                <div class="chgo" style="margin-left: 0;">
                                    <div class="chgoo"></div>
                                    <div class="chgot">
                                        <input type="file" name="" class="fileinput2" data-id="6" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="chgo">
                                    <div class="chgoo"></div>
                                    <div class="chgot">
                                        <input type="file" name="" class="fileinput2" data-id="7" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cjj">
                                    <span>基金</span>
                                </div>
                                <div class="cjjo">
                                    <div class="cjjoo"></div>
                                    <div class="cjjot">
                                        <input type="file" name="" class="fileinput3" data-id="8" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cjjo">
                                    <div class="cjjoo"></div>
                                    <div class="cjjot">
                                        <input type="file" name="" class="fileinput3" data-id="9" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="ckc">
                                    <span>科创板</span>
                                </div>
                                <div class="ckco">
                                    <div class="ckcoo"></div>
                                    <div class="ckcot">
                                        <input type="file" name="" class="fileinput4" data-id="10" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="ckco">
                                    <div class="ckcoo"></div>
                                    <div class="ckcot">
                                        <input type="file" name="" class="fileinput4" data-id="11" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mRttth">
                                <div class="csy">
                                    <span>石油</span>
                                </div>
                                <div class="csyo" style="margin-left: 0;">
                                    <div class="csyoo"></div>
                                    <div class="csyot">
                                        <input type="file" name="" class="fileinput5" data-id="12" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="csyo">
                                    <div class="csyoo"></div>
                                    <div class="csyot">
                                        <input type="file" name="" class="fileinput5" data-id="13" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="chj">
                                    <span>黄金</span>
                                </div>
                                <div class="chjo">
                                    <div class="chjoo"></div>
                                    <div class="chjot">
                                        <input type="file" name="" class="fileinput6" data-id="14" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="chjo">
                                    <div class="chjoo"></div>
                                    <div class="chjot">
                                        <input type="file" name="" class="fileinput6" data-id="15" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cxs">
                                    <span>新三板</span>
                                </div>
                                <div class="cxso">
                                    <div class="cxsoo"></div>
                                    <div class="cxsot">
                                        <input type="file" name="" class="fileinput7" data-id="16" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cxso">
                                    <div class="cxsoo"></div>
                                    <div class="cxsot">
                                        <input type="file" name="" class="fileinput7" data-id="17" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mRttf">
                                <div class="cxg">
                                    <span>新股</span>
                                </div>
                                <div class="cxgo" style="margin-left: 0;">
                                    <div class="cxgoo"></div>
                                    <div class="cxgot">
                                        <input type="file" name="" class="fileinput8" data-id="18" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cxgo">
                                    <div class="cxgoo"></div>
                                    <div class="cxgot">
                                        <input type="file" name="" class="fileinput8" data-id="19" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cxw">
                                    <span>更多新闻</span>
                                </div>
                                <div class="cxwo">
                                    <div class="cxwoo"></div>
                                    <div class="cxwot">
                                        <input type="file" name="" class="fileinput9" data-id="20" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cxwo">
                                    <div class="cxwoo"></div>
                                    <div class="cxwot">
                                        <input type="file" name="" class="fileinput9" data-id="21" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="czx">
                                    <span>更多财经资讯</span>
                                </div>
                                <div class="czxo">
                                    <div class="czxoo"></div>
                                    <div class="czxot">
                                        <input type="file" name="" class="fileinput10" data-id="22" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="czxo">
                                    <div class="czxoo"></div>
                                    <div class="czxot">
                                        <input type="file" name="" class="fileinput10" data-id="23" data-cls="1" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="mRttfi">
                                <div class="cwh">
                                    <span>更多外汇</span>
                                </div>
                                <div class="cwho" style="margin-left: 0;">
                                    <div class="cwhoo"></div>
                                    <div class="cwhot">
                                        <input type="file" name="" class="fileinput11" data-id="24" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cwho">
                                    <div class="cwhoo"></div>
                                    <div class="cwhot">
                                        <input type="file" name="" class="fileinput11" data-id="25" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cgp">
                                    <span>更多股票</span>
                                </div>
                                <div class="cgpo">
                                    <div class="cgpoo"></div>
                                    <div class="cgpot">
                                        <input type="file" name="" class="fileinput12" data-id="26" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cgpo">
                                    <div class="cgpoo"></div>
                                    <div class="cgpot">
                                        <input type="file" name="" class="fileinput12" data-id="27" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cgss">
                                    <span>更多石油</span>
                                </div>
                                <div class="cgsso">
                                    <div class="cgssoo"></div>
                                    <div class="cgssot">
                                        <input type="file" name="" class="fileinput13" data-id="28" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cgsso">
                                    <div class="cgssoo"></div>
                                    <div class="cgssot">
                                        <input type="file" name="" class="fileinput13" data-id="29" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cghj">
                                    <span>更多黄金</span>
                                </div>
                                <div class="cghjo">
                                    <div class="cghjoo"></div>
                                    <div class="cghjot">
                                        <input type="file" name="" class="fileinput14" data-id="30" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cghjo">
                                    <div class="cghjoo"></div>
                                    <div class="cghjot">
                                        <input type="file" name="" class="fileinput14" data-id="31" data-cls="1">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <!-- 财经结束 -->
                        <!-- 股票开始 -->
                        <div class="qgp" id="two" v-show="showf">
                            <div class="qgpo">
                                <div class="gs">
                                    <span>首页</span>
                                </div>
                                <div class="gso" style="margin-left: 0;">
                                    <div class="gsoo"></div>
                                    <div class="gsot">
                                        <input type="file" name="" class="fileinput14" data-id="1" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="gso">
                                    <div class="gsoo"></div>
                                    <div class="gsot">
                                        <input type="file" name="" class="fileinput14" data-id="2" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="ggd">
                                    <span>股票更多</span>
                                </div>
                                <div class="ggdo" style="margin-left: 0;">
                                    <div class="ggdoo"></div>
                                    <div class="ggdot">
                                        <input type="file" name="" class="fileggd" data-id="3" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="ggdo">
                                    <div class="ggdoo"></div>
                                    <div class="ggdot">
                                        <input type="file" name="" class="fileggd" data-id="4" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                            <div class="qgpt">
                                <div class="gzx">
                                    <span>个股资讯</span>
                                </div>
                                <div class="gzxo" style="margin-left: 0;">
                                    <div class="gzxoo"></div>
                                    <div class="gzxot">
                                        <input type="file" name="" class="fileinput15" data-id="5" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="gzxo">
                                    <div class="gzxoo"></div>
                                    <div class="gzxot">
                                        <input type="file" name="" class="fileinput15" data-id="6" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="gdp">
                                    <span>大盘评述</span>
                                </div>
                                <div class="gdpo" style="margin-left: 0;">
                                    <div class="gdpoo"></div>
                                    <div class="gdpot">
                                        <input type="file" name="" class="fileinput16" data-id="7" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="gdpo">
                                    <div class="gdpoo"></div>
                                    <div class="gdpot">
                                        <input type="file" name="" class="fileinput16" data-id="8" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="gsc">
                                    <span>市场数据</span>
                                </div>
                                <div class="gsco" style="margin-left: 0;">
                                    <div class="gscoo"></div>
                                    <div class="gscot">
                                        <input type="file" name="" class="fileinput17" data-id="9" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="gsco">
                                    <div class="gscoo"></div>
                                    <div class="gscot">
                                        <input type="file" name="" class="fileinput17" data-id="10" data-cls="2" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 股票结束 -->
                        <!-- 外汇开始 -->
                        <div class="qwh" id="three" v-show="showfi">
                            <!-- 外汇首页 -->
                            <div class="qwho">
                                <div class="ws">
                                    <span>首页</span>
                                </div>
                                <div class="wso" style="margin-left: 0;">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="1" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="2" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="3" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="4" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="5" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="6" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="7" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="8" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="9" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="10" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wso">
                                    <div class="wsoo"></div>
                                    <div class="wsot">
                                        <input type="file" name="" class="fileinput18" data-id="11" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 外汇要闻、EIA库存 -->
                            <div class="qwht">
                                <div class="wyw">
                                    <span>外汇要闻</span>
                                </div>
                                <div class="wywo" style="margin-left: 0;">
                                    <div class="wywoo"></div>
                                    <div class="wywot">
                                        <input type="file" name="" class="fileinput19" data-id="12" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wywo">
                                    <div class="wywoo"></div>
                                    <div class="wywot">
                                        <input type="file" name="" class="fileinput19" data-id="13" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wywo">
                                    <div class="wywoo"></div>
                                    <div class="wywot">
                                        <input type="file" name="" class="fileinput19" data-id="14" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wywo">
                                    <div class="wywoo"></div>
                                    <div class="wywot">
                                        <input type="file" name="" class="fileinput19" data-id="15" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wkc">
                                    <span>EIA库存</span>
                                </div>
                                <div class="wkco" style="margin-left: 0;">
                                    <div class="wkcoo"></div>
                                    <div class="wkcot">
                                        <input type="file" name="" class="fileinput20" data-id="16" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="wkco">
                                    <div class="wkcoo"></div>
                                    <div class="wkcot">
                                        <input type="file" name="" class="fileinput20" data-id="17" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                                <div class="cjrl">
                                    <span>财经日历</span>
                                </div>
                                <div class="cjrlo" style="margin-left: 0;">
                                    <div class="cjrloo"></div>
                                    <div class="cjrlot">
                                        <input type="file" name="" class="fileinput21" data-id="18" data-cls="3" @change="change($event)">
                                        <span>选择图片</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 外汇结束 -->

                    </div>
                    <!-- 最终页面正文 -->
                    <div class="mRtth">
                        <div class="azw">
                            <span>正文</span>
                        </div>
                        <div class="azwo" style="margin-left: 0;">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="1" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="2" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="3" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="4" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="5" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="6" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="7" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="8" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="9" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="10" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
                            </div>
                        </div>
                        <div class="azwo">
                            <div class="azwoo"></div>
                            <div class="azwot">
                                <input type="file" name="" class="fileinput13" data-id="11" data-cls="4" @change="change($event)">
                                <span>选择图片</span>
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
import Qs from 'qs';
export default {
  data(){
    return{
        showo:false,
        showt:false,
        showth:true,
        showf:false,
        showfi:false,
        imgSrc:"",
        style:null,
        id:null
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
        this.showth=true
        this.showf=!this.showth;
        this.showfi=!this.showth;
    },
    downf(){
        this.showf=true;
        this.showth=false;
        this.showfi=false;
    },
    downfi(){
        this.showfi=true;
        this.showth=false;
        this.showf=false;
    },
    change(e){
        let style=e.target.getAttribute('data-cls');
        let id=e.target.getAttribute('data-id');
        let file = e.target.files[0];
        //readFile(file);
        this.style=style;
        this.id=id;
        //this.fileList=file;
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
              _this.imgSrc=img.src;
            //   console.log(_this.imgSrc)
            //   console.log(_this.style)
            //   console.log(_this.id);
            //   console.log(_this)
              _this.axios.post("/api/WSHD/jiekou7/ADImage",
                    Qs.stringify({
                      image:_this.imgSrc,
                      style:_this.style,
                      id:_this.id
                    }),
                    {
                      headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'}
                    }
                    ).then(res=>{
                        console.log("上传成功")
                    })
          });
     
        
    },

  },
  mounted(){
    let usern=sessionStorage.getItem("usern");
    if(usern){
        console.log(usern);
        document.getElementById("user").innerHTML="你好欢迎"+usern+"登录";
    };
  }
}
</script>
<style scoped>
*{
  text-align: left;
}
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
    top: 0;
    left: 0;
}
.c .head a{
    font-size: 24px;
    color: #fff;
    display: inline-block;
    vertical-align: middle;
}
.c .head a:nth-child(1){
    width: 300px;
    height: 45px;
    margin-left: 20px;
    position: relative;
    top: -4px;
}
.c .head a:nth-child(1) img{
    display:block;
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

/* 主体右边第二部分 */
.c .mainR .mRt{
    width: 1700px;
}
.c .mainR .mRt .mRto{
    width: 1700px;
    margin-top: 20px;
}
.c .mainR .mRt .mRto span{
    display: inline-block;
    width: 90px;
    line-height: 30px;
    background-color: #046EB8;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    margin-right: 10px;
}
.c .mainR .mRt .mRto span.ac{
    background-color: #fff;
    color: #000;
    background-color: #F3F3F3;
}
.c .mainR .mRt .mRtt{
    width: 1700px;
    margin-top: 20px;
    
}
.c .mainR .mRt .mRtt.ac{
    display: block;
}
/* 财经首页开始 */
.c .mainR .mRt .mRtt .mRtto{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 120px;
}
.c .mainR .mRt .mRtt .mRtto .cs span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRtto .cso{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRtto .cso .csoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRtto .cso .csoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRtto .cso .csoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRtto .cso .csot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRtto .cso .csot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 财经首页结束 */
/* 财经宏观开始 */
.c .mainR .mRt .mRtt .mRttt{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 120px;
    margin-top: 20px;
}
.c .mainR .mRt .mRtt .mRttt .chg span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttt .chgo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttt .chgo .chgoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttt .chgo .chgoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
}
.c .mainR .mRt .mRtt .mRttt .chgo .chgoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttt .chgo .chgot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttt .chgo .chgot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 财经宏观结束 */

/* 财经基金开始 */
.c .mainR .mRt .mRtt .mRttt .cjj{
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttt .cjj span{
    display: inline-block;
    width: 90px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttt .cjjo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttt .cjjo .cjjoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttt .cjjo .cjjoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttt .cjjo .cjjoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttt .cjjo .cjjot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttt .cjjo .cjjot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 财经基金结束 */

/* 财经科创板开始 */
.c .mainR .mRt .mRtt .mRttt .ckc{
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttt .ckc span{
    display: inline-block;
    width: 90px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttt .ckco{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttt .ckco .ckcoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttt .ckco .ckcoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttt .ckco .ckcoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttt .ckco .ckcot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttt .ckco .ckcot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 财经科创板结束 */
/* 财经石油开始 */
.c .mainR .mRt .mRtt .mRttth{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 120px;
    margin-top: 20px;
}
.c .mainR .mRt .mRtt .mRttth .csy{
    /* margin-left: 20px; */
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttth .csy span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttth .csyo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttth .csyo .csyoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttth .csyo .csyoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttth .csyo .csyoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttth .csyo .csyot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttth .csyo .csyot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经石油结束 */
/* 财经黄金开始 */
.c .mainR .mRt .mRtt .mRttth .chj{
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttth .chj span{
    display: inline-block;
    width: 90px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttth .chjo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttth .chjo .chjoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttth .chjo .chjoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttth .chjo .chjoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttth .chjo .chjot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttth .chjo .chjot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 财经黄金结束 */
/* 财经新三板开始 */
.c .mainR .mRt .mRtt .mRttth .cxs{
    margin-left: 20px;
}
.c .mainR .mRt .mRtt .mRttth .cxs span{
    display: inline-block;
    width: 90px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttth .cxso{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttth .cxso .cxsoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttth .cxso .cxsoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttth .cxso .cxsoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttth .cxso .cxsot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttth .cxso .cxsot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经新三板结束 */
/* 财经新股开始 */
.c .mainR .mRt .mRtt .mRttf{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 120px;
    margin-top: 20px;
}
.c .mainR .mRt .mRtt .mRttf .cxg{
    /* margin-left: 20px; */
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttf .cxg span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttf .cxgo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttf .cxgo .cxgoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttf .cxgo .cxgoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttf .cxgo .cxgoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttf .cxgo .cxgot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttf .cxgo .cxgot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经新股结束 */
/* 财经新闻开始 */
.c .mainR .mRt .mRtt .mRttf .cxw{
    margin-left: 20px;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttf .cxw span{
    display: inline-block;
    width: 115px;
    height: 120px;
    line-height: 120px;
    overflow: hidden;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttf .cxwo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttf .cxwo .cxwoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttf .cxwo .cxwoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttf .cxwo .cxwoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttf .cxwo .cxwot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttf .cxwo .cxwot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经新闻结束 */
/* 财经财经资讯开始 */
.c .mainR .mRt .mRtt .mRttf .czx{
    margin-left: 20px;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttf .czx span{
    display: inline-block;
    width: 170px;
    height: 120px;
    line-height: 120px;
    overflow: hidden;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttf .czxo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttf .czxo .czxoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttf .czxo .czxoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttf .czxo .czxoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttf .czxo .czxot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttf .czxo .czxot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经财经资讯结束 */
/* 财经外汇开始 */
.c .mainR .mRt .mRtt .mRttfi{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 120px;
    margin-top: 20px;
}
.c .mainR .mRt .mRtt .mRttfi .cwh{
    /* margin-left: 20px; */
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cwh span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cwho{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttfi .cwho .cwhoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttfi .cwho .cwhoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttfi .cwho .cwhoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttfi .cwho .cwhot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttfi .cwho .cwhot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经外汇结束 */

/* 财经股票开始 */
.c .mainR .mRt .mRtt .mRttfi .cgp{
    margin-left: 20px;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cgp span{
    display: inline-block;
    width: 115px;
    height: 120px;
    line-height: 120px;
    overflow: hidden;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cgpo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttfi .cgpo .cgpoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttfi .cgpo .cgpoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttfi .cgpo .cgpoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttfi .cgpo .cgpot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttfi .cgpo .cgpot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经股票结束 */

/* 财经更多石油开始 */
.c .mainR .mRt .mRtt .mRttfi .cgss{
    margin-left: 20px;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cgss span{
    display: inline-block;
    width: 115px;
    height: 120px;
    line-height: 120px;
    overflow: hidden;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cgsso{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 13px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttfi .cgsso .cgssoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttfi .cgsso .cgssoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttfi .cgsso .cgssoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttfi .cgsso .cgssot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttfi .cgsso .cgssot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 财经更多石油结束 */

/* 财经更多黄金开始 */
.c .mainR .mRt .mRtt .mRttfi .cghj{
    margin-left: 20px;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cghj span{
    display: inline-block;
    width: 115px;
    height: 120px;
    line-height: 120px;
    overflow: hidden;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtt .mRttfi .cghjo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtt .mRttfi .cghjo .cghjoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtt .mRttfi .cghjo .cghjoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtt .mRttfi .cghjo .cghjoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtt .mRttfi .cghjo .cghjot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtt .mRttfi .cghjo .cghjot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 财经更多黄金结束 */

/* 最终页面正文开始 */
.c .mainR .mRt .mRtth{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 257px;
    margin-top: 20px;
    flex-wrap: wrap;
    /* overflow: auto; */
}
.c .mainR .mRt .mRtth .azw{
    text-align: center;
}
.c .mainR .mRt .mRtth .azw span{
    display: inline-block;
    width: 125px;
    line-height: 257px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .mRtth .azwo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .mRtth .azwo:last-child{
    position: relative;
    top: -122px;
    left: 105px;
}
.c .mainR .mRt .mRtth .azwo .azwoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .mRtth .azwo .azwoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .mRtth .azwo .azwoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .mRtth .azwo .azwot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .mRtth .azwo .azwot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 最终页面正文结束 */

/* 股票开始 */
/* 股票首页开始 */
.c .mainR .mRt .con .qgp{
    /* display: none; */
}
.c .mainR .mRt .con .qgp.ac{
    display: block;
}
.c .mainR .mRt .con .qgp .qgpo{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 122px;
    margin-top: 20px;
    flex-wrap: wrap;
    /* overflow: auto; */
}
.c .mainR .mRt .con .qgp .qgpo .gs{
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpo .gs span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpo .gso{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qgp .qgpo .gso .gsoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qgp .qgpo .gso .gsoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qgp .qgpo .gso .gsoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qgp .qgpo .gso .gsot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qgp .qgpo .gso .gsot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 股票首页结束 */

/* 股票更多开始 */
.c .mainR .mRt .con .qgp .qgpo .ggd{
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpo .ggd span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpo .ggdo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qgp .qgpo .ggdo .ggdoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qgp .qgpo .ggdo .ggdoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qgp .qgpo .ggdo .ggdoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qgp .qgpo .ggdo .ggdot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qgp .qgpo .ggdo .ggdot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 股票更多结束 */

/* 股票个股资讯开始 */
.c .mainR .mRt .con .qgp .qgpt{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 122px;
    margin-top: 20px;
    flex-wrap: wrap;
    /* overflow: auto; */
}
.c .mainR .mRt .con .qgp .qgpt .gzx{
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpt .gzx span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpt .gzxo{
    width: 130px;
    height: 130px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qgp .qgpt .gzxo .gzxoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qgp .qgpt .gzxo .gzxoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qgp .qgpt .gzxo .gzxoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qgp .qgpt .gzxo .gzxot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qgp .qgpt .gzxo .gzxot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 股票个股资讯结束 */
/* 股票大盘评述开始 */
.c .mainR .mRt .con .qgp .qgpt .gdp{
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpt .gdp span{
    display: inline-block;
    width: 120px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpt .gdpo{
    width: 130px;
    height: 130px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qgp .qgpt .gdpo .gdpoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qgp .qgpt .gdpo .gdpoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qgp .qgpt .gdpo .gdpoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qgp .qgpt .gdpo .gdpot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qgp .qgpt .gdpo .gdpot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 股票大盘评述结束 */
/* 股票市场数据开始 */
.c .mainR .mRt .con .qgp .qgpt .gsc{
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpt .gsc span{
    display: inline-block;
    width: 120px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qgp .qgpt .gsco{
    width: 130px;
    height: 130px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qgp .qgpt .gsco .gscoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qgp .qgpt .gsco .gscoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qgp .qgpt .gsco .gscoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qgp .qgpt .gsco .gscot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qgp .qgpt .gsco .gscot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 股票市场数据结束 */
/* 股票结束 */

/* 外汇开始 */
/* 外汇首页开始 */
.c .mainR .mRt .con .qwh{
    
}
.c .mainR .mRt .con .qwh.ac{
    display: block;
}
.c .mainR .mRt .con .qwh .qwho{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 122px;
    margin-top: 20px;
    flex-wrap: wrap;
    overflow: hidden;
}
.c .mainR .mRt .con .qwh .qwho .ws{
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwho .ws span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwho .wso{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 14px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qwh .qwho .wso .wsoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qwh .qwho .wso .wsoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qwh .qwho .wso .wsoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qwh .qwho .wso .wsot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qwh .qwho .wso .wsot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 外汇首页结束 */
/* 外汇要闻开始 */
.c .mainR .mRt .con .qwh .qwht{
    display: flex;
    border: 1px solid #ccc;
    width: 1700px;
    height: 122px;
    margin-top: 20px;
    flex-wrap: wrap;
    /* overflow: auto; */
}
.c .mainR .mRt .con .qwh .qwht .wyw{
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwht .wyw span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwht .wywo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qwh .qwht .wywo .wywoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qwh .qwht .wywo .wywoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qwh .qwht .wywo .wywoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qwh .qwht .wywo .wywot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qwh .qwht .wywo .wywot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 外汇要闻结束 */
/* 外汇EIA开始 */
.c .mainR .mRt .con .qwh .qwht .wkc{
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwht .wkc span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwht .wkco{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qwh .qwht .wkco .wkcoo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qwh .qwht .wkco .wkcoo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qwh .qwht .wkco .wkcoo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qwh .qwht .wkco .wkcot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qwh .qwht .wkco .wkcot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}
/* 外汇EIA结束 */
/* 外汇财经日历开始 */
.c .mainR .mRt .con .qwh .qwht .cjrl{
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwht .cjrl span{
    display: inline-block;
    width: 125px;
    line-height: 120px;
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
}
.c .mainR .mRt .con .qwh .qwht .cjrlo{
    width: 130px;
    height: 120px;
    overflow: hidden;
    margin-left: 20px;
    flex-shrink: 0;
}
.c .mainR .mRt .con .qwh .qwht .cjrlo .cjrloo{
    width: 130px;
    height: 80px;
    background-color: #046EB8;
}
.c .mainR .mRt .con .qwh .qwht .cjrlo .cjrloo img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .6s;
    overflow: hidden;
}
.c .mainR .mRt .con .qwh .qwht .cjrlo .cjrloo img:hover{
    transform: scale(1.2);
}
.c .mainR .mRt .con .qwh .qwht .cjrlo .cjrlot input{
    width: 130px;
    height: 40px;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.c .mainR .mRt .con .qwh .qwht .cjrlo .cjrlot span{
    cursor: pointer;
    display: inline-block;
    width: 130px;
    line-height: 40px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: -100;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
}

/* 外汇财经日历结束 */
/* 外汇结束 */

</style>
