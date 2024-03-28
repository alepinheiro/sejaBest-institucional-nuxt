<template>
  <header class="absolute z-30 top-0 w-auto inset-x-0">
    <div
      class="py-5 w-full flex flex-row justify-between items-center xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto px-5"
    >
      <NuxtLink to="/" class="w-auto h-fit">
        <LogoSejaBest
          class="w-auto h-8 min-lg:h-14 text-primary"
          title="Página Inicial - SejaBest"
        />
      </NuxtLink>

      <AppTopBarMenuDesktop class="sm:hidden md:hidden" />
      <!-- <MenuMobile
          :color="customMobileMenuColor"
          class="xl:hidden lg:hidden h-8 w-8 flex-shrink-0 aspect-square mr-0"
        /> -->
    </div>
  </header>
</template>
<script setup lang="ts">
import LogoSejaBest from "@/assets/svg/logos/sejabest.vue";
</script>
