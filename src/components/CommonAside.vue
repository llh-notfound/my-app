<template>
    <div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
        @open="handleOpen" @close="handleClose"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
                   <!-- 三元表达式 -->
            <h3>{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
            <el-menu-item   v-for="item in noChildren" @click="clickMenu(item)"
            :key="item.name" :index="item.path" >
                <!-- 动态绑定（v-bind），同时使用模板字符串 -->
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
            <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subchildren in item.children" :key="subchildren.name">
                    <!-- 记得动态绑定要用: !!! -->
                    <el-menu-item  @click="clickMenu(subchildren)"
                    :index="subchildren.path">
                        {{ subchildren.label }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item> -->
        </el-menu>

    </div>
</template>

  
<script>
export default {
    data() {
        return {
            // isCollapse: false,
            menuData: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item){
            console.log(item);
            //实现路由跳转关键代码！把路径推到路由里面！
            //或者用routerlink

            //判断如果跳转路由与当前路由相同则不发生跳转  否则会报错
            //但是更好的方法是直接配置element-ui的<el-menu>整个大的字段的router属性
            // if(this.route.path !== item.path && 
            // (this.route.path === '/home') && (item.path === '/')){
            //     this.$router.push(item.path);
            // }
            this.$store.commit('selectMenu', item)
        },
        //测试输出
        printPath(item) {
            console.log(item.path);
        }
    },
    computed:{
        //有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children);
        },

        //没有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children);
        },

        isCollapse() {
            return this.$store.state.tab.isCollapse;
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu{
    height: 100vh;
    
    //有细线边框基本和border有关
    border-right: none;
    h3 {
        color: white;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}



</style>