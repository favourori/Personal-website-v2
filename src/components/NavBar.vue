<template>
<div class="navbar-fixed">
  
    <nav class="navColor z-depth-0 ">
        <div class="container">
    <div class="nav-wrapper ">
      <a href="#" class="brand-logo main-logo" style="font-size: 18px; font-weight: 300">FAVOR ORI 👨🏾‍💻 </a>
      <ul class="right hide-on-med-and-down">
        <li>  <router-link to="/">  Home </router-link>  </li>

        <li> <router-link to="/about"> About me</router-link></li>
         <li> <router-link to="/resume"> Download Resume</router-link></li>
         <li> <router-link to="/projects"> <i class="material-icons left">view_module</i>Projects</router-link></li>
       
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
   background-image: linear-gradient(to right, #2c3e50, #2d3f5a, #343f63, #403d69, #503a6d);
}

</style>


