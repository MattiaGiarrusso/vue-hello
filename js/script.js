// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, 
// utilizzando i data.

const { createApp } = Vue;

createApp ({
    data() {
        return {
            title:'Bello sto Vue!',
            colorRed: 'red'
        };
    }
}).mount('#app');