function distanceCalc(posLat, posLong, destLat, destLong) {
    let distance = (destLat - posLat)**2 + (destLong - posLong)**2
    return Math.sqrt(distance)
}

console.log(distanceCalc(13, 43, 13, 6))