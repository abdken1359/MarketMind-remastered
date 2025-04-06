<template>
    <v-main class=" min-h-screen">
        <navigation-content-main-hero/>
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
