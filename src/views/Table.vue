<template>
  <el-table :data="tableData" style="width: 100%"
    stripe  border>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column label="年龄">
      <template slot-scope="scope"> {{ scope.row.age }} 周岁 </template>
    </el-table-column>
    <el-table-column prop="gender" label="性别"> </el-table-column>
    <el-table-column prop="married" label="婚否">
      <template slot-scope="scope">
        {{ scope.row.married ? "已婚" : "未婚" }}
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button 
          @click="del(scope.$index)"
          type="danger" icon="el-icon-delete" circle></el-button>
      </template>

    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: "亮亮", age: 18, gender: "男", married: false },
        { name: "晓宇", age: 16, gender: "女", married: false },
        { name: "小新", age: 28, gender: "男", married: false },
        { name: "涛哥", age: 38, gender: "男", married: true },
      ],
    };
  },
  methods: {
    del(index){
      alert(index)
    }
  }
};
</script>