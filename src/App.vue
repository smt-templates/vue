<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <h1 style="color:red">
      Hello world!
    </h1>
    <su-button @click="myBtnClickGet">测试get</su-button>
    <su-button @click="myBtnClickPost">测试post</su-button>
    <su-input v-model='myTxt'></su-input>
    <div>{{myTxt}}</div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import su from 'sui';
export default {
  components: {
    'Hello':Hello,
    'suButton': su.components.suButton,
    'suInput': su.components.suInput
  },
  data(){
    var d = {
      myTxt:""
    }
    return d;
  },
  methods:{
    // 测试使用get接口
    myBtnClickGet:function(){
      this.$http.get('/data', {name:'测试后台 get'}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            this.myTxt = response.data;
        }, function(response) {
            // handle error
          this.myTxt ='error: '+response.status;
        });
    },
    // 测试使用post接口
    myBtnClickPost:function(){
      this.$http.post('/data', {name:'测试后台 post'}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            this.myTxt = response.data;
        }, function(response) {
            // handle error
          this.myTxt ='error: '+response.status;
        });
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
