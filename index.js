// Write your solution in this file!
const employee = {
    name: "Mo",
    streetAddress: "wallstreet",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObject = { ...employee };
    newObject[key] = value;

    return employee, newObject;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newObject = { ...employee };
    delete newObject[key];

    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}