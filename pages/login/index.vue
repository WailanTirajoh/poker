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
    <svg class="fixed bottom-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#202123" fill-opacity="1"
        d="M0,64L17.1,80C34.3,96,69,128,103,165.3C137.1,203,171,245,206,234.7C240,224,274,160,309,154.7C342.9,149,377,203,411,224C445.7,245,480,235,514,234.7C548.6,235,583,245,617,245.3C651.4,245,686,235,720,213.3C754.3,192,789,160,823,170.7C857.1,181,891,235,926,266.7C960,299,994,309,1029,272C1062.9,235,1097,149,1131,106.7C1165.7,64,1200,64,1234,80C1268.6,96,1303,128,1337,128C1371.4,128,1406,96,1423,80L1440,64L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z">
      </path>
    </svg>
  </div>
</template>
