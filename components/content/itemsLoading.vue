<template>
    <v-row align="center" justify="center" class="mt-4" >
            <v-col cols="12" md="6" lg="4" v-for="i in 3" :key="i">
                <v-skeleton-loader type="card,actions"></v-skeleton-loader>
            </v-col>
         </v-row>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
</script>