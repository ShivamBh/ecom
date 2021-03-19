const linkResolver = doc => {
  if (doc.type === 'products') {
    return `/product/${doc.uid}`
  }

  if (doc.type === 'page') {
    return `${doc.uid}`
  }

  return '/'
}

module.exports = linkResolver
