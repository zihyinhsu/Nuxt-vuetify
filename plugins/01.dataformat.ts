export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("dataformat", {
    mounted(el, binding) {
      const result = binding.value + " test";
      el.innerText = result;
    },
  });
});
