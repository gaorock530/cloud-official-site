<template>
  <Main>
    <div class="container ">
      <div class="support-wrapper">
        <aside>
          <div class="top">
            <p>全部文档</p>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24" fill="#666"><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>
          </div>
          <h1>云服务器 （CVM）</h1>
          <el-collapse accordion :model-value="activeMenu[0]">
            <el-collapse-item :title="m.t" :name="mI" v-for="(m, mI) in menu" :key="mI">
              <ul>
                <router-link :to="s.to" v-for="(s, sI) in m.sub" :key="sI">
                  <li :class="{active: (mI === activeMenu[0] && sI === activeMenu[1])}" @click.stop.capture="onMenuActiveChange([mI, sI])">{{s.t}}</li>
                </router-link>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </aside>
        <main>
          <el-breadcrumb :separator-icon="ArrowRight" :style="{fontSize: '1rem'}">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>云服务器 （CVM）</el-breadcrumb-item>
            <el-breadcrumb-item>产品介绍</el-breadcrumb-item>
            <el-breadcrumb-item class="active-color">云服务器概述</el-breadcrumb-item>
          </el-breadcrumb>
          <section class="title">
            <h1>云服务器概述</h1>
            <p>最新更新时间:2019-08-13 13:08:00</p>
          </section>
          <section class="para">
            <h1>简介</h1>
            <p>云服务器(Cloud Virtual Machine,CVM)是在云中提供可扩展的计算服务，避免了使用传统服务器是需要预估资源用量和前期投入的情况。通过使用CVM，您可以在短时间内快速启动任意数量的云服务器并即时部署应用程序。CVM支持用户自定义一切资源:CPU、内存、硬盘、网络、安全等等，并可在访问量和负载等需求发生变化时轻松调整它们。</p>
          </section>
          <section class="para">
            <h1>简介</h1>
            <p>云服务器(Cloud Virtual Machine,CVM)是在云中提供可扩展的计算服务，避免了使用传统服务器是需要预估资源用量和前期投入的情况。通过使用CVM，您可以在短时间内快速启动任意数量的云服务器并即时部署应用程序。CVM支持用户自定义一切资源:CPU、内存、硬盘、网络、安全等等，并可在访问量和负载等需求发生变化时轻松调整它们。</p>
          </section>
          <section class="para">
            <h1>简介</h1>
            <p>云服务器(Cloud Virtual Machine,CVM)是在云中提供可扩展的计算服务，避免了使用传统服务器是需要预估资源用量和前期投入的情况。通过使用CVM，您可以在短时间内快速启动任意数量的云服务器并即时部署应用程序。CVM支持用户自定义一切资源:CPU、内存、硬盘、网络、安全等等，并可在访问量和负载等需求发生变化时轻松调整它们。</p>
          </section>
          <section class="para">
            <h1>简介</h1>
            <p>云服务器(Cloud Virtual Machine,CVM)是在云中提供可扩展的计算服务，避免了使用传统服务器是需要预估资源用量和前期投入的情况。通过使用CVM，您可以在短时间内快速启动任意数量的云服务器并即时部署应用程序。CVM支持用户自定义一切资源:CPU、内存、硬盘、网络、安全等等，并可在访问量和负载等需求发生变化时轻松调整它们。</p>
          </section>
          <section class="para">
            <h1>简介</h1>
            <p>云服务器(Cloud Virtual Machine,CVM)是在云中提供可扩展的计算服务，避免了使用传统服务器是需要预估资源用量和前期投入的情况。通过使用CVM，您可以在短时间内快速启动任意数量的云服务器并即时部署应用程序。CVM支持用户自定义一切资源:CPU、内存、硬盘、网络、安全等等，并可在访问量和负载等需求发生变化时轻松调整它们。</p>
          </section>
          <section class="para">
            <h1>简介</h1>
            <p>云服务器(Cloud Virtual Machine,CVM)是在云中提供可扩展的计算服务，避免了使用传统服务器是需要预估资源用量和前期投入的情况。通过使用CVM，您可以在短时间内快速启动任意数量的云服务器并即时部署应用程序。CVM支持用户自定义一切资源:CPU、内存、硬盘、网络、安全等等，并可在访问量和负载等需求发生变化时轻松调整它们。</p>
          </section>
        </main>
        <!-- <div class="nav">
          <h2>本页目录</h2>
          <ul>
            <li>相关概念</li>
            <li>相关服务</li>
            <li>使用CVM</li>
          </ul>
        </div> -->
      </div>
    </div>
  </Main>
</template>

<script>
import Main from '@/components/Main.vue'
import { Expand } from '@element-plus/icons-vue'
export default {
  components: { Main, Expand },
  data() {
    return {
      activeMenu: [0, 0],
      menu: [
        {
          t: '产品简介',
          sub: [
            {t: '云服务器概述', to: '/'},
            {t: '地域和可用区', to: '/'},
            {t: '功能与优势', to: '/'},
            {t: '应用场景', to: '/'},
          ]
        },
        {
          t: '快速入门',
          sub: [
            {t: '云服务器概述', to: '/'},
            {t: '地域和可用区', to: '/'},
            {t: '功能与优势', to: '/'},
            {t: '应用场景', to: '/'},
          ]
        },
        {
          t: '最佳实践',
          sub: [
            {t: '云服务器概述', to: '/'},
            {t: '地域和可用区', to: '/'},
            {t: '功能与优势', to: '/'},
            {t: '应用场景', to: '/'},
          ]
        },
        {
          t: '运维指南',
          sub: [
            {t: '云服务器概述', to: '/'},
            {t: '地域和可用区', to: '/'},
            {t: '功能与优势', to: '/'},
            {t: '应用场景', to: '/'},
          ]
        },
        {
          t: '常见问题',
          sub: [
            {t: '云服务器概述', to: '/'},
            {t: '地域和可用区', to: '/'},
            {t: '功能与优势', to: '/'},
            {t: '应用场景', to: '/'},
          ]
        }
      ]
    }
  },
  methods: {
    onMenuActiveChange(menuArr) {
      this.activeMenu = menuArr
    }
  }
}

</script>

<style lang="scss" scoped>
.support-wrapper {
  display: flex;
  padding: 2rem 0;

  .top {
    display: flex;
    align-items: center;
    color: #666;
    p {
      flex: 1;
    }
  }

  h1 {
    padding: 1rem 0;
  }

  aside {
    width: 243px;
    height: 100%;
    min-height: 100vh;
    background-color: #eee;
    padding: 1rem 2rem;

    ul {
      padding-left: 1rem;
      li {
        padding: 0.5rem 0;
        &.active, &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  main {
    padding: 0 1rem;
    flex: 1;

    section {
      padding: 1rem 0;
      &.title {
        h1 {
          padding: 0.5rem 0;
        }
        padding: 2rem 0 3rem 0;
      }
    }
  }

  // .nav {
  //   position: fixed;
  //   width: 100px;
  //   right: 0;
  //   top: 70px;
  //   background-color: #acacac;
  // }

}
:v-deep .el-collapse .el-collapse-item__header{
  background-color: transparent !important;
}

:v-deep .el-collapse .el-collapse-item__wrap {
  background-color: transparent !important;
}

:v-deep .el-breadcrumb .el-breadcrumb__item.active-color .el-breadcrumb__inner{
  color: var(--primary-color) !important;
}
</style>

