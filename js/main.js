const { createApp } = Vue;

createApp({
    data() {
        return {
            // Lista iniziale dei task
            todolist: [
                {
                    text: "Passa l'aspirapolvere e spolvera i mobili",
                    done: true
                },
                {
                    text: "Compra frutta, verdura e altri alimenti necessari",
                    done: false
                },
                {
                    text: "Dedica almeno un'ora alla lettura di un buon libro",
                    done: false
                },
                {
                    text: "Telefona a un vecchio amico per chiacchierare e aggiornarsi",
                    done: true
                },
                {
                    text: "Esci per una passeggiata nel parco o nel tuo quartiere",
                    done: true
                },
                {
                    text: "Prova a cucinare un piatto che non hai mai preparato prima",
                    done: false
                },
                {
                    text: "Riordina i vestiti e metti da parte quelli che non usi più",
                    done: true
                },
            ],
            task: "" // Input per il nuovo task
        };
    },
    methods: {
        // Aggiungi un nuovo task alla lista
        addTask() {
            if (this.task.trim() !== '') {
                this.todolist.push({ text: this.task, done: false });
                this.task = ''; // Pulisci l'input
            }
        },
        // Rimuovi un task in base all'indice
        removeTask(index) {
            this.todolist.splice(index, 1);
        },
        // Cancella tutti i task
        deleteAllTasks() {
            if (confirm("Sei sicuro di voler eliminare tutti i Task?")) {
                this.todolist = [];
            }
        },
        // Cambia lo stato di completamento di un task
        done(index) {
            this.todolist[index].done = !this.todolist[index].done;
        }
    }
}).mount('#app');