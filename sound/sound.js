const data = [10,11,12,15];
document.querySelector('button').addEventListener('click', () => {
    let delay = 300;
    data.forEach((dataPoint, i) => {
        // We are using setTimeout to delay playing
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();
            // play a tone based on data for the duration of a 12th note every second
            const timeBetweenNotesInSeconds = 0.2;
            synth.triggerAttackRelease(dataPoint * 100, "12n", now + (i * timeBetweenNotesInSeconds));
    });
});


