/* global describe beforeEach it */
import {expect} from 'chai'
import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'


function ThingsList (props) {
  return (
    <div>
      {
        props.things.map(aThing => <ThingItem thing={aThing}/>)
      }
    </div>
  )
}

function ThingItem (props) {
  return <div>Im a thing</div>
}

describe('<ThingsList>', () => {
  it('passe things from a list as a prop', () => {
    const thing1 = {};
    const thing2 = {};
    const thing3 = {};
    const things = [thing1, thing2, thing3]
    const wrapper = shallow(<ThingsList things={things}/>)

    const children = wrapper.children()
    const child1 = children.at(0)
    const child2 = children.at(1)
    const child3 = children.at(2)

    expect(child1.props()).to.be.deep.equal({
      thing: thing1
    })

    expect(child2.props()).to.be.deep.equal({
      thing: thing2
    })

    expect(child3.props()).to.be.deep.equal({
      thing: thing3
    })
  })

  it('renders a list of things', () => {
    const thing1 = {};
    const thing2 = {};
    const thing3 = {};
    const things = [thing1, thing2, thing3]
    const wrapper = shallow(<ThingsList things={things}/>)

    const children = wrapper.children()
    const child1 = children.at(0)
    const child2 = children.at(1)
    const child3 = children.at(2)

    expect(child1.type()).to.be.equal(ThingItem)
    expect(child2.type()).to.be.equal(ThingItem)
    expect(child3.type()).to.be.equal(ThingItem)


    expect(children.length).to.be.equal(3)
  })
})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(<UserHome email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
