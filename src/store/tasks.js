import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        toDo : [{name: "John", id: 1}],
        inProgress : [{name: "Sam", id: 2}],
        done : [{name: "Martin", id: 3}]
    }),

    actions: {
        addTask(name) {
            this.toDo.push({
                name,
                id: this.toDo.length
            })
        },
        removeTask(index) {
            this.done.splice(index, 1);
        }
    }
})