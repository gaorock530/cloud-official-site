
<template>
  <el-container>
    <Header />
    <Main>
      <div class="test">
        {{a}}
        <img alt="Vue logo" src="./assets/logo.png" />
        <el-button>I am ElButton</el-button>
      </div>
    </Main>

    <el-footer class="bg">Footer</el-footer>
  </el-container>

</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
  components: { Header, Main },
  data() {
    return {
      a: 'old text'
    }
  }
  // setup() {
  //   return {
  //     a: 'text'
  //   }
  // },
}
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.test {
  height: 1000px
}
.bg {
  background-color: #2c3e50;
  color: #fff;
}
</style>
