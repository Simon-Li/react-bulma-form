import React from 'react';
import BuForm from '../../build/buForm';
import renderer from 'react-test-renderer';

// form metadata
const metadata = [
    // 1st row with two text inputs
    [{
        name: 'input1',
        type: 'text',
        label: 'label',
        placeholder: 'placeholder...'
    }, {
        name: 'input2',
        type: 'text',
        label: 'label',
        placeholder: 'placeholder'
    }],
    // 2nd row with checkbox and select
    [{
        name: 'checkbox1',
        type: 'checkbox',
        label: 'label',
        text: 'check for..',
    }, {
        name: 'select1',
        type: 'select',
        label: 'label',
        options: [{ label: 'sel1', value: 'sel1' }, { label: 'sel2', value: 'sel2' }]
    }],
    // 3rd row with datepicker
    /*
    [{
        name: 'datepicker1',
        type: 'datepicker',
        label: 'label',
    }],
    */
    // 4th row with textarea
    [{
        name: 'textarea1',
        type: 'textarea',
        label: 'label',
        placeholder: 'placeholder..'
    }],
    // 5th row with two radios
    [{
        name: 'radio1',
        type: 'radio',
        label: 'label',
        options: [{ label: 'radio-1', name: 'radio1' }, { label: 'radio-2', name: 'radio2' }]
    }, {
        name: 'radio2',
        type: 'radio',
        label: 'label',
        options: [{ label: 'radio-3', name: 'radio3' }, { label: 'radio-4', name: 'radio4' }]
    }],
];

// form elements data (supposedly from server)
const data = {
    input1: 'input1 text',
    input2: 'input2 text',
    checkbox1: true,
    select1: 'sel2',
    datepicker1: '',
    textarea1: 'textarea1 text',
    radio1: true,
    radio3: true
};

it('renders correctly', () => {
    const tree = renderer
      .create(<BuForm name={'testForm'} metadata={metadata} data={data} alignment={'horizontal'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});