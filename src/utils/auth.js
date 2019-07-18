import Cookies from 'js-cookie'

const SessionKey = 'session_key'

export function getSession() {
  return Cookies.get(SessionKey)
}

export function setSession(session) {
  return Cookies.set(SessionKey, session)
}

export function removeSession() {
  return Cookies.remove(SessionKey)
}
