---
title: Home
---

<template>
  <Search/>
  <div class="home-page">
    <div class="features">
      <div class="feature">
        <img src="/overview.png" class="home-img">
        <h2 id="overview"><a href="./guide/overview.html">RAXWireless Overview</a></h2>
        <p>Explore the user interface and functionalities tailored for end-users.</p>
      </div>
      <div class="feature">
        <img src="/billing.png" class="home-img">
        <h2 id="billing"><a href="./guide/registration.html">Simplified User Registration</a></h2>
        <p>A step-by-step guide to effectively manage user accounts and registrations within the CRM.</p>
      </div>
      <div class="feature">
        <img src="/support.gif" class="home-img">
        <h2 id="support"><a href="./guide/support.html">Exploring Support</a></h2>
        <p>Discover the full range of capabilities and advantages offered by the Support feature through this in-depth guide.</p>
      </div>
    </div>
  </div>
  <footer class="footer">
      ©2023 RAXWireless.com | All rights reserved.
  </footer>
</template>


<style>
.home-page .theme-container .no-sidebar {
min-width: 100%!important;
display: flex!important;
justify-content: center;
align-items: center;
}

.theme-default-content:not(.custom) > *:first-child {
margin-top: 0 !important;
border: none;
}

.features {
display: flex !important;
flex-direction: row;
justify-content: center;
align-items: center;

}

.feature {
margin: 2rem;
width: 100%;
text-align: center;
border: 1px solid #eaecef;
}

.home-img {
max-height: 15rem;
}

.home-page .navbar {
border: none !important;
}
</style>