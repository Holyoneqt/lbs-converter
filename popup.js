document.getElementById('conv-button').onclick = function() {
				var toConv = document.getElementById('conv-input').value;
				if (toConv) {
					document.getElementById('conv-output').innerHTML = (toConv * 0.453592).toPrecision(4);
				}
			}