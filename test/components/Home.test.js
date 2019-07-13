import React from 'react';
import Home from '../../src/components/Home';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

test('Rendering Home component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find('h1')).toHaveLength(1);
  expect(wrapper.find('h2')).toHaveLength(1);
  expect(wrapper.find('Link')).toHaveLength(1);

  expect(wrapper.find('h1').text()).toEqual("¡Bienvenid@s a mi website!")
  expect(wrapper.find('h2').text()).toEqual("¡Pásele con confianza!")

  expect(wrapper.find(Link)).toHaveLength(1);
  expect(wrapper.find('Link').find('img')).toHaveLength(1);
  expect(wrapper.find('Link img')).toHaveLength(1);

  expect(wrapper.find('Link img').prop("alt")).toEqual("arrow");
  expect(wrapper.find('Link img').get(0).props).toHaveProperty("alt","arrow");
});