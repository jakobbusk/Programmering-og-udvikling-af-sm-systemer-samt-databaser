// opg 3.1.1
function opg311() {
    const suDef = 6820;
    let opsparing = 0;

    for (let i = 0; i < 12; i++) {
        opsparing += suDef;
        console.log(`Måned ${i + 1}: ${opsparing}`);

    }
    return opsparing;
}
opg311();

// opg 3.1.2
function opg312() {
    let opsparing = opg311();
    let bytur = 1;
    var brugt

    while (opsparing > 500) {
        brugt = opsparing * (bytur / 100);

        opsparing -= brugt;
        console.log(`Bytur ${bytur}:Du har brugt ${brugt}, og har nu ${opsparing} tilbage`);
        bytur++;
    }
}
opg312();

// opg 3.1.3
function opg313() {
    let opsparing = opg312();
    let bytur = 1;
    var brugt

    do {
        brugt = opsparing * (bytur / 100);

        opsparing -= brugt;
        console.log(`Du har brugt ${brugt} på byturen, og har nu ${opsparing} tilbage`);
        bytur++;
    } while (opsparing > 500);
}
opg313();

// opg 3.2.1
function opg321() {
    const sum = () => {
        return 5 + 5
    };

    console.log(sum());

}
opg321();

// opg 3.2.2
function opg322() {
    const sumTwoNumbers = (a, b) => {
        return a + b
    };

    console.log(sumTwoNumbers(5, 5));
    console.log(sumTwoNumbers(12, 5));
    console.log(sumTwoNumbers(5, 13));
}
opg322();

// opg 3.2.3
function opg323() {
    const checkNumber = (a) => {
        if (a > 10) {
            return "Tallet er større end 10"
        } else if (a === 10) {
            return "Tallet er 10"
        } else {
            return a + " Tallet er mindre end 10"
        }
    }
    console.log(checkNumber(5));
    console.log(checkNumber(10));
    console.log(checkNumber(15));
}
opg323();

// opg 3.2.4
function opg324() {

    const countUpTo = (n) => {
        for (let i = 0; i <= n; i++) {
            console.log(i)
        }
    }
    countUpTo(10);

}
opg324();

// opg 3.2.5
function opg325() {
    const convertTo = (n, type) => {
        if (type === "fahrenheitToCelsius") {
            return (n - 32) * 5 / 9
        } else if (type === "kmToMiles") {
            return n * 0.621371
        } else if (type === "kiloToTons") {
            return n * 0.001
        } else {
            return "Type not supported"
        }
    }
    console.log(convertTo(100, "fahrenheitToCelsius"));
    console.log(convertTo(100, "kmToMiles"));
    console.log(convertTo(1000, "kiloToTons"));
    console.log(convertTo(100, "notSupported"));
}
opg325();

// opg 3.5
function opg35() {
    function simulateNameRoll() {
        // Array of student names
        const students = [
            "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack", "Kara", "Liam", "Mona", "Nina", "Oscar", "Paul", "Quinn", "Rita", "Sam", "Tina"
        ];

        // Array til at opbevare fraværende og tilstedeværende studerende
        let presentStudents = [];
        let absentStudents = [];
        // Nummer af studerende
        let totalStudents = students.length;

        // Loop for at vælge 3 tilfældige studerende som vi sætter som fraværende
        while (absentStudents.length < 3) {
            // Vælg et tilfældigt indeks
            let randomIndex = Math.floor(Math.random() * totalStudents);  // Math.floor() runder ned til nærmeste heltal og Math.random() genererer et tilfældigt tal mellem 0 og 1
            // Vælg en studerende ud fra det tilfældige indeks
            let student = students[randomIndex];

            // Hvis den studerende ikke allerede er fraværende, tilføj den til fraværende studerende
            if (!absentStudents.includes(student)) {
                absentStudents.push(student);
            }
        }

        // Loop for at finde tilstedeværende studerende
        for (let i = 0; i < totalStudents; i++) {
            let student = students[i];
            if (!absentStudents.includes(student)) {
                presentStudents.push(student);
            }
        }

        // Her begynder vi på at udskrive resultaterne af rulningen
        console.log("Roll Call:");
        for (let i = 0; i < totalStudents; i++) {
            let student = students[i];
            if (absentStudents.includes(student)) {
                console.log(`${student} is absent.`);
            } else {
                console.log(`${student} is present.`);
            }
        }

        // her udskriver vi fraværende studerende ved hjælp af while loop
        console.log("\nAbsent Students:");
        let i = 0;
        while (i < absentStudents.length) {
            console.log(`${absentStudents[i]} is absent.`);
            i++;
        }

        // her udskriver vi tilstedeværende studerende ved hjælp af for loop
        console.log("\nPresent Students:");
        for (let i = 0; i < presentStudents.length; i++) {
            console.log(`${presentStudents[i]} is present.`);
        }
    }

    // Call the function to simulate the name roll:
    simulateNameRoll();
}
opg35();