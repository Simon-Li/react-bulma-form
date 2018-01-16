const React = require('react');
const { action, extendObservable } = require('mobx');
const { observer } = require('mobx-react');
const DatePicker = require('./extensions/datepicker.js');
//import './extensions/bulma-calendar.css';

//import debug from 'debug';
//const log = debug('form-gen');

/**
 * ~~Usage~~
 *
 * import FormGen from '<path-of-formGen.js>';
 *
 * <FormGen name={name} metadata={metadata} data={data} alignment={'horizontal'} />
 *
 * this.props.metadata definition
 *
    // form data from server
    //
    metadata = [
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
            text: 'checkbox for ...'
            css: 'b1-css'
        }, {
            name: 'b2',
            type: 'select',
            label: 'b2 label',
            options: [{ label: 'aaa', value: 'aaa' }, { label: 'bbb', value: 'bbb' }, { label: 'ccc', value: 'ccc' }]
        }],
        [{
            name: 'c1',
            type: 'datepicker',
            label: 'c1 label',
            css: 'c1-css'
        }],
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
            options: ['e1-111', 'e1-222', 'e1-333']
        }, {
            name: 'e2',
            type: 'radio',
            label: 'e2 label',
            css: 'e2-css',
            options: ['e2-111', 'e2-222', 'e2-333']
        }],
    ];

    // form data from server
    //
    const data = {
        a1: 'hell world1',
        a2: 'hell world2',
        b1: true,
        b2: 'bbb',
        d1: 'hell world3'
    };
 */

/**
  * deep flatten nested array
  * @param {array} nestedArray Nested array
  * @returns {array} flattend array
  */
function deepFlattenArray(nestedArray) {

    return nestedArray.reduce((prev, curr) => prev.concat(curr), []);

    /* remove jQuery dependency so should work for 2-dimension array.
     *
    return $.map(nestedArray, function recurs(n) {
        return ($.isArray(n) ? $.map(n, recurs) : n);
    });
    */
}

const BuForm = observer(class _BuForm extends React.Component {

    constructor(props) {
        super(props);

        extendObservable(this, {
            data: this.props.data
        });
    }

    setPropValue(prop, value) {
        return action(() => {
            this.data[prop] = value;
        });
    }

    componentDidMount() {
        this.dpInstances = [];

        const flattened = deepFlattenArray(this.props.metadata);
        const datepickers = flattened.filter(elem => elem.type === 'datepicker');

        datepickers.forEach((elem) => {
            const domNode = document.getElementsByName(elem.name)[0];
            const dp = new DatePicker(domNode, {});
            this.dpInstances.push(dp);
        });
    }

    componentWillUnmount() {
        if (this.dpInstances.length > 0) {
            this.dpInstances.forEach(dp => dp && dp.destroy());
        }
    }

    validator() {
        // -TBD: validate metadata
    }

    BmText = ({ element }) => {
        const { name, label, css, placeholder } = element;
        return [
            <div key="1" className="field-label">
                <label className="label">{ label }</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <input name={name} className={`input ${css}`} type="text" placeholder={ placeholder }
                            value={this.data[name]} onChange={ev => this.setPropValue(name, ev.target.value)} />
                    </div>
                </div>
            </div>
        ];
    };

    BmCheck = ({ element }) => {
        const { name, label, css, text } = element;
        return [
            <div key="1" className="field-label">
                <label className="label">{ label }</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input name={name} className={css} type="checkbox"
                                value={this.data[name]} onChange={ev => this.setPropValue(name, ev.target.checked)} />
                            {text}
                        </label>
                    </div>
                </div>
            </div>
        ];
    }

    BmSelect = ({ element }) => {
        const { name, label, css, options } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{ label }</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select name={name} className={css} value={this.data[name]} onChange={ev => this.setPropValue(name, ev.target.value)}>{
                                options.map((option, key) => <option key={key} value={option.value}>{option.label}</option>)
                            }</select>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }

    BmRadio = ({ element }) => {
        const { name, label, css, options } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{ label }</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        {
                            options.map((option, key) => (
                                <label key={key} className="radio">
                                    <input name={name} className={css} type="radio"
                                        value={this.data[option.name]} onChange={ev => this.setPropValue(option.name, ev.target.checked)} />
                                    {option.label}
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
        ];
    }

    BmDatePicker = ({ element }) => {
        const { name, label, css } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{ label }</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <input name={name} className={`input ${css}`} type="text"
                            value={this.data[name]}
                            onSelect={ev => this.setPropValue(name, ev.target.value)} />
                    </div>
                </div>
            </div>
        ];
    }

    BmTextarea = ({ element }) => {
        const { name, label, css, placeholder } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{ label }</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <textarea name={name} className={`textarea ${css}`} type="text" placeholder={ placeholder }
                            value={this.data[name]} onChange={ev => this.setPropValue(name, ev.target.value)} />
                    </div>
                </div>
            </div>
        ];
    }

    genElem(elem) {
        /**
         * element wrapper
         * @param {object} element Element
         * @returns {object} element vdom
         */
        const elemWrapper = (element) => {
            switch (element.type) {
            case 'text':
                return this.BmText({ element });
            case 'checkbox':
                return this.BmCheck({ element });
            case 'select':
                return this.BmSelect({ element });
            case 'radio':
                return this.BmRadio({ element });
            case 'datepicker':
                return this.BmDatePicker({ element });
            case 'textarea':
                return this.BmTextarea({ element });
            default:
                break;
            }
            throw new Error('Unrecognized element type!');
        };

        const alignment = this.props.alignment === 'horizontal' ? 'is-horizontal' : null;
        return (
            <div className={`field ${alignment}`}>
                { elemWrapper(elem) }
            </div>
        );
    }

    genRow(row) {
        return row.map((elem, key) => (
            <div key={key} className="column">
                { this.genElem(elem) }
            </div>
        ));
    }

    genForm(metadata) {
        return metadata.map((row, key) => (
            <div key={key} className="columns">
                { this.genRow(row) }
            </div>
        ));
    }

    render() {
        const { name, metadata } = this.props;
        return (
            <form name={name}>
                { this.genForm(metadata) }
            </form>
        );
    }
});

export default BuForm;
