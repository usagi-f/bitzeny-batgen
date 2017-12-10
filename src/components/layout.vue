<template>
  <el-container>
    <el-header>
      <TitleHeader/>
    </el-header>
    <el-main>
      <Contents/>
      <Author/>
    </el-main>
  </el-container>
</template>

<script>
import TitleHeader from '@/components/title-header.vue'
import Contents from '@/components/contents.vue'
import Author from '@/components/author.vue'

export default {
  name: 'Layout',
  components: {
    TitleHeader,
    Contents,
    Author
  }
}
</script>
