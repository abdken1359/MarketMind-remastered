

export const useThemeStore=defineStore('Themestore',()=>{
    const isDark= ref(false)
    return{
        isDark
    }
},{
    persist:true,
})