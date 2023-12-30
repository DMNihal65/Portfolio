<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-4" ref="textLine">
          <span>I am DM Nihal</span>
        </h1>
        <div class="text-sm" ref="subText">
          <span ref="webDev">Web Developer, </span>
          <span ref="designer">Designer, </span>
          <span ref="aiEnthusiast">AI Enthusiast, </span>
          <span ref="coder">Coder</span>
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
      <div class="ml-8">
        <img src="@/assets/landing-image.jpg" alt="Landing Image" class="rounded-lg shadow-lg" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const textLine = ref(null);
  const subText = ref(null);
  const webDev = ref(null);
  const designer = ref(null);
  const aiEnthusiast = ref(null);
  const coder = ref(null);
  
  onMounted(() => {
    // Animation Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });
  
    tl.from(textLine.value, { opacity: 0, y: -50 })
      .from(subText.value.children, { opacity: 0, stagger: 0.2 })
      .from([webDev.value, designer.value, aiEnthusiast.value, coder.value], { opacity: 0, x: -20, stagger: 0.2 });
  });
  
  const downloadCV = () => {
    // Add logic to download CV (e.g., create and trigger a download link)
    console.log('Downloading CV');
  };
  
  const scrollToContact = () => {
    // Add logic to scroll to the contact section (e.g., using a smooth scroll library)
    console.log('Scrolling to Contact');
  };
  </script>
  
  <style scoped>
  /* Add additional styles as needed */
  </style>
  