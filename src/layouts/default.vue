<template>
  <div class="layout">
    <div class="toggle-position">
      <ToggleDarkMode client:load />
    </div>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <div class="wrapper">
        <HelloWorld :msg="$frontmatter.title" />
        <div id="nav">
          <router-link to="/"> Home </router-link>
          <router-link to="/about"> About </router-link>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<style>
  /* @import '~/assets/base.css'; */
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  a,
  .green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }
  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }
  #nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
  #nav a.router-link-exact-active {
    color: var(--color-text);
  }
  #nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
  #nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
  #nav a:first-of-type {
    border: 0;
  }
  .toggle-position {
    position: fixed;
    right: 40px;
    top: 40px;
    z-index: 1;
  }
  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
    }
    .layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    #app {
      padding: 0 2rem;
    }
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
    .logo {
      margin: 0 2rem 0 0;
    }
    #nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
