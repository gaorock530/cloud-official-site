<template>
  <Main>
    <div class="wrapper">
      <!-- content -->
      <!-- :xs="4" :sm="6" :md="8" :lg="9" :xl="11" -->
      <el-row :gutter="1">
        <el-col :xs="24" :sm="12" :md="12" :lg="l.active?10:7" v-for="(l, i) in list" :key="l.c">
          <div class="grid-content" @mouseenter="hover(i)">
            {{l.c}}
          </div>
        </el-col>
      </el-row>

    </div>
  </Main>
</template>

<script>
import Main from '@/components/Main.vue'
export default {
  components: { Main },
  data() {
    return {
      list: [
        {c: '123', active: true},
        {c: '234'},
        {c: '345345'},
      ]
    }
  },
  methods: {
    hover(idx) {
      this.list = this.list.map((l, index) => {
        l.active = index === idx
        return l
      })
    }
  }
}

</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
  background-color: #eee;
}

.grid-content {
  background-color: red;
  height: 200px;
  margin: 10px 0;


}

</style>
