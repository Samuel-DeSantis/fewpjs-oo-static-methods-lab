class Formatter {
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static isException (word) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return Boolean(exceptions.find (exception => word === exception))
  }

  static titleize (string) {
    return string.split(' ').map( (word, index) => {
      if (index === 0) {return this.capitalize(word)} 
      else if (this.isException(word)) {return word}
      else {return this.capitalize(word)}
    }).join(' ')
  }
}