<style scoped>
.list-enter-from{
    opacity: 0;
    transform: translateY(30px);
}
.list-leave-to{
    opacity: 0;
    transform: translateY(-30px);
}
.list-enter-to,.list-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.list-enter-active{
    transition: all 0.5s ease;
}
.list-leave-active{
    transition: all 0.2s ease-in-out;
}
.card{
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 1px lightgrey;
}
.card:hover{
    box-shadow: 0 0 5px lightgrey;
}
</style>
<template>
    <v-container class="mt-10">
        <h2 class="my-4 text-center">{{ $t("items") }}</h2>
         
         <ContentCartMenu/>

         <v-row align="center" justify="center" class="my-6" >

           
                <TransitionGroup name="list">
               <v-col cols="12 "
               v-for="(c,index) in cartItems" :key="index"
               md="6" lg="4">
                <v-card >
                    <NuxtImg :src="`/Images/ItemsCategories/mignified/${c.category}.jpg`" :alt="c.category" 
                    :height="decideImageSize"/>
                    <v-card-item>
                        <v-card-title>
                            <div class="d-flex flex-column align-center ga-2">
                                <span>{{ c.name }}</span>
                                
                                <span :class="decidePriceColor">{{ c.totalPrice }} {{ c.currency }}</span> 
                            </div>
                        </v-card-title>
                        <v-card-subtitle class="text-capitalize">
                            {{ c.quantity }}
                            {{ c.collection==='Aucun' || c.collection==="None"?'':c.collection }}</v-card-subtitle>
                    </v-card-item>

                    <v-card-actions>
                       <v-spacer></v-spacer>
                        <v-btn :icon="c.showItemDetails?'mdi-chevron-down':'mdi-chevron-up'"
                         v-tooltip:top="$t('seeItemDetails')"
                         :aria-label="$t('seeItemDetails')"
                         @click="c.showItemDetails=!c.showItemDetails">
                         
                        </v-btn>
                        <v-btn icon="mdi-delete" color="red-lighten-2" v-tooltip:top="$t('deleteItem')"
                        :aria-label="$t('deleteItem')" @click="items.deleteItem(index)"
                        ></v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                 <div v-show="c.showItemDetails">
                   <v-divider></v-divider>

                 <v-card-text >
                    <v-row align="center" >
                        <v-col cols="12" md="6" lg="4">
                 <div>
                    <h3 :class="decideHeadingColor">{{ $t('addToCartItemName') }}</h3>
                    <p class="mt-2">{{ c.name }}</p>
                 </div>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                 <div >
                    <h3 :class="decideHeadingColor">{{ $t('addToCartItemCategory') }}</h3>
                    <p class="mt-2 text-capitalize">{{ c.category }}</p>
                 </div>
                 </v-col>

                 <v-col cols="12" md="6" lg="4">
                 <div>
                    
                    <h3 :class="decideHeadingColor">{{ $t('addToCartItemQuantity') }}</h3>
                    <p class="mt-2">{{ c.quantity }}</p>
                 </div>
                 </v-col>

                 <v-col cols="12" md="6" lg="4">
                 <div>

                    <h3 :class="decideHeadingColor">{{ $t('addToCartItemPricePerQuantity') }}</h3>
                    <p class="mt-2">{{ c.pricePerQuantity }}</p>
                 </div>
                 </v-col>
                 <v-col cols="12" md="6" lg="4">
                 <div>
                    <h3 :class="decideHeadingColor">{{ $t('addToCartItemCurrency') }}</h3>
                    <p class="mt-2">{{ c.currency }}</p>
                 </div>
                 </v-col>
                </v-row>
                </v-card-text>
      </div>
    </v-expand-transition>
                </v-card>

               </v-col>
                </TransitionGroup>
        
         </v-row>
        <ContentItemNotFound v-show="items.foundItem.length<1"/>
    </v-container>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const theme=useThemeStore()
const items=useItemsStore()
const display =useDisplay()
// :image="`/Images/itemsCategories/${c.category}.jpg`"
//Computed
const cartItems=computed(()=>{
    return items.foundItem;

})

const decidePriceColor= computed(()=>{
    return theme.isDark?'text-yellow-darken-1':'text-yellow-darken-3'
})
const decideHeadingColor=computed(()=>{
    return theme.isDark?'':''
})
const decideImageSize=computed(()=>{
   return  display.smAndDown.value?'200':'300'
})
</script>