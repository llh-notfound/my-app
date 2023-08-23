<template>
    <div class="manage">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%" :before-close="handleClose">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" :inline="true" >
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker
              v-model="form.birth"
              type="date"
              value-format="yyyy-MM-DD"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="地址" prop="addr">
            <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
          </el-form-item>
          
        </el-form>
        <!-- <span>这是一段信息</span> -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
      <div class="manage-header">
        <el-button @click="handleAdd" type="primary">
          +新增
        </el-button>
        <template>
        <el-input
          style="width: 400px;"
          v-model="search"
          size="mini"
          placeholder="输入ID关键字搜索"/>
      </template>
      </div>
      <el-table
          height="90%"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="订阅号名称"
            width="180">
            <template slot-scope="scope">
                <span>{{ scope.row.sex == 1 ? '男' : '女' }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="age"
            label="订阅号描述">
          </el-table-column>
          <el-table-column
            prop="birth"
            label="订阅号状态">
          </el-table-column>
          <el-table-column
            prop="addr"
            label="新增日期">
          </el-table-column>
          <el-table-column
            prop=""
            label="修改日期">
          </el-table-column>
          <el-table-column
              prop="addr"
              label="操作">
              <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                  <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
      <div class="">
        <!-- 事件用@绑定！！！ -->
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          
          @current-change="handlePage">

        </el-pagination>
      </div>
    </div>
</template>


<script>
import { getUser, addUser, editUser, delUser } from '../api'
  export default {
    data () {
      return {
        dialogVisible: false, 
        form:{
          name:"",
          age:"",
          sex:"",
          birth:"",
          addr:"",
        },
        rules:{
          name: [
            { required: true, message: "请输入姓名"}
          ],
          age: [
            { required: true, message: "请输入年龄"}
          ],
          sex:[
            { required: true, message: "请选择性别"}
          ],
          birth:[
            { required: true, message: "请选择出生日期"}
          ],
          addr:[
            { required: true, message: "请输入地址"}
          ]
        },
        tableData: [

        ],
        mockListData:[

        ],
        search:'',
        
        total: 0,     //用于分页，记录字段的总数
        modalType : 0, //0表示新增，1表示编辑
        pageData:{
          name: '',
          page : 1,
          limit : 10
        }
      }
    },
    methods:{
      submit(){
        this.$refs.form.validate((valid)=> {
          if(valid){
            if(this.modalType === 0){
              addUser(this.form).then(()=>{
                // 先增加然后再调用获取数据的接口来刷新界面
                this.getList()
              })
            }else{
              editUser(this.form).then(()=>{
                // 先编辑然后再调用获取数据的接口来刷新界面
                this.getList()
              })
            }
            //由于使用双向绑定，form存储的就是用户信息
            console.log(this.form,'form')
            //重置form数据,然后关闭弹窗
            this.$refs.form.resetFields()
            this.dialogVisible = false
            //
          }
        })
      },
      //弹窗关闭时固定触发
      handleClose(){
        console.log(this.form,'close form')
        this.$refs.form.resetFields()
        this.dialogVisible = false
      },
      cancel(){
        this.handleClose()
      },
      handleEdit(row){
        this.modalType = 1
        this.dialogVisible = true
        //对当前行数据进行深拷贝
        this.form = JSON.parse(JSON.stringify(row))
      },
      handleDelete(row){
        console.log(row)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delUser({id : row.id}).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
              
            });
            this.getList()
          });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
       });
      },
      handleAdd(){
        this.modalType = 0
        this.dialogVisible = true
      },
      getList(){
        getUser({params : this.pageData}).then(({data}) => {
          this.mockListData = data.mockList
          this.tableData = data.list
          // console.log(data, 'data')
          // console.log(this.mockListData, 'mocklist')
          // console.log('data.count', data.count)
          // console.log('data.list', data.list)
          this.total = data.count || 0
          //this.total = this.filteredData.length
      })
      },
      handlePage(val){
        console.log(val,'page')
        this.pageData.page = val
        this.getList()
      },
      

    },
    mounted(){
      this.getList()

    },
    updated(){
      //console.log(this.filteredData,'filteredData')
      console.log(this.tableData,'tableData')
    },
    computed:{
      // 自己写的筛选搜索关键字函数，但是没看到接口已经定义了这个方法,废弃之
      filteredData(){
        if(this.search === ''){
          return this.tableData
        }else{
          return this.tableData.filter(item => {
            return item.name.toLowerCase().includes(this.search.toLowerCase());
          })
        }
      
      }
    },
    watch: {
        //监视属性，只要search一变化，就把值传给后端接口的参数：对象pageData
        search(newValue) {
          this.pageData.name = newValue; // 将搜索框的值赋给 pageData 的 name 字段
          // 刷新界面
          this.getList()
        }
    },
  }
</script>

<style lang="less" scoped>
.manage {
    height: 90%;
    .manage-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .common-tabel {
        position: relative;
        height: calc(100% - 62px);
        .pager {
            position: absolute;
            bottom: 0;
            right: 20px;
        }
    }
}
</style>