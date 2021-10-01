const hq = 42
const feet = 264

function distanceFromHqInBlocks(endBlock){
    if (endBlock > hq){
        return endBlock - hq;
    } else if (endBlock < hq){
        return (hq - endBlock)
    }
}
function distanceFromHqInFeet(endBlock){
    return distanceFromHqInBlocks(endBlock) * feet;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * feet
    } else if (start < destination){
        return (destination - start) * feet
    }
}

function calculatesFarePrice(start, destination){
    const distanceFromHqInFeet = distanceTravelledInFeet(start, destination);
    if (distanceFromHqInFeet <= 400){
        return 0;
    } else if (distanceFromHqInFeet > 400 && distanceFromHqInFeet <= 2000){
        return 0.02 * (distanceFromHqInFeet - 400);
    } else if (distanceFromHqInFeet > 2000 && distanceFromHqInFeet <2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}