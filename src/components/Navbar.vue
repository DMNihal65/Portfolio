<!-- src/components/Navbar.vue -->
<template>
    <nav :class="{ 'glass-bg': !isMobileMenuOpen }" class="navbar lg:w-full fixed top-0">
      <div class="container mx-auto flex items-center justify-between p-4 font-Rubik  ">
        <div class="flex items-center font-lexend">
          <!-- Logo -->
          <img src="@/assets/logo.png" alt="Logo" class="mr-2" />
          <span class="text-xl font-semibold font-Rubik ">Your Name</span>
        </div>
  
        <!-- Navbar Links (Hidden on Small Screens) -->
        <div class="hidden lg:flex space-x-4 ">
          <a href="#" class="nav-link">About</a>
          <a href="#" class="nav-link">Projects</a>
          <a href="#" class="nav-link">Contact Me</a>
        </div>
  
        <!-- Hamburger Menu with Icon Change -->
        <div class="lg:hidden cursor-pointer" @click="toggleMenu">
          <img v-if="!isMobileMenuOpen" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/menu-squared-2.png" alt="menu-icon" class="h-8 w-8" />
          <img v-else src="https://img.icons8.com/material-outlined/24/FFFFFF/cancel--v1.png" alt="cancel-icon" class="h-8 w-8" />
        </div>
  
        <!-- Responsive Menu (for Small Screens) -->
        <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div class="popup-menu">
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Projects</a>
            <a href="#" class="nav-link">Contact Me</a>
            <div class="cursor-pointer mt-4" @click="toggleMenu">
              <img v-if="isMobileMenuOpen" src="https://img.icons8.com/material-outlined/24/FFFFFF/cancel--v1.png" alt="cancel-icon" class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMobileMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .navbar {
    background: rgba(126, 143, 198, 0.1);
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Rubik', sans-serif;
    position: fixed; /* Set the navbar as fixed */
    top: 0; /* Position it at the top of the page */
    width: 100%; /* Make it full-width */
    z-index: 1000; /* Set a high z-index to ensure it's above other elements */
  }
  
  .glass-bg {
    backdrop-filter: blur(20px);
  }
  
  .nav-link {
    color: slategrey;
    transition: color 0.3s ease;
    font-family: 'Rubik', sans-serif;
  }
  
  .nav-link:hover {
    color: #e71620;
  }
  
  .popup-menu {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  /* Hamburger Icon Animation */
  @keyframes rotateIn {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Cancel Icon Animation */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .bar {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  .bar-active {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  /* Add your additional styling and animations here */
  </style>
  