<template>
<div class="navbar-fixed">
 
    <nav class="navColor z-depth-0 ">
       
        <div class="container">
    <div class="nav-wrapper ">
      <a href="#" class="brand-logo main-logo" style="font-size: 17px; font-weight: 300">FAVOUR ORI </a>
      <ul class="right hide-on-med-and-down">
        <li>  <router-link to="/">  Home </router-link>  </li>

        <li> <router-link to="/about"> About </router-link></li>
         <li> <router-link to="/contact"> Contact </router-link></li>
         <li> <router-link to="/talks"> Talks</router-link></li>
  <li> <router-link to="/favcode"> Teachings </router-link></li>
         <li> <router-link to="/projects"> <i class="material-icons left">dvr</i>Projects</router-link></li>
       
      </ul>
    </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>




<style>
.navColor{
  background-image: linear-gradient(to left top, #356a9e, #3d70a3, #4577a8, #4d7dad, #5584b2);
}

</style>


