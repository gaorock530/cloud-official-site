<template>
  <Main>
    <section class="top">
      <div class="top-title">
        <div class="top-title-big"> 新闻动态 </div>
        <div class="top-title-little">了解央行云最新公告</div>
      </div>
    </section>
    <section class="container main">
      <el-affix :offset="80" class="aside">
        <aside>
          <h1>相关新闻</h1>
          <li :class="{active: cateActiveIdx === idx}" v-for="(item, idx) in tabData" :key="idx" @click="onCateChange(idx)">{{item.title}}</li>
        </aside>
      </el-affix>
      <main>
        <h1>最新资讯</h1>
        <div class="recent">
          <el-row :gutter="57">
            <el-col :xs="24" :sm="12" :md="12" v-for="(l, i) in lastSecData" :key="i">
              <div class="grid-content">
                <div class="pic" :style="{backgroundImage: `url(${l.img})`}"></div>
                <div class="content">
                  <span class="label">置顶</span>
                  <div class="text">
                    <h2>{{l.t}}</h2>
                    <p>{{l.p}}</p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <h1>{{tabData[cateActiveIdx].title}}</h1>
        <ul>
          <li v-for="item in displayList" :key="item.l">
            <div class="left">
              <div class="day">{{item.d}}</div>
              <div class="divide">/</div>
              <div class="monthyear"><span>{{item.m}}</span><span>{{item.y}}</span></div>
            </div>
            <div class="right">
              <h3 class="news-header">{{item.t}}</h3>
              <p>{{item.l}}</p>
              <router-link to="/">查看详情</router-link>
            </div>
          </li>
        </ul>
        <el-pagination background :current-page="page.current" :page-size="page.perPage" layout="total,prev, pager, next" @current-change="onPageChange" :total="newsData.length"></el-pagination>
      </main>
    </section>
  </Main>
</template>

<script>
import Main from '@/components/Main.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { News } from '@/data/data.js'

export default {
  components: { Main, ArrowRight },
  data() {
    return {
      newsData: News.slice(0, 20),
      cateActiveIdx: 0,
      page: {
        perPage: 5,
        current: 1,
      },
      tabData: [
        {id: 1, title: '新闻动态'},
        {id: 2, title: '媒体动态' },
        {id: 3, title: '行业分析报告' }
      ],
      tableData: [
        { d: '30', m: '11月', y: '2021', t: '促进供应链金融健康发展——央行电证福费廷子系统成功上线', l: '截至2021年3月29日，电证系统法人机构数量达到95家，开证金额突破5000亿元，业务发展良好，市场反响强烈，有效促进了供应 链金融行业的数字化转型与健康发展。' },
        { d: '28', m: '11月', y: '2021', t: '大数据能力体系构建的技术方法全在这了！', l: '在数据量指数增长、数据类型繁杂多样、数据应用场景多变、数据分析实时性要求高的多重挑战下，开发者如何利用技术驱动企业 高效、快速地构建大数据能力体系？' },
        { d: '24', m: '11月', y: '2021', t: '不忘初心 砥砺奋进', l: '数字经济浪潮已至，今年十月中共中央政治局第三十四次集体学习上习近平总书记强调，“促进数字技术与实体经济深度融合，赋 传统产业转型升级，催生新产业新业态新模式，不断做强做优做大我国数字经济。' },
        { d: '22', m: '11月', y: '2021', t: '向全国金融系统广大劳动者致敬！', l: '数字经济浪潮已至，今年十月中共中央政治局第三十四次集体学习上习近平总书记强调，“促进数字技术与实体经济深度融合，赋 传统产业转型升级，催生新产业新业态新模式，不断做强做优做大我国数字经济。' },
        { d: '22', m: '11月', y: '2021', t: '新华财经联合央行云举办2021数字金融峰会，解锁中国金融数字化发展新密钥', l: '数字经济浪潮已至，今年十月中共中央政治局第三十四次集体学习上习近平总书记强调，“促进数字技术与实体经济深度融合，赋 传统产业转型升级，催生新产业新业态新模式，不断做强做优做大我国数字经济。' },
        { d: '22', m: '11月', y: '2021', t: '打造信用证信息交互平台，助力金融服务实体经济——电子信用证信息交换系统上线', l: '电子信用证信息交换系统的投产上线，将解决国内信用证业务标准不统一、跨行流转不便及业务处理与资金清算相分离等长期制约 业务发展的难题。' },
        { d: '22', m: '11月', y: '2021', t: '以标准体系构建助力金融基础设施建设', l: '2018年11月27日上午，金标委组织调研组到中国人民银行清算总中心调研了支付清算系统金融技术标准体系构建和应用，现场参观 了国家处理中心数据机房和控制中心。' },
        { d: '22', m: '11月', y: '2021', t: '把握形势 突出重点 开创支付清算事业新局面', l: '018年人民银行清算中心工作会议3月1日至2日在广州召开。会议以党的十九大精神为指导，深入贯彻落实全国金融工作会议、人民 银行工作会议和全国支付结算工作会议精神' }
      ],
      lastSecData: [
        { img: 'assets/news/pic1.png', t: '中共中央政治局召开会议 决定召开十九届六中全会 习近平主持会议', p: '2021-09-1 9:01:00' },
        { img: 'assets/news/pic2.png', t: '胸怀千秋伟业 恰是百年风华——成方金信组织收看庆祝中国共产党成立100周年大会', p: '2021-07-01 08:08:00' }
      ]
    }
  },
  methods: {
    onCateChange(idx) {
      this.cateActiveIdx = idx
      // API request here
      const { perPage } = this.page
      this.newsData = News.slice(idx*perPage, idx*perPage + 20)
      this.page.current = 1
    },
    onPageChange(page) {
      this.page.current = page
    }
  },
  computed: {
    displayList() {
      const { perPage, current } = this.page
      return this.newsData.slice(perPage*(current-1), perPage*(current-1) + perPage)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.8rem;
  padding-bottom: 1rem;
}
.top {
  background-image: url("/assets/news/bg1.png");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  .top-title {
    text-align: center;
    padding-top: 160px;
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

.main {
  display: flex;
  padding: 2rem 1rem;

  .aside {
    flex: 1;
    max-width: 243px;
    min-width: 140px;
    aside {
      flex: 1;
      max-width: 243px;
      min-width: 140px;
      li {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        cursor: pointer;

        &.active {
          color: var(--primary-color);
          border-left: 2px solid var(--primary-color);
          background-color: #f1f9f9;
        }
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  main {
    padding-left: 4rem;
    border-left: 1px solid #eee;
    flex: 6;
    .recent {
      padding-bottom: 3rem;
      .grid-content {
        .pic {
          width: 100%;
          padding-bottom: 55%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .content {
          padding-top: 1rem;
          width: 100%;
          display: flex;
          align-items: flex-start;

          .label {
            font-size: 1.2rem;
            word-break: keep-all;
            padding: 0.3rem 1rem;
            margin-top: 0.3rem;
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
          }

          .text {
            padding-left: 1rem;
            h2 {
              font-size: 1.8rem;
              font-weight: normal;
              color: #333;
            }
            p {
              color: #aaa;
              font-size: 1.1rem;
            }
          }
        }
      }

    }

    ul {
      li {
        padding: 2rem 0;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: flex-start;
        .left {
          flex: 1;
          display: flex;
          align-items: center;
          min-width: 120px;
          .day {
            font-size: 3rem;
          }
          .divide {
            font-size: 2.5rem;
            color: #aaa;
            padding: 0 0.5rem;
          }
          .monthyear {
            color: #888;
            font-size: 1.1rem;
            span {
              display: block;
              padding: 0.1rem 0;
            }
          }
        }
        .right {
          flex: 8;
          h3 {
            font-size: 1.6rem;
            padding-bottom: 0.5rem;
          }
          p {
            line-height: 2rem;
            padding-bottom: 1rem;
          }
          a {
            color: var(--primary-color);
            font-size: 1.2rem;
          }
        }
      }
    }
  }

}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  background: rgba(20, 149, 146, 0.05);
}
::v-deep .el-pagination.is-background .el-pager li:hover {
  color: var(--primary-color);
}
.el-pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
