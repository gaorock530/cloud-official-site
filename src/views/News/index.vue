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
