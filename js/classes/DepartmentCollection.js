export default class DepartmentCollection {
    fetchDepartments = () => {
        return JSON.parse(localStorage.getItem("departments"));
    };
}