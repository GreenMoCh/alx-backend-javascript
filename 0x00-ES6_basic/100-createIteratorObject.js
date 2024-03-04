export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);

    const iterator = {
        currentIndex: 0,
        currentDepartmentIndex: 0,

        next() {
            const currentDepartment = departments[this.currentDepartmentIndex];
            const currentEmployee = currentDepartment[this.currentIndex];

            if (currentEmployee) {
                this.currentIndex++;
            } else {
                this.currentDepartmentIndex++;
                this.currentIndex = 0;
            }

            return {
                done: !currentEmployee,
                value: currentEmployee,
            };
        },
    };

    iterator[Symbol.iterator] = function () {
        return this;
    };

    return iterator;
}