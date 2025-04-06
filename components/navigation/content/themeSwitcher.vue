<template>
    <div>
        <v-btn :icon="themeIcon" @click.stop="theme.toggleTheme()" :aria-label="languageToUse" :color="decideColor">

        </v-btn>
    </div>
</template>
<script setup lang="ts">
const theme=useThemeStore()
const {t}=useI18n()

//Computed
const themeIcon=computed(()=>{
    return theme.isDark?'mdi-white-balance-sunny':'mdi-weather-night'
})
const languageToUse=computed(()=>{
    return theme.isDark? t('light') : t('dark')
})
const decideColor=computed(()=>{
    return theme.isDark? 'yellow':'blue'
})

</script>