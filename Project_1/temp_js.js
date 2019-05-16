//Java script part for dropdown of sub menu
//****************************************************************************************************
function mydropdownFunction(x) {
	if(x==0){
		 document.getElementById("myDropdown_file").classList.toggle("show");
	}
	else if(x==1){
		 document.getElementById("myDropdown_edit").classList.toggle("show");
	}
	else if(x==2){
		 document.getElementById("myDropdown_run").classList.toggle("show");

	}
	else{
		 document.getElementById("myDropdown_help").classList.toggle("show");
	}
 
}


//Java script part for the enabling and disbling the options of Run menu tab
//****************************************************************************************************
function assemblerlistner()
{
	document.getElementById("Run_run").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_step").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_reset").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_clearBreakPoints").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_toggleBreakPoints").setAttribute("style", "cursor: pointer; opacity: 1;");
}



//Java script part for the new file creation and text filed
//****************************************************************************************************
var person=[]
var count=1
function Person(name) {
  this.name = name;
  this.text = "Add your code here!";
}

function init()
{
	
	var str="mips";
	var app=count.toString();
	str=str.concat(app);
	str=str.concat(".asm");
	count++;
	var person1=new Person(str);
	person.push(person1);
	return person;
}
function myfunctionlist()
{
	person=init();

	var btn = document.createElement("BUTTON");
	btn.innerHTML=person[count-2].name;
	btn.id=("btn").concat((count-2).toString());
	btn.addEventListener("click",function(){eventlistner(count-2)});
	document.getElementById("mydiv").appendChild(btn);
	
}
function eventlistner(x)
{
	var node=document.getElementById("mytext")
	node.value=person[x].text;
}
//******************************************************************************************************