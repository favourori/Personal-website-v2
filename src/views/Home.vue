<template>
  <div class="home container">
    <p class="hello pSpecial animated fadeInUp">Hi There!</p>
    <p class="intro pSpecial animated fadeInUp">
      I'm Favour Ori —
      <b>US</b> Based
      <b>Software</b> Developer.
    </p>
    <p class="desc animated fadeInUp">
      Passionate about developing innovative products that will steer the future of computing. I love learning & exploring new technologies. I also teach programming
      <span
        style="color:#503A6D"
      ><b>@Favcode54</b></span>
    </p>
    <br>
    <br>
    <br>

    <h5 style="color: black; font-size: 16px; font-weight: 400;  " class="animated fadeInUp">SELECTED PROJECTS</h5> <br/>

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
  color: #2c3e50;
}
.hello {
  font-size: 29px;
  font-weight: 300;
  letter-spacing: 1px;
}
.intro {
  color: #2c3e50;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 1px;
}

.desc {
  color: black;
  font-weight: 300;

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

