let tela = document.getElementById('tela')
let context = tela.getContext('2d')
let img = new Image()

function drawimg() {
    context.beginPath()
    context.drawImage(this, 20, 20, 250, 250)
}

img.src = 'https://fsa.zobj.net/crop.php?r=u6nUEjVD7a65PcW1Wf4YvHlH3r5e8aJKgCBZfnasdnLz6EnWdWBq1Cvm4JCigBRLrWgvsFAHv5BctdOCTDfUQ9SB-0BlulqjE1g7sdrI1tdcOgyVOzEUMptzk75VUn6W2ue6PciF3H5NDY8p'

img.onload = drawimg