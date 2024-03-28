<template>
  <section>
    <div
      class="flex flex-col gap-10 md:gap-8 lg:gap-8 xl:gap-12 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto"
    >
      <div
        class="flex flex-col text-center gap-2 lg:gap-5 xl:gap-5 xl:w-10/12 xl:mx-auto"
      >
        <h2
          class="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold"
        >
          {{ title.replace(/\s([^\s<]+)\s*$/, "\u00A0$1") }}
        </h2>
        <p
          v-html="innerText"
          class="text-textPrimary md:text-xl lg:text-xl xl:text-xl"
        ></p>
      </div>
      <div class="flex md:flex-col gap-8 items-center w-fit mx-auto">
        <img
          ref="phone"
          :src="`/images/Home/simulatorOnPhoneMockup-${type}.png`"
          alt="A melhor plataforma multibancos."
          class="h-128 hidden min-md:block opacity-0"
        />
        <div
          ref="banks"
          class="flex flex-col gap-2 md:gap-4 lg:gap-4 xl:gap-4 lg:w-7/12 xl:w-7/12 mx-auto opacity-0"
        >
          <img
            src="/images/Home/bankPartners.png"
            alt="A melhor plataforma multibancos."
            class=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

defineProps<{
  title: string;
  innerText: string;
  type: "HomeEquity" | "Financing";
}>();

gsap.registerPlugin(ScrollTrigger);
const phone = ref<HTMLDivElement | null>(null);
const banks = ref<HTMLDivElement | null>(null);

// const firstRow = [
//   {
//     image: null,
//     alt: null,
//   },
//   {
//     image: "bancoPaulista",
//     alt: "Banco Paulista",
//   },
//   {
//     image: "bancoBV",
//     alt: "Banco BV",
//   },
//   {
//     image: "bancoBRB",
//     alt: "Banco BRB",
//   },
// ];

// const secondRow = [
//   {
//     image: "bancoBari",
//     alt: "Banco Bari",
//   },
//   {
//     image: "bancoRodobens",
//     alt: "Banco Rodobens",
//   },
//   {
//     image: "bancoInter",
//     alt: "Banco Inter",
//   },
//   {
//     image: null,
//     alt: null,
//   },
// ];

// const thirdRow = [
//   {
//     image: null,
//     alt: null,
//   },
//   {
//     image: "bancoCashMe",
//     alt: "Banco CashMe",
//   },
//   {
//     image: "bancoSantander",
//     alt: "Banco Santander",
//   },
//   {
//     image: "bancoLibra",
//     alt: "Banco Libra",
//   },
// ];

// const fourthRow = [
//   {
//     image: "bancoItau",
//     alt: "Banco Itaú",
//   },
//   {
//     image: "bancoDaycoval",
//     alt: "Banco Daycoval",
//   },
//   {
//     image: "bancoTCash",
//     alt: "Banco TCash",
//   },
//   {
//     image: null,
//     alt: null,
//   },
// ];

// const fifthRow = [
//   {
//     image: null,
//     alt: null,
//   },
//   {
//     image: "bancoCreditas",
//     alt: "Banco Creditas",
//   },
//   {
//     image: "bancoPontte",
//     alt: "Banco Pontte",
//   },
//   {
//     image: "bancoC6",
//     alt: "Banco C6",
//   },
// ];

// const partners = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];

function animateElement(element: HTMLDivElement | null) {
  if (!element) return;
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "restart pause resume none",
    },
    opacity: 100,
    duration: 3,
    delay: 0.5,
    ease: "circ.in",
  });
}

onMounted(() => {
    animateElement(phone.value)
    animateElement(banks.value)?.delay(0.6)
})
</script>
