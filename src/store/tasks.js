import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        toDo : [{name: "John", id: 1}],
        inProgress : [{name: "Sam", id: 2}],
        done : [{name: "Martin", id: 3}]
    }),
    getters: {

    },

    actions: {
        addTaskAction(name) {
           this.toDo.push({
            name,
            id: this.toDo.length+1
           })
        },
        removeTaskAction(index) {
           this.done.splice(index, 1);
        }
    }
})