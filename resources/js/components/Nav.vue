<template>
    <div>
        <v-layout justify-center class="hidden-xs-only">
            <br />
            <br />
            <br />
            <v-toolbar
                color="white "
                class="elevation-0"
                dark
                flat
                clipped-left
                fixed
                app
            >
                <!--<v-toolbar-side-icon>Hola</v-toolbar-side-icon> -->
                <v-toolbar-title class="white--text"></v-toolbar-title>
                <v-layout colum justify-center>
                    <v-spacer></v-spacer>
                    <v-layout justify-wrap justify-center>
                       <v-btn flat color="pink" router-link :to="{ path: '/' }">Inicio</v-btn>
                        <v-btn flat color="pink" router-link :to="{ path: '/AcercaDe' }">Acerca de</v-btn>
                        <v-btn flat color="pink" router-link :to="{ path: '/Directorio' }">Diccionario</v-btn>
                        <v-btn flat color="pink" router-link :to="{ path: '/Contactanos' }">Contactos</v-btn>
                    </v-layout>
                </v-layout>
            </v-toolbar>
        </v-layout>
        <v-flex class="hidden-sm-and-up">
    <v-footer>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
      fixed
    >
      <v-btn dark>
        <span>Acerca de</span>
        <v-icon>info</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Contactanos</span>
        <v-icon>contact_mail</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Test</span>
        <v-icon>sticky_note_2</v-icon>
      </v-btn>

    </v-bottom-nav>
  </v-card>
  </v-footer>
  </v-flex>
    </div>

</template>

<script>
export default {
    mounted() {
        console.log("Import");
    },
    data() {
        return {
            bottomNav: 3,
            AcercaDe: true
        }
    },
    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
};
</script>
