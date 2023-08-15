import http from '../utils/request.js'

//先定义请求首页数据的接口

export const getData = () => {
    return http.get('/home/getData')
}

// const getData = function(){
//     return http.get('/home/getData')
// }

// export {getData}

export const getUser = (params) => {
    console.log(params, 'params')
    // 返回用户列表
    return http.get('/user/getUser', params)
}

export const addUser = (data) => {
    return http.post('/user/add', data)
}

export const editUser = (data) => {
    return http.post('/user/edit', data)
}

export const delUser = (data) => {
    return http.post('/user/del', data)
}