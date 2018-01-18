import React from 'react';
import { action, extendObservable, autorun, toJS } from 'mobx';
import { observer } from 'mobx-react';
import DatePicker from './datepicker.js';

const BuForm = observer(class _BuForm extends React.Component {

    constructor(props) {
        super(props);

        extendObservable(this, {
            data: this.props.data
        });
        this.setPropValue = action((prop, value) => {
            this.data[prop] = value;
        });
    }

    componentDidMount() {
        this.dpInstances = [];

        const flattened = this.props.fields.reduce((prev, curr) => prev.concat(curr), []);
        const datepickers = flattened.filter(elem => elem.type === 'datepicker');

        datepickers.forEach((elem) => {
            const domNode = document.getElementsByName(elem.name)[0];
            const dp = new DatePicker(domNode, {
                onSelect: val => this.setPropValue(elem.name, val),
                dataFormat: 'yyyy/mm/dd',
            });
            this.dpInstances.push(dp);
        });

        if (this.props.debug) {
            autorun(() => {
                console.log('[Mobx] data store', toJS(this.data)); // eslint-disable-line no-console
            });
        }
    }

    componentWillUnmount() {
        if (this.dpInstances.length > 0) {
            this.dpInstances.forEach(dp => dp && dp.destroy());
        }
    }

    BmText(element) {
        const { name, label, css, placeholder } = element;
        return [
            <div key="1" className="field-label">
                <label className="label">{label}</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <input name={name} className={`input ${css}`} type="text" placeholder={placeholder}
                            value={this.data[name]} onChange={ev => this.setPropValue(name, ev.target.value)} />
                    </div>
                </div>
            </div>
        ];
    }

    BmCheck(element) {
        const { name, label, css, options } = element;
        return [
            <div key="1" className="field-label">
                <label className="label">{label}</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        {
                            options.map((option, key) => (
                                <label key={key} className="checkbox">
                                    <input name={name} className={css} type="checkbox"
                                        value={this.data[option.name]}
                                        checked={this.data[option.name]}
                                        onChange={ev => this.setPropValue(option.name, ev.target.checked)} />
                                    {option.label}
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
        ];
    }

    BmSelect(element) {
        const { name, label, css, options } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{label}</label>
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

    BmRadio(element) {
        const { name, label, css, options } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{label}</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        {
                            options.map((option, key) => (
                                <label key={key} className="radio">
                                    <input name={name} className={css} type="radio"
                                        value={option.value}
                                        checked={this.data[name] === option.value}
                                        onChange={() => this.setPropValue(name, option.value)} />
                                    {option.label}
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
        ];
    }

    BmDatePicker(element) {
        const { name, label, css } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{label}</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <input name={name} className={`input ${css}`} type="text" />
                    </div>
                </div>
            </div>
        ];
    }

    BmTextarea(element) {
        const { name, label, css, placeholder } = element;

        return [
            <div key="1" className="field-label">
                <label className="label">{label}</label>
            </div>,
            <div key="2" className="field-body">
                <div className="field">
                    <div className="control">
                        <textarea name={name} className={`textarea ${css}`} type="text" placeholder={placeholder}
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
                return this.BmText(element);
            case 'checkbox':
                return this.BmCheck(element);
            case 'select':
                return this.BmSelect(element);
            case 'radio':
                return this.BmRadio(element);
            case 'datepicker':
                return this.BmDatePicker(element);
            case 'textarea':
                return this.BmTextarea(element);
            default:
                break;
            }
            throw new Error('Unrecognized element type!');
        };

        const alignment = this.props.alignment === 'horizontal' ? 'is-horizontal' : null;
        return (
            <div className={`field ${alignment}`}>
                {elemWrapper(elem)}
            </div>
        );
    }

    genRow(row) {
        return row.map((elem, key) => (
            <div key={key} className="column">
                {this.genElem(elem)}
            </div>
        ));
    }

    genForm(fields) {
        return fields.map((row, key) => (
            <div key={key} className="columns">
                {this.genRow(row)}
            </div>
        ));
    }

    render() {
        const { name, fields } = this.props;
        return (
            <form name={name} onSubmit={this.props.onSubmit}>
                {this.genForm(fields)}
            </form>
        );
    }
});

export default BuForm;
