<template>
    <Navbar class="mt-4" />
    <div>
      <header class="min-h-screen flex items-center justify-center relative  text-white">
        <!-- <img src="../assets/hand.png" alt="hand" class="h-40 rotate-45 absolute top-12 "> -->
        
        <div class="text-center">
            <div class="hidden sm:block top-50 left-40 absolute">
  <img src="../assets/design.gif" alt="" class="h-44">
</div><div>
            <h1 class="text-6xl font-lexend text-blue-400">DM Nihal</h1>
           
          </div>
          <h1 class="text-2xl font-bold mb-4">
            <span class="text-xl font-lexend text-slate-500 font-medium">I am a <span class="text-type text-2xl text-yellow-400"></span></span>
          </h1>
          <div class="text-sm">
            <span ref="subText"></span>
          </div>
          <div class="text-slate-500 ">
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.
            </p>
             </div>

          <div class="mt-6">
            <button @click="downloadCV" class="bg-white text-blue-700 px-4 py-2 rounded-full focus:outline-none">
              Download CV
            </button>
            <button @click="scrollToContact" class="ml-4 bg-blue-700 text-white px-4 py-2 rounded-full focus:outline-none">
              Contact Me
            </button>
          </div>
          
        </div>
        <div class="ml-6 relative">
          <img src="@/assets/home.png" alt="Landing Image" class="" />
  
          
        </div>
      </header>
  
      <section class="container mx-auto mt-8">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum justo vel erat tincidunt, a gravida
          urna sollicitudin.
        </p>
      </section>
  
      <section class="container mx-auto mt-8">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
        <!-- Add your project details here -->
      </section>
  
      <section class="container mx-auto mt-8">
        <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
        <!-- Add your contact form or details here -->
      </section>
  
      <footer class="bg-gray-800 p-4 mt-8">
        <div class="container mx-auto text-white text-center">
          &copy; 2023 Your Website | All Rights Reserved
        </div>
      </footer>
    </div>
  </template>
  <script setup>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Typed from 'typed.js';
  import { onUnmounted, onMounted } from 'vue';
  import Navbar from './Navbar.vue'
  
  gsap.registerPlugin(ScrollTrigger);
  
  onMounted(() => {
    const options = {
      strings: ["Web Developer", "Designer", "AI Enthusiast", "Coder"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    };
  
    const typed = new Typed('.text-type', options);
  
    onUnmounted(() => {
      typed.destroy();
    });
  
   
});
  
  const downloadCV = () => {
    console.log('Downloading CV');
  };
  
  const scrollToContact = () => {
    console.log('Scrolling to Contact');
  };
  </script>
  

  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  /* background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%); */
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

nav a:hover {
  background-color: #34495e;
}

header {
  /* background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%); */
}

section {
  /* background: hsla(217, 100%, 50%, 1); */
}

footer {
  /* background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%); */
  color: white;
}
</style>
