<template>
  <Main>
    <section class="top">
      <div class="top-title container">
        <div class="top-title-big"> 央行云PaaS平台解决方案 </div>
        <div class="top-title-little">央行云PaaS平台是基于Kubernetes及成熟中间件构建的敏捷PaaS平台，帮助用户实现IT敏捷化改造，赋能数字化转型</div>
      </div>
    </section>
    <section class="sec-1 container">
      <h1>方案优势</h1>
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in programData" :key="item.t">
          <div class="grid-content">
            <img :src="item.img" />
            <div class="card">
              <h3>{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <section class="sec-2">
      <h1>方案优势</h1>
      <ul class="sec-2-tabs">
        <li v-for="item in tabData" :key="item.icon" :class="{active: item.id === tabActiveId}" @click="onTabChange(item.id)">
          <span>{{item.t}}</span>
        </li>
      </ul>
    </section>

    <section class="sec-3">
      <div class="container">
        <div class="row">
          <el-row :gutter="120">
            <el-col :sm="10" >
              <img class="first-child" src="/assets/solution/bg3/bg3-1.png" />
            </el-col>
            <el-col :sm="14">
              <div class="grid-content">
                <h4>用户痛点</h4>
                <ul>
                  <li>原生平台界面不友好，稳定性不足；原生Kuberbetes没有应用一级的封装，同时又提供繁多的资源定义和非常灵活的管理方式，难以实现应用的标准化交付和自动化运维。</li>
                  <li>应用对运行环境不透明，不能真正实现跨平台的部署交付。</li>
                  <li>应用支撑的PaaS组件需要用户自己部署和维护，建设和运维成本高。</li>
                </ul>
                <h4>原生PaaS平台能力</h4>
                <ul>
                  <li>以应用为中心，提供应用全生命周期管理能力，支持PaaS组件与业务工作负载的统一管理。</li>
                  <li>提供丰富和成熟的PaaS产品，包括分布式数据、消息队列、微服务平台、智能网关等，以及各种主流的开源PaaS软件。</li>
                  <li>提供标准的服务接口，支持应用实例和PaaS实例接入平台统一的监控告警及日志系统。</li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="row">
          <el-row :gutter="120">
            <el-col :sm="14">
              <div class="grid-content">
                <h4>PaaS服务平台</h4>
                <ul>
                  <li>需要平台提供功能完备、运行稳定、高性能的PaaS服务，以支撑不同业务应用的交付，包括分布式存储、数据库、分布式队列、微服务框架等</li>
                  <li>面向运维团队，提供PaaS组件的基础运维能力。</li>
                  <li>需要平台具备PaaS组件与业务工作负载的统一编排能力。</li>
                </ul>
                <h4>原生PaaS平台能力</h4>
                <ul>
                  <li>以应用为中心，提供应用全生命周期管理能力，支持PaaS组件与业务工作负载的统一管理。</li>
                  <li>提供丰富和成熟的PaaS产品，包括分布式数据、消息队列、微服务平台、智能网关等，以及各种主流的开源PaaS软件。</li>
                  <li>提供标准的服务接口，支持应用实例和PaaS实例接入平台统一的监控告警及日志系统。</li>
                </ul>
              </div>
            </el-col>
            <el-col :sm="10">
              <img class="last-child" src="/assets/solution/bg3/bg3-2.png" alt="">
            </el-col>
          </el-row>
        </div>
      </div>



    </section>



    <section class="sec-4">
      <div class="container">
        <h1>推荐产品</h1>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in recommendData" :key="item.t">
            <div class="grid-content">
              <img :src="item.img" />
              <div class="card">
                <h4>{{item.title}}</h4>
                <p>{{item.content}}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </Main>
</template>

<script>
import Main from '@/components/Main.vue'
import { ArrowRight } from '@element-plus/icons-vue'
export default {
  components: { Main, ArrowRight },
  data() {
    return {
      tabActiveId: 1,
      programData: [
        { img: 'assets/solution/logo1.png', title: '应用视角', content: '央行云PaaS平台以应用为第一视角，以平台适配应用为设计理念，从应用视角统一整合资源、数据库、中间件等应用管理相关对象。' },
        { img: 'assets/solution/logo2.png', title: '云原生融合', content: '基于云原生容器以及微服务技术，全面拥抱kubernetes生态，为用户提供生产级增值功能。', },
        { img: 'assets/solution/logo3.png', title: '底层资源解耦', content: '央行云PaaS平台实现了对底层资源的解耦，并通过兼容性认证，可以基于各种公有云、私有云或物理环境进行交付', },
        { img: 'assets/solution/logo4.png', title: '成熟PaaS产品', content: '搭载央行云众多成熟的PaaS产品，包括分布式数据库、消息队列、微服务平台等，开箱即用，提供统一的使用和运维体验。', }
      ],
      recommendData: [
        { img: 'assets/solution/bg3/logo1.png', title: '容器服务平台TKE', content: '基于原生kubernets提供以容器为核心的 高度可扩展的高性能容器管理服务。' },
        { img: 'assets/solution/bg3/logo2.png', title: '分布式数据库', content: '稳定、安全、高性能的分布式数据库， 兼容PostgreSQL和MySQL', },
        { img: 'assets/solution/bg3/logo3.png', title: '消息队列', content: '基于消息的异步通信机制，能够将分布 式部署的不同应用中的信息传递。', },
        { img: 'assets/solution/bg3/logo4.png', title: 'API网管', content: '能提供API的完整生命周期管理，包括 创建、维护、发布、运行、下线等', }
      ],
      tabData: [
        { id: 1, t: '云原生应用交付' },
        { id: 2, t: 'PaaS服务平台' }
      ]
    }
  },
  methods: {
    onTabChange(id) {
      this.tabActiveId = id
      // API request here...
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background-image: url("/assets/Solution/bg1.png");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  .top-title {
    padding-top: 121px;
    .top-title-big {
      font-size: 40px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
    }
    .top-title-little {
      margin-top: 15px;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
    }
  }
}

.sec-1 {
  h1 {
    font-size: 2.4rem;
    text-align: center;
    padding: 5rem 0 1rem 0;
  }
  .grid-content {
    margin: 20px 0;
    padding: 3rem 5rem;
    display: flex;
    align-items: flex-start;


    img {
      width: 50px;
      object-fit: contain;
    }
    .card {
      padding: 0 2rem;
      h3 {
        font-size: 1.4rem;
        padding-bottom: 0.5rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
}

.sec-2 {
  text-align: center;
  padding: 1rem 1rem 5rem 1rem;
  background-color: #FAFBFC;

  h1 {
    font-size: 2.4rem;
    text-align: center;
    padding: 5rem 0 1rem 0;
  }
  .sec-2-tabs {
    display: flex;
    padding-top: 2rem;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    li {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      cursor: pointer;
      justify-content: flex-end;
      margin: 0 5rem;
      font-size: 1.1rem;

      &.active {

        &::after {
          content: "";
          position: absolute;
          width: 80%;
          height: 2px;
          background-color: var(--primary-color);
          bottom: 0;
        }
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 8px solid var(--primary-color);
          bottom: 0;
        }
      }
      &:hover {
        color: var(--primary-color);
      }
    }
  }
}

.sec-3 {
  background-color: #FAFBFC;
  padding-bottom: 5rem;
  .row {
    padding: 2rem 0;
  }

  .grid-content {
    h4 {
      font-size: 1.3rem;
      padding: 1rem 0;
    }
    ul {
      padding: 1rem 0;

      li {
        line-height: 2rem;
        font-size: 1.1rem;

        &::before {
          content: '●';
          padding-right: 0.5rem;
          color: #ccc;
        }
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
  }



}

.sec-4 {
  padding-bottom: 5rem;
  h1 {
    font-size: 2.4rem;
    text-align: center;
    padding: 5rem 0;
  }
  .grid-content {
    box-shadow: 0 0 10px rgba(#000, 0.1);
    display: flex;
    padding: 2rem;
    cursor: pointer;
    margin: 10px 0;

    &:hover {
      outline: 1px solid var(--primary-color);
    }

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
    .card {
      flex: 1;
      padding-left: 2rem;
      h4 {
        font-size: 1.2rem;
        padding-bottom: 0.3rem;
      }
      p {
        color: #666;
      }
    }
  }
}

</style>
