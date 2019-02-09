<template>
  <div class="project" style=" z-depth-0 ; margin-left: 0">
    <br/>
    <div class="row" style=" margin-left: -11px; margin-right: -11px">
      <div class="col s12 m4 l4" v-for="(project, index) in projects" :key="index">
        <a v-bind:href="projects[index].projectLink" target="blank">
          <div
            class="card z-depth-1 projectCard hoverable "
            style="color:black;  border-radius: 4px; "
          >
            <div class="card-content" style="color:#ecf0f1">
              <span class="card-title" style="font-size: 20px">{{projects[index].title}}</span>
              <p style="font-size: 14px; font-weight: 100">{{projects[index].desc}}</p>
              <br>
              <br>
              <span
                class="chip hoverable"
                style="color:white; font-size: 11px; background: #5584B2"
                v-for="(tool, index) in projects[index].tech"
                :key="index"
              ><span style="color: yellow"> ● </span> {{tool}}</span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <br>
    <br>
<br/>
<br/>
<br/>

    
      <p style="color: grey; font-size: 14px"> Designed with ❤️ by  Favour Ori &nbsp;&nbsp; - &nbsp;&nbsp;© 2019 All Rights Reserved  &nbsp;&nbsp; - &nbsp;&nbsp; About  ● Contact  ●  Resume</p>
    

    <br>

    
  </div>
</template>




<script>
export default {
  name: "HomeProject",

  data() {
    return {
      projects: [
        {
          title: "Mini Task Manager",
          desc:
            "Very lightweight task manager developed in Vue Js - using the vuetify Library. Persisting data with Firebase",
          image: require("@/assets/images/taskManager.png"),

          tech: ["Javascript", "Vue Js", "Firebase"],
          links: [{ github: "" }, { projectLink: "" }],
          projectLink: "https://github.com/favourori/playingwithvuetify"
        },
        {
          title: "Github Finder App",
          desc:
            "Using the Github Public API to build a Javascript app that let's you search for users. It returns their Avatar, repo count, followers, etc",
          image: require("@/assets/images/githubFinder.png"),

          tech: ["Javascript", "HTML5", "CSS3"],
          projectLink: "https://github.com/favourori/githubprofilefinder"
        },

        {
          title: "4 Youth by Youth",
          desc: "Mobile Application Prototyping",

          tech: ["Sketch", "Flaticons"],
          image: require("@/assets/images/4yby.png"),
          projectLink: "http://4yby.org"
        },

        {
          title: "SAU Maths & Computer Science Club",
          desc:
            "Responsive Website for Southern Arkansas University's Computer Science Club",

          tech: ["Javascript", "Materialize"],
          image: require("@/assets/images/sau.png"),
          projectLink: "http://web.saumag.edu"
        }
      ]
    };
  }
};
</script>

<style>
.project {
  height: 360px;

  width: 100%;
  margin-top: 30px;

  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  
}
.projectCard {
  background-image: linear-gradient(to left top, #356a9e, #3d70a3, #4577a8, #4d7dad, #5584b2);
  color: white;
  height: 280px;
  opacity: 0.92;
  

  
  
 
}

.projectCard:hover{
background-image: linear-gradient(to right top, #356a9e, #3d70a3, #4577a8, #4d7dad, #5584b2);
  color: white;
  height: 280px;
  opacity: 1;

  
  
}

.project-image {
  object-fit: cover;
  width: 100%;
}

.mainColor {
  background: #2e86de;
}

.btn:hover {
  background: red;
}




</style>


