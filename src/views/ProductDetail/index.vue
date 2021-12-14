<template>
  <Main>
    <div class="banner">
      <div class="container">
        <div class="banner-wrapper">
          <h1>云服务器CVM</h1>
          <p>云服务器（Cloud virtual Machine,CVM）提供安全可靠的弹性计算服务。您可以实时扩展或缩减计算资源，适应变化的业务需求，并只需按实际使用的资源计费。使用CVM可以极大的降低您的软硬件采购成本，简化IT运维工作</p>
          <router-link to="/">了解详情</router-link>
        </div>
      </div>
    </div>
    <section class="sec-1">
      <div class="tab-wrapper">
        <li class="active">产品规格</li>
        <li>产品特性</li>
      </div>
      <div class="tab-content container">
        <h1>产品规格</h1>
        <ul>
          <li v-for="item in [1,2,3]" :key="item">
            <el-row :gutter="0">
              <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                <div class="left">
                  <h3>通用型计算机S6</h3>
                  <p>广州</p>
                  <span>√ Intel Xeon Cascade Lake</span>
                  <span>√ 支持AVX-512指令集</span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <div class="mid">
                  <div>
                    <h5>内存</h5>
                    <p>2G</p>
                  </div>
                  <div>
                    <h5>云硬盘20G</h5>
                    <p>2G</p>
                  </div>
                  <div>
                    <h5>带宽</h5>
                    <p>5Mbps</p>
                  </div>
                  <div>
                    <h5>网络收发包能力</h5>
                    <p>25w pps</p>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                <div class="right">
                  <router-link to="/">立即选购</router-link>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </section>
    <section class="sec-2">
      <div class="container">
        <h1>产品特性</h1>
        <el-row :gutter="24">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="item in specData" :key="item.t">
            <div class="grid-content">
              <div class="card">
                <h3>{{item.t}}</h3>
                <p>{{item.p}}</p>
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
export default {
  components: { Main },
  data() {
    return {
      specData: [
        {t: '弹性计算', p: '在腾讯云上您可以在几分钟之内快速增加或删减CVM数量，以满足快速变化的业务需求。通过定义相关策略，您可以确保所有的CVM实列数量在需求高峰期无缝扩展，保证程序的可用性。在需求平淡期自动回落，以节省成本。'},
        {t: '安全网络', p: 'CVM提供多种类型的实例、操作系统和软件包。各实例中的CPU、内存、硬盘和贷款可以灵活调整，以满足您应用程序的资源需要。同时腾讯云市场提供第三方镜像及软件供您选择。'},
        {t: '稳定可靠', p: 'CVM提供大99.975%的服务可用性和9个9的数据可靠性。三副本存储策略的云硬盘、成熟的网络虚拟技术和网卡绑定技术、T3级以上的数据中心等联合保证数据和服务的高可用性。'},
        {t: '简单管理', p: '用户拥有CVM的管理员账号，对CVM有完全的控制权，您可以使用腾讯云控制台、API或CLI等工具登录到您的CVM实例，进行网络配置更改、重启等重要操作，这样管理CVM就像管理操作您的计算机一样简单方便。'},
        {t: '安全的网络', p: 'CVM运行在一个逻辑隔离的私有网络里，通过网络访问控制列表（Access Control List）和安全组，切实保证您云上资源的安全性。您还可以完全掌握您的私有网络环境配置，包括自定义网段划分、IP地址和路由策略等。'},
        {t: '全面防护', p: 'CVM提供免费的主机安全基础防护和基础DDoS防护能力，帮助企业构建服务器安全防护体系，解决当前服务器面临的主要网络安全风险，防止数据泄露，满足您的日常安全运营需求。'},
        {t: '费用低廉', p: 'CVM部署到云端，极大节省了您前期搭建基础网络设施的成本和后期的维护成本。CVM实例支持按量付费和包月包年两种计费方式，您可以根据使用场景灵活选择计费方式。在按量付费的模式下，您只需要为实际使用的计算资源付费。'},
        {t: '服务集成', p: 'CVM与腾讯云的大部分业务都可以做到高度集成，比如对象存储COS、私有网络VPC、云数据库TencentDB等，合力在计算、存储、网络传输方面为客户的业务提供完善的解决方案。'},
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.banner {
  height: 500px;
  background-image: url('/assets/details/bg1.png');
  background-position: center;
  background-size: cover;

  .banner-wrapper {
    padding: 5rem 0;

    h1 {
      padding: 1rem 0;
      font-size: 3rem;
    }
    p {
      padding: 1rem 0 6rem 0;
      max-width: 800px;
    }
    a {
      padding: 0.5rem 1.2rem;
      color: #fff;
      background-color: var(--primary-color);
      border-radius: 3px;
    }
  }
}

.sec-1 {
  .tab-wrapper {
    text-align: center;
    border-bottom: 2px solid #eee;

    li {
      position: relative;
      display: inline-block;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 3rem 1rem 1rem 1rem;
      margin: 0 5rem;
      cursor: pointer;
      &.active::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
        bottom: -2px;
        left: 0;
      }
    }
  }
  .tab-content {
    padding: 1rem 0 5rem 0;

    h1 {
      font-size: 2rem;
      padding: 4rem 0 2rem 0;
      text-align: center;
    }
    ul {
      li {
        background-color: #fafafa;
        box-shadow: 0 0 10px rgba(#000, 0.1);
        margin: 2rem 0;

        .left{
          padding: 1rem 2rem;
          min-height: 188px;
          background-color: var(--primary-color);
          color: #fff;

          h3 {
            font-size: 1.3rem;
            padding: 0.8rem 0;
          }
          p {
            padding-bottom: 3rem;
          }
          span {
            display: block;
            padding: 0.2rem 0;
          }

        }
        .mid {
          min-height: 188px;
          display: flex;
          align-items: center;
          justify-content: center;
          &>div {
            position: relative;
            flex: 1;
            width: max-content;
            padding: 0 2rem;
            text-align: center;

            h5 {
              padding-bottom: 1rem;
            }

            &:last-child::before {
              height: 100px;
            }

            &::before {
              content: '';
              position: absolute;
              height: 50px;
              width: 1px;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              background-color: #ddd;
            }
          }
        }
        .right {
          min-height: 188px;
          display: flex;
          align-items: center;
          justify-content: center;

          a {
            padding: 0.6rem 2rem;
            background-color: var(--primary-color);
            color: #fff;
            border-radius: 5px;
          }
        }

      }
    }
  }
}


.sec-2 {
  padding: 1rem 0;
  background-image: url('/assets/details/bg2.png');
  background-position: center;
  background-size: cover;

  h1 {
    text-align: center;
    padding: 2rem 0;
    font-size: 2rem;
  }
  .grid-content {
    padding: 1rem 0;

    .card {
      min-height: 200px;
      padding: 2rem 3rem;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(#000, 0.1);

      h3 {
        padding: 1rem 0;
        font-size: 1.4rem;
        font-weight: normal;
      }
      p {
        color: #666;
      }
    }
  }
}

</style>
