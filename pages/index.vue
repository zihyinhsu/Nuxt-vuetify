<script setup lang="ts">
import { useRafFn } from "@vueuse/core";
const { count } = useAddCount();

useRafFn(() => {
  if (count.value < 16) {
    count.value += 1;
  }
});
const title = ref("2023 iThome 鐵人賽");
const selectedDate = ref();
const renderedData = ref<
  {
    strText: string;
    strValue: string;
  }[]
>([]);
// onBeforeMount(async () => {
//   // 解決第一次渲染回傳 data 為 null
//   // await nextTick();
//   const { data } = await useFetch<
//     {
//       strText: string;
//       strValue: string;
//     }[]
//   >("VsWeb/api/GetLstDicCinema");

//   if (data.value) renderedData.value = data.value;
// });

onMounted(async () => {
  const { data, error, refresh } = await useFetch<
    {
      strText: string;
      strValue: string;
    }[]
  >("VsWeb/api/GetLstDicCinema");
  if (error) {
    await refresh();
  }
  console.log("renderedData.value", renderedData.value);
  if (data.value) renderedData.value = data.value;
});
</script>

<template>
  <div>
    <Home />
    <v-btn depressed color="info" prepend-icon="mdi-cloud-upload"
      >{{ title }} {{ count }}</v-btn
    >
    <h3 v-dataformat="'hello'"></h3>
    <VDatePicker v-model="selectedDate" />
    <pre>{{ "測試" }} {{ renderedData }} </pre>
    <FooterBtn />
  </div>
</template>
