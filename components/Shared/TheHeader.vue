<script setup lang="ts">

useHead({
  title: 'Login'
})

const { user, signInWithGoogle, signInAnonymous, signOutC } = useAuth()
</script>

<template>
  <header class="flex justify-between p-8">
    <div>
      <NuxtLink to="/">
        Poker
      </NuxtLink>
    </div>
    <div>

      <template v-if="user">
        <BaseDropdownMenu align="right">
          <template #trigger>
            <BaseButton variant="none" class="flex justify-between gap-4 items-center">
              <div v-if="user.isAnonymous">
                Anonymous
              </div>
              <div v-else>
                {{ user.displayName }}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </BaseButton>
          </template>
          <template #content>
            <div
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
              <div class="flex gap-2 items-center">
                <button class="w-full text-left" @click="signOutC">Sign Out</button>
              </div>
            </div>
          </template>
        </BaseDropdownMenu>
      </template>
      <template v-else>
        <BaseDropdownMenu align="right">
          <template #trigger>
            <BaseButton variant="none" class="flex justify-between gap-4 items-center">
              <div>
                Sign In
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </BaseButton>
          </template>
          <template #content>
            <div
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
              <div class="flex gap-2 items-center">
                <button class="w-full text-left" @click="signInWithGoogle">

                  Login With Google
                </button>
              </div>
            </div>
            <div
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
              <div class="flex gap-2 items-center">
                <button class="w-full text-left" @click="signInAnonymous">

                  SignIn Anonymously
                </button>
              </div>
            </div>
          </template>
        </BaseDropdownMenu>
      </template>
    </div>
  </header>
</template>
