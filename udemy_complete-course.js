function expandSections() {
    var totalSections = document.querySelectorAll("button[id*='accordion-panel-title']");
    var expandedSectionsCounter = 0;

    totalSections.forEach(function (section) {
        if (section.getAttribute("aria-expanded") == "false") {
            section.click();
            expandedSectionsCounter++;
        }
    });

    console.log(expandedSectionsCounter + " sections have been expanded out of " + totalSections.length + " total sections");
}

function tickCheckboxes() {
    var checkboxes = document.querySelectorAll("input[type='checkbox'][data-purpose='progress-toggle-button']");
    var checkedCheckboxesCounter = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked == false) {
            checkbox.click();
            checkedCheckboxesCounter++;
        }
    });

    console.log(checkedCheckboxesCounter + " lessons have been marked completed out of " + checkboxes.length + " total lessons");
}

function completeCourse() {
    expandSections();
    tickCheckboxes();
}

// to be used on https://www.udemy.com/course/*/learn/lecture/*
// author: Xen0byte, The Opcodemancer
