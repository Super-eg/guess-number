const reset = document.getElementById("reset");
const enter = document.getElementById("enter");
const go = document.getElementById("go");
var ans = Math.round( Math.random() * 100 );

const resetAnswer = () => Math.round( Math.random() * 100 );

reset.addEventListener( "click", function() { ans = resetAnswer() } );

go.addEventListener("click", function() {
	if ( enter.value < ans ) {
		document.getElementById("show").innerText = "Bigger";
	} else if ( enter.value > ans ) {
		document.getElementById("show").innerText = "Smaller";
	} else {
		document.getElementById("show").innerText = "Correct!";
	}
})