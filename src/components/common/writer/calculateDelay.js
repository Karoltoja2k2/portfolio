export default function CalculateDelay(min, max){
    let random = Math.random() * 100
    if (random < min){
        random = min
    }

    if (random > max){
        random = max
    }

    return random;
}