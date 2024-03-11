export default function getListStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}
