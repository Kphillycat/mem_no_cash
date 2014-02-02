//Game play. Player should be able to match color and number
$(document).ready(function(){
	var $cards = $(".card");
	var points;

	$cards.on("click", function(event){
		var $this = $(this);
		points = Number($this.find(".value").text());

		$this.addClass("chosen");
		if($this.has(".chosen")){
			$this.find(".color").fadeIn();
			$this.find(".value").fadeOut();
			// $cards.not($this).addClass("disabled");
		}

		if($(".card.chosen").length > 1){
			console.log("two cards");
			var cardOne = $(".card.chosen").eq(0);
			var cardTwo = $(".card.chosen").eq(1);
			if(cardOne.find(".color").text() == cardTwo.find(".color").text()){
				console.log("matchy match");
				cardTwo.addClass("played");
				cardOne.addClass("played");
			} else{
				console.log("not a matchy match");
			}
			$cards.removeClass("chosen"); //remove chosen from all the cards
		}
	});
});