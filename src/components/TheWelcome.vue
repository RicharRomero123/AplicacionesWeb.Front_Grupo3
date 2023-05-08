<template>
  <header class="header">
    <div class="menu">
      <button class="menu-button" @click="toggleMenu">
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
      </button>
      <nav class="menu-items" :class="{ 'show-menu': isMenuOpen }">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
      </nav>
    </div>
    <div class="logo">LIBRARY UPC</div>
    <router-link class="home-button" to="/" @click="Backtohome()"></router-link>
    <router-link class="user-button" to="/login" ></router-link>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px;
}

.menu {
  display: flex;
  align-items: center;
}

.menu-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.menu-icon {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 5px;
}

.menu-items {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: black;
  color: white;
  width: 200px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.show-menu {
  height: 160px;
  left: 0;
  right: auto;
  z-index: +1;
}

.menu-items ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-items li {
  padding: 10px;
}

.menu-items a {
  color: white;
  text-decoration: none;
}

.logo {
  font-size: 28px;
  margin-left: 600px;
}

.user-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  background-image: url(https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png);
  background-size: 50px 50px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.home-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy18s9_V1BXihC2F1PLmxWMhs7rkJ5ByjiVkn8USe3mQ&s);
  background-size: 50px 50px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-right: 20px;
  margin-left: auto;
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    Backtohome(){
      localStorage.clear();
    }
  }
}
</script>
