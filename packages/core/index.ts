import {makeInstaller} from '@py-element/utils'
import components from './components'

const installer = makeInstaller(components)

export * from '@py-element/components'
export default installer