<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-4" ref="textLine"></h1>
        <div class="text-sm" ref="subText"></div>
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
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { gsap } from 'gsap';
  
  const textLine = ref(null);
  const subText = ref(null);
  const words = ['Web Developer', 'Designer', 'AI Enthusiast', 'Coder'];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let typingInterval;
  let cursorBlinkingInterval;
  
  onMounted(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });
  
    // Typing animation
    tl.to(textLine.value, {
      opacity: 1,
      onComplete: startTypingAnimation,
    });
  });
  
  onBeforeUnmount(() => {
    clearInterval(typingInterval);
    clearInterval(cursorBlinkingInterval);
  });
  
  const startTypingAnimation = () => {
    typingInterval = setInterval(() => {
      const word = words[currentWordIndex];
      const letter = word[currentLetterIndex];
  
      if (letter === '|') {
        // Handle cursor blinking
        cursorBlinkingInterval = setInterval(() => {
          const currentText = textLine.value.textContent;
          textLine.value.textContent = currentText.endsWith('|') ? currentText.slice(0, -1) : currentText + '|';
        }, 500);
      } else {
        // Handle typing animation
        const currentText = textLine.value.textContent;
        textLine.value.textContent = currentText.slice(0, -1) + letter + '|';
        currentLetterIndex++;
  
        if (currentLetterIndex === word.length) {
          // Word typing complete
          clearInterval(typingInterval);
          clearInterval(cursorBlinkingInterval);
  
          // Move to the next word
          currentWordIndex++;
          currentLetterIndex = 0;
  
          if (currentWordIndex < words.length) {
            // Start typing the next word
            startTypingAnimation();
          }
        }
      }
    }, 150);
  };
  
  const downloadCV = () => {
    console.log('Downloading CV');
  };
  
  const scrollToContact = () => {
    console.log('Scrolling to Contact');
  };
  </script>
  
  <style scoped>
  /* Add additional styles as needed */
  </style>
  