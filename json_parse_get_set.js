$(document).ready(function () {

	alert("called again");
	if (typeof (Storage) != “undefined”) {

		var emp = {Name: “Chris”, Age: 30, IsPermanent: true };

		localStorage.setItem(“employee”, emp);

	}

	else { alert(“sorry your browser does not support web storage.”); }

	$(“#btnGetEmp”).click(function () {
		 alert("called");
		if (typeof (Storage) != “undefined”) {

			var emp = JSON.stringify(emp);
			emp = localStorage.getItem(“employee”);

			//alert(typeof (emp)); // string

			var emps = JSON.parse(emp); // throws an error 0x800a03f6 – JavaScript runtime error: Invalid character

		}

		else { alert(“sorry your browser does not support web storage.”); }

	});

});
