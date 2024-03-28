<template>
  <section>
    <div class="flex flex-col px-5">
      <div
        class="flex flex-col text-textPrimary gap-5 text-center lg:text-left xl:text-left lg:max-w-5xl xl:max-w-7xl mx-auto w-full px-5"
      >
        <h2 class="text-xl min-md:text-3xl font-bold">
          Como podemos ajudar você ou seu negócio?
        </h2>
        <p class="min-md:text-xl">
          São diversos produtos pensados para a sua necessidade:
        </p>
      </div>
    </div>
    <Swiper ...="sliderOptions" class="pb-12 pt-8 xl:max-w-7xl xl:px-5">
      <SwiperSlide
        v-for="{ title, description, moreInformation } of steps"
        :key="title"
        class="bg-white text-textPrimary hover:text-white py-8 px-4 rounded-lg mb-16 h-auto group hover:bg-secondary transition-all"
      >
        <div class="flex flex-col gap-6 justify-between h-full">
          <h3 class="text-2xl font-bold min-h-16">
            {{ title }}
          </h3>

          <p>
            {{ description }}
          </p>

          <div class="flex flex-row items-center gap-5 text-sm">
            <NuxtLink
              :href="appConfig.appSimulator.url"
              target="_blank"
              class="bg-complementaryColor1 px-3 py-2 rounded text-white font-bold"
            >
              Simule grátis
            </NuxtLink>
            <NuxtLink
              :to="moreInformation"
              class="underline text-xs text-textSecondary"
            >
              Saiba mais
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script lang="ts" setup>
import type { SwiperOptions } from "swiper/types";

const appConfig = useAppConfig();

const sliderOptions = {
  spaceBetween: 20,
  slidesPerView: 1.2,
  centeredSlides: true,
  autoHeight: false,
  pagination: {
    enabled: true,
    clickable: true,
  },
  autoplay: {
    delay: 8000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2.5,
    },
    1021: {
      slidesPerView: 3.5,
    },
    1277: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
} satisfies SwiperOptions;

const steps = [
  {
    title: "Crédito com Garantia de Imóvel",
    description: "Use seu imóvel quitado como garantia para conseguir crédito.",
    features: [
      {
        text: "Taxas a partir de <b>1,09% a.m.</b> + indexadores.",
      },
      {
        text: "Escolha o prazo: pague em até <b>240 meses.</b>",
      },
      {
        text: "Até <b>60% do valor</b> do imóvel como capital.",
      },
    ],
    moreInformation: "/home-equity",
  },
  {
    title: "Financiamento Imobiliário",
    description:
      "Financie seu imóvel com as melhores taxas e os melhores prazos.",
    features: [
      {
        text: "Taxas a partir de <b> 9,70% a.a. </b> + indexadores.",
      },
      {
        text: "Pagamento flexível em até <b>420 meses.</b>",
      },
      {
        text: "Financie em mais de <b>20 bancos parceiros.</b>",
      },
    ],
    moreInformation: "/financiamento-imobiliario",
  },

  {
    title: "Crédito com garantia Veicular",
    description: "Use seu carro, caminhão ou utilitário como garantia.",
    features: [
      {
        text: "Crédito a partir de <b>1,59% a.m.</b> + taxas.",
      },
      {
        text: "Pague em até 60 meses. <b>Você escolhe.</b>",
      },
      {
        text: "Use seu crédito como <b>você quiser.</b>",
      },
    ],
    moreInformation: "/emprestimo-com-garantia-de-veiculo",
  },
  {
    title: "Financiamento Veicular",
    description: "Simule on-line e grátis e financie o carro dos seus sonhos.",
    features: [
      {
        text: "Taxas a partir de <b>1,49% a.m.</b> + indexadores.",
      },
      {
        text: "Pagamento em até <b>60 meses ou 5 anos.</b>",
      },
      {
        text: "Financie carros novos ou até seminovos.",
      },
    ],
    moreInformation: "/financiamento-veicular",
  },
];
</script>

<style lang="scss" scoped>
::part(bullet) {
  background: #d9d9d9;
  opacity: 100;
}
::part(bullet-active) {
  @apply scale-150 transition-all bg-primary;
}
</style>
