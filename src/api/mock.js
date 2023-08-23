import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'

//api之前要加斜杠！！！  /
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

Mock.mock('/api/user/add','post', user.createUser)
Mock.mock('/api/user/edit','post', user.updateUser)
Mock.mock('/api/user/del','post', user.deleteUser)
Mock.mock(/api\/user\/getUser/,'get', user.getUserList)
