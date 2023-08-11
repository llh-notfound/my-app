<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/neuro-sama.jpg" alt="用户头像">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间 <span>2023/8/11</span></p>
                        <p>上次登录地点 <span>深圳</span></p>
                    </div>
                </el-card>
                    <el-card class="box-card" style="margin-top: 20px;">
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <!-- <el-table-column
                            prop="name"
                            label="品牌">
                        </el-table-column>
                        <el-table-column
                            prop="todayBuy"
                            label="今日销售额">
                        </el-table-column>
                        <el-table-column
                            prop="monthBuy"
                            label="本月销售额">
                        </el-table-column>
                        <el-table-column
                            prop="totalBuy"
                            label="总销售额">
                        </el-table-column>  -->
                        <!-- 这里的原理是什么？？？？？？ -->
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" 
                    :prop="key" :label="val"/>
                    </el-table>
                </el-card>
                

            </el-col>
            <el-col :span="16">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{display : 'flex', padding:0}">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}">
                        </i>
                        <div class="information" style="align-self: flex-start;">
                            <p class="price">￥{{ item.value }}</p>
                            <p class="desc">{{ item.name}}</p>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: 'vivo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '苹果',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '小米',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '三星',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '魅族',
                    todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    }
                ],
                tableLabel: {
                    name: '品牌',
                    todayBuy:'今日销售额',
                    monthBuy:'本月销售额',
                    totalBuy:'总销售额',
                },
                countData: [
                    {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                    },
                    {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                    },
                    {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    },
                    {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                    },
                    {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                    },
                    {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    },
                ],
            }
        }
    }
</script>


<style lang="less" scoped>
    .user{
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        img{
            margin-right: 40px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .name{
            font-size: 32px;
            margin-bottom: 10px;
        }
        .access{
            color: #999999;
        }
    }
    .login-info{
        p{
            line-height: 28px;
            font-size: 14px;
            color: #999999;
            span{
                color: #666666;
                margin-left: 60px;
            }
        }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card{
            margin-bottom: 20px;
            width: 32%;
        }
        .icon{
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height:80px;
            color: #fff;
            margin-right: 5px;
        }
        .information{
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .price{
                font-size: 30px;
                margin-top: 10px;
            }
            .desc{
                font-size: 14px;
                color: #999;
                text-align: center;
            }
        }
    }
</style>