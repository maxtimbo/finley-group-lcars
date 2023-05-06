import howler from 'howler'

export const sounds = {}

const computerBeeps = []

const excludeList = [43, 56, 53, 15, 40, 63, 61, 57, 65, 59, 67]

function checkExclude() {
  const exc = Math.floor(Math.random() * computerBeeps.length) + 1
  if (excludeList.includes(exc + 1)) {
    return checkExclude()
  } else if (exc + 1 > 77) {
    return checkExclude()
  } else {
    return exc
  }
}

export function randomComputerBeep() {
  const soundFile = computerBeeps[checkExclude()]
  sounds[soundFile].play()
}

export function initSounds() {
  for (let i = 1; i < 78; i++) {
    const computerBeep = 'computerbeep_' + i
    computerBeeps.push(computerBeep)
    sounds[computerBeep] = new howler.Howl({
      src: ['/sounds/' + computerBeep + '.mp3'],
      volume: 1
    })
  }
  sounds.denyBeep1 = new howler.Howl({
    src: ['/sounds/denybeep1.mp3'],
    volume: 0.2
  })
  sounds.fullscreenUp = new howler.Howl({
    src: ['/sounds/computerbeep_70.mp3'],
    volume: 1
  })
  sounds.fullscreenDown = new howler.Howl({
    src: ['/sounds/computerbeep_69.mp3'],
    volume: 1
  })
  sounds.beep34 = new howler.Howl({
    src: ['/sounds/computerbeep_34.mp3'],
    volume: 0.2
  })
  sounds.beep10 = new howler.Howl({
    src: ['/sounds/computerbeep_10.mp3'],
    volume: 0.2
  })
  sounds.hail1 = new howler.Howl({
    src: ['/sounds/hailingfrequencies_open2.mp3'],
    volume: .5
  })
  sounds.viewOff = new howler.Howl({
    src: ['/sounds/tng_viewscreen_off.mp3'],
    volume: .5
  })
}
