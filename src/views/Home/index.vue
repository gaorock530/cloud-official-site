<template>
  <Main>
    <section class="sec-1">
      <el-carousel height="464px" :autoplay="false" trigger="click" indicator-position="outside" arrow="never">
        <el-carousel-item v-for="url in carousel" :key="url">
          <div class="carousel-wrapper" :style="{backgroundImage: `url(${url})`}">
            <div class="container carousel-text-wrapper">
              <div>
                <h1>{{carouselText[0].h}}</h1>
                <p>{{carouselText[0].p}}{{carouselText[0].p}}</p>
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
            <li v-for="item in tabData" :key="item.icon" :class="{active: item.active}">
              <img :src="item.icon" />
              <span>{{item.t}}</span>
            </li>
          </div>
        </div>
      </div>
      <div class="sec-2-content">
        <div class="detail container">
          <el-row :gutter="24">
            <el-col :sm="12" :md="6" v-for="item in tabDetailData" :key="item.t">
              <div class="grid-content">
                <div>{{item.t}}</div>
                <p>{{item.p}}</p>
                <ul>
                  <li v-for="li in item.l" :key="li">{{li}}</li>
                </ul>
                <router-link to="/" class="btn">查看详情</router-link>
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
            <el-col :class="{active: item.active}" :xl="item.active?9:5" :lg="item.active?9:5" :md="12" v-for="(item, idx) in cardData" :key="item.t">
              <div class="grid-content" :style="{ backgroundImage: `url(${item.bg})`}" @mouseenter="handleMouseEnter(idx)">
                <div class="icon">
                  <img :src="item.icon" />
                  <h2>{{item.t}}</h2>
                </div>
                <div class="more">
                  <p>基于强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台</p>
                  <li>√ 快速可获得</li>
                  <li>√ 高性能</li>
                  <li>√ 灵活配置</li>
                  <li>√ 丰富的解决方案</li>
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
export default {
  components: { Main, ArrowRight },
  data() {
    return {
      carousel: [
        'assets/home/big1.png',
        'assets/home/big2.png',
        'assets/home/big3.png',
      ],
      carouselText: [
        {h: '弹性伸缩(AS)', p: '弹性伸缩(AS)可以根据业务需求和策略，自动调整 CVM 计算资源，确保拥有适量的CVM实例处理应用程序负载。'}
      ],
      tabData: [
        {icon: 'assets/home/bg2/bg2-1.png', t: '计算', active: true},
        {icon: 'assets/home/bg2/bg2-2.png', t: '网络'},
        {icon: 'assets/home/bg2/bg2-3.png', t: '存储'},
        {icon: 'assets/home/bg2/bg2-4.png', t: '中间件'},
        {icon: 'assets/home/bg2/bg2-5.png', t: '数据库'},
        {icon: 'assets/home/bg2/bg2-6.png', t: '监控与运维'},
      ],
      tabDetailData: [
        {t: '弹性伸缩AS', p: '可随时自由获取、弹性伸缩的云服务器', l: ['规格丰富', '稳定可靠']},
        {t: '裸金属BMS', p: '可随时自由获取、弹性伸缩的云服务器', l: ['规格丰富', '稳定可靠']},
        {t: '云服务器CVM', p: '可随时自由获取、弹性伸缩的云服务器', l: ['规格丰富', '稳定可靠']},
        {t: '容器服务平台TKE', p: '可随时自由获取、弹性伸缩的云服务器', l: ['规格丰富', '稳定可靠']}
      ],
      cardData: [
        {bg: 'assets/home/bg3/bg3-1.png', icon: 'assets/home/bg3/logo1.png', t: '高性能计算', active: true},
        {bg: 'assets/home/bg3/bg3-2.png', icon: 'assets/home/bg3/logo2.png', t: '应用上云'},
        {bg: 'assets/home/bg3/bg3-3.png', icon: 'assets/home/bg3/logo3.png', t: '容器'},
        {bg: 'assets/home/bg3/bg3-4.png', icon: 'assets/home/bg3/logo4.png', t: '数据库'},
      ],
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
      this.cardData = this.cardData.map((c, index) => {
        c.active = idx === index
        return c
      })
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
        max-width: 900px;
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
          font-size: 1rem;
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
    padding-bottom: 3rem;

    .detail {

      .grid-content {
        position: relative;
        margin: 1rem 0;
        height: 144px;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        padding: 2rem 1rem;

        &>div {
          font-size: 1.4rem
        }

        &>p {
          font-size: 1rem;
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
        }

        &:hover .btn {
          display: flex;
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
    background-image: url('assets/home/bg3/bg.png');
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

.sec-4 {
  position: relative;
  text-align: center;
  background-image: url('assets/home/bg5/bg5.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .sec-4-wrapper {
    position: relative;
    top: -50px;
    padding: 0 2rem 10rem 2rem;
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
<style>

.el-col {
  transition: all 200ms ease-in-out;
}

.el-carousel__indicators--outside {
  position: absolute !important;
  bottom: 10px;
  transform: translateX(-50%);
}
.el-carousel__indicator.el-carousel__indicator--horizontal .el-carousel__button {
  background-color: var(--primary-color) !important;
}
</style>
