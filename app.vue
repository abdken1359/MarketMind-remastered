<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout/>
  </div>
</template>
<script setup lang="ts">
useHead({
 meta:[
  {
    name:'apple-mobile-web-app-title', content:'MarketMind'
  },
 ],
 link:[
  {
    rel:'icon',type:'image/png',href:'/Icons/favicon-96x96.png',sizes:'96x96',
    
  },
  {
    rel:'icon',type:'image/svg+xml', href:'/Icons/favicon.svg'
  
  },
  {
    rel:'shortcut icon', href:'/Icons/favicon.ico'
  },
  {
    rel:"apple-touch-icon", sizes:"180x180", href:"/Icons/apple-touch-icon.png"
  },
  {
     rel:"manifest", href:"/Icons/site.webmanifest"
  }
 ]
})
</script>
