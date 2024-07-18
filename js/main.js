const { createApp } = Vue;

createApp({
    data() {
        return {
            // Creato una ToDoList
            todolist: [
                {
                    id: 1,
                    text: "Passa l'aspirapolvere e spolvera i mobili",
                    done: true
                },
                {
                    id: 2,
                    text: "Compra frutta, verdura e altri alimenti necessari",
                    done: false
                },
                {
                    id: 3,
                    text: "Dedica almeno un'ora alla lettura di un buon libr",
                    done: false
                },
                {
                    id: 4,
                    text: "Telefona a un vecchio amico per chiacchierare e aggiornarsi",
                    done: true
                },
                {
                    id: 5,
                    text: "Esci per una passeggiata nel parco o nel tuo quartiere",
                    done: true
                },
                {
                    id: 6,
                    text: "Prova a cucinare un piatto che non hai mai preparato prima",
                    done: false
                },
                {
                    id: 7,
                    text: "Riordina i vestiti e metti da parte quelli che non usi più",
                    done: true
                },
            ]
        };
    }
}).mount('#app');