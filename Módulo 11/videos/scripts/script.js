function decrease() {
    video.volume -= 0.1
}

function increase() {
    video.volume += 0.1
}

function play() {
    if (video.ended || video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function back() {
    video.currentTime -= 5
}

function foward() {
    video.currentTime += 5
}

let video = document.getElementsByTagName('video')[0]