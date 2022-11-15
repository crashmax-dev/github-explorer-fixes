import { observeElement } from '@zero-dependency/dom'
import { isPatched } from './helpers.js'

export async function directories(target: Element) {
  observeElement(target, (mutation) => {
    for (const node of mutation.addedNodes) {
      const row = node as HTMLElement

      const primaryLink =
        row.querySelector<HTMLAnchorElement>('a.Link--primary')

      if (primaryLink) {
        if (isPatched(primaryLink)) return
        row.addEventListener('click', () => primaryLink.click(), { once: true })
      }
    }
  })
}
