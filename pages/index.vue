<script setup lang="ts">
const { rooms, addRoom, removeRoom } = useFirebase()

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
        <div class="">
            <input type="text" v-model="name" @keydown.enter="addNewRoom">
        </div>
        <ul>
            <li v-for="room in rooms" :key="room.id" @click="removeRoom(room)">
                {{ room.name }}
            </li>
        </ul>
    </div>
</template>
