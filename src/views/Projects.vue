<template>
<div class="container ">
<div>
    <br/><br/><br/><br/>
    <p style="color: black; font-size: 15px; font-weight: 100;   " class="animated fadeInUp"> <span style="    background: #5584B2; color: white ; padding: 6px 10px;  ">Recent Projects </span></p> 
  <br/>
   <Project class="animated fadeInUp"/>
</div>
</div>
</template>

<script>
import Project from '@/components/MainProjects.vue'
export default {
    components : {
Project
    }
}
</script>

<style>
.title{
    color:grey;
    margin-top: 80px
}
</style>

