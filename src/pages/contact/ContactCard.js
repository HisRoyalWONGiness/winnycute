import React from 'react'
import { StyleContact } from './Style'
import {Formik, useField, Form} from 'formik';
import * as Yup from 'yup';

const CustomInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <>
            <label htmlFor = {props.id || props.name}>{label}</label>
            <input className = 'text_input' {...field} {...props}></input>
            {meta.touched && meta.error ?(
                <div className = {props.error}>
                    {meta.error}
                </div>
            ) : null}
        </>
    )
}


const MessageInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <>
            <label htmlFor = {props.id || props.name}>{label}</label>
            <textarea className = 'message_input' {...field} {...props}></textarea>
            {meta.touched && meta.error ?(
                <div className = {props.error}>
                    {meta.error}
                </div>
            ) : null}
        </>
    )
}

function ContactCard (){
    return(
        <div>
            <StyleContact>
                <Formik 
                initialValues={{
                     name: '',
                     email: '',
                     phone: '',
                     message: '',   
                    }}

                validationSchema = {Yup.object({
                    name: Yup.string()
                        .min(3, 'Name must be at least 3 Characters')
                        .max(25, 'Name must not Exceed 25 Characters')
                        .required('Name is Required'),
                    email: Yup.string()
                        .email('Invalid Email Address')
                        .required('We need to get back to You, Email is Required'),
                    phone: Yup.string()
                        .min(5, 'This number looks Invalid')
                        .max(20, 'This number looks Invalid'),
                    message: Yup.string()
                        .min(5, 'Pass a real message, length too short')
                        .required('You need to Leave a message'),
                })}

                onSubmit = {(values, {setSubmitting, resetForm}) =>{
                    setTimeout(() =>{
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 3000)
                }}
                >
                   {props =>(
                       <Form>
                           <CustomInput label = 'Name' name = 'name' type = 'text' placeholder = 'Justice' error = 'error_name' />
                           <div className = 'space'></div>
                           <CustomInput label = 'Your E-mail Address' name = 'email' type = 'text' placeholder = 'username@example.com' error = 'error_email' />
                           <div className = 'space'></div>
                           <CustomInput label = 'Your Phone Number' name = 'phone' type = 'number' placeholder = '+2348012345678' error = 'error_phone' />
                           <div className = 'space'></div>
                           <MessageInput label = 'Message' name = 'message' type = 'text' error = 'error_message' />
                           <div className = 'space'></div>
                            <button type = 'submit'>{props.isSubmitting ? 'Submitting...' : 'Submit'}</button>
                       </Form>
                   )}
                </Formik>
            </StyleContact>
        </div>
    )
}

export default ContactCard