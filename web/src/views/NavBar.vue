<!--eslint-disable-->
<template>
  <div id="mainDiv">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          
          <ul>
            <li><router-link to="/"><h2>笔&nbsp;记</h2></router-link></li>
            <!--eslint-disable-next-line-->
            <li v-for="cat in info">
              <router-link :to="{ name: 'ArticleList', params: { catId: cat.Id }}" active-class="_active">{{ cat.Name }}</router-link>
            </li>
            <li><a href="https://www.imliaogm.com"><h2>Liao</h2></a></li>
            <li>
              <el-input placeholder="请输入内容" v-model="input">
                <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
              </el-input>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMainCategory } from '@/api/web'

export default {
  name: 'NavBar',
  data () {
    return {
      input: '',
      url: this.$store.state.url,
      info: null
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    search () {
      alert(this.input)
    },
    onLoad () {
      getMainCategory().then(({ data }) => {
        this.info = data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #409eff;
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
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#index {
  color: #409eff;
}
#mainDiv {
  background-color: #ffffff;
  text-align: center;
  margin: 0;
  padding: 0;
}
._active{
  color: #409eff;
}
</style>
