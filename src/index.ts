import { domReady } from '@zero-dependency/dom'
import { applyPatches } from './patches.js'

domReady().then(() => applyPatches())
