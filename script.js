let courses = 24;
let examReady = [false, false, false, false, false, false];
let examReadyID = [0, 1, 2, 8, 9, 15];
//Times to multiply by
let timesPoints = 2;

function myFunction(clicked_id) {
    document.getElementById("myDropdown" + clicked_id.substring(8)).classList.toggle("show");
}

window.onclick = function(event) {


    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Executes when you press a grade in a dropdown
function selectGrade(clicked_id) {
    let number;
    timesPoints=2;
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
        //Long aka 150 points.
        case "L": timesPoints=3; break;

        //Short aka 50 points
        case "S": timesPoints=1; break;
    }

    number = Number(clicked_id.slice(0, -1));
    switch (clicked_id.charAt(clicked_id.length-1)) {
        case "A":
            document.getElementById("gradeBtn" + number).textContent = "A";
            document.getElementById("gradeValue" + number).textContent = 1000 * timesPoints;
            document.getElementById("numberValue" + number).textContent = "20";
            break;
        case "B":
            document.getElementById("gradeBtn" + number).textContent = "B";
            document.getElementById("gradeValue" + number).textContent = 875 * timesPoints;
            document.getElementById("numberValue" + number).textContent = "17.5";
            break;
        case "C":
            document.getElementById("gradeBtn" + number).textContent = "C";
            document.getElementById("gradeValue" + number).textContent = 750 * timesPoints;
            document.getElementById("numberValue" + number).textContent = "15";
            break;
        case "D":
            document.getElementById("gradeBtn" + number).textContent = "D";
            document.getElementById("gradeValue" + number).textContent = 625 * timesPoints;
            document.getElementById("numberValue" + number).textContent = "12.5";
            break;
        case "E":
            document.getElementById("gradeBtn" + number).textContent = "E";
            document.getElementById("gradeValue" + number).textContent = 500 * timesPoints;
            document.getElementById("numberValue" + number).textContent = "10";
            break;
        case "F":
            document.getElementById("gradeBtn" + number).textContent = "F";
            document.getElementById("gradeValue" + number).textContent = "0";
            document.getElementById("numberValue" + number).textContent = "0";
            break;
        case "-":
            document.getElementById("gradeBtn" + number).textContent = "-";
            document.getElementById("gradeValue" + number).textContent = "-";
            document.getElementById("numberValue" + number).textContent = "-";
            break;
    }

    let totalGradeValue = 0;
    for (let i = 0; i < courses; i++) {
        if (!(document.getElementById("numberValue" + i).textContent == "-" || document.getElementById("numberValue" + i).textContent == "")) {
            totalGradeValue += Number(document.getElementById("gradeValue" + i).textContent)

        }
    }
    document.getElementById("lastExtra").textContent = "";
    for (let i = 0; i < examReadyID.length; i++) {
        if (document.getElementById("numberValue" + examReadyID[i]).textContent == "-" ||
            document.getElementById("numberValue" + examReadyID[i]).textContent == "0")
            examReady[i] = false; else examReady[i] = true;
        if (examReady[i] == false) document.getElementById("lastExtra").textContent = "Du kan inte skriva examen";
    }

    document.getElementById("gradeValue" + Number(courses+1)).textContent = (totalGradeValue/2400).toFixed(2);
}