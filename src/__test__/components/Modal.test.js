import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Modal from '../../components/Modal';
import { expect, jest } from '@jest/globals';
import ReactDOM from 'react-dom';

describe('<Modal />', () => {
  let component;

  // add a div with #modal-root id to the global body
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);
  test('Component Modal render', () => {
    component = mount(<Modal isOpen />);
    expect(component.length).toEqual(1);
  });

  test('It not received the mission details props', () => {
    component = mount(<Modal isOpen />);
    expect(component.find('h1').text()).toBe('Are you sure about this purchase?');
  });

  test('Should trigger onClose when clicked', () => {
    const onClose = jest.fn();
    component = mount(<Modal isOpen onClose={onClose} />);

    component.find('.Modal--close-button').simulate('click');
    expect(onClose.mock.calls).toHaveLength(1)
  })

  afterEach(() => {
    component.unmount();
  });
});

describe('Modal Snapshot', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  });
  test('Check UI of component Modal', () => {
    const modal = create(<Modal isOpen />);
    expect(modal.toJSON()).toMatchSnapshot();
  });
});