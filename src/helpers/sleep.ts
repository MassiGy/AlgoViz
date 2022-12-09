const sleep = (millis: number) =>
    new Promise((resolve) => setTimeout(resolve, millis));


export default sleep;