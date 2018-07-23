<template>
  <div>
　　　<div class="header">
      <router-link to="/">
        top
      </router-link>
      <router-link to="about">
        about
      </router-link>
      <router-link to="contact">
        contact
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>