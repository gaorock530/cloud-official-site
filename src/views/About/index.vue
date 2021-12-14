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
          <el-col :xs="24" :sm="12" :md="10">
            <div class="grid-content">
              <img src="/assets/about/pg1.png"/>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="14">
            <div class="grid-content">
              <p>央行云是为落实“三集中”要求由成方金信承建，面向人民银行及直属企事业单位推出的采用自助服务模式、提供基础资源、平台能力、软件应用等服务的云计算服务平台。</p>
              <p>央行云目前包括北京稻香湖、德胜及上海张江三个数据中心，具有同城双活、异地灾备的两地三中心架构，未来将逐步扩建并纳管各单位现有基础资源形成多地多中心格局，为分布式架构应用转型提供支持。</p>
              <p>央行云采用了从基础服务器到云平台的全栈国产化架构，并实现了一云多芯，通过服务器虚拟化、存储虚拟化、网络安全能力自动化、资源动态调度等技术，既能提供基于国产芯片服务器的计算、存储、网络、安全、数据库、中间件等服务，也支持输出基于通用X86服务器的各类服务，用户根据其应用的需要可以按需使用。</p>
              <!-- <p>
                清算总中心负责建设、运行、维护、管理的支付清算系统包括:大额实时支付系统（HVPS）、小额批量支付系统（BEPS）、网上支付跨行清算系统（IBPS）、境内外币支付系统（CFXPS），是我国重要的金融基础设施，是国家和社会资金流动的大动脉。清算总中心在中国人民银行党委的正确领导下，以习近平新时代中国特色社会主义思想为指导，认真学习贯彻党的十九大精神，牢固树立“四个意识”,坚定“四个自信”，坚持创新、协调、绿色、开放、共享的发展理念和“为社会主义市场经济服务”的宗旨，不忘初心牢记使命，始终把“建立和完善统一、高效、安全的支付清算系统”，打造和谐支付，构建和谐金融服务环境作为矢志不渝的努力方向，扎实推进中央银行支付清算系统建设，努力提高支付清算服务水平。2013年10月8日正式上线运行的第二代支付系统，在继承了第一代各业务系统功能的同时，引入了先进的支付清算管理理念和技术标准，支持商业银行一点接入支付系统，并实现“一点清算”。第二代支付系统将具有更加广阔的发展前景。
              </p> -->
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
import Main from "@/components/Main.vue";
import { ArrowRight } from "@element-plus/icons-vue";

export default {
  components: { Main, ArrowRight },
  data() {
    return {
        tableData: [
        { d: '30', m: '11月', y: '2021', l: '【产品升级】央行云数据库代理服务于2021年12月4日 02:00-06:00（北京时间）版本升级通知', active: true },
        { d: '28', m: '11月', y: '2021', l: '首届金融科技锦绣论坛在京举办，央行加快推动产业数字化转型' },
        { d: '24', m: '11月', y: '2021', l: '诚邀合作机构专属云解决方案生态合作伙伴' },
        { d: '22', m: '11月', y: '2021', l: '国庆假期支付业务稳步增长' },
        { d: '22', m: '11月', y: '2021', l: '我为群众办实事 | 电证共享前置二期成功上线，福费廷“朋友圈”进一步扩大' },
        { d: '22', m: '11月', y: '2021', l: '落实普惠金融服务，打造支付为民平台——全国综合业务服务平台投产上线' },
      ],
      list:[
         {t:'安全可信', active:true},
         {t:'专享定制'},
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
    }
  }
};
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

  img {
    width: 100%;
    object-fit: contain;
  }
  p {
    font-size: 16px;
    line-height: 2.5rem;
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
        font-size: 1.4rem;
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
        font-size: 1.1rem;
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
          font-size: 1.2rem;
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
.el-pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
