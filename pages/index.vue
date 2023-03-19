<script setup lang="ts">
definePageMeta({
  middleware: ['check'],
})

useHead({
  title: 'Home'
})

const { rooms, addRoom } = useRoom()

const name = ref()

async function addNewRoom() {
  await addRoom({
    name: name.value
  })
  name.value = null
}
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-semibold">
        Your Rooms
      </h1>
    </div>
    <TransitionGroup name="list" tag="ul" class="grid gap-2 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))]">
      <li>
        <BaseOffcanvas position="bottom">
          <template #trigger>
            <button
              class="w-full p-2 border-2 bg-gray-50 hover:bg-white border-dashed border-spacing-8 rounded-xl h-36 flex justify-center items-center">
              <div class="">
                <div class="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                </div>
                <div class="text-center">
                  Add Room
                </div>
              </div>
            </button>
          </template>
          <template #headerTitle>
            <div class="">
              Add New Room
            </div>
          </template>
          <template #default>
            <div class="p-4">
              <div class="mb-6">
                <BaseFormInput type="text" v-model="name" @keydown.enter="addNewRoom"
                  placeholder="Type room name and press enter" />
              </div>
            </div>
          </template>
          <template #backdrop="{ isOpen, closeOffCanvas }">
            <div v-if="isOpen" class="fixed inset-0 transform transition-all z-10">
              <div class="absolute inset-0 bg-gray-300 opacity-50" @click="closeOffCanvas">
              </div>
            </div>
          </template>
        </BaseOffcanvas>
      </li>

      <li class="relative" v-for="room in rooms" :key="room.id">
        <NuxtLink :to="`rooms/${room.id}`">
          <div class="absolute -top-5 w-full flex justify-center z-10">
            <img :src="room.photoUrl" alt="" class="w-10 h-10 rounded-full object-cover">
          </div>
          <div
            class="relative rounded-xl p-2 text-sm leading-6 transition bg-white shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-600/[0.04] h-36">
            {{ room.name }}
          </div>
        </NuxtLink>
        <BaseSvgRainbowLine />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatey(30px);
}

.list-leave-active {
  position: absolute;
}</style>
