<template>
    <div>
    <v-dialog v-model="utils.isDeleteAllItemModalOpen">
        <v-card max-width="500" class="mx-auto" :title="$t('areYouSure')" :text="$t('irreversibleAction')">
           <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :text="$t('deleteAll')"></v-btn>
            <v-btn :text="$t('cancelAction')" @click="utils.closeDeleteAllItemsModal()" :color="decideCancelColor"></v-btn>
           </v-card-actions>
        </v-card>
    </v-dialog>
    <v-snackbar v-model="showSuccessMessage" color="green-accent-2" :timeout="2000" location="left">
    {{ $t('addItemSuccessMessage') }}
</v-snackbar>
</div>
</template>
<script setup lang="ts">
const theme=useThemeStore()
const display=useDisplay()
const utils=useUtilitiesStore()
const items=useItemsStore()
const {t}=useI18n()
const showSuccessMessage=ref(false)
// COMPUTED

const decideCancelColor=computed(()=>{
    return theme.isDark?'red-lighten-3':'red'
})
const deleteAll=()=>{
        items.deleteAllItems()
        showSuccessMessage.value=true   
}
</script>