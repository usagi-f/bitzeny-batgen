<template>
  <el-card class="box-card">
    <p>
      Created by <a href="https://github.com/usagi-f" target="_blank">@usagi-f</a>
      <span class="original">(Original: <a href="https://github.com/koki-koba" target="_blank">@koki-koba</a>)</span>
    </p>
    <p>
      投げ銭：ZobavRBBSXkZiUj4Mv3mK8pjXc6jN2j88T
    </p>
  </el-card>
</template>

<script>
export default {
  name: 'author'
}
</script>

<style scoped>
a {
  color: #409eff;
}
a:hover {
  text-decoration: none;
}
.box-card {
  margin-top: 20px;
}
.original {
  font-size: 14px;
  color: #888;
  margin-left: 10px;
}
</style>
