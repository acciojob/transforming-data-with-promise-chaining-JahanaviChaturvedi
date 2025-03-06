//your JS code here. If required.
document.getElementById("btn").onClick = function(){
	const inputValue = Number(document.getElementById("ip").value);
	const outputValue = document.getElementById("output"});

	new Promise((resolve, reject)=>{
		setTimeout(()=>{
			outputDiv.innerHTML = `Result: ${inputValue}`;
			resolve(inputValue);
		},2000);
	});
}