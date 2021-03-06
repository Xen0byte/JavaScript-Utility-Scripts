function expandSections() {
	var arrows = document.querySelectorAll('span.udi-angle-down')
	var processedCounter = 0;

	arrows.forEach(function (arrow) {
		processedCounter++;
		arrow.click();
	});

	console.log(processedCounter + " sections have been expanded");
}

function tickCheckboxes() {
	var checkboxes = document.querySelectorAll('input[type="checkbox"]')
	var processedCounter = 0;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked == false) {
				processedCounter++;
				checkbox.click();
			}
		
	});

	console.log(processedCounter + " lessons out of " + checkboxes.length + " have been marked completed");
}

function completeCourse() {
	expandSections();
	tickCheckboxes();
}

// to be used on https://www.udemy.com/course/*/learn/lecture/*
// author: Xen0byte, The Opcodemancer
