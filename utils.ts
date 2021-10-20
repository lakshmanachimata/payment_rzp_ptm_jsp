
enum Logger {
    VERBOSE_LEVEL = 1,
    INFO_LEVEL = 2,
    DEBUG_LEVEL = 3,
    WARNING_LEVEL = 4,
    ERROR_LEVEL = 5,

}

function consoleLog(data : any, level = 1){
    switch(level){
        case Logger.VERBOSE_LEVEL:
            console.log("Payment Verbose " + JSON.stringify(data))
             break;
        case Logger.INFO_LEVEL:
            console.log("Payment Info " + JSON.stringify(data))
        break;
        case Logger.DEBUG_LEVEL:
            console.log("Payment Debug " + JSON.stringify(data))
        break;
        case Logger.WARNING_LEVEL:
            console.log("Payment Warning " + JSON.stringify(data))
        break;
        case Logger.ERROR_LEVEL:
            console.log("Payment Error " + JSON.stringify(data))
        break;
    }
}
export { consoleLog };
