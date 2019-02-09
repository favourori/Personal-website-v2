<template>
 
 <div class="container main ">

   <div class="row">
      <div class="col s12 m4">    
          <div class="row">
    <div class="col s12 m12">
      <div class="card z-depth-0">
        <div class="card-image">
          <img src="../assets/images/avatar.jpg">
          
        </div>
       
       
      </div>
    </div>
  </div>
        

</div>

      <div class="col s12 m8  animated fadeInUp">I am a full stack developer Passionate about developing innovative products that will steer the future of computing. I love learning & exploring new technologies. I also teach programming @Favcode54

        <br/>

        <p>When I am not coding, I like to play the keyboard & the drums</p>
      </div>
    
    </div>
<br/>

     <p style="font-size: 20px; font-weight: 300">Tools & Technologies:</p>   
     <div> <span style=" background: #4d6e8e" class="chip animated fadeInUp" v-for="(tool, index) in tools" :key="index"> {{tool}}</span>
     
     
     </div>  

     <br/><br/><br/>
      <p style="color: grey; font-size: 14px"> Designed with ❤️ by  Favour Ori &nbsp;&nbsp; - &nbsp;&nbsp;© 2019 All Rights Reserved  &nbsp;&nbsp; - &nbsp;&nbsp; About  ● Contact  ●  Resume</p>
<br/>
 </div>
</template>


<script>
export default {
  name: "About",

  data(){
    return{
      tools : ["Node Js", "Express", "Vue", "HTML5 & CSS3", "Git & Github", "Sketch", "IBM Watson","Python", "Java", "Adobe XD", "React & GraphQL"]
    }
  }
}
</script>



<style>
.main{
  margin-top: 130px
}

body{
  color:black
}

.chip{
  color:white
}
</style>
