<template>
    <div>
     <v-layout justify-center class="hidden-sm-and-up">
    <br />
        <br />
        <br />
         </v-layout>
    <v-img width="626" height="352" style="width:100%; height:auto;" :src="'/img/Propo.jpg'"></v-img>
    <br />
    <br />
    <br />
    <br />
    <br />
    <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
          <h3 class="display-3">¿Sabes lo que es un violentómetro?</h3>
            <br />
            <br />
          <span class="subheading">El Violentómetro es una herramienta de gran utilidad la cual permite a hombres y mujeres estar alerta, capacitadas (os) y/o atentas (os) para detectar y atender la violencia en cualquiera de sus tipos y modalidades a través de diferentes manifestaciones, resultando no solo benéfico para las instituciones educativas, sino también en los ámbitos familiar (relaciones de pareja) y laboral.</span>
            
            </center>
          <v-divider class="my-3"></v-divider>
            <center>
          <div class="title mb-3">Ve los nievesl del Violentómetro</div>
            </center>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <Violentrometro></Violentrometro>
     <v-flex xs sm md lg xl class="hidden-xs-only">
        <v-card>        
            <v-card-text>
                <v-container grid-list-md>
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen2.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs8 sm8 md8 lg8 xl8 >
                                                Muchas veces creemos estar bien con nosotras mismas
                                            </v-flex>
                                        </v-layout>
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>
                    <br />
                    <br />
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen3.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs8 sm8 md8 lg8 xl8 >
                                                En ocaciones nos hace sentir mal.
                                            </v-flex>
                                        </v-layout>
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen4.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs8 sm8 md8 lg8 xl8 >
                                                Algo...
                                            </v-flex>
                                        </v-layout>
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen5.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card-btn display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs8 sm8 md8 lg8 xl8 >
                                                Te invitamos a participar en nuestra encuesta.
                                                <v-btn color="#e17e6e" large @click="EncuestaActivar = true">Encuesta<v-icon style="margin-left:10px">sticky_note_2</v-icon></v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>        
                </v-container>
                
            </v-card-text>
        </v-card>

 </v-flex> 
 <!--Sin hover-->
 <v-layout justify-center class="hidden-sm-and-up">
    <v-flex xs11>
    <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen2.jpg'"
    >
    </v-img>
    </v-flex>
</v-layout>
<v-layout justify-center class="hidden-sm-and-up">
    <v-flex xs11>
    <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen3.jpg'"
    >
    </v-img>
    </v-flex>
</v-layout>
<v-layout justify-center class="hidden-sm-and-up">
    <v-flex xs11>
    <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen4.jpg'"
    >
    </v-img>
    </v-flex>
</v-layout>
<v-layout justify-center class="hidden-sm-and-up">
    <v-flex xs11>
    <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen5.jpg'"
    >
    </v-img>
    </v-flex>
</v-layout>

<br />
<br />
<br />



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
                        <span class="headline">Encuesta</span>
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
    <Encuesta></Encuesta>
                    </v-card>
                    
              </v-dialog>
              
        
    </div>
</template>
<script>
    import Encuesta from "./Encuesta"
    import Violentrometro from './Informativo/Violentrometro'
export default {
    components:{Encuesta,Violentrometro},
    mounted() {
        console.log("Import");
    },
    data(){
        return{
            EncuestaActivar:false,
            e6:1
        }
    },
    methods:{
       
    }
};
</script>