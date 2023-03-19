<script setup lang="ts">
definePageMeta({
  middleware: ['check'],
})

useHead({
  title: 'Home'
})

const { rooms, addRoom, removeRoom } = useRoom()

const name = ref()

async function addNewRoom() {
  await addRoom({
    name: name.value
  })
  name.value = null
}
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-6">
      <BaseFormInput type="text" v-model="name" @keydown.enter="addNewRoom"
        placeholder="Type room name and press enter" />
    </div>
    <TransitionGroup name="list" tag="ul" class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))]">
      <li class="relative" v-for="room in rooms" :key="room.id" @click="removeRoom(room)">
        <div class="absolute -top-5 w-full flex justify-center">
          <img :src="room.photoUrl" alt="" class="w-10 h-10 rounded-full object-cover">
        </div>
        <div class="p-2 bg-white rounded shadow-sm">
          {{ room.name }}
        </div>
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
}
</style>
