// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
const employeesArray = [];
let addEmployees = true;

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  while (addEmployees) {
    const employeeFirstName = window.prompt(
      "Please enter the employee's first name"
    );

    const employeeLastName = window.prompt(
      "Please enter the employee's last name"
    );

    let employeeSalary = window.prompt("Please enter the employee's Salary");

    let number = parseFloat(employeeSalary);
    if (isNaN(number)) {
      employeeSalary = 0;
    }

    let employee = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: parseFloat(employeeSalary),
    };

    employeesArray.push(employee);

    addEmployees = window.confirm("would you like to add another employee?");
  }
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const person = employeesArray[i];
    total += person.salary;
  }
  console.log(
    "The average salary would be $" + total / employeesArray.length + ".00"
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);

  console.log(
    "Hello " +
      employeesArray[randomIndex].firstName +
      " Congratulations for being the lucky winner!!"
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function () {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table();

  displayAverageSalary(employeesArray);

  console.log("==============================");

  getRandomEmployee(employeesArray);

  employeesArray.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees();
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
