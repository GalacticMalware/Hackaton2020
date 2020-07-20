<template>
<div>
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
        <span>Directorio</span>
        <v-icon>menu_book</v-icon>
      </v-btn>

      <v-btn dark @click="EncuestaActivar = true">
        <span>Test</span>
        <v-icon>sticky_note_2</v-icon>
      </v-btn>
    </v-bottom-nav>
    <v-dialog
                v-model="EncuestaActivar"
                max-width="1000px"
                persistent
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
              >
              <v-card>
              <v-toolbar card dark color="#ff6666">
              
                      <v-btn icon dark @click="EncuestaActivar = false">
                        <v-icon>close</v-icon>
                      </v-btn>
              
                      <v-toolbar-title>
                      <v-layout justify-center>
                        <span class="headline">Encuesta</span>
                      </v-layout>
                      </v-toolbar-title>
                      
                      
                    </v-toolbar>
                    <Encuesta></Encuesta>
                    </v-card>
                    
              </v-dialog>
  
  </v-footer>

 
</div>

</template>

<script>
import Encuesta from "./Encuesta"
export default {
     components:{Encuesta},
    data() {
        return {
            bottomNav: 4,
            AcercaDe: true,
            EncuestaActivar:false,
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
