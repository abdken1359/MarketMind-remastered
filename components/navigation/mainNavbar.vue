<style scoped>
.logo{
    display: flex; 
    width: max-content;
    align-items: center;
    text-decoration: none;
    gap: 16px;
    color: initial;
    
}
.coolText {
    width: max-content;
    background: linear-gradient(to right, #d3143e , #ec4c59 , #67a2ee );
    -webkit-background-clip: text; /* For Safari */
    background-clip: text; /* For other browsers */
    font-weight: bold;
    color: transparent;
}
.nav-background {
    backdrop-filter: blur(10px) !important;
    background-color: transparent !important;
   
}

</style>
<template>
    <v-app-bar flat class="border-b-thin " :class="theme.isDark?'nav-background':''" height="100">
        <v-app-bar-title>
            <NuxtLink :to="`/${realLang}`" class="logo">
                <NuxtImg src="/app_logo.svg"  width="50" height="50" alt="Logo"/>
                <span class="font-bold d-none d-md-block">MarketMind</span>
            </NuxtLink>
        </v-app-bar-title>

        <template #append>
           <ContentLanguageMenu/>
           <ContentThemeSwitcher/>
        </template>

    </v-app-bar>
</template>
<script setup lang="ts">
const theme=useThemeStore();
const head=useLocaleHead();
const realLang=computed(()=>{
    switch (head.value.htmlAttrs.lang){
        case 'en-US':
            return ""
             break;
        case 'fr-FR':
            return "fr" 
            break;
        default:
            return ""
            break;

    }

})
</script>