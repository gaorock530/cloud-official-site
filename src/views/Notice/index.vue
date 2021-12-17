<template>
  <Main>
    <section class="top">
      <div class="top-title container">
        <div class="top-title-big"> 官方公告 </div>
        <div class="top-title-little">了解央行云最新公告</div>
      </div>
    </section>
    <section class="central">
      <div class="container">
        <ul>
          <li v-for="item in displayList" :key="item.t">
            <div class="left">
              <div class="day">{{item.d}}</div>
              <div class="divide">/</div>
              <div class="monthyear"><span>{{item.m}}</span><span>{{item.y}}</span></div>
            </div>
            <div class="right">
              <p class="news-header">{{item.t}}</p>
            </div>
          </li>
        </ul>
        <el-pagination background :current-page="page.current" :page-size="page.perPage" layout="total,prev, pager, next" @current-change="onPageChange" :total="noticeList.length"></el-pagination>
      </div>
    </section>
  </Main>
</template>

<script>
import Main from '@/components/Main.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { Notice } from '@/data/data.js'

export default {
  components: { Main, ArrowRight },
  data() {
    return {
      page: {
        perPage: 8,
        current: 1,
      },
      noticeList: Notice,
    }
  },
  methods: {
    onPageChange(page) {
      this.page.current = page
    }
  },
  computed: {
    displayList() {
      const { perPage, current } = this.page
      return this.noticeList.slice(perPage*(current-1), perPage*(current-1) + perPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background-image: url("/assets/notice/bg.png");
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  .top-title {
    padding-top: 73px;
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

ul {

  li {
    padding: 2rem 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
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
      p {
        line-height: 2rem;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }
}
.central {
  background-image: url("/assets/notice/bg1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem 0;
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
