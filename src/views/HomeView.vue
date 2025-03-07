<template>
 <div class="flex flex-col gap-5 w-full h-screen relative">
        <div class="flex gap-[10px] w-full justify-center">
          <div class="h-full min-w-[350px] bg-gray-100 h-screen border">
            <div class="bg-blue-300 py-4 px-2 mb-2 flex justify-between">
              <h3 class="bold center text-white text-xl w-full">Todo</h3>
              <i class="fa-solid fa-plus" @click="isShowForm = true"></i>
            </div>
            <draggable
              class="list-group h-screen"
              :list="store.toDo"
              group="people"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element}">
                <div class="mb-2 px-2">
                  <header class="rounded-t-md border bg-blue-300 h-[20px]"></header>
                  <div class="border-l border-r border-b min-h-[50px] h-full bg-white px-1">
                    <div>{{ element.name }}</div>
                  </div>
                  </div>
              </template>
            </draggable>
          </div>
      
          <div class="min-w-[350px] bg-gray-100 h-screen border">
            <div class="bg-yellow-300 py-4 px-2 mb-2" >
              <h3>In progress</h3>
            </div>
            <draggable
              class="list-group h-screen"
              :list="store.inProgress"
              group="people"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element}">
                <div class="mb-2 px-2">
                  <header class="rounded-t-md border bg-yellow-300 h-[20px]"></header>
                  <div class="border-l border-r border-b min-h-[50px] h-full bg-white px-1">
                    <div>{{ element.name }}</div>
                  </div>
                  </div>
              </template>
            </draggable>
          </div>
    
          <div class="min-w-[350px] bg-gray-100 h-screen border">
            <div class="bg-green-300 py-4 px-2 mb-2" >
              <h3>Done</h3>
            </div>
            <draggable
              class="list-group h-screen"
              :list="store.done"
              group="people"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element, index}">
                <div class="mb-2 px-2">
                  <header class="rounded-t-md border bg-green-300 h-[20px]"></header>
                  <div class="border-l border-r flex justify-between border-b min-h-[50px] h-full bg-white px-1">
                    <div>{{ element.name }}</div>
                    <div class="self-center"><i  @click="store.removeTask(index)" class="fa-solid fa-trash"></i></div>
                  </div>
                  </div>
              </template>
            </draggable>
          </div>
        </div>

        <div v-if="isShowForm" class="absolute t-0 l-0 flex justify-center items-center bg-gray-400 w-screen h-screen z-[10]">
            <form class="flex flex-col items-center border bg-white " @submit.prevent="addTask">
                <div class="self-end m-1"><i @click="isShowForm = false" class="fa-solid fa-square-xmark"></i></div>
                <input class="border m-4 p-2" type="text" name="task" v-model="newTask" placeholder="Add new task...">
                <button type="submit m-4">Add new task</button>
            </form>
        </div>
 </div>
  </template>
  <script setup>
    import { useTasksStore } from '@/store/tasks';
    import {ref} from 'vue';
    import draggable from 'vuedraggable';

    const store = useTasksStore()
    const isShowForm = ref(false)
    const newTask = ref('')
    const order = ref(1)


    function log (evt) {
        window.console.log(evt)
    } 
    function addTask () {
        store.addTask(newTask.value)
        newTask.value = '';
        isShowForm.value = false;
    }
</script>