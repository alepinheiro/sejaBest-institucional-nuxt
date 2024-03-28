<template>
  <section>
    <div class="overflow-hidden flex-grow flex">
      <div class="w-full">
        <div class="overflow-hidden flex h-full pt-40 -mr-40">
          <img
            ref="bestPlayMockup"
            alt="Conheça o maior canal de crédito do Brasil"
            title="Conheça o maior canal de crédito do Brasil no youtube"
            loading="lazy"
            class="w-full h-[44rem] object-contain object-top"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-[#181818] bg-gradient-to-br to-black from-transparent w-full mt-auto flex"
    >
      <div class="my-auto">
        <div class="flex flex-col gap-5 py-10 px-5">
          <LogoBestPlay class="h-16 mx-auto" />

          <div class="flex flex-col gap-5 text-white">
            <div class="flex flex-col gap-5 justify-center">
              <h2 class="text-3xl font-bold text-center">
                {{ title }}
              </h2>
              <div class="flex flex-row gap-5">
                <div
                  v-for="{ description, icon, number, suffix } of stats"
                  :key="description"
                  class="flex flex-col p-3 rounded-md w-full shadow-xl hover:shadow-2xl hover:scale-105 shadow-black/40 even:hidden border border-zinc-800/60 hover:border-complementaryColor3 transition cursor-default bg-[#181818]"
                >
                  <div class="w-6 h-6 text-complementaryColor3">
                    <FontAwesome :icon="icon" class="w-full h-full"></FontAwesome>
                  </div>
                  <span
                    class="text-4xl font-darkerGrotesque font-bold text-complementaryColor3"
                  >
                    {{ number + suffix }}
                  </span>
                  <div class="font-bold text-xs">
                    {{ description }}
                  </div>
                </div>
              </div>
              <p class="text-sm text-center">
                Explore temas como crédito, financiamento, empreendedorismo e
                mercado financeiro, visando levá-lo à sua melhor versão.
              </p>
            </div>
            <NuxtLink
              to="https://www.youtube.com/@SejaBest"
              :external="true"
              class="bg-complementaryColor2 w-fit rounded px-6 py-4 mx-auto font-bold"
            >
              Inscreva-se agora
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import LogoBestPlay from "@/assets/svg/logos/bestPlay.vue";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ref, onMounted, defineProps } from "vue";
import { gsap } from "gsap";
import { faVideoCamera, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


defineProps<{
  title: string
}>();

gsap.registerPlugin(ScrollTrigger);
const bestPlayMockup = ref<HTMLImageElement | null>(null);

const stats = [
  {
    icon: faVideoCamera,
    number: 500,
    suffix: "+",
    description: "Vídeos grátis",
  },
  {
    icon: faPeopleGroup,
    number: 2,
    suffix: "MI+",
    description: "Alcance mensal",
  },
  {
    icon: faPeopleGroup,
    number: 60,
    suffix: "K+",
    description: "Inscritos no canal",
  },
];

function translateToTop(element: HTMLDivElement | null) {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "80% 80%",
      scrub: 1,
      toggleActions: "restart pause restart restart",
      // markers: true,
    },
    yPercent: -25,
    // duration: 0.5,
    ease: "circ.in",
  });
}

onMounted(() => {
  if(bestPlayMockup.value) {
    bestPlayMockup.value.src = '/images/components/bestPlay/phoneMockup.png'
  }
  translateToTop(bestPlayMockup.value);
});
</script>
