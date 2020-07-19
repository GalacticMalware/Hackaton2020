<template>
    <div>
    <v-img width="626" height="352" style="width:100%; height:auto;" :src="'/img/ImagenInicial.jpg'"></v-img>
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
              <v-toolbar card dark color="teal">
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
export default {
    components:{Encuesta},
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