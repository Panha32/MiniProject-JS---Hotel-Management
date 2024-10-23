let hotel = [];

function create() {
    let row = document.getElementById("row").value;
    let col = document.getElementById("col").value;
    let sms = `Successfully created hotel with ${row} floors and ${col} rooms in each floor`;

    if (row == "" || col == "") {
        alert("Please enter number of floor and room");
        return;
    } else if (row < 1 || col < 1) {
        alert("Please enter number of floor and room greater than 0");
        return;
    } else {
        alert(sms);
    }

    let output = "";

    for (i = 0; i < row; i++) {
        hotel[i] = [];
        output += `Floor ${i + 1} : `;

        for (j = 0; j < col; j++) {
            hotel[i].push("null");
            output += `<span style="padding: 5px 30px">null</span>`;
        }

        output += "<br><br>";
    }

    document.getElementById("feature").innerHTML = `Our hotel has ${row} floors and ${col} rooms in each floor`;
    document.getElementById("floor").innerHTML = output;

    document.getElementById("createHotel").style.display = "none";
    document.getElementById("hotel").style.display = "block";
}

function checkIn() {
    document.getElementById("checkIn").style.display = "block";
    document.getElementById("checkOut").style.display = "none";
}

function checkOut() {
    document.getElementById("checkIn").style.display = "none";
    document.getElementById("checkOut").style.display = "block";
}

function saveIn() {
    let floorNum = document.getElementById("floorNum").valueAsNumber;
    let roomNum = document.getElementById("roomNum").valueAsNumber;
    let name = document.getElementById("name").value;

    floorNum -= 1;
    roomNum -= 1;

    if (floorNum < 0 || floorNum >= hotel.length || roomNum < 0 || roomNum >= hotel[0].length) {
        alert("Invalid floor or room number!");
        return;
    }

    if(name === '') {
        alert("Please enter a name");
        return;
    }

    if (hotel[floorNum][roomNum] !== "null") {
        alert(`Sorry! room ${roomNum + 1} in floor ${floorNum + 1} is not empty!`);
        return;
    }

    hotel[floorNum][roomNum] = name;

    let updatedOutput = "";

    for (let i = 0; i < hotel.length; i++) {
        updatedOutput += `Floor ${i + 1} : `;
        for (let j = 0; j < hotel[i].length; j++) {
            updatedOutput += `<span style="padding: 5px 30px">${hotel[i][j]}</span>`;
        }
        updatedOutput += "<br><br>";
    }

    document.getElementById("floor").innerHTML = updatedOutput;
    alert(name + " checked in room " + (roomNum + 1) + " in floor " + (floorNum + 1));
    document.getElementById("floorNum").value = "";
    document.getElementById("roomNum").value = "";
    document.getElementById("name").value = "";
}

function saveOut() {
    let floorNumOut = document.getElementById("floorNumOut").valueAsNumber;
    let roomNumOut = document.getElementById("roomNumOut").valueAsNumber;

    floorNumOut -= 1;
    roomNumOut -= 1;

    if (floorNumOut < 0 || floorNumOut >= hotel.length || roomNumOut < 0 || roomNumOut >= hotel[0].length) {
        alert("Invalid floor or room number!");
        return;
    }

    if (hotel[floorNumOut][roomNumOut] === "null") {
        alert(`Room ${roomNumOut + 1} in floor ${floorNumOut + 1} is empty!`);
        return;
    }

    hotel[floorNumOut][roomNumOut] = "null";

    let updatedOutput1 = "";

    for (let i = 0; i < hotel.length; i++) {
        updatedOutput1 += `Floor ${i + 1} : `;
        for (let j = 0; j < hotel[i].length; j++) {
            updatedOutput1 += `<span style="padding: 5px 30px">${hotel[i][j]}</span>`;
        }
        updatedOutput1 += "<br><br>";
    }

    document.getElementById("floor").innerHTML = updatedOutput1;
    alert("Customer in room " + (roomNumOut + 1) + " in floor " + (floorNumOut + 1) + " checked out!");
    document.getElementById("floorNumOut").value = "";
    document.getElementById("roomNumOut").value = "";
}
