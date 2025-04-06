<template>
<v-dialog width="auto" v-model="utils.isAddToCartModalOpen" transition="dialog-bottom-transition"
 :fullscreen="decideFullscreen"
>
    <v-card
        :width="decideWidth"
        prepend-icon="mdi-plus"
       class="mx-auto"
       
        :title="$t('addToCartTitle')"
      >
      <template #append>
        <v-btn icon="mdi-close" variant="text" aria-label="Close Modal. Fermer le dialogue" 
        @click.stop="utils.closeAddToCartModal()">

        </v-btn>
      </template>
      <v-card-text>
      <v-form @submit.prevent class="mt-6">
        
        <v-radio-group v-model="addToCartForm.itemCategory" :label="$t('addToCartItemCategory')"
       
        > 
       <v-row align="center" >

     <v-col cols="12" md="4">
        <v-radio :label="$t('noCategory')" value="none"></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('beautyCategory')" value="beauty"></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('booksCategory')" value="books"></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('clothingsCategory')" value="clothing"></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('electronicsCategory')" value="electronics"></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('furnitureCategory')" value="furnitures" ></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('groceriesCategory')" value="groceries" ></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('healthCareCategory')" value="healthcare" ></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('petsCategory')" value="pets" ></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('sportsCategory')" value="sports" ></v-radio>
     </v-col>
     <v-col cols="12" md="4">
        <v-radio :label="$t('toysCategory')" value="toys" ></v-radio>
     </v-col>
    
      
        
        
        
    </v-row>
    


        </v-radio-group>

        <v-text-field :label="$t('addToCartItemName')" type="text" variant="outlined" class="mt-4"
        v-model="addToCartForm.itemName"
        >
   
        </v-text-field>
        <v-text-field :label="$t('addToCartItemQuantity')" type="number"
        @keypress.e.prevent
        variant="outlined" 
        v-model="addToCartForm.itemQuantity"
        >
   
        </v-text-field>

        <v-select
  label="Select"
  :items="collections"
  v-model="addToCartForm.itemCollection"
  variant="outlined"
>
</v-select>

        <p class="my-4">{{ addToCartForm }}</p>
      </v-form>
    </v-card-text>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Cancel"
            color="red"
            @click="utils.closeAddToCartModal"
          ></v-btn>
        </template>
      </v-card>
</v-dialog>
    
</template>

<script setup lang="ts">
const utils=useUtilitiesStore()
const iseOpen=ref(true)
const display=useDisplay()
const {t}=useI18n();
const addToCartForm=reactive({
    itemCategory:'none',
    itemName:'',
    itemQuantity:'',
    itemCollection:t('itemCollectionNone'),
    itemPricePerQuantity:'',
    itemCurrency:'',


    

})
const collections=ref(
    [
        t('itemCollectionNone'),
        t('itemCollectionPackages'),
        t('itemCollectionCups'),
        t('itemCollectionBags')
]
)
//Computed
const decideFullscreen=computed(()=>{
   return display.smAndDown.value?true:false
})
const decideWidth = computed(()=>{
    return display.smAndDown.value?'100%':'70%'
})

</script>