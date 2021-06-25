<!--eslint-disable-->
<template>
  <div id="article-main-div">
    <el-row>
      <el-col :span="24">
        <!--eslint-disable-next-line-->
        <div v-for="article in info" class="article-info">
          <span @click="viewAll(article.Id)"><h3>{{ article.Title }}</h3></span>
          <div class="article-desc" v-if="articleshowArr[article.Id]">
            <span @click="viewAll()">{{ article.Description }}</span>
            <button class="article-view-all" @click="viewAll(article.Id)">阅读全文<span style="display: inline-flex; align-items: center;">​<svg class="" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg></span>
            </button>
          </div>
          <div v-if="!articleshowArr[article.Id]" v-html=" content " class="article-content"></div>
          <div :class=" !articleshowArr[article.Id] ? 'article-opreate-view-all' : 'article-opreate' ">
            <button class="repay-button op-button" v-on:click="counter += 1">
              <span style="display: inline-flex; align-items: center;">​<svg class="Button-zi" fill="currentColor" viewBox="0 0 24 24" width="10" height="10"><path d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z" fill-rule="evenodd"></path></svg>
              </span>赞同
              <span class="span-num">{{ counter }}</span>
            </button>
            <button class="repay-button op-button" v-on:click="counter -= 1">
              <span style="display: inline-flex; align-items: center;">​<svg class="" fill="currentColor" viewBox="0 0 24 24" width="10" height="10"><path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z" fill-rule="evenodd"></path></svg>
              </span>
            </button>
            <button class="repay-button">
              <span style="display: inline-flex;align-items: center;">​<svg class="Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
              12365</span>条评论
            </button>
            <button class="repay-button">
              <span style="display: inline-flex; align-items: center;">​<svg class="Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
              </span>分享
            </button>
            <button class="repay-button">
              <span style="display: inline-flex; align-items: center;">​<svg class="Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
              </span>收藏
            </button>
            <button class="repay-button" @click="a()">
              <span style="display: inline-flex; align-items: center;">​<svg class="Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
              </span>喜欢
            </button>
            <button class="repay-button" @click="showDesc(article.Id)" v-if="!articleshowArr[article.Id]">
              收起<span style="display: inline-flex; align-items: center;">​<svg class="Button-zi over-turn" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg></span>
            </button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getIndexArticleList, getArticleList, getArticleDetail } from '@/api/web'

export default {
  name: 'ArticleList',
  data () {
    return {
      catId: this.$route.params.catId,
      url: this.$store.state.url,
      info: null,
      content: null,
      articleshowArr: {},
      counter: 15456
    }
  },
  mounted () {
    this.onLoad(this.catId)
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'doSomeThing'
  },
  methods: {
    viewAll (id) {
      getArticleDetail({ id: parseInt(id) }).then(({ data }) => {
        for (var i = 0; i < this.info.length; i++) {
          this.articleshowArr[this.info[i].Id] = true
        }
        this.articleshowArr[id] = false
        this.content = data[0].Content
        this.$forceUpdate()
      })
    },
    showDesc (id) {
      this.articleshowArr[id] = true
      this.content = null
    },
    a () {
      alert(1)
    },
    search () {
      alert(this.input)
    },
    onLoad (catId) {
      if (catId) {
        getArticleList({ catId: parseInt(catId) }).then(({ data }) => {
          for (var i = 0; i < data.list.length; i++) {
            this.articleshowArr[data.list[i].Id] = true
          }
          this.info = data.list
        })
      } else {
        getIndexArticleList().then(({ data }) => {
          for (var i = 0; i < data.list.length; i++) {
            this.articleshowArr[data.list[i].Id] = true
          }
          this.info = data.list
        })
      }
    },
    doSomeThing () {
      this.onLoad(this.$route.params.catId)
    }
  }
}
</script>

<style>
.article-content img {
  width: 95%;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #409eff;
}
h3 {
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #000;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #aaa;
  text-decoration: none;
}
button{
  outline:none;
}
#article-main-div {
  font-size: 14px;
  box-shadow:0 1px 3px rgba(18,18,18,.1);
  border-radius: 2px;
  background-color: #ffffff;
  margin: 10px auto 10px auto;
  width: 694px;
  text-align: left;
}
.article-info {
  border-bottom: 1px solid #f0f2f7;
  padding: 16px 20px;
}
.article-desc {
  display: block;
  min-height: 50px;
  max-height: 100px;
  word-break: break-word;
  overflow: hidden;
  line-height: 1.77;
  cursor: pointer;
}
.article-content {
  margin-bottom: 30px;
}
.article-view-all {
  color: #175199;
  border: none;
  background-color: #ffffff;
  line-height: inherit;
  height: auto;
  display: inline-block;
  cursor: pointer;
}
.article-opreate {
  margin-top: 20px;
}
.article-opreate-view-all {
  margin-top: 20px;
  width: 654px;
  left: 451.5px;
  position: fixed;
  bottom: 0;
  padding: 10px 20px;
  background-color: #ffffff;
}
.button{
  padding: 7px 12px;
  font-size: 13px;
}
.repay-button {
  cursor: pointer;
  margin-left: 24px;
  font-size: 14px;
  height: auto;
  padding: 0;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  color: #8590a6;
}
.op-button {
  background: rgba(0,102,255,.1);
  color: #06f;
  padding: 0 10px;
  border-radius: 3px;
  height: 30px;
  line-height: 30px;
  margin-left: 0px;
}
.span-num{
  margin-left: 2px;
}
.Button-zi {
  margin-right: 4px;
}
.over-turn {
  transform: rotate(180deg);
}
</style>
