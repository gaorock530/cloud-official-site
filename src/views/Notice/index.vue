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
          <li v-for="item in tableData" :key="item.l">
            <div class="left">
              <div class="day">{{item.d}}</div>
              <div class="divide">/</div>
              <div class="monthyear"><span>{{item.m}}</span><span>{{item.y}}</span></div>
            </div>
            <div class="right">
              <p>{{item.l}}</p>
            </div>
          </li>
        </ul>
        <el-pagination background layout="total,prev, pager, next" :total="100"></el-pagination>
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
      tabData: [
        { icon: 'assets/home/bg2/bg2-1.png', title: '全部', active: true }
        // { icon: 'assets/home/bg2/bg2-2.png', title: '德胜' },
        // { icon: 'assets/home/bg2/bg2-3.png', title: '稻香湖' }
      ],
      tableData: [
        { d: '30', m: '11月', y: '2021', l: '【产品升级】央行云数据库代理服务于2021年12月4日 02:00-06:00（北京时间）版本升级通知', active: true },
        { d: '28', m: '11月', y: '2021', l: '首届金融科技锦绣论坛在京举办，央行加快推动产业数字化转型' },
        { d: '24', m: '11月', y: '2021', l: '诚邀合作机构专属云解决方案生态合作伙伴' },
        { d: '22', m: '11月', y: '2021', l: '国庆假期支付业务稳步增长' },
        { d: '22', m: '11月', y: '2021', l: '我为群众办实事 | 电证共享前置二期成功上线，福费廷“朋友圈”进一步扩大' },
        { d: '22', m: '11月', y: '2021', l: '落实普惠金融服务，打造支付为民平台——全国综合业务服务平台投产上线' },
        { d: '22', m: '11月', y: '2021', l: '统筹防疫和发展成效显著 上半年国民经济逐步复苏' },
        { d: '22', m: '11月', y: '2021', l: '打造信用证信息交互平台，助力金融服务实体经济' },
        { d: '22', m: '11月', y: '2021', l: '把握形势 突出重点 开创支付清算事业新局面' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background-image: url("assets/notice/bg.png");
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
        font-size: 1.2rem;
      }
    }
  }
}
.central {
  background-image: url("assets/notice/bg1.png");
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
.el-pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
