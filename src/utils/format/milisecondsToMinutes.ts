export function formatMillisecondsToMinutes(ms:number){
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);

    if (seconds == 60){
        seconds = 0;
        minutes += 1
    }
    return {
        minutes,seconds
    }
}