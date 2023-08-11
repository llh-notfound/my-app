<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="tabAside" icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/images/neuro-sama.jpg" class="user" alt="用户头像">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            tabAside(){
                this.$store.commit('collapseMenu')
            }
        }
    }
</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    // 垂直居中
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content {
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;
                &.is-link {
                    color: #666
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff
                }
            }
        }
    }
}
</style>