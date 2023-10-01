<template>
  <div class="foo-layout">
    <div class="header">
      <h1>Welcome! How can we help?</h1>
    </div>
    <div>
      <SearchBox/>
    </div>
    <div class="hero">
      <a href="/guide/" class="action-button">Get Started</a>
    </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox }
}
</script>


<style>
  .foo-layout {
    width: 100% !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(/bg-home.png) no-repeat;
  }

  .header {
    margin-top: 5rem;
  }

  .search-box input {
    width: 50rem !important;
    height: 3rem !important;
    margin-bottom: 3rem;
    background: #fff url(/assets/img/search.83621669.svg) 0.6rem 0.6rem no-repeat;
    background-size: 1.7rem;
    padding: 0 0.5rem 0 3rem;
  }

  .search-box input:focus {
    border-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .search-box .suggestions{
    width: 52.6rem !important;
  }

  .foo-layout h1 {
    font-size: 80px;
    color: #ffff;
  }

  .action-button {
    width: 9rem;
    padding: 15px;
    border: 1px;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3eaf7c;
  }

  .action-button:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .hero {
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }

  .foo-layout a {
    color: #fff;
    font-size: 1.3rem;
  }

</style>