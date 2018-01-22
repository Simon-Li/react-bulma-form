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
    [{
        name: 'datepicker1',
        type: 'datepicker',
        label: 'label',
    }],
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

export default fields;
