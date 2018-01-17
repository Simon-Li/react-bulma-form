import React from 'react';
import BuForm from '../../build/buForm';
import renderer from 'react-test-renderer';

// form fields
const fields = [
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
        name: 'checkbox',
        type: 'checkbox',
        label: 'label',
        options: [{ label: 'check-1', name: 'checkbox1' }, { label: 'check-2', name: 'checkbox2' }]
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
        label: 'radio1',
        options: [{ label: 'radio-11', value: 'radio11' }, { label: 'radio-12', value: 'radio12' }]
    }, {
        name: 'radio2',
        type: 'radio',
        label: 'radio2',
        options: [{ label: 'radio-21', value: 'radio21' }, { label: 'radio-22', value: 'radio22' }]
    }],
];

// form elements data (supposedly from server)
const data = {
    input1: 'input1 text',
    input2: 'input2 text',
    checkbox1: true,
    checkbox2: true,
    select1: 'sel2',
    datepicker1: '',
    textarea1: 'textarea1 text',
    radio1: 'radio11',
    radio2: 'radio21'
};

it('renders correctly', () => {
    const tree = renderer
      .create(<BuForm name={'testForm'} fields={fields} data={data} alignment={'horizontal'} onSubmit={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
