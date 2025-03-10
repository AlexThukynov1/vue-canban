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
              @change="dataLog"
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
              @change="dataLog"
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
              @change="dataLog"
              itemKey="name"
            >
              <template #item="{ element, index}">
                <div class="mb-2 px-2">
                  <header class="rounded-t-md border bg-green-300 h-[20px]"></header>
                  <div class="border-l border-r flex justify-between border-b min-h-[50px] h-full bg-white px-1">
                    <div>{{ element.name }}</div>
                    <div class="self-center"><i  @click="store.removeTaskAction(index)" class="fa-solid fa-trash"></i></div>
                  </div>
                  </div>
              </template>
            </draggable>
          </div>
        </div>

        <AddTaskForm v-if="isShowForm" @addNewTask="addTask"/>
        
 </div>
  </template>
  <script setup>
    import { useTasksStore } from '@/store/tasks';
    import {ref} from 'vue';
    import draggable from 'vuedraggable';
    import AddTaskForm from '@/components/AddTaskForm.vue';

    const store = useTasksStore()
    const isShowForm = ref(false)
    const newTask = ref('')
    const order = ref(1)

    function log1 (evt) {
      if(evt == 'added') {
        console.log('add')
      }
      if(evt == 'remove') {
        console.log('remove')
      }
    } 
    function log2 (evt) {
        window.console.log(evt)
    }
    function log3 (evt) {
        window.console.log(evt)
        let {removed, added} = evt;
        
        console.log(added.element, added.newIndex);
    } 

    function dataLog () {
      console.log(store.toDo)
      console.log(store.inProgress)
      console.log(store.done)
    }
    function addTask (data) {
        store.addTaskAction(data.newTask)
        isShowForm.value = data.formVisible
    }
</script>