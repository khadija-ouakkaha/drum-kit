const btns = document.querySelectorAll('.btn')
const Audio = document.querySelectorAll('audio')

window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-audio ="${e.keyCode}"]`)
  if (!audio) return
  audio.play()

  const btn = document.querySelector(`button[data-button="${e.keyCode}"]`)
  btn.classList.add('popup')
})

function removePopup(e) {
  if (e.propretyName !== 'transform') {
    this.classList.remove('popup')
  } else {
    console.log('wrong')
  }
}

function clickPopup(e) {
  if (
    e.target !== `data-button="window.keyCode"` &&
    Audio.outerHtml !== `data-audio= "window.keyCode"`
  ) {
    this.classList.add('popup')
    let num = e.target.getAttribute('data-button')
    document.querySelector(`audio[data-audio ="${num}"]`).play()
  } else {
    console.log(audio)
  }
  console.log(Audio)
}

btns.forEach((btn) => {
  btn.addEventListener('transitionend', removePopup)
  btn.addEventListener('click', clickPopup)
})
