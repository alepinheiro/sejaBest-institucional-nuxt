<template>
  <section
    :style="{
      'background-color': props.component.backgroundColor,
    }"
    class="w-full relative"
  >
    <div
      v-if="props.component.showBackGroundImage"
      class="absolute z-0 inset-0 flex"
    >
      <NuxtImg
        src="/images/components/comparisonTable/bgComparisonTable.png"
        alt=""
        class="self-end"
      />
    </div>

    <div class="max-w-7xl flex mx-auto font-Public-Sans z-10 relative px-5">
      <div
        :style="{
          'background-color': props.table.backgroundColor,
          padding: props.table.padding,
        }"
        class="mx-auto md:w-10/12 min-lg:w-8/12 sm:w-full flex flex-col items-center rounded-xl pt-5 sm:px-0"
      >
        <h2
          v-if="props.table.title"
          :class="{
            'text-textPrimary': props.table.titleColor === 'TEXTPRIMARY',
            'text-primary': props.table.titleColor === 'PRIMARY',
          }"
          class="text-4xl sm:text-2xl sm:text-center sm:mx-auto"
          v-html="props.table.title.replace(/\s([^\s<]+)\s*$/, '\u00A0$1')"
        ></h2>
        <h2
          v-else
          :class="{
            'text-textPrimary': props.table.titleColor === 'TEXTPRIMARY',
            'text-primary': props.table.titleColor === 'PRIMARY',
          }"
          class="text-4xl sm:text-2xl sm:text-center sm:w-full sm:mx-auto"
        >
          Por que escolher a <b> SejaBest?</b>
        </h2>

        <div class="flex flex-col w-full px-10 sm:px-5 pt-10 text-textPrimary">
          <div class="flex flex-row w-full items-center">
            <div class="w-1/2"></div>
            <div class="w-1/4 text-center">
              <LogoSejaBest
                class="h-10 mx-auto sm:pr-2"
                title="Logomarca SejaBest"
              />
              <!-- <img
                src="/images/logoBest/logoGray.svg"
                alt="Logomarca SejaBest"
                class="h-10 mx-auto sm:pr-2"
              /> -->
            </div>
            <div class="w-1/4 text-center sm:text-xs">
              Bancos <br />
              Tradicionais
            </div>
          </div>
          <div
            v-for="{ id, text, ourProduct, otherProducts } in lines"
            :key="id"
            class="flex flex-row w-full py-4 items-center border-b border-zinc-300 last-of-type:border-0"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="w-1/2" v-html="text"></div>
            <div class="w-1/4 text-center">
              <FontAwesome
                v-if="ourProduct"
                :icon="faCheck"
                class="text-primary w-6 h-6"
              ></FontAwesome>
              <i v-else class="fa-solid fa-xmark w-6 h-6"></i>
            </div>
            <div class="w-1/4 text-center">
              <FontAwesome
                v-if="otherProducts"
                :icon="faCheck"
                class="text-red-500 w-6 h-6"
              ></FontAwesome>
              <FontAwesome v-else :icon="faXmark" class="w-6 h-6"></FontAwesome>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import LogoSejaBest from "@/assets/svg/logos/sejabest.vue";

defineProps<{
  props: {
    component: {
      backgroundColor: string;
      showBackGroundImage: boolean;
    };
    table: {
      backgroundColor: string;
      titleColor: "PRIMARY" | "TEXTPRIMARY";
      title?: string;
      padding?: string;
    };
  };
}>();

const lines = [
  {
    id: 1,
    text: "As <b>menores taxas</b> do mercado",
    ourProduct: true,
    otherProducts: true,
  },
  {
    id: 2,
    text: "<b>Múltiplas opções</b> de banco",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 3,
    text: "Plataforma <b>multiprodutos</b>",
    ourProduct: true,
    otherProducts: true,
  },
  {
    id: 4,
    text: "Transparência",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 5,
    text: "Processo <b>agilizado</b>",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 6,
    text: "Atendimento <b>7 dias por semana</b>",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 7,
    text: "Assessoria <b>personalizada</b>",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 8,
    text: "Totalmente <b>Digital</b>",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 9,
    text: "Sem burocracias",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 10,
    text: "Sem filas",
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 11,
    text: "Foco no cliente",
    ourProduct: true,
    otherProducts: false,
  },
];
</script>
