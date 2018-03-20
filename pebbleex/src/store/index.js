import { createStore, compose } from 'redux'

export default function(reducer) {
  return createStore(reducer)
}