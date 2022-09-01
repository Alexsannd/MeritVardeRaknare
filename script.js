let courses = 24;
function myFunction(clicked_id) {
    document.getElementById("myDropdown" + clicked_id.substring(8)).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {


    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }
        }
    }
}
function selectGrade(clicked_id) {
    let number;
    console.log(clicked_id.charAt(clicked_id.length-1))
    console.log(clicked_id)
    switch (clicked_id.charAt(clicked_id.length-1)) {
        //Gymnasiearbete
        case "G": {
            number = Number(clicked_id.slice(0, -2));
            switch (clicked_id.charAt(clicked_id.length - 2)) {
                case "E":
                    document.getElementById("gradeBtn" + number).textContent = "E";
                    break;
                case "F":
                    document.getElementById("gradeBtn" + number).textContent = "F";
                    break;
                case "-":
                    document.getElementById("gradeBtn" + number).textContent = "-";
                    break;
            }
        } break;
        //Long aka 150 points
        case "L": {
            number = Number(clicked_id.slice(0, -2));
            switch (clicked_id.charAt(clicked_id.length-2)) {
                case "A":
                    document.getElementById("gradeBtn" + number).textContent = "A";
                    document.getElementById("gradeValue" + number).textContent = "3000";
                    document.getElementById("numberValue" + number).textContent = "20";
                    break;
                case "B":
                    document.getElementById("gradeBtn" + number).textContent = "B";
                    document.getElementById("gradeValue" + number).textContent = "2625";
                    document.getElementById("numberValue" + number).textContent = "17.5";
                    break;
                case "C":
                    document.getElementById("gradeBtn" + number).textContent = "C";
                    document.getElementById("gradeValue" + number).textContent = "2250";
                    document.getElementById("numberValue" + number).textContent = "15";
                    break;
                case "D":
                    document.getElementById("gradeBtn" + number).textContent = "D";
                    document.getElementById("gradeValue" + number).textContent = "1875";
                    document.getElementById("numberValue" + number).textContent = "12.5";
                    break;
                case "E":
                    document.getElementById("gradeBtn" + number).textContent = "E";
                    document.getElementById("gradeValue" + number).textContent = "1500";
                    document.getElementById("numberValue" + number).textContent = "10";
                    break;
            }
        } break;
        //Short aka 50 points
        case "S": {
            number = Number(clicked_id.slice(0, -2));
            switch (clicked_id.charAt(clicked_id.length-2)) {
                case "A":
                    document.getElementById("gradeBtn" + number).textContent = "A";
                    document.getElementById("gradeValue" + number).textContent = "1000";
                    document.getElementById("numberValue" + number).textContent = "20";
                    break;
                case "B":
                    document.getElementById("gradeBtn" + number).textContent = "B";
                    document.getElementById("gradeValue" + number).textContent = "875";
                    document.getElementById("numberValue" + number).textContent = "17.5";
                    break;
                case "C":
                    document.getElementById("gradeBtn" + number).textContent = "C";
                    document.getElementById("gradeValue" + number).textContent = "750";
                    document.getElementById("numberValue" + number).textContent = "15";
                    break;
                case "D":
                    document.getElementById("gradeBtn" + number).textContent = "D";
                    document.getElementById("gradeValue" + number).textContent = "625";
                    document.getElementById("numberValue" + number).textContent = "12.5";
                    break;
                case "E":
                    document.getElementById("gradeBtn" + number).textContent = "E";
                    document.getElementById("gradeValue" + number).textContent = "500";
                    document.getElementById("numberValue" + number).textContent = "10";
                    break;
            }
        } break;
    }

    number = Number(clicked_id.slice(0, -1));
    switch (clicked_id.charAt(clicked_id.length-1)) {
        case "A": document.getElementById("gradeBtn" + number).textContent = "A";
            document.getElementById("gradeValue" + number).textContent = "2000";
            document.getElementById("numberValue" + number).textContent = "20"; break;
        case "B": document.getElementById("gradeBtn" + number).textContent = "B";
            document.getElementById("gradeValue" + number).textContent = "1750";
            document.getElementById("numberValue" + number).textContent = "17.5"; break;
        case "C": document.getElementById("gradeBtn" + number).textContent = "C";
            document.getElementById("gradeValue" + number).textContent = "1500";
            document.getElementById("numberValue" + number).textContent = "15"; break;
        case "D": document.getElementById("gradeBtn" + number).textContent = "D";
            document.getElementById("gradeValue" + number).textContent = "1250";
            document.getElementById("numberValue" + number).textContent = "12.5"; break;
        case "E": document.getElementById("gradeBtn" + number).textContent = "E";
            document.getElementById("gradeValue" + number).textContent = "1000";
            document.getElementById("numberValue" + number).textContent = "10"; break;
        case "F": document.getElementById("gradeBtn" + number).textContent = "F";
            document.getElementById("gradeValue" + number).textContent = "0";
            document.getElementById("numberValue" + number).textContent = "0"; break;
        case "-": document.getElementById("gradeBtn" + number).textContent = "-";
            document.getElementById("gradeValue" + number).textContent = "-";
            document.getElementById("numberValue" + number).textContent = "-"; break;
    }
    let done = 0;
    let totalNumberValue = 0;
    for (let i = 0; i < courses; i++) {
        if (!(document.getElementById("numberValue" + i).textContent == "-" || document.getElementById("numberValue" + i).textContent == "")) {
            done++;
            totalNumberValue += Number(document.getElementById("numberValue" + i).textContent);
        }
    }

    document.getElementById("numberValue" + Number(courses+1)).textContent = Number(totalNumberValue/done);

}