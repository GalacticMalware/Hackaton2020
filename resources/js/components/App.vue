<template>
  <v-app style="background-color:white">
    <Nav></Nav>
    <router-view></router-view>
    <v-flex class="hidden-sm-and-up">
      <BotonesApp></BotonesApp>
    </v-flex>
  </v-app>
</template>

<script>
import Nav from './Nav';
import Inicio from './Inicio';
import BotonesApp from './BotonesApp'
  export default {
    components:{Nav,Inicio,BotonesApp},
  }
</script>