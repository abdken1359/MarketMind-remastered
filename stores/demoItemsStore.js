export const useItemsStore= defineStore('ItemsStore',()=>{
    const storeItems=ref([])
    const searchItem=ref('')

    const foundItem=computed(()=>{
        const searchTerm=searchItem.value.trim().toLowerCase()
        return storeItems.value.filter((s)=>{
            return s.name.toLowerCase().includes(searchTerm)
        })
    })
    

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

    function deleteAllItems(){
        storeItems.value.length=0;
        console.log('Deleted all Items!')
    }
    
    return{
        storeItems,
        searchItem,
        foundItem,
        addToCart,
        deleteItem,
        deleteAllItems
        
    }

},

{
    persist:true
})