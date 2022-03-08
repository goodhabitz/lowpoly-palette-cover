import LowpolyCover from '.'

const imageFixtureA = 'https://reqres.in/img/faces/6-image.jpg'
const imageFixtureB = 'https://reqres.in/img/faces/5-image.jpg'

const optsFixtureA = {
  width: 500,
  height: 500
}

describe('LowpolyCover', () => {
  it('should return a new instance when the from method is called', () => {
    expect(LowpolyCover.from(imageFixtureA)).not.toBeFalsy()
    expect(LowpolyCover.from(imageFixtureB, {})).not.toBeFalsy()
    expect(LowpolyCover.from(imageFixtureA)).not.toEqual(
      LowpolyCover.from(imageFixtureB)
    )
  })

  it('should return a palette with the getPalette method', async () => {
    const palette = await LowpolyCover.from(imageFixtureA).getPalette()
    expect(palette).not.toBeFalsy()
    expect(Object.keys(palette)).toEqual(
      expect.arrayContaining([
        'Vibrant',
        'Muted',
        'DarkVibrant',
        'DarkMuted',
        'LightVibrant',
        'LightMuted'
      ])
    )
  })

  it('should be able to call the getPalette method multiple times', async () => {
    const builder = await LowpolyCover.from(imageFixtureA)
    const promiseA = builder.getPalette()
    const promiseB = builder.getPalette()

    Promise.allSettled([promiseA, promiseB]).then(([resultA, resultB]) => {
      expect(resultA).toEqual(resultB)
    })
  })

  it('should return a PNG data URI with the getPNG method', async () => {
    const dataURI = await LowpolyCover.from(
      imageFixtureA,
      optsFixtureA
    ).getPNG()
    expect(dataURI).not.toBeFalsy()
  })

  it('should return a SVG element with the getSVG method', async () => {
    const svg = await LowpolyCover.from(imageFixtureA, optsFixtureA).getSVG()
    expect(svg).not.toBeFalsy()
  })
})
