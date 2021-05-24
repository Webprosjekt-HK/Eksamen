import Department from "/js/classes/Department.js";

export default class DepartmentCollection {
    
    castToDepartment = (departmentObject) =>
        new Department(
            departmentObject.id,
            departmentObject.locationName,
            departmentObject.address,
            departmentObject.weekHours,
            departmentObject.weekendHours,
            departmentObject.phoneNumber,
            departmentObject.emailAddress,
            departmentObject.mapLocation
            );

    fetchDepartments = () => {
        return JSON.parse(localStorage.getItem("departments")).map((e) =>
            this.castToDepartment(e)
        );
    };
}