export const useItemsStore= defineStore('ItemsStore',()=>{
    const storeItems=ref([])
    

    function addToCart( itemCategory, itemName,itemQuantity,
        itemCollection,itemPricePerQuantity,itemCurrency){
            try{
              
            storeItems.value.push({
                category:itemCategory,
                name:itemName,
                quantity:itemQuantity,
                collection:itemCollection,
                pricePerQuantity:itemPricePerQuantity,
                totalPrice:  Number(itemQuantity) * Number(itemPricePerQuantity),
                currency:itemCurrency,   
                showItemDetails:false,
            })
            console.log('Item added to store !')
        }catch(e){
            console.log('Oops an error occurred ',e)
        }
         
    }

    function deleteItem(index){
        storeItems.value.splice(index,1)
        console.log('Item deleted!')
    }
    
    return{
        storeItems,
        addToCart,
        deleteItem,
        
    }

},

{
    persist:true
})