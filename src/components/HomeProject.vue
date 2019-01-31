<template>
  <div class="project" style="border-radius: 9px;">
  <div class="row">
    <div class="col s12 m12 " v-for="(project, index) in projects" :key="index">
      <div class="card " style="color:black;border-radius: 9px; ">
         
        <div class="card-image">
            
         <img :src= projects[index].image  />
         

          <span class="card-title"> {{projects[index].title}} </span>
        </div>
        <div class="card-content " style="color:black" >
          <p>{{projects[index].desc}}</p><br/>

<span class="chip red hoverable"  style="color:white"  v-for="(tool, index) in projects[index].tech" :key="index"   >  {{tool}}  </span>
         <span class="chip hoverable">View on Github</span>  </div>


        </div>
      
      </div>
    </div>

<div style="margin: 48px 0">
  <center><a class="waves-effect waves-light btn mainColor">View more projects</a></center>  
</div>

  </div>
        

 
</template>




<script>
export default {
  name: "HomeProject",

  data(){
      return {
          
          projects : [
               {
             title: "Mini Task Manager",
             desc : "Very lightweight task manager developed in Vue Js - using the vuetify Library. Persisting data with Firebase",
             image: require('@/assets/images/taskManager.png'),

             tech : ["Javascript", "Vue Js", "Vuetify", "Firebase"]
         },
         {
             title: "Github Finder App",
             desc : "Using the Github Public API to build a Javascript app that let's you search for users. It returns their Avatar, repo count, followers, etc",
             image: require('@/assets/images/githubFinder.png'),

             tech : ["Javascript", "HTML5", "CSS3", "AJAX"]
         },


         {
             title: "Love Church Tulsa",
             desc : "Responsive Web Application developed in wordpress",

             tech : ["Node Js", "HTML5", "CSS3", "AJAX"],
             image: require("@/assets/images/rccg.png")
         },


         {
             title: "4 Youth by Youth",
             desc : "Mobile Application Prototyping",

             tech : ["Sketch", "Flaticons"],
             image: require("@/assets/images/4yby.png")
         },

         {
             title: "SAU Maths & Computer Science Club",
             desc : "Responsive Website for Southern Arkansas University's Computer Science Club",

             tech : ["HTML5", "CSS3", "Javascript", "Materialize"],
             image: require("@/assets/images/sau.png")
         },

         {
             title: "Zawadi Honor Care",
             desc : "Responsive Website for Zawadi Honor care",

             tech : ["HTML5", "CSS3", "Javascript"],
             image: require("@/assets/images/zawadi.png")
         }
     ]
      }
    
  }


};
</script>

<style>
.project {
  height: 360px;
    
  width: 100%;
  margin-top: 60px;

   
   background-position: center;
   background-repeat: no-repeat;
   margin-bottom: 30px;

}

.project-image{
object-fit: cover;
width: 100%;

}



.mainColor{
    background: #2e86de
}

.btn:hover{
     background: red
}




</style>


