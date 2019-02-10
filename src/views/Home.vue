<template>
  <div class="home container">
    <p class="hello pSpecial animated fadeInUp">Hello There!</p>
    <p class="intro pSpecial animated fadeInUp" style="font-size: 20px">
      I am <span style="font-weight: 400">Favour Ori</span> —
      <b>US</b> Based
      <b>Software</b> Developer.
    </p>
    <p class="desc animated fadeInUp">
     Passionate about developing innovative products that will steer the future of computing. I love learning & exploring new technologies. I also teach programming
      <span
        style="color:#503A6D; font-size: 20px"
      ><b>@Favcode54</b></span> <br/> 
    
    </p>
    <br>
    <br>
    <br>

    <p style="color: black; font-size: 18px; font-weight: 100;   " class="animated fadeInUp"> <span style="    background: #5584B2; color: white ; padding: 6px 10px;  ">Recent Projects </span></p> 

    <HomeProject class="animated fadeInUp"/>

     
    <p style="color: black; font-size: 18px; font-weight: 100;   " class="animated fadeInUp"> <span style="    background: #5584B2; color: white ; padding: 6px 10px;  ">I have worked with </span></p> 
 <br/>

 <div class="desc" style="line-height: 10px; font-size: 16px; font-weight: 300; ">
  <p>CultureBase PBC</p>
  <p>Saint Louis University</p>
  <p>Okahoma State University</p>
  <p>Southern Arkansas University</p>
  </div>
  
  <br/>
    <div class="row" style="margin-left: -10px; margin-right: -10px">
     
      <div class="col s6 desc" style="font-size: 17px">I am always open to new oppourtunities. If you have something interesting you'll like to discuss, feel free to drop me a line.</div>
      <div class="col s6 right-align">
<a class="waves-effect waves-light btn z-depth-0 btn-color blue" href="#" ><i class="material-icons left">info</i>About Me </a> &nbsp;
<a class="waves-effect waves-light btn z-depth-0 btn-color blue" href="#" ><i class="material-icons left">contact_mail</i>Contact</a>

      </div>
    </div>
  
   
<br/><br/>


 <div class="row" style="margin-left: -10px; margin-right: -10px">
     
      <div class="col s6 desc" style="font-size: 17px">
      <p style="color: grey; font-size: 14px"> Designed with ❤️ by  Favour Ori &nbsp;&nbsp; - &nbsp;&nbsp;© 2019 All Rights Reserved </p>
        </div>
      <div class="col s6 right-align">

<a href="#" >
  <img src="@/assets/images/github.svg">
</a>

&nbsp;

<a href="#">
  <img src="@/assets/images/linkedIn.svg">
</a>

&nbsp;
<a href="#">
  <img src="@/assets/images/instagram.svg">
</a>

      </div>
    </div>


  
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

.btn-color{
 background-image: linear-gradient(to left top, #356a9e, #3d70a3, #4577a8, #4d7dad, #5584b2);
}

.btn:hover{
  background-color: #438ad1;
}






.pSpecial {
  line-height: 15px;
  color: #2c3e50;
}
.hello {
  font-size: 23px;
  font-weight: 300;
  letter-spacing: 1px;
}
.intro {
  color: #2c3e50;
  font-size: 28px;
  font-weight: 300;
  
}

.desc {
  color: black;
  font-weight: 300;

  font-size: 17px;
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
    color: #2c3e50;
    font-size: 25px;
    font-weight: 200;
    letter-spacing: 3px;
    line-height: 33px;
  }
}

@media only screen and (max-width: 7680px) {
  .intro {
    color: #2c3e50;
    font-size: 25px;
    font-weight: 200;
    letter-spacing: 1px;
    line-height: 33px;
  }
}
</style>

