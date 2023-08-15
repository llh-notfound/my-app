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
            console.log(state,'114514')
            if(val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if(index === -1 ){
                    state.tabsList.push(val)
                }
            }

        }
    }
}