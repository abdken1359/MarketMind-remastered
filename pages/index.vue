<template>
    <v-main class=" min-h-screen">
        <v-container>
        <h1>Hello world! {{ theme.isDark }} {{ $t("heroMessage") }}</h1>
        <v-btn :color="theme.isDark?'blue-lighten-2':'blue'" @click="theme.isDark=!theme.isDark">Hellow</v-btn>
    <v-btn color="yellow-darken-1" class="mx-4":to="$switchLocalePath('fr')">Switch to Fr</v-btn>
    <v-btn color="green-lighten-1" class="mx-4":to="$switchLocalePath('en')">Switch to EN</v-btn>
<p class="my-4">{{ head.htmlAttrs.lang }}</p>    
</v-container>
    </v-main>
</template>
<script setup lang="ts">
const head= useLocaleHead()
useHead({
    title:'MarketMind - Shopping Cart App',
    meta:[
        {
            name:'description',
            content:'Create and manage your shopping list with this simple and efficient market bucket list app.',

        }
    ]
})
const theme=useThemeStore()

</script>
