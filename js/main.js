const { createApp } = Vue;

createApp({
    data() {
        return {
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
            task: ""
        };
    },
    methods: {
        addTask() {
            if (this.task.trim() !== '') {
                this.todolist.push({ text: this.task, done: false });
                this.task = '';
            }
        },
        removeTask(index) {
            this.todolist.splice(index, 1);
        }
    }
}).mount('#app');