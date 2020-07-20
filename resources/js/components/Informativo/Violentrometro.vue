<template>
<div>
<v-layout justify-center>
 <v-flex xs10 md9 lg9 xl9>
<v-card flat>
<v-card-text>
    
    <canvas id="violentrometro" max-width="500px" max-height="500px"></canvas>
    
</v-card-text>
</v-card>
 </v-flex>
 </v-layout>
</div>
</template>

<script>

   export default {
   
    data(){
        return{
            Violentrometro:[],
            InstanciaViolentrometro:"",
        }
    },
    mounted() {
        this.IncioGrafica();
    },
    methods:{
        IncioGrafica(){
            this.InstanciaViolentrometro = document.getElementById('violentrometro');
            this.Violentrometro = new Chart(this.InstanciaViolentrometro,{
                type:"bar",
                data:{
                    labels:[
                        'Broma hirientes',
                        'Chantajear',
                        'Mentiras, engaños',
                        'Ignorar, ley de hielo',
                        'Celar',
                        'Culpabilizar',
                        'Ridiculizar, ofender',
                        'Humillar en publico',
                        'Intimidar, amenazar',
                        'Controlar, prohibir',
                        'Destruir articulos personales',
                        'Menosear',
                        'Caricias agresivas',
                        'Golpear "Jugando"',
                        'Pellizcar,arañar',
                        'Cachetear',
                        'Patear',
                        'Encerrar, aislar',
                        'Amenazar de con objetos o armas',
                        'Amenazar de muerte',
                        'Amenazar de muerte',
                        'Forzar a una relación sexual',
                        'Violar',
                        'Mutilar',
                        'ASESINAR' 
                    ],
                    datasets: [
                        {
                            label: ["Nivel"],
                            backgroundColor: [
                            "#00838F",//verde
                            "#0097A7",//verde
                            "#00ACC1",//verde
                            "#26C6DA",//verde
                            "#FFA726",//Amarillo
                            "#FB8C00",
                            "#F57C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF6C00",
                            "#EF5350",//ROJO
                            "#E53935",
                            "#E53935",
                            "#E53935",
                            "#E53935",
                            "#D32F2F",
                            "#D32F2F",
                            "#D32F2F",
                            "#B71C1C",
                            "#B71C1C"
                            ],
                            data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                      display: true,
                      text: "Violentómetro"
                    }
                }
            });
        }
       
    }
};
</script>