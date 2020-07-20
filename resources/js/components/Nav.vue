<template>
    <div>
        <v-layout justify-center class="hidden-xs-only">
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
               <!--> <v-toolbar-title class="white--text"></v-toolbar-title>-->
                <v-img max-width="100px" min-width="100px" :src="'/img/logo2.png'"></v-img>
                <v-layout colum justify-center>
                    <v-spacer></v-spacer>
                    <v-layout justify-wrap justify-center>
                       <v-btn flat color="#ff6666" router-link :to="{ path: '/' }">Inicio <v-icon style="margin-left:10px;" color="pink">house</v-icon></v-btn>
                        <v-btn flat color="#ff6666" router-link :to="{ path: '/AcercaDe' }">Acerca de <v-icon style="margin-left:10px;" color="pink">info</v-icon></v-btn>
                        <v-btn flat color="#ff6666" router-link :to="{ path: '/Directorio' }">Directorio <v-icon style="margin-left:10px;" color="pink">import_contacts</v-icon></v-btn>
                        <v-btn flat color="#ff6666" router-link :to="{ path: '/Contactanos' }">Contactos<v-icon style="margin-left:10px;" color="pink">contact_mail</v-icon></v-btn>
                    </v-layout>
                </v-layout>
                
            </v-toolbar>
            <br />
        <br />
        <br />
        </v-layout>
        
        <v-flex class="hidden-sm-and-up">
         <v-toolbar
                color="#ff6666"
                class="elevation-0"
                dark
                flat
                clipped-left
                fixed
                app
            >
            
                <!--<v-toolbar-side-icon>Hola</v-toolbar-side-icon> -->
                <v-toolbar-title class="white--text"></v-toolbar-title>
                <v-img max-height="60px" max-width="60px":src="'/img/logo.png'"></v-img>
                <v-layout colum justify-center>
                    <v-spacer></v-spacer>
                    <v-layout justify-wrap justify-center>
                       <v-btn flat icon color="white--text" router-link :to="{ path: '/Contactanos' }"><v-icon style="margin-left:10px;" color="white">contact_mail</v-icon></v-btn>
                    </v-layout>
                </v-layout>
            </v-toolbar>
  </v-flex>
    </div>

</template>

<script>
export default {
    
    data() {
        return {
            AcercaDe: true
        }
    },
    computed: {
      
      
    }
};
</script>
