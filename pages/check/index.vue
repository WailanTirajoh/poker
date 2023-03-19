<script setup lang="ts">
definePageMeta({
  layout: 'check'
})
onMounted(async () => {
  const user = await getCurrentUser();
  const route = useRoute()
  const router = useRouter()
  if (user) {
    router.push(route.query.redirect as string || '/')
  } else {
    router.push('/login')
  }
})
</script>
<template>
  <div class="w-full h-screen grid place-items-center">
    <client-only>
      <div class="">
        <BaseSvgCircleLoader class="" />
        <div class="text-gray-600">
          Please wait while were checking your credentials . . .
        </div>
      </div>
    </client-only>
  </div>
</template>
