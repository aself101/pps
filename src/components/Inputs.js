import React from 'react';

export function Select(props) {
  const { _class, id, options, label } = props;

  return (
    <div className="input-field col s12">
      <select id={id}>
        <option defaultValue="" disabled></option>
        {
          options.map((opt) => (
            <option key={opt.val} value={opt.val}>{opt.val}</option>
          ))
        }
      </select>
      <label>{label}</label>
    </div>
  );
}

export function SelectMultiple(props) {
  const { _class, id, options, label } = props;

  return (
    <div className="input-field col s12">
      <select multiple id={id}>
        <option defaultValue="" disabled></option>
        {
          options.map((opt) => (
            <option key={opt.val} value={opt.val}>{opt.val}</option>
          ))
        }
      </select>
      <label>{label}</label>
    </div>
  );
}

export function Input(props) {
  const { type, id, label } = props;

  return (
    <div className="input-field col s12">
      <input id={id} type={type} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}


































/* END */
