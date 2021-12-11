<template>
  <Main>
    <div class="test">
      {{a}}
      <img alt="Vue logo" src="./assets/logo.png" />
      <el-button>I am ElButton</el-button>
    </div>
  </Main>
</template>

<script>
import Main from '@/components/Main.vue'
export default {
  components: { Main }
}
</script>
