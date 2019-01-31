<template>
  <div id="app">
    
<Navbar/>


  


    <router-view/>
  </div>
</template>


<script>
import Navbar from './components/NavBar'
export default {
  components :{
    Navbar
  }
}
</script>

<style>
@font-face {
  font-family:customFont ;
  src: url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,400');
}

body{
    background: black;

    font-family: customFont;
}


body::-webkit-scrollbar {
    width: 4px;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: rgb(169, 169, 169);
  outline: 1px solid slategrey;
}
</style>

