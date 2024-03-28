<template>
  <div class="relative z-0 overflow-hidden bg-[#EFEFEF] min-h-screen">
    <NuxtImg
      src="images/home/backgroundLines.png"
      class="absolute -top-40 -left-96 -z-10 hidden min-md:block"
      alt=""
    />
    <NuxtImg
      src="images/home/backgroundLines.png"
      class="absolute top-96 -right-96 -z-10 hidden md:block -scale-x-100"
      alt=""
    />
    <AppTopBar class="h-24" />
    <HomeHeroSection />
    <HomeProductsSection class="pt-24" />
    <HomeBusinessPartners
      title="A melhor plataforma multibancos."
      type="HomeEquity"
      innerText="<strong>
          Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
          financeiras,
        </strong>
        o que pode lhe garantir as melhores taxas e as maiores chances de
        aprovação, além de um time de especialistas preparado para te atender e
        te guiar durante todo o processo."
        class="py-10 md:py-24 lg:py-12 xl:py-12 px-5 bg-white"
    />
    <HomeSloganSection class="bg-white" />
    <HomeAboutUs class="min-md:pt-12 border-t-2 border-primary min-md:border-none bg-white" />
    <HomeMissionSection title="Por que existimos?" class="py-10 px-5 bg-white"  />
    <HomeComparisonTable
      :props="{
        component: {
          backgroundColor: '#FFF',
          showBackGroundImage: false,
        },
        table: {
          backgroundColor: '#FFF',
          titleColor: 'TEXTPRIMARY',
          title: 'Por que escolher a <b>SejaBest?</b>',
        },
      }"
      class="py-0 md:py-14 lg:py-14 xl:py-14"
    />
    <BestPlay class="border-b-4 border-primary md:border-0 lg:border-0 xl:border-0 z-0 bg-white" />
    <AppFooter class="block z-10" />
  </div>
</template>

<script setup lang="ts"></script>
