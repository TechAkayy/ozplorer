<script setup lang="ts">
defineProps<{
  msg: String
}>()
</script>
<template>
    <div class="flex flex-col items-center">
        <div class="flex items-center justify-center">
            <h1 class="mt-2 text-primary-500">Iles with Vue Designer!</h1>
            <BaseIcon width="30px" class="ml-4 text-primary-500"/>
        </div>
        <h3>
      You’ve successfully created a project with <BaseLink href="https://iles-docs.netlify.app/" target="_blank"><span>îles</span>
            </BaseLink><span class="mx-2">+</span><BaseLink href="https://vitejs.dev/" target="_blank"><span>Vite</span>
            </BaseLink> + <FrameworkLink client:none/>. What's
      next? </h3>
    </div>
</template>
<style scoped>h1 { font-weight: 500; font-size: 2.6rem; top: -10px; } h3 { font-size: 1.2rem; } .greetings h1, .greetings h3 { text-align: center; } @media (min-width: 1024px) { .greetings h1, .greetings h3 {  display: block;  text-align: left; } }</style>
