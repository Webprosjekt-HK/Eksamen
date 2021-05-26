export default class DepartmentCollection {
    fetchDepartments = () => {
        return JSON.parse(localStorage.getItem("departments"));
    };
    filterDepartmentsById = (depID) => {
        return this.fetchDepartments().find((e) => e.id == depID);
    };
}
