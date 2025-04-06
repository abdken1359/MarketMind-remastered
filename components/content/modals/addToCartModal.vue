<template>
    <div>
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

        <!--Form starts-->
      <v-form @submit.prevent="handleThis" class="mt-6">
        
        <v-radio-group v-model="addToCartForm.itemCategory" :label="$t('addToCartItemCategory')"
       
        > 
       <v-row align="center" >

     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('otherCategory')" value="other"></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('beautyCategory')" value="beauty"></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('booksCategory')" value="books"></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('clothingsCategory')" value="clothing"></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('electronicsCategory')" value="electronics"></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('furnitureCategory')" value="furnitures" ></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('groceriesCategory')" value="groceries" ></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('healthCareCategory')" value="healthcare" ></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('petsCategory')" value="pets" ></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('sportsCategory')" value="sports" ></v-radio>
     </v-col>
     <v-col cols="12" md="6" lg="4">
        <v-radio :label="$t('toysCategory')" value="toys" ></v-radio>
     </v-col>
    

      
        
        
        
    </v-row>
    


        </v-radio-group>

        <v-text-field :label="$t('addToCartItemName')" type="text" variant="outlined" class="mt-4"
        v-model="addToCartForm.itemName"
        >
   
        </v-text-field>
        <v-text-field :label="$t('addToCartItemQuantity')" type="number" min="1"
        @keypress.e.prevent
        @keypress.-.prevent
        variant="outlined" 
        v-model="addToCartForm.itemQuantity"
        >
   
        </v-text-field>

        <v-select
  label="Collections"
  :items="collections"
  v-model="addToCartForm.itemCollection"
  variant="outlined"
             >
        </v-select>

        <v-text-field :label="$t('addToCartItemPricePerQuantity')" type="number" min="1"
        @keypress.e.prevent
        @keypress.-.prevent
        variant="outlined" 
        v-model="addToCartForm.itemPricePerQuantity"
        >
   
        </v-text-field>

        <v-select
  :label="$t('addToCartItemCurrency')"
  :items="['FRS','USD','CAD','EUR']"
  v-model="addToCartForm.itemCurrency"
  variant="outlined"
             >
        </v-select>
         
        <v-btn type="submit" block class="mt-4"  size="large" :color="decideButtonColor" 
        :disabled="isButtonDisabled" :loading="isLoading">
            {{ $t('addToCart') }}</v-btn>
        
      </v-form>
      <p class="my-4">{{ addToCartForm }}</p>
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
<v-snackbar v-model="showSuccessMessage" color="green-accent-2" :timeout="2000" location="left"
transition="scroll-y-reverse-transition"
>
    {{ $t('addItemSuccessMessage') }}
</v-snackbar>
<v-snackbar v-model="showErrorMessage" color="red-accent-2" :timeout="2000" location="left"
transition="scroll-y-reverse-transition"
>
    {{ $t('addItemErrorMessage') }}
</v-snackbar>
</div>
</template>

<script setup lang="ts">

const utils=useUtilitiesStore()
const iseOpen=ref(true)
const display=useDisplay()
const items=useItemsStore()
const {t}=useI18n();
const theme=useThemeStore()
const showSuccessMessage=ref(false)
const showErrorMessage=ref(false);
const addToCartForm=reactive({
    itemCategory:t('otherCategory'),
    itemName:'',
    itemQuantity:'',
    itemCollection:t('itemCollectionNone'),
    itemPricePerQuantity:'',
    itemCurrency:'FRS',


    

})
const collections=ref(
    [
        t('itemCollectionNone'),
        t('itemCollectionPackages'),
        t('itemCollectionCups'),
        t('itemCollectionBags'),
        "Palletes"
]
)
const isLoading=ref(false)
//Computed
const decideFullscreen=computed(()=>{
   return display.smAndDown.value?true:false
})
const decideWidth = computed(()=>{
    return display.smAndDown.value?'100%':'70%'
})
const decideButtonColor=computed(()=>{
    return theme.isDark?'light-blue-lighten-2':'blue'
})
const isButtonDisabled = computed(() => {
  return addToCartForm.itemName === '' || 
         addToCartForm.itemQuantity === '' || 
         addToCartForm.itemPricePerQuantity === '' ||
         addToCartForm.itemQuantity <= 0 ||
         addToCartForm.itemPricePerQuantity <= 0
})

//ACTIONS
const handleThis=()=>{
    console.log('Ready to get started')
    isLoading.value=true
   
    setTimeout(()=>{
        try{
       console.log('Hope it goes well!')
       items.addToCart(addToCartForm.itemCategory,
       addToCartForm.itemName,
       addToCartForm.itemQuantity,
       addToCartForm.itemCollection,
       addToCartForm.itemPricePerQuantity,
       addToCartForm.itemCurrency
    )


       isLoading.value=false
       showSuccessMessage.value=true

       addToCartForm.itemName=''
       addToCartForm.itemQuantity=''
       addToCartForm.itemPricePerQuantity=''

        }
        catch(e){
    isLoading.value=false
       console.log('Oh no!!!!!!', e)
       showErrorMessage.value=true
   }finally{
    utils.closeAddToCartModal();
   }

    },1000)


   
}
</script>