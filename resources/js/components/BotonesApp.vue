<template>

<v-footer fixed>
      
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark router-link :to="{ path: '/' }">
        <span>Inicio</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn dark router-link :to="{ path: '/AcercaDe' }">
        <span>Acerca de</span>
        <v-icon>info</v-icon>
      </v-btn>

      <v-btn dark router-link :to="{ path: '/Directorio' }">
        <span>Diccionario</span>
        <v-icon>menu_book</v-icon>
      </v-btn>

      <v-btn dark router-link :to="{ path: '/Contactanos' }">
        <span>Test</span>
        <v-icon>sticky_note_2</v-icon>
      </v-btn>
    </v-bottom-nav>
  
  </v-footer>


</template>

<script>
export default {
    
    data() {
        return {
            bottomNav: 4,
            AcercaDe: true
        }
    },
    computed: {
      color () {
        console.log(this.bottomNav)
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'purple '
          case 3: return 'blue'
          case 4: return 'cyan '
        }
      }
    }
};
</script>
