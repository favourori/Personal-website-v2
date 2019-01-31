<template>
<div class="container ">
<div>
    <h4 class="animated fadeInUp title" >Recent Projects </h4>
   <Project class="animated fadeInUp"/>
</div>
</div>
</template>

<script>
import Project from '@/components/HomeProject.vue'
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

