export default{
    state:{
        isCollapse:false,
        tabsList:[
            { 
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ]//面包屑数据
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state, val){
            // console.log(state)
            // console.log(val, 'val')
            // to do: 解决重复路由跳转的bug
            console.log(state,'114514')
            if(val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                console.log(index,'这是当前index')
                if(index === -1 ){
                    state.tabsList.push(val)
                }
            }

        }
    }
}