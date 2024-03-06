export default function guardrial(matFunction) {
    const queue = [];

    try {
        const result = matFunction();
        queue.push(result);
    } catch (error) {
        queue.push(error.message);
    } finally {
        queue.push('Guardrial was processed');
    }

    return queue;
}
