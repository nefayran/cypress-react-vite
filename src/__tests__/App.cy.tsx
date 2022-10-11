import App from '../App'
import { mount } from '@cypress/react18'

describe('<App>', () => {
  it('mounts', () => {
    mount(<App />)
  })
})