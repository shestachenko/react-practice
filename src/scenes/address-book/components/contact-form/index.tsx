import * as React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormTextField from '../../../../components/formElements/FormTextField';
import validate from './validate';

const ContactForm = (props: any) => {
  const {handleSubmit, pristine, reset, submitting} = props;

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className={'row around-xs'}>
          <Field className={'item'}
            name='name'
            label='Name'
            component={FormTextField}/>
        </div>
        <div className={'row around-xs'}>
          <Field className={'item'}
            name='phone_number'
            label='Phone Number'
            component={FormTextField}/>
        </div>
        <div className={'row around-xs'}>
          <Field className={'item'}
            name='email'
            label='Email'
            component={FormTextField}/>
        </div>
        <div className='row-actions'>
          <button type='submit' disabled={pristine || submitting}>Submit</button>
          <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
    form: 'ContactForm',
    validate,
})(ContactForm);
