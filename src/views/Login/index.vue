<template>
  <div class="login-page">
    <!-- <form>
      <el-input v-model="username" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><avatar /></el-icon>
        </template>
      </el-input>
      <el-input v-model="password" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
        <template #suffix>
          <el-icon><circle-close /></el-icon>
        </template>

      </el-input>
    </form> -->
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import { Avatar, Lock, CircleClose } from '@element-plus/icons-vue'
export default {
  components: { Main, Avatar, Lock, CircleClose },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}

</script>

<style lang="scss">
.login-page {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-image: url('assets/login/login1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  form {
    position: fixed;
    right: 5%;
    top: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    background-color: #fff;
  }
}
</style>
