var jq = document.createElement('script');
jq.src = "node_modules/jquery/dist/jquery.js";
document.querySelector('head').appendChild(jq);

jq.onload = procede;//DON'T TYPE PARENTHESIS

//i.e. 'procede()' runs instantly and assigns return value to jq.onload
//     'procede' gives it a function to run when it's ready (what you want)


function procede(){
	$('.menuLateral li a').click(function(event) {
		$('.menuLateral li a').removeClass('itemActive');
		$(this).addClass('itemActive');
	});
}