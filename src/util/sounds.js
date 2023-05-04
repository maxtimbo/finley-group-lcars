import howler from 'howler'

export const sounds = {}

export function initSounds() {
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
