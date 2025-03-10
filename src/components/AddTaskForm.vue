<template>
    <div  class="absolute t-0 l-0 flex justify-center items-center bg-gray-400 w-screen h-screen z-[10]">
        <form class="flex flex-col items-center border bg-white " @submit.prevent="submitForm">
            <div class="self-end m-1"><i @click="isShowForm = false" class="fa-solid fa-square-xmark"></i></div>
            <input class="border m-4 p-2" type="text" name="task" v-model="newTask" placeholder="Add new task...">
            <button type="submit" class=" m-4 border rounded py-2 px-4">Add new task</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('')
const emit = defineEmits(['addNewTask'])

function submitForm() {
    emit('addNewTask', {newTask: newTask.value, formVisible: false})
    newTask.value = ''
}
</script>
