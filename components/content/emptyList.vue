<style scoped>
.myImg{
    width: 150px!important;
    height: 150px!important;
   
}
</style>
<template>
    <v-empty-state :title="t('noItemsTitle')" 
    :text="t('noItemsText')"  class="mt-16" >
    <template #media>
        <v-img :src="`/Images/${decideImage}`"  class="mx-auto myImg" :alt="t('noItemsTitle')"></v-img>
    </template>
    <template #actions>
        <v-btn :color="decideColor" prepend-icon="mdi-plus" @click="utils.showAddToCartModal">{{ t('noItemsAction') }}</v-btn>
    </template>

    </v-empty-state>
</template>
<script setup lang="ts">
const {t}=useI18n()
const theme=useThemeStore()
const utils=useUtilitiesStore()

//Computed
const decideImage=computed(()=>{
    return theme.isDark?'empty_list_dark.svg':'empty_list.svg'
})

const decideColor=computed(()=>{
return theme.isDark?'blue-grey':'blue-grey-darken-2'
})

</script>