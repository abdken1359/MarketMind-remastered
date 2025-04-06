<template>
    <v-sheet elevation="0" :color="themeColor" class="pa-10">
        <h1>{{ $t('heroMessage') }}</h1>

    </v-sheet>
</template>
<script setup lang="ts">
const theme=useThemeStore()

//computed 
const themeColor=computed(()=>{
   return theme.isDark?'light-blue-lighten-1':'blue'
})
</script>