<template>
    <div>
    <v-empty-state icon="mdi-alert-circle-outline" :title="`${items.searchItem} ${$t('itemNotFound')}`"></v-empty-state>
    </div>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const items=useItemsStore()
const theme=useThemeStore()
const {t}=useI18n()
</script>