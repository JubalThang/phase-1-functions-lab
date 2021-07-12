// Code your solution in this file!
function distanceFromHqInBlocks(picklocationInB) {
    return picklocationInB < 42 ? 42 - picklocationInB : picklocationInB - 42
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(distance) {
    return
}

function distanceTravelledInFeet(stBl, enBl) {
    const distanceInBlocks =  stBl < enBl ? enBl - stBl : stBl - enBl
    return distanceInBlocks * 264
}

function calculatesFarePrice(stBl, enBl) {
    const distance = distanceTravelledInFeet(stBl,enBl)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance <= 2500){
        return 25 
    } else {
        return 'cannot travel that far'
    }
}