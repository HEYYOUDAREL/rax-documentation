<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social-icons">
        <a href="#" class="social-icon" target="_blank">
          <img src="/path/to/facebook-icon.png" alt="Facebook">
        </a>
        <a href="#" class="social-icon" target="_blank">
          <img src="/path/to/skype-icon.png" alt="Skype">
        </a>
        <!-- Add more social icons as needed -->
      </div>
    </div>
  </footer>
</template>

<style>
  .footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
  }

  .social-icons {
    margin-top: 20px;
  }

  .social-icon {
    display: inline-block;
    margin: 0 10px;
  }

  .social-icon img {
    width: 40px; /* Adjust the width and height as needed */
    height: 40px;
  }
</style>