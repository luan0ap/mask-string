const maskChars = {
  '#': /[0-9]/,
  S: /[a-zA-Z]/,
  N: /[a-zA-Z0-9]/,
  '*': /./
}

let shift = 0
let matched = false

const formatMaskChar = (text, maskChar, index) => {
  if (!text[index + shift]) {
    return { text: '', matched: false }
  }

  if (maskChars[maskChar]) {
    if (text[index + shift].match(maskChars[maskChar])) {
      return { text: text[index + shift], matched: true }
    }

    shift += 1
    return formatMaskChar(text, maskChar, index)
  }

  shift -= 1
  return { text: maskChar, matched: false }
}

const filter = (item) => {
  matched = item.matched || matched
  return matched
}

module.exports = (text, mask) => {
  shift = 0
  matched = false

  return mask.split('')
    .map((maskChar, index) => formatMaskChar(text, maskChar, index))
    .filter(filter)
    .map(item => item.text)
    .join('')
}
