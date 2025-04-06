<template>
    <v-main class=" min-h-screen">
        <content-main-hero/>
        <content-empty-list v-if="items.storeItems.length<1"/>
        <content-modals-add-to-cart-modal/>
    </v-main>
</template>
<script setup lang="ts">
const head= useLocaleHead()
const items=useItemsStore();
const utils=useUtilitiesStore();
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
