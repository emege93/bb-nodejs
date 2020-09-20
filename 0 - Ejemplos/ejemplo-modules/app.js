const {frutas, dinero} = require('./frutas')
const cowsay = require('cowsay')

dinerototal = dinero;

frutas.map(item => {
    console.count(item);
    dinerototal = dinerototal - 100;
    console.log(dinerototal);
});

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));
