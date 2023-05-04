<template>
  <div class="cascade-wrapper">
    <table class="dc-table">
      <tr v-for="n in 8" :key="n.id" :class="'row-' + n">
        <td v-for="d in 20" :key="d.id" :class="'dc' + d">
          {{ useSassyLcars.randomNumber() }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { SassyLcars } from '../assets/sassy-lcars/sassy-lcars.js'

const useSassyLcars = new SassyLcars()
</script>
