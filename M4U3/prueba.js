var moment=require('moment');
moment.locale('es');
console.log('naci '+ moment('07/02/1986','dd/mm/yyyy').fromNow())