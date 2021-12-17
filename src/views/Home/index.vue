<template>
  <Main>
    <section class="sec-1">
      <el-carousel height="464px" :autoplay="true" trigger="click" indicator-position="outside" arrow="never">
        <el-carousel-item v-for="item in carousel" :key="item.h">
          <div class="carousel-wrapper" :style="{backgroundImage: `url(${item.img})`}">
            <div class="container carousel-text-wrapper">
              <div>
                <h1>{{item.h}}</h1>
                <p>{{item.p}}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="sec-2">
      <div class="sec-2-tab-wrapper ">
        <div class="container">
          <h1>我们的云产品</h1>
          <router-link to="/" class="view-all">
            <span>查看所有的产品</span>
            <el-icon><arrow-right /></el-icon>
          </router-link>
          <div class="sec-2-tabs">
            <li
              v-for="(cate, idx) in productsData"
              :key="idx"
              :class="{active: idx === tabActiveId}"
              @click="onTabChange(idx)">
              <img :src="cate.icon" />
              <span>{{cate.cate}}</span>
            </li>
          </div>
        </div>
      </div>
      <div class="sec-2-content">
        <div class="detail container">
          <el-row :gutter="24">
            <el-col :sm="12" :md="6" v-for="item in productsData[tabActiveId].sub" :key="item.ab">
              <div class="grid-content">
                <div>{{item.name}} {{item.ab?`(${item.ab})`:null}}</div>
                <p>{{item.desc}}</p>
                <!-- <ul>
                  <li v-for="li in item.l" :key="li">{{li}}</li>
                </ul> -->
                <!-- <router-link to="/product" class="btn">查看详情</router-link> -->
              </div>
            </el-col>
          </el-row>
        </div>

      </div>
    </section>
    <section class="sec-3">
      <div class="space"></div>
      <div class="sec-3-wrapper">
        <h1>我们的解决方案</h1>
        <router-link to="/" class="view-all">
          <span>查看更多</span>
          <el-icon><arrow-right /></el-icon>
        </router-link>
        <div class="wrapper">
          <el-row :gutter="0">
            <!-- :xs="8" :sm="6" :md="4" :lg="3" :xl="1" -->
            <el-col :class="{active: featureActiveId === idx}" :md="featureActiveId === idx?9:5" :sm="12" :xs="24"
            v-for="(item, idx) in featureData" :key="item.t">
              <div class="grid-content" :style="{ backgroundImage: `url(${item.bg})`}" @mouseenter="handleMouseEnter(idx)">
                <div class="icon">
                  <img :src="item.icon" />
                  <h2>{{item.t}}</h2>
                </div>
                <div class="more">
                  <p>{{item.l}}</p>
                  <li v-for="tag in item.p" :key="tag">√ {{tag}}</li>
                  <div><router-link to="/">查看详情</router-link></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

      </div>
    </section>
    <section class="sec-4">
      <h1>我们的特色</h1>
      <div class="container sec-4-wrapper">
        <el-row :gutter="50">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in lastSecData" :key="item.t">
            <div class="grid-content">
              <img :src="item.img" />
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
import { ArrowRight } from '@element-plus/icons-vue'
import productsData from '@/data/products.js'
export default {
  components: { Main, ArrowRight },
  data() {
    return {
      carousel: [
        {
          img: '/assets/home/big1.png',
          h: '云服务器 CVM',
          p: '云服务器（Cloud Virtual Machine，CVM）为您提供安全可靠的弹性计算服务。 只需几分钟，您就可以在云端获取和启用 CVM，来实现您的计算需求。随着业务需求的变化，您可以实时扩展或缩减计算资源。 CVM 支持按实际使用的资源计费，可以为您节约计算成本。使用 CVM 可以极大降低您的软硬件采购成本，简化 IT 运维工作。'
        },
        {
          img: '/assets/home/big2.png',
          h: '云硬盘 CBS',
          p: '云硬盘（Cloud Block Storage，CBS）为您提供用于 CVM 的持久性数据块级存储服务。云硬盘中的数据自动地在可用区内以多副本冗余方式存储，避免数据的单点故障风险。云硬盘提供多种类型及规格的磁盘实例，满足稳定低延迟的存储性能要求。云硬盘支持在同可用区的实例上挂载/卸载，并且可以在几分钟内调整存储容量，满足弹性的数据需求。您只需为配置的资源量支付低廉的价格就能享受到以上的功能特性。'
        },
        {
          img: '/assets/home/big3.png',
          h: '私有网络 VPC',
          p: '私有网络（Virtual Private Cloud，VPC）是基于M14-POC环境构建的专属云上网络空间，为您在M14-POC环境上的资源提供网络服务，不同私有网络间完全逻辑隔离。作为您在云上的专属网络空间，您可以通过软件定义网络的方式管理您的私有网络 VPC，实现 IP 地址、子网、路由表、网络 ACL 、流日志等功能的配置管理。私有网络还支持多种方式连接 Internet，如弹性 IP 、NAT 网关等，并提供多种计费方式和带宽包帮您节约成本。同时，您也可以通过 VPN 连接或专线接入连通M14-POC环境与您本地的数据中心，灵活构建混合云。'
        }
      ],
      productsData: productsData,
      tabActiveId: 0, // default idx
      featureData: [
        { bg: 'assets/home/bg3/bg3-1.png', icon: 'assets/home/bg3/logo1.png', t: '高性能计算', l:'通常使用很多处理器（作为单个机器的一部分）或者某一集群中组织的几台计算机（作为单个计 算资源操作）的计算系统和环境。',p:['高吞吐计算','分布计算','按需可扩展性','支持MPI并行消息接口'], active: true},
        { bg: 'assets/home/bg3/bg3-2.png', icon: 'assets/home/bg3/logo2.png', t: '应用上云',l:'能够提供一种快速构建跨区域VPC及云上多VPC与云下多数据中心之间的高速、优质、稳定的网络能力',p:['重复性的执行动作','自助式服务','基础环境的复制','节约时间']},
        { bg: 'assets/home/bg3/bg3-3.png', icon: 'assets/home/bg3/logo3.png', t: '容器',l:'提供高性能可伸缩的容器应用管理能力，支持企业级容器化应用的全生命周期管理',p:['集群管理,灵活的地域和网络环境选择','多种服务器托管方式','一站式容器生命周期管理','灵活扩展调度策略']},
        { bg: 'assets/home/bg3/bg3-4.png', icon: 'assets/home/bg3/logo4.png', t: '数据库',l:'按照数据结构来组织、存储和管理数据的仓库',p:['访问控制','安全防护','数据加密','操作审计']},
      ],
      featureActiveId: 0,
      lastSecData: [
        {img: 'assets/home/bg5/logo1.png', t: '多中心金融合规专区', p: '"两地六中心"合规机房，通过等保四级，可信云认证，助力企业顺利通过合规验收，数据异地自动同步，业务无忧。'},
        {img: 'assets/home/bg5/logo2.png', t: '30+安全机制立体防护', p: '多重防护保障数据安全，秒级抵御网络攻击，P级黑产数据，90%恶意用户识别率，降低金融欺诈风险'},
        {img: 'assets/home/bg5/logo3.png', t: '兼容传统金融业务架构', p: '支持Oracle、金融防火架构，混合云部署，按需交付，轻松扩展业务，数十款金融软件已上云，成功经验即刻复制。'},
        {img: 'assets/home/bg5/logo4.png', t: '大数据', p: '丰富的云端大数据产品和服务，助力客户快速获取数据洞察力。'}
      ]
    }
  },
  methods: {
    handleMouseEnter(idx) {
      this.featureActiveId = idx
    },
    onTabChange(id) {
      this.tabActiveId = id
      // API request here...
    }
  }
}
</script>

<style lang="scss" scoped>
.sec-1 {
  .carousel-wrapper {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .carousel-text-wrapper {
    display: flex;
    height: 100%;

    &>div {
      padding: 8rem 0;
      h1 {
        font-size: 2rem;
        padding: 1rem 0;
      }
      p {
        font-size: 1.2rem;
        max-width: 800px;
        color: #666;
        line-height: 2rem;
      }
    }
  }
}

.sec-2 {
  .sec-2-tab-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 168px;
    text-align: center;
    box-shadow: 0 5px 5px #000;

    h1 {
      font-size: 1.8rem;
      padding: 3rem 0 1rem 0;
    }
    a {
      margin-bottom: 3rem;
    }

    .view-all {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
    }
    .sec-2-tabs {
      display: flex;
      height: 100px;

      li {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
        cursor: pointer;

        img {
          width: 66px;
          height: 66px;
          object-fit: contain;
        }
        span {
          font-size: 1.3rem;
          padding: 5px 0;
        }

        &.active {
          color: var(--primary-color);
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
            bottom: 0;
          }
          &::before {
            content: '';
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

  .sec-2-content {
    background-color: #f3f3f3;
    padding: 1rem 0;

    .detail {

      .grid-content {
        position: relative;
        margin: 1rem 0;
        height: 144px;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        padding: 2rem;

        &>div {
          font-size: 1.4rem
        }

        &>p {
          font-size: 1.2rem;
          color: #666;
          padding: 1rem 0;
        }

        &>ul {
          color: #aaa;
          display: flex;
          padding: 1rem 0;
          li {
            font-size: 0.8rem;
            margin-right: 1rem;
            border: 1px solid #aaa;
            padding: 0.1rem 0.4rem;
          }
        }

        .btn {
          display: none;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 100%;
          height: 48px;
          background-color: var(--primary-color);
          color: #fff;
          bottom: 0;
          left: 0;
        }

        &:hover .btn {
          display: flex;
        }
      }



    }

  }

}

.sec-3 {
  .space {
    height: 72px;
  }
  .sec-3-wrapper {
    text-align: center;
    background-image: url('/assets/home/bg3/bg.png');
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    .view-all {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
    }

    &>h1 {
      font-size: 1.8rem;
      padding: 3rem 0 1rem 0;
    }
    &>a {
      margin-bottom: 3rem;
    }

    .wrapper {
      .grid-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #333;
        min-height: 595px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(#000, 0.3);
          left: 0;
          top: 0;
          z-index: 0;
        }

        .icon {
          position: relative;
          z-index: 99;
          h2 {
            font-size: 1.8rem;
            font-weight: normal;
            padding: 1rem 0;
            color: #fff;
          }
        }


        .more {
          position: relative;
          z-index: 99;
          display: none;
          color: #fff;
          text-align: left;
          font-size: 1.2rem;

          a {
            display: inline-block;
            margin-top: 3rem;
            border: 1px solid #fff;
            padding: 0.3rem 1rem;
          }
          p {
            padding: 1rem 0 3rem 0;
          }
          li {
            padding: 0.3rem 0;

          }
        }

      }

      .active .grid-content {
        align-items: flex-start;
        padding: 0 8rem;
        .more {
          display: initial;

        }
        .icon {
          text-align: left;
        }
      }

    }

  }
}

@media screen and (max-width: 991px) {
  .sec-3 .sec-3-wrapper .wrapper .grid-content {
    align-items: flex-start;
    padding: 0 8rem;

    .more {
      display: initial
    }
    .icon {
      text-align: left;
    }
  }
}

.sec-4 {
  position: relative;
  text-align: center;
  background-image: url('/assets/home/bg5/bg5.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .sec-4-wrapper {
    position: relative;
    top: -50px;
    padding: 0 2rem 2rem 2rem;
    max-width: 1100px;
  }

  h1 {
    font-size: 1.8rem;
    padding-top: 5rem;
  }

  .grid-content {
    position: relative;

    img {
      position: relative;
      top: 60px;
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
  }

  .card {
    background-color: #fff;
    height: 228px;
    box-shadow: 0 0 15px rgba(#000, 0.1);
    padding: 3rem 5rem;

    h3 {
      font-size: 1.6rem;
      font-weight: normal;
      padding: 2rem 0;
    }

    p {
      text-align: left;
    }
  }

}

</style>
<style scoped>

/* .el-col {
  transition: all 200ms ease-in-out;
} */

::v-deep .el-carousel__indicators--outside {
  position: absolute !important;
  bottom: 10px;
  transform: translateX(-50%);
}
::v-deep .el-carousel__indicator.el-carousel__indicator--horizontal .el-carousel__button {
  background-color: var(--primary-color) !important;
}


</style>
