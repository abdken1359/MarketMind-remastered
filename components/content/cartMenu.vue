<style scoped>
.addItem{
    position: fixed ;
    bottom: 100px;
    right: 20px;
    z-index: 10;
}
.deleteAllItems{
    position: fixed ;
    bottom: 30px;
    right: 20px;
    z-index: 10;

}
</style>
<template>
    <div class="flex align-center justify-center  flex-col">
        <v-text-field :label="$t('searchItem')" color="blue"
         variant="outlined" class="w-100 mx-auto w-md-50" prepend-inner-icon="mdi-magnify"
        rounded="xl" density="comfortable" v-model="items.searchItem"
        >
         
        </v-text-field>

        <div class="addItem">
            <v-btn icon="mdi-plus" :color="decideAddButton" variant="flat"
          
            :aria-label="$t('addToCart') " @click="utils.showAddToCartModal()"></v-btn>
        </div>
        <div class="deleteAllItems">
            <v-btn icon="mdi-delete-empty" :color="decideDeleteButton"
           
            variant="flat" :aria-label="$t('deleteAllItems') " @click="utils.openDeleteAllItemsModal()"></v-btn>
        </div>
        
        

    </div>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const items=useItemsStore()
const theme=useThemeStore()
const {t}=useI18n();

// COMPUTED
const decideAddButton=computed(()=>{
    return theme.isDark?'light-blue-lighten-2':'blue'
})
const decideDeleteButton=computed(()=>{
    return theme.isDark?'red-lighten-3':'red'
})
</script>