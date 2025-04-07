<template>
    <v-main class=" min-h-screen">
        <content-main-hero/>
        <content-empty-list v-if="items.storeItems.length<1"/>
        <ContentCart v-else/>
        <content-modals-add-to-cart-modal/>
        <ContentModalsConfirmDeletion/>
    </v-main>
</template>
<script setup lang="ts">
import { ContentCart } from '#components';

const head= useLocaleHead()
const items=useItemsStore();
const utils=useUtilitiesStore();
const {t}=useI18n()
useHead({
    title:'MarketMind - Shopping Cart App',
    meta:[
        {
            name:'description',
            content:t('heroMessage'),

        }
    ]
})
const theme=useThemeStore()

</script>
