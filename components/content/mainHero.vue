<template>
    <v-sheet elevation="0" :color="themeColor" class="pa-10">
        <h2 class="d-none d-lg-block font-weight-light">{{ $t('heroMessage') }}</h2>
        <h3 class="d-block d-lg-none font-weight-light">{{ $t('heroMessage') }}</h3>
        

    </v-sheet>
</template>
<script setup lang="ts">
const theme=useThemeStore()

//computed 
const themeColor=computed(()=>{
   return theme.isDark?'light-blue-lighten-1':'blue'
})
</script>