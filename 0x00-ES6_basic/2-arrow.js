export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhods = ['SOMA', 'Union Square'];

    this.addNeighborhood = (NewNeighborhood) => {
        this.sanFranciscoNeighborhods.push(NewNeighborhood);
        return this.sanFranciscoNeighborhods;
    };
}