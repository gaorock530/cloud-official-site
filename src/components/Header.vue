<template>
  <header>
    <div><img src="/assets/header/logo.png" /></div>
    <nav @mouseenter="onEnter" @mouseleave="onLeave">
      <router-link to="/"><li>首页</li></router-link>
      <router-link to="/news"><li>新闻动态</li></router-link>
      <router-link to="/productlist"><li>产品</li></router-link>
      <router-link to="/solution"><li>解决方案</li></router-link>
      <router-link to="/support"><li>文档中心</li></router-link>
      <router-link to="/about"><li>关于我们</li></router-link>
      <div class="secondary-menu" v-show="showMenu">
        <div class="left">
          <div class="search">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
            <input placeholder="搜索产品"/>
          </div>
          <ul>
            <li><router-link to="/">热门</router-link></li>
            <li :class="{active: idx === cateIdx}" v-for="(c,idx) in cateList" :key="idx" @mouseenter="changeCate(idx)"><router-link to="/">{{c}}</router-link></li>
            <li><router-link to="/productlist">
              查看所有产品
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </router-link></li>
          </ul>
        </div>
        <div class="right">
          <h2>{{menuData[cateIdx].cate}}</h2>
          <el-row :gutter="20">
            <el-col :md="8" v-for="(p, idx) in menuData[cateIdx].sub" :key="idx">
              <div class="grid-content">
                <h5>{{p.name}}</h5>
                <p>{{p.desc}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </nav>

    <ul class="utils">
      <router-link to="/notice"><li>公告</li></router-link>
      <a href="https://11.141.41.129:60008/" target="_self"><li>登录</li></a>
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
        <a href="https://11.141.41.129:60008/" target="_self"><li>登录</li></a>
      </ul>
    </div>
  </header>
</template>

<script>
import menuData from '@/data/products.js'

export default {
  data() {
    return {
      menuData,
      showMenu: false,
      miniOpen: false,
      miniOpenUrl: '/assets/icon/menu.svg',
      miniCloseUrl: '/assets/icon/close.svg',
      cateIdx: 0,
      cateList: ['计算', '储存', '网络']
    }
  },
  methods: {
    onMiniNavClick(e) {
      this.miniOpen = false
    },
    onResize() {
      if (this.miniOpen !== false) this.miniOpen = false
    },
    onEnter() {
      this.showMenu = true
    },
    onLeave() {
      this.showMenu = false
    },
    changeCate(idx) {
      this.cateIdx = idx;
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
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
    flex: 1;

    .secondary-menu {
      position: absolute;
      width: 82%;
      min-height: 311px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      top: var(--header-height);
      display: flex;
      color: #000;
      box-shadow: 0 5px 10px rgba(#000, 0.1);
      overflow: hidden;

      .left {
        width: 190px;
        padding: 3rem 2rem 0 2rem;
        border-right: 1px solid #eee;

        .search {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding: 5px 0;

          svg {
            width: 25px;
            fill: #999;
          }

          input {
            border: none;
            background-color: transparent;
            outline: none;
            width: 120px;
            padding: 0 .5rem;
          }
        }

        ul {
          padding: 1rem 0;
          // background-color: #aaa;


          li {
            padding: 0;
            margin: 0;
            display: block;
            &.active {
              color: var(--primary-color);
            }

            a {
              padding: 0.7rem 0;
              display: flex;
              align-items: center;
            }

            svg {
              fill: #999;
            }
          }
        }
      }
      .right {
        flex: 1;
        padding: 3rem;

        h2 {
          color: #333;
          padding: 0.5rem 0;
          font-weight: normal;
        }

        .grid-content {
          margin: 10px 0;
          h5 {
            color: #333;
            padding-bottom: 5px;
          }
          p {
            color: #888;
          }
        }
      }
    }
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

@media screen and (max-width: 836px) {
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
