<template>
  <v-app style="background-color:white">
    <Nav></Nav>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Nav from './Nav';
import Inicio from './Inicio';
  export default {
    components:{Nav,Inicio},
  }
</script>