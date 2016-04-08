import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Html5Video from '../../../components/Html5Video';

function setup(source = 'test.mp4') {
  const size = { width: 432, height: 244 };
  const videoProps = {};
  const actions = {
    play: expect.createSpy(),
  };

  const component = shallow(
      <Html5Video preload="auto" src={source} actions={actions} { ...{ ...size, ...videoProps } } />
  );

  return {
    component,
  };
}

describe('Html5Video component', () => {
  it('should render correctly', () => {
    const { component } = setup('test.mp4');
    expect(component.prop('src')).toEqual('test.mp4');
  });
});
