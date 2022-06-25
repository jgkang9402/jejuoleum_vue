<template>
  <div>
    <nav>
      <div class="nav-wrap">
        <router-link to="/">
          <div id="logo">
            <!-- <span class="logo">🗻</span> -->
            <img src="../assets/logo.png" alt="" />
            <!-- <div class="cow">🐂</div> -->
            <div class="cow">🐄</div>
            <h1>5leum</h1>
          </div>
        </router-link>
        <div class="nav">
          <router-link to="/list/0"
            ><div class="nav-link">All</div></router-link
          >
          <router-link to="/map"><div class="nav-link">Map</div></router-link>
          <router-link to="/like"><div class="nav-link">Visit</div></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #000;
  height: 10vh;
}
.nav-wrap {
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-wrap #logo {
  display: flex;
  align-items: center;
}
.nav-wrap #logo h1 {
  position: relative;
  left: -7%;
}
.nav-wrap #logo img {
  width: 32px;
  height: 32px;
  transform: rotate(180deg);
}
.nav-wrap #logo .cow {
  font-size: 1.5rem;
  position: relative;
  left: -5%;
}
.nav-wrap #logo:hover .cow {
  display: inline-block;
  transition: 0.3s;
  transform: rotate(60deg);
  left: -8%;
  top: -5px;
}

.nav {
  display: flex;
  align-items: center;
}
.nav a {
  /* width: 3vw; */
  margin-right: 2vw;
}
.nav-link {
  text-align: center;
  font-size: 1rem;
  width: 5vw;
  border: 1px dotted #000;
  border-radius: 5px;
}
.nav-link:hover {
  background-color: beige;
}
</style>
