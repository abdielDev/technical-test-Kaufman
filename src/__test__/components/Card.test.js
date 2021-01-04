import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import mockProduct from '../../__mocks__/productMock';
import Card from '../../components/Card';

describe('<Card />', () => {
  const card = shallow(<Card title={mockProduct.title} price={mockProduct.price} image={mockProduct.thumbnail} />);
  test('Component Card render', () => {
    expect(card.length).toEqual(1);
  });

  test('It received the props', () => {
    expect(card.find('h2').text()).toBe("");
  });
});

describe('Card Snapshot', () => {
  test('Check UI of component Card', () => {
    const card = create(<Card title={mockProduct.title} price={mockProduct.price} image={mockProduct.thumbnail} />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});