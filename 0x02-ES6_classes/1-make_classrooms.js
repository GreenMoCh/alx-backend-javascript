import ClassRoom from "./0-classroom";

function initializeRooms() {
    const roomSizes = [19, 20, 34];
    const classrooms = roomSizes.map((size) => new ClassRoom(size));

    return classrooms;
}

export default initializeRooms;
