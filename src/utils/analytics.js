export function trackGaEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, parameters)
}

export function trackWhatsAppClick(location) {
  trackGaEvent('click_whatsapp', { location })
}
