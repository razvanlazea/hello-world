function paragraph(p){

	p.style.display = "none";
	var text = p.innerHTML;
	var next;
	p.nextElementSibling.style.display = "initial";
	p.nextElementSibling.defaultValue = text;

	p.nextElementSibling.nextElementSibling.style.display = "initial";
}

function submitEdit(b){
	var areaText = b.previousElementSibling.value;
	b.previousElementSibling.style.display = "none";
	b.previousElementSibling.previousElementSibling.innerHTML = areaText;
	b.previousElementSibling.previousElementSibling.style.display = "initial";
	b.style.display = "none";
}