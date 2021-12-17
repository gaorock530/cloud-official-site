<template>
  <Main>
    <section class="top">
      <div class="top-title container">
        <div class="top-title-big">关于央行云</div>
        <div class="top-title-little">了解央行云最新咨询</div>
      </div>
    </section>
    <section class="sec-2">
      <div class="container">
        <h1>关于我们</h1>
        <el-row :gutter="57">
          <el-col :md="24" :lg="10">
            <div class="grid-content center">
              <img src="/assets/about/pg1.png"/>
            </div>
          </el-col>
          <el-col :md="24" :lg="14">
            <div class="grid-content">
              <p>央行云是为落实“三集中”要求由成方金信承建，面向人民银行及直属企事业单位推出的采用自助服务模式、提供基础资源、平台能力、软件应用等服务的云计算服务平台。</p>
              <p>央行云目前包括北京稻香湖、德胜及上海张江三个数据中心，具有同城双活、异地灾备的两地三中心架构，未来将逐步扩建并纳管各单位现有基础资源形成多地多中心格局，为分布式架构应用转型提供支持。</p>
              <p>央行云采用了从基础服务器到云平台的全栈国产化架构，并实现了一云多芯，通过服务器虚拟化、存储虚拟化、网络安全能力自动化、资源动态调度等技术，既能提供基于国产芯片服务器的计算、存储、网络、安全、数据库、中间件等服务，也支持输出基于通用X86服务器的各类服务，用户根据其应用的需要可以按需使用。</p>
            </div>
          </el-col>
        </el-row>



      </div>
    </section>
    <section class="sec-3">
      <h1>央行云定位</h1>
      <div class="content container">
        <el-row :gutter="1">
          <el-col :xs="24" :sm="l.active?10:7" v-for="(l, i) in list" :key="l.t">
            <div :class="{active: l.active, 'grid-content': true}" @mouseenter="hover(i)">
              <div class="preview">
                <h2>{{l.t}}</h2>
                <img src="/assets/icon/arrow-right-circle.svg" />
              </div>
              <div class="more">
                <h3 class="title">{{l.t}}</h3>
                <p>
                  定义五位一体的安全体系，以自主可控的技术平台为客户提供“云管端”安全服务。同时，央行云绝不触碰客户数据，为客户打造放心、安心的云。
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <section class="sec-4">
      <h1>官方公告</h1>
      <div class="container">
        <ul>
          <li v-for="item in displayList" :key="item.l">
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
import Main from "@/components/Main.vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { Notice } from '@/data/data.js'

export default {
  components: { Main, ArrowRight },
  data() {
    return {
      page: {
        perPage: 6,
        current: 1,
      },
      noticeList: Notice,
        tableData: [
        { d: '30', m: '11月', y: '2021', l: '【产品升级】央行云数据库代理服务于2021年12月4日 02:00-06:00（北京时间）版本升级通知', active: true },
        { d: '28', m: '11月', y: '2021', l: '首届金融科技锦绣论坛在京举办，央行加快推动产业数字化转型' },
        { d: '24', m: '11月', y: '2021', l: '诚邀合作机构专属云解决方案生态合作伙伴' },
        { d: '22', m: '11月', y: '2021', l: '国庆假期支付业务稳步增长' },
        { d: '22', m: '11月', y: '2021', l: '我为群众办实事 | 电证共享前置二期成功上线，福费廷“朋友圈”进一步扩大' },
        { d: '22', m: '11月', y: '2021', l: '落实普惠金融服务，打造支付为民平台——全国综合业务服务平台投产上线' },
      ],
      list:[
         {t:'安全可信'},
         {t:'专享定制', active:true},
         {t:'最佳时间'}
      ]
    };
  },
  methods: {
    hover(idx) {
      this.list = this.list.map((l, index) => {
        l.active = index === idx
        return l
      })
    },
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

<style  lang="scss" scoped>
h1 {
  font-size: 2.6rem;
  text-align: center;
  padding: 5rem 0;
}
.top {
  background-image: url("/assets/about/bg1.png");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .top-title {
    padding-top: 160px;
    // margin-left: 237px;
    color: #ffffff;
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
.sec-2 {
  padding: 5rem 0;
  background-image: url("/assets/about/bg2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .center{
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 600px;
    object-fit: contain;
    text-align: center;
  }
  p {
    font-size: 1.4rem;
    line-height: 2.8rem;
    text-indent: 2em;
    color: rgba(#000, 0.65);
  }
}

.sec-3 {

  .grid-content {
    position: relative;
    height: 239px;
    background-color: #eee;

    .preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      h2 {
        padding: 1rem 0;
        font-size: 1.6rem;
      }

    }

    .more {
      position: absolute;
      width:100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: none;
      background-color: var(--primary-color);
      padding: 2rem;
      color: #fff;

      h3 {
        padding: 1rem 0;
        font-size: 1.6rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 25px;
          height: 2px;
          background-color: #fff;
          left: 0;
          bottom: 0;
        }
      }
      p {
        padding-top: 1rem;
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }

    &.active .more {
      display: block;
    }
  }

}
.sec-4{
  padding: 5rem 0;
  background: #fafbfc;

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
}
</style>
<style scoped>

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
