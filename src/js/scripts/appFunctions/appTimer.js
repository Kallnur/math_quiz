export const appGameTimer = (func, interval) => {

    const timer = setInterval(func, interval);

    return timer;
}