<template>
  <Main>
    <section class="top">
      <div class="top-title container">
        <div class="top-title-big">{{ bgText[0].h }}</div>
        <div class="top-title-little">{{ bgText[0].p }}</div>
      </div>
    </section>
    <div class="main-section container">
      <el-affix :offset="80" class="aside">
        <aside>
          <form class="inputBox" @submit.prevent="onSearch">
            <el-icon class="search-icon"><search /></el-icon>
            <input type="text" v-model="searchText" placeholder="搜索产品" />
          </form>
          <li :class="{active: idx === cateActiveId}" v-for="(cate, idx) in productsData" :key="idx" @click="onCateChange(idx)">{{cate.cate}}</li>
        </aside>
      </el-affix>
      <div class="content">
        <ul class="card-title">
          <li v-for="(cate, idx) in productsData" :key="idx">
            <h1>{{cate.cate}}</h1>
            <ul class="card-section">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" v-for="(item, i) in cate.sub" :key="i">
                  <li :id="cate.id">
                    <div class="product-title">
                      <h3>{{item.name}} {{item.ab?`(${item.ab})`:null}}</h3>
                      <!-- <div class="tag" v-if="item.tag">{{item.tag}}</div> -->
                    </div>
                    <p>{{item.desc}}</p>
                  </li>
                </el-col>
              </el-row>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Main>
</template>

<script>
import Main from "@/components/Main.vue"
import { Search } from '@element-plus/icons-vue'
import productsData from '@/data/products.js'

export default {
  components: { Main, Search },
  data() {
    return {
      productsData: productsData,
      searchText: '',
      cateActiveId: 0,
      bgText: [
        {
          h: "央行云产品",
          p: "从基础设施到行业应用领域，央行云提供完善的产品体系，助力您的业务腾飞",
        },
      ]
    };
  },
  methods: {
    onCateChange(idx) {
      this.cateActiveId = idx
      const topElement = document.getElementById(productsData[idx].id)
      topElement.scrollIntoView({block: "center", behavior: "smooth"})
      // API request here
    },
    onSearch() {
      if (!this.searchText) return
      // search API request here
      console.log(this.searchText)

      // after search completed, clear text
      this.searchText = ''
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  background-image: url("/assets/product/bg1.png");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  display: flex;
  align-items: center;
  .top-title {
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

.main-section {
  display: flex;
  padding: 3rem 0;

  .aside {
    flex: 1;
    max-width: 243px;
    min-width: 140px;
    aside {
      background-color: #f5f7f8;
      padding: 1rem 0;

      .inputBox {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 1rem 0;
        margin: 0 2rem;
        border-bottom: 1px solid #eee;

        .search-icon {
          font-size: 1.5rem;
          color: #aaa;
        }

        input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 1rem;
          background-color: transparent;
        }
      }

      li {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        cursor: pointer;
        &.active {
          color: var(--primary-color);
          border-left: 2px solid var(--primary-color);
          background-color: #e8f2f2;
        }
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  .content {
    flex: 3;
    padding: 0 1rem 0 3rem;

    .card-title {

      &>li>h1 {
        position: relative;
        padding: 0 1rem;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 20px;
          width: 3px;
          background-color: var(--primary-color);
        }
      }

      .card-section {
        padding: 1rem 0;

        li {
          min-height: 150px;
          margin: 10px 0;
          padding: 2rem;
          box-shadow: 0 0 10px rgba(#000, 0.1);

          .product-title {
            display: flex;
            align-items: center;
            padding-bottom: 1rem;

            h3 {
              padding-bottom: 0.2rem;
              font-size: 1.2rem;
            }
            .tag {
              position: relative;
              top: -2px;
              margin-left: 0.5rem;
              padding: 0 0.2rem;
              background-color: red;
              color: #fff;
            }
          }
          p {
            color: #666;
          }
        }
      }
    }

  }

}
</style>
