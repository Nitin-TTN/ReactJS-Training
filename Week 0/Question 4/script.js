function trackFunctionStats(func) {
    let invocations = 0;
    let instances = 0;

    function trackedFunction(...args) {
        invocations++;
        return func(...args);
    }

    return {
        getInvocations: () => invocations,
        getInstances: () => ++instances,
        trackedFunction
    };
}

function printMessage() {
    return 'Hello World';
}
const trackedFunctionStats = trackFunctionStats(printMessage);

const trackedFunction = trackedFunctionStats.trackedFunction;

trackedFunction();

console.log(trackedFunctionStats.getInvocations());

console.log(trackedFunctionStats.getInstances());
