<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})


const { user, signInWithGoogle, signInAnonymous, signOutC } = useAuth()

onMounted(async () => {
  const user = await getCurrentUser()
  const router = useRouter()
  if (user) {
    router.push('/')
  }
})
</script>
<template>
  <div class="h-full">
    <div class="grid place-items-center z-10 relative h-[100svh]">
      <div class="pb-40 flex flex-col gap-2">
        <div class="bg-white rounded-sm shadow-sm overflow-hidden p-4">
          <div class="p-4 bg-primary text-grey-800 flex flex-col gap-2 items-center text-3xl font-bold">
            <div>Poker</div>
          </div>
          <div class="p-4 flex flex-col gap-2">
            <BaseButton class="rounded-none px-6 text-primary flex items-center justify-center w-full"
              variant="outline-primary" @click="signInWithGoogle">
              Login With Google
            </BaseButton>
            <BaseButton class="rounded-none px-6 text-primary flex items-center justify-center w-full"
              variant="outline-primary" @click="signInAnonymous">
              SignIn Anonymously
            </BaseButton>
          </div>
          <div class="text-gray-600 text-xs text-center">
            © 2023 Poker - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
