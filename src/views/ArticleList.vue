<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140">
    </el-table-column>
    <el-table-column prop="body" label="内容" width="220">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {
      articles: []
    }
  },
  methods: {
    //抽取请求数据方法
    fetch() {
      this.$http.get('articles').then(res => {
        this.articles = res.data
      })
    },
    edit(id) {
      this.$router.push(`/article/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`article/${id}`).then(() => {
        this.$message({
          message: '文章删除成功',
          type: 'success'
        })
        this.fetch()
      })
    }
  },
  created() {
    this.fetch()
  }
};

</script>

<style scoped></style>
