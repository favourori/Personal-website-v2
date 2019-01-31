<template>
  <div class="home container">
    <p class="hello pSpecial animated fadeInUp ">Hi There!</p>
    <p class="intro pSpecial animated fadeInUp">I'm Favour Ori — A  <b>US </b>Based
      <b>Full Stack</b> Developer.
    </p>
    <p
      class="desc animated fadeInUp"
    >Passionate about developing innovative products that will steer the future of computing. I love learning  & exploring  new technologies. I also teach programming <span style="color:white">@Favcode54</span> </p>
    <br>
    <br>
    <br>

    <h5 style="color: #c0392b; font-size: 32px" class="animated fadeInUp">Work & Projects:</h5>



   

    <HomeProject class="animated fadeInUp"/>
   
   

  </div>
</template>

<script>
// @ is an alias to /src
import HomeProject from "@/components/HomeProject";

export default {
  name: "home",
  components: {
    HomeProject
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,400");

.home {
  margin-top: 120px;
  color: #2e86de;
}

.pSpecial {
  line-height: 15px;
}
.hello {
  font-size: 35px;
  font-weight: 200;
  letter-spacing: 2px;
}
.intro {
  color: #bdc3c7;
  font-size: 28px;
  font-weight: 200;
  letter-spacing: 3px;
}

.desc {
  color: grey;
  font-weight: 200;
  
  font-size: 18px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 200;
  letter-spacing: 2px;
}




@media only screen and (max-width: 600px) {
 .intro {
  color: #bdc3c7;
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 3px;
  line-height: 33px;
}
}

@media only screen and (max-width: 7680px) {
 .intro {
  color: #bdc3c7;
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 3px;
  line-height: 33px;
}
}


</style>

