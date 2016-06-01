	 function cheackAnswers(ques1,ques2){
		var goodAnswer = 0;
		if(ques1.toLowerCase() == 'капуста')
			goodAnswer++;
		if(ques2.toLowerCase() == 'елка')
			goodAnswer++;

		if(goodAnswer == 0)
			alert('Вы ничего не угадали');
		else
			alert('Количество правильных ответов: ' + goodAnswer);		
	}
	function cheackGuess() {
		alert('Я загадал число от 1 до 100, попробуй угадай')
		var r=Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		while(true){
		var userAnswer=parseInt(prompt("Введите ваше число ",''));
		if(userAnswer==r){
			alert('Правильно');
			break; 
		}
		else if (userAnswer>=(r-10) && userAnswer<r) {
			alert('Мало, но близко');
		}else if (userAnswer>r && userAnswer<=(r+10)) {
			alert('Много, но близко');
		}
		else if (userAnswer<r) {
				alert('Слишком мало');	
		}else if (userAnswer>r) {
			alert('Cлишком много');
		}else if(isNaN()){
			break;
		}	
		}
		
		
	

	}
