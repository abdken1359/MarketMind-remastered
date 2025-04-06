

export const useThemeStore=defineStore('Themestore',()=>{
    const isDark= ref(false)
    const toggleTheme=()=>{
        isDark.value=!isDark.value
    }
    return{
        isDark,
        toggleTheme,
    }
},{
    persist:true,
})