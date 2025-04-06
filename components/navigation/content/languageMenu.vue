<template>
    <div>
        <v-btn @click.stop="switchLanguages()" variant="flat">{{ realLang==='fr'?'FR':'EN' }}</v-btn>
    </div>
</template>
<script setup lang="ts">
const head=useLocaleHead()
const { locales, setLocale } = useI18n()
const theme=useTheme()
const switchLocalePath=useSwitchLocalePath()


//computed
const realLang=computed(()=>{
    switch (head.value.htmlAttrs.lang){
        case 'en-US':
            return "fr"
             break;
        case 'fr-FR':
            return "" 
            break;
        default:
            return ""
            break;

    }

})
const switchLanguages=()=>{
    navigateTo(`/${realLang.value}`);
}

</script>