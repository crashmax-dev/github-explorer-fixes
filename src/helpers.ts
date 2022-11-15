import { GH_CSX_PATCHED } from './constants.js'

export function isPatched(el: Element): boolean {
  const isPatched = el.classList.contains(GH_CSX_PATCHED)

  if (!isPatched) {
    el.classList.add(GH_CSX_PATCHED)
  }

  return isPatched
}
