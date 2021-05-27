function changtext(e) {
    e.innerHTML = 'novo titulo'
    this.changcol = () => {
        e.style.color = 'red'
    }
    setTimeout(changcol, 1000)
}