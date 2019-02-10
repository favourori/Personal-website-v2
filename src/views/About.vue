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

      <div class="col s12 m8  animated fadeInUp">
        <p style="font-size: 17px; margin-top: 0.9px; font-weight: 300"> <b>Background:</b></p>
        <p>In 2013, I dived into the world of programming & since I am largely self taught, it's been Fun, Awesome  &  Challenging at same time.</p>
        I am currently a Full Stack Developer Passionate about developing innovative products that will steer the future of computing. I love learning & exploring new technologies. Over the years, I have worked on web, mobile & desktop projects. 
        <br/><br/>
      Since I love helping people, I founded  <b>@Favcode54</b> - where I teach how to code for free. In 2018, I had <b>5200 students</b>. In 2019, I plan to teach just 50 students [FullStack Javascript]

        <br/>
        <br/>
        On a lighter but related note, I have spoken at a few conferences about Programming, Big data, etc. Visit the <b>Talks & Teachings</b>  page to see more.

       
      </div>
    
    </div>
<br/>

     <p style="font-size: 20px; font-weight: 300">Tools & Technologies:</p>   
     <p>I am a very Fast Learner. I pick up tools & technologies quickly. Over the years, I have worked on projects with the following:</p>
     <div> <span style=" background: #4d6e8e" class="chip animated fadeInUp" v-for="(tool, index) in tools" :key="index"> {{tool}}</span>
     <br/><br/>
     <p style="font-size: 20px; font-weight: 300">Links & References:</p> 
     <p><b>The Youth Assembly @NYC: </b><a href="https://www.youthassembly.nyc/outstanding-youth-delegate-profiles//favour-ori">https://www.youthassembly.nyc/outstanding-youth-delegate-profiles//favour-ori</a></p>
     <p><b>Linda Ikeji: </b><a href="https://www.lindaikejisblog.com/2018/3/from-aba-nigeria-to-launching-a-tech-company-in-the-usa-meet-favor-ori-founder-of-codewithfavor-2.html">https://www.lindaikejisblog.com/2018/3/from-aba-nigeria-to-launching-a-tech-company-in-the-usa-meet-favor-ori-founder-of-codewithfavor-2.html</a></p>
     <p><b>Connect Nigeria </b><a href="https://connectnigeria.com/articles/2018/03/from-aba-nigeria-to-founding-a-tech-company-in-the-usa-meet-favour-founder-of-favcode54-org/">https://connectnigeria.com/articles/2018/03/from-aba-nigeria-to-founding-a-tech-company-in-the-usa-meet-favour-founder-of-favcode54-org/</a></p>
    <p><b>Connected Africa: </b><a href="https://www.connectedafrica.com/2018/03/23/meet-favour-ori-the-man-on-a-quest-to-end-tech-illiteracy-in-africa/">https://www.connectedafrica.com/2018/03/23/meet-favour-ori-the-man-on-a-quest-to-end-tech-illiteracy-in-africa/</a></p>
    
     <p><b>HowNg: </b><a href="http://howng.com/meet-favour-ori-the-man-on-a-quest-to-end-tech-illiteracy-in-africa/">http://howng.com/meet-favour-ori-the-man-on-a-quest-to-end-tech-illiteracy-in-africa/</a></p>
    </div>  

     <br/><br/><br/>
    



<Footer class="animated fadeInUp"/>



 </div>
</template>


<script>
import Footer from "@/components/Footer";
export default {
  name: "About",
  components :{
      Footer
  },

  data(){
    return{
      tools : ["Node Js", "Express", "Vue", "HTML5 & CSS3", "Git & Github", "Sketch", "IBM Watson","Python", "Java", "Adobe XD", "React & GraphQL"]
    }
  }
}
</script>



<style>
.main{
  margin-top: 100px
}

body{
  color:black
}

.chip{
  color:white
}
</style>
