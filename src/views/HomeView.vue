<template>
 <div class="flex flex-col gap-5 items-center">
        <div class="flex gap-5 w-full justify-center">
          <div class="col-3">
            <h3>Todo</h3>
            <draggable
              class="list-group"
              :list="toDo"
              group="people"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item">{{ element.name }}</div>
              </template>
            </draggable>
          </div>
      
          <div class="col-3">
            <h3>In progres</h3>
            <draggable
              class="list-group"
              :list="inProgress"
              group="people"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item">{{ element.name }}</div>
              </template>
            </draggable>
          </div>
    
          <div class="col-3">
            <h3>Done</h3>
            <draggable
              class="list-group"
              :list="done"
              group="people"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element}">
                <div class="list-group-item">{{ element.name }}</div>
              </template>
            </draggable>
          </div>
        </div>

        <div></div>
 </div>
  </template>
  <script setup>
    import {ref} from 'vue';
    import draggable from 'vuedraggable';

    const order = ref(1)
    const toDo = ref([
        { name: "John", id: 1 },
    ])
    const inProgress = ref([
        { name: "John", id: 2 },
    ])
    const done = ref([
        { name: "John", id: 3 },
    ])

    function log (evt) {
        window.console.log(evt)
    }
</script>