<template>
  <section>
    <div
      class="absolute -right-0 top-0 flex md:left-2/3 lg:left-[70%] xl:left-[55%] bottom-0"
    >
      <img
        ref="bestPlayMockup"
        alt="Conheça o maior canal de crédito do Brasil"
        title="Conheça o maior canal de crédito do Brasil no youtube"
        loading="lazy"
        class="w-auto h-[110vh] md:mt-48 mt-60 object-cover object-left-top"
      />
    </div>
    <div class="w-full my-auto flex">
      <div class="md:max-w-2xl lg:max-w-5xl xl:max-w-7xl m-auto z-10 w-full">
        <div class="flex md:w-5/6 py-10 px-5">
          <div
            class="flex flex-col justify-between items-start gap-10 text-white lg:w-2/3 xl:w-1/2"
          >
            <LogoBestPlay class="h-16" />
            <h2 class="text-5xl font-bold text-left">
              {{ title }}
            </h2>
            <!--  -->
            <div class="flex flex-row gap-5 w-full">
              <div
                v-for="{ description, icon, number, suffix } of stats"
                :key="description"
                class="flex-1 flex flex-col p-3 rounded-md w-full shadow-xl hover:shadow-2xl hover:scale-105 shadow-black/40 even:block border border-zinc-800/60 hover:border-complementaryColor3 transition cursor-default bg-[#181818]"
              >
                <div class="w-8 h-8 text-complementaryColor3">
                  <FontAwesome :icon="icon" class="w-full h-full"></FontAwesome>
                </div>
                <span
                  class="text-4xl lg:text-5xl font-darkerGrotesque font-bold text-complementaryColor3"
                >
                  {{ number + suffix }}
                </span>
                <div class="font-bold text-xs lg:text-base">
                  {{ description }}
                </div>
              </div>
            </div>
            <!--  -->
            <p class="text-xl md:w-5/6 lg:w-5/6 leading-loose text-left">
              Explore temas como crédito, financiamento, empreendedorismo e
              mercado financeiro, visando levá-lo à sua melhor versão.
            </p>
            <NuxtLink
              to="https://www.youtube.com/@SejaBest"
              :external="true"
              class="bg-complementaryColor2 w-fit rounded px-6 py-4 mx-auto font-bold ml-0"
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
import { faVideoCamera, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ref, onMounted, defineProps } from "vue";

defineProps<{
  title: string;
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
