<style scoped>
.logo{
    display: flex; 
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
</style>
<template>
    <v-app-bar flat class="border-b-thin">
        <v-app-bar-title>
            <NuxtLink to="/" class="logo">
                <NuxtImg src="/app_logo.svg"  width="50"/>
                <span class="font-bold d-none d-md-block">MarketMind</span>
            </NuxtLink>
        </v-app-bar-title>

        <template #append>
           <LazyNavigationContentLanguageMenu/>
        </template>

    </v-app-bar>
</template>