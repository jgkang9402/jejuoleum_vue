<template>
  <div>
    <nav>
      <div class="nav-wrap">
        <router-link to="/"
          ><h1><span>🗻</span><span class="cow">🐄</span>5leum</h1></router-link
        >
        <div class="nav">
          <router-link to="/list/0"
            ><div class="nav-link">All</div></router-link
          >
          <router-link to="/map"><div class="nav-link">Map</div></router-link>
          <router-link to="/like"><div class="nav-link">Like</div></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  border-bottom: 1px solid #000;
}
.nav-wrap {
  width: 90vw;
  height: 5vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-wrap h1:hover .cow {
  display: inline-block;
  position: relative;
  transition: 0.3s;
  transform: rotate(60deg);
  left: -10%;
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
