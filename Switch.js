//Home assignment:
function runTests(testType){

    switch(testType){
        case "smoke":
            console.log("Currently smoke test are executed");
            break;
        case "sanity":
            console.log("Currentlt sanity test are executed");
            break;
        case "regression":
            console.log("Currently regression test are executed");
            break;
        default:
            console.log("None of the browser is launched");
    }

}

runTests("regression");




// pratice on switch statement:

let channel="VIJAYTV"

switch(channel){
    case "sun":
        console.log("you have turned on Sun TV ");
        break;

    case "vijaytv":
        console.log("you have launched vijaytv");
        break;

    case "zeetamizh":
        console.log(" you hva elaunched Zee Tamizh ");
        break;

    case "blessingTV":
        console.log("you have launched Blessing TV");
        break;   

    default:
    console.log(" Please turn on your TV ")
}