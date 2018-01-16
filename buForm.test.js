import React from 'react';
import BuForm from './build/buForm';
import renderer from 'react-test-renderer';

// form metadata
const metadata = [
    [{
        name: 'a1',
        type: 'text',
        label: 'a1 label',
        css: 'a1-css',
        placeholder: 'a1 placeholder'
    }, {
        name: 'a2',
        type: 'text',
        label: 'a2 label',
        css: 'a2-css',
        placeholder: 'a2 placeholder'
    }],
    [{
        name: 'b1',
        type: 'checkbox',
        label: 'b1 label',
        text: 'checkbox for ...',
        css: 'b1-css'
    }, {
        name: 'b2',
        type: 'select',
        label: 'b2 label',
        options: [{ label: 'aaa', value: 'aaa' }, { label: 'bbb', value: 'bbb' }, { label: 'ccc', value: 'ccc' }]
    }],
/*
    [{
        name: 'c1',
        type: 'datepicker',
        label: 'c1 label',
        css: 'c1-css'
    }],
*/
    [{
        name: 'd1',
        type: 'textarea',
        label: 'd1 label',
        css: 'd1-css',
        placeholder: 'd1 placeholder'
    }],
    [{
        name: 'e1',
        type: 'radio',
        label: 'e1 label',
        css: 'e1-css',
        options: [{ label: 'e1-1', name: 'e1-1' }, { label: 'e1-2', name: 'e1-2' }, { label: 'e1-3', name: 'e1-3' }]
    }, {
        name: 'e2',
        type: 'radio',
        label: 'e2 label',
        css: 'e2-css',
        options: [{ label: 'e2-1', name: 'e2-1' }, { label: 'e2-2', name: 'e2-2' }, { label: 'e2-3', name: 'e2-3' }]
    }],
];
// form data from server
const data = {
    a1: 'hell world1',
    a2: 'hell world2',
    b1: true,
    b2: 'bbb',
    c1: '',
    d1: 'hell world3',
    'e1-1': true,
    'e2-2': true
};

it('renders correctly', () => {
    const tree = renderer
      .create(<BuForm name={'testForm'} metadata={metadata} data={data} alignment={'horizontal'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
