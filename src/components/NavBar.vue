<template>
<div class="navbar-fixed">
  
    <nav class="navColor">
        <div class="container">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo main-logo" style="font-size: 28px; font-weight: 100">favourX 👨🏾‍💻</a>
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
    background: #2e86de
}

</style>


