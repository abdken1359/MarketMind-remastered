export const useUtilitiesStore=defineStore('Utilities',()=>{
    const isAddToCartModalOpen=ref(false)
    const isDeleteAllItemModalOpen=ref(false)
    const showSkeletonLoaders=ref(true)

    const showAddToCartModal=():void=>{
        isAddToCartModalOpen.value=true
    }
    const closeAddToCartModal=():void=>{
        isAddToCartModalOpen.value=false

    }
    const openDeleteAllItemsModal=():void=>{
        isDeleteAllItemModalOpen.value=true
        console.log('Hey there!')
        console.log(isDeleteAllItemModalOpen.value)
        
    }
    const closeDeleteAllItemsModal=():void=>{
        isDeleteAllItemModalOpen.value=false
    }


    return{
        isAddToCartModalOpen,
        isDeleteAllItemModalOpen,
        showSkeletonLoaders,
        showAddToCartModal,
        closeAddToCartModal,
        openDeleteAllItemsModal,
        closeDeleteAllItemsModal,
    }
})