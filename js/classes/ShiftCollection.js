export default class ShiftCollection {
    shifts = [];

    addShift = (shift) => {
        this.shifts.push(shift);
    };
    // returns the index of the removed item. If none is found returns -1
    removeShift = (shiftID) => {
        let shiftIndex = -1;
        for (let i = 0; i < this.shifts.length; i++) {
            if (this.shifts[i].id === shiftID) {
                shiftIndex = i;
                this.shifts = this.shifts.splice(i, 1);
                break;
            }
        }
        return shiftIndex;
    };
    // Returns all shifts that matches the employee's ID.
    filterShiftsEmployeeID = (employeeID) => {
        return this.shifts.filter((el) => el.employeeID === employeeID);
    };
    // Returns index of the updated item. -1 if there wasn't a matching item to update.
    updateShift = (shift) => {
        for (let i = 0; i < this.shifts.length; i++) {
            if (shift.id == this.shifts[i].id) {
                this.shifts = this.shifts.splice(i, 1, shift);
                return i;
            }
        }
        return -1;
    };
}
