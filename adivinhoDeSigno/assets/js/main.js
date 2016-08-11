
function sorteiaSigno() {
	var signo = [
	{name: 'Aries', classname: 'aries'},
	{name: 'Touro', classname: 'taurus'},
	{name: 'Gêmeos', classname: 'gemini'},
	{name: 'Câncer', classname: 'cancer'},
	{name: 'Leão', classname: 'leo'},
	{name: 'Virgem', classname: 'virgo'},
	{name: 'Libra', classname: 'libra'},
	{name: 'Escorpião', classname: 'scorpion'},
	{name: 'Sagitário', classname: 'sagittarius'},
	{name: 'Capricórnio', classname: 'capricorn'},
	{name: 'Aquário', classname: 'aquarius'},
	{name: 'Peixes', classname: 'pisces'}
	];

	return signo[Math.round(Math.random() * 11 )];
}

$(document).ready(function() {
	$('#textoSigno #signos').fadeOut(0);
})

$('#revelaSignoBtn').on('click', function() {
	$(this).attr("disabled","disabled");
	$('#textoSigno #signos').fadeOut('slow', function() {
		$('#sol').attr('class', 'simboloSigno');
		var sol = sorteiaSigno();
		$('#sol').text(sol.name);
		$('#sol').addClass(sol.classname);
		$('#ascendente').attr('class', 'simboloSigno');
		var ascendente = sorteiaSigno();
		$('#ascendente').text(ascendente.name);
		$('#ascendente').addClass(ascendente.classname);
		$('#lua').attr('class', 'simboloSigno');
		var lua = sorteiaSigno();
		$('#lua').text(lua.name);
		$('#lua').addClass(lua.classname);
	});

	$('#textoSigno #signos').fadeIn(1500, function() {
		$('#revelaSignoBtn').removeAttr("disabled");
	});
});