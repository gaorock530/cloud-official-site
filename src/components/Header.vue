<template>
  <header>
    <div><img src="/assets/header/logo.png" /></div>
    <nav>
      <router-link to="/"><li>首页</li></router-link>
      <router-link to="/news"><li>新闻动态</li></router-link>
      <router-link to="/productlist"><li>产品</li></router-link>
      <router-link to="/solution"><li>解决方案</li></router-link>
      <router-link to="/support"><li>文档中心</li></router-link>
      <router-link to="/about"><li>关于我们</li></router-link>
    </nav>
    <ul class="utils">
      <router-link to="/notice"><li>公告</li></router-link>
      <router-link to="/login"><li>登陆</li></router-link>
    </ul>
    <div class="mininav">
      <div class="mini-header"><img :src="miniOpen?miniCloseUrl:miniOpenUrl" @click="miniOpen = !miniOpen" /></div>
      <ul v-if="miniOpen" @click="onMiniNavClick">
        <router-link to="/"><li>首页</li></router-link>
        <router-link to="/news"><li>新闻动态</li></router-link>
        <router-link to="/productlist"><li>产品</li></router-link>
        <router-link to="/solution"><li>解决方案</li></router-link>
        <router-link to="/support"><li>文档中心</li></router-link>
        <router-link to="/about"><li>关于我们</li></router-link>
        <router-link to="/notice"><li>公告</li></router-link>
        <router-link to="/login"><li>登陆</li></router-link>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      miniOpen: false,
      miniOpenUrl: '/assets/icon/menu.svg',
      miniCloseUrl: '/assets/icon/close.svg'
    }
  },
  methods: {
    onMiniNavClick(e) {
      this.miniOpen = false
    },
    onResize() {
      if (this.miniOpen !== false) this.miniOpen = false
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  }
}

</script>


<style lang="scss">

header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--header-height);
  background-color: var(--primary-color) ;
  color: #fff;
  z-index: 999;
  padding: 0 1rem;

  img {
    height: 30px;
    object-fit: contain;
  }

  li {
    display: inline-block;
    padding: 0 0.5rem;
    margin: 0 1rem;
    font-size: 1.1rem;
  }

  nav {
    padding: 0 2rem;
    flex: 1;
  }

  .mininav {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    .mini-header {
      position: relative;
      width: 100%;
      height: var(--header-height);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 1rem;

      img {
        cursor: pointer;
        height: 35px;
        object-fit: contain;
      }
    }

    ul {
      position: relative;
      width: 100%;
      height: 100vh;
      background-color: #fff;
      color: #000;
      a {
        display: block;
        width: 90%;
        margin: 0 auto;
        padding: 2rem 0;
        border-bottom: 1px solid #aaa;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

}

@media screen and (max-width: 822px) {
  header {
    nav {
      display: none;
    }
    .utils {
      display: none;
    }
    .mininav {
      display: initial;
    }
  }
}

</style>
