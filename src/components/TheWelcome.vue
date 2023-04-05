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
    <div class="login">
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button type="submit">Log In</button>
      </form>
    </div>
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
  height: 120px;
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
}

.login {
  display: flex;
  align-items: center;
}

form {
  display: flex;
  align-items: center;
  margin: 0;
}

label {
  margin-right: 10px;
}

input {
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>