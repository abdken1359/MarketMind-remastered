/* This is the pinia store which deals with language logic , that is, if the user selected english option, or otherwise, french 
french option*/
export const useLanguageChoiceStore = defineStore('Language preference',()=>{
       const isEnglish=ref(true)
},
{
    persist:true
})