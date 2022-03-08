import NodeVibrant from 'node-vibrant'
import trianglify from '@victorioberra/trianglify-browser'

class LowpolyCover {
  constructor (path, opts) {
    this.path = path
    this.opts = { ...opts }
    this._nvPromise = NodeVibrant.from(this.path, this.opts).getPalette()
    this._nvPromise.then(palette => {
      this._nvPalette = palette
    })
  }

  getPalette () {
    return this._nvPalette ? Promise.resolve(this._nvPalette) : this._nvPromise
  }

  async _getTrianglify () {
    if (!this._trianglify) {
      this._trianglify = trianglify({
        width: this.opts.width,
        height: this.opts.height,
        xColors: Object.values(await this.getPalette()).map(({ hex }) => hex)
      })
    }
    return this._trianglify
  }

  async getPNG () {
    return (await this._getTrianglify()).toCanvas().toDataURL()
  }

  async getSVG () {
    return (await this._getTrianglify()).toSVG()
  }
}

export default {
  from: (path, opts = {}) => {
    return new LowpolyCover(path, opts)
  }
}
