<template>
    <v-empty-state :title="t('noItemsTitle')" 
    :text="t('noItemsText')" :image="`/Images/${decideImage}`" class="mt-16" >
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