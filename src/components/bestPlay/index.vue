<template>
  <section>
    <BestPlayDesktopSection
      :title="title"
      class="min-md:flex flex-col relative z-0 h-screen bg-[#181818] bg-gradient-to-br to-black from-transparent overflow-hidden hidden"
    />
    <BestPlayMobileSection
      :title="title"
      class="flex flex-col relative z-0 h-screen min-md:hidden"
    />
  </section>
</template>

<script lang="ts" setup>
const title = "Conheça o melhor canal de crédito do Brasil";
</script>
