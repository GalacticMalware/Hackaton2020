<template>
<div>
<br />
<br />
<br />
<v-layout column justify-center align-center>
      <v-subheader>Violentómetro</v-subheader>
    </v-layout>
    <v-container
      id="scroll-target"
      style="max-height: 400px"
      class="scroll-y"
    >


<v-data-table
    :items="desserts"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.nivel }}</td>
      <td class="text-xs-center">{{ props.item.agrecion }}</td>
    </template>
  </v-data-table>


      <v-layout
        v-scroll:#scroll-target="onScroll"
        column
        align-center
        justify-center
        style="height: auto"
      >
      </v-layout>
    </v-container>

  </div>
</template>

<script>
    export default {
    data () {
      return {
        desserts: [
          {
            nivel: 1,
            agrecion: 'Broma hirientes',
          },
          {
            nivel:2,
            agrecion: 'Chantajear',
          },
          {
            nivel: 3,
            agrecion: 'Mentiras, engaños',
          },
          {
            nivel: 4,
            agrecion: 'Ignorar, ley de hielo',
          },
          {
            nivel: 5,
            agrecion: 'Celar',
          },
          {
            nivel: 6,
            agrecion: 'Culpabilizar',
          },
          {
            nivel: 7,
            agrecion: 'Ridiculizar, ofender',
          },
          {
            nivel: 8,
            agrecion: 'Humillar en publico',
          },
          {
            nivel: 9,
            agrecion: 'Intimidar, amenazar',
          },
          {
            nivel: 10,
            agrecion: 'Controlar, prohibir',
          },
          {
            nivel: 11,
            agrecion: 'Destruir articulos personales',
          },
          {
            nivel: 12,
            agrecion: 'Menosear',
          },
          {
            nivel: 13,
            agrecion: 'Caricias agresivas',
          },
          {
            nivel: 14,
            agrecion: 'Golpear "Jugando"',
          },
          {
            nivel: 15,
            agrecion: 'Pellizcar,arañar',
          },
          {
            nivel: 16,
            agrecion: 'Cachetear',
          },
          {
            nivel: 17,
            agrecion: 'Patear',
          },
          {
            nivel: 18,
            agrecion: 'Encerrar, aislar',
          },
          {
            nivel: 19,
            agrecion: 'menazar de con objetos o armas',
          },
          {
            nivel: 20,
            agrecion: 'Amenazar de muerte',
          },
          {
            nivel: 21,
            agrecion: 'Forzar a una relación sexual',
          },
          {
            nivel: 22,
            agrecion: 'Violar',
          },
          {
            nivel: 23,
            agrecion: 'Mutilar',
          },
          {
            nivel: 24,
            agrecion: 'ASESINAR',
          },
        ]
      }
    }
  }
</script>