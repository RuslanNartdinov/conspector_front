<template>
  <router-view/>
<!--  <HomePage></HomePage>-->
</template>

<script>
// import HomePage from '@/components/HomePage'
export default {
  name: 'App'
  // data: function () {
  //   return { routes: [{ name: 'HomePage', title: 'Войти' }, { name: 'Authorization', title: 'Авторизоваться' }, { name: 'Registration', title: 'Зарегистрироваться' }] }
  // }
  // components: {
  //   HomePage
  // }
}
</script>

<style lang="scss">

/* RESET of ALL PREfires */
*,*::before,*::after
{-moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;}

:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{
  height: 100%;
  width: 100%;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: Manrope;
  margin: 0;
  padding: 0;
}
input, button, textarea{font-family: inherit;}

input::-ms-clear{display: none;}
button{
  cursor:pointer;
}
button::-moz-focus-inner{padding:0; border:0;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size: inherit; font-weight: 400;}

@font-face {
  font-family: Manrope;
  src: url("./assets/Fonts/Manrope-VariableFont_wght.ttf");
}

html{
  background-color: #121212;
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
}

</style>
