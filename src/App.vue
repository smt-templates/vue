<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <h1 style="color:red">
      Hello world!
    </h1>
    <su-button @click="myBtnClick">测试按钮</su-button>
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
    myBtnClick:function(){
      this.myTxt = 'summer'
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
