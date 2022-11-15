import { waitElement } from '@zero-dependency/dom'
import { directories } from './directories.js'

export async function applyPatches() {
  const loadedRepos = await waitElement('react-app[app-name="repos"].loaded')
  directories(loadedRepos)
}
