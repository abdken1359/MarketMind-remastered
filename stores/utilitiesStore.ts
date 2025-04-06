export const useUtilitiesStore=defineStore('Utilities',()=>{
    const isAddToCartModalOpen=ref(false)
    const showAddToCartModal=():void=>{
        isAddToCartModalOpen.value=true
    }
    const closeAddToCartModal=():void=>{
        isAddToCartModalOpen.value=false

    }

    return{
        isAddToCartModalOpen,
        showAddToCartModal,
        closeAddToCartModal,
    }
})