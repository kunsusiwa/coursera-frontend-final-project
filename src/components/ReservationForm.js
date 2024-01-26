import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box } from '@chakra-ui/react';
import '../styles/ReservationForm.css';

const reservationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    date: Yup.date().required('Reservation date is required'),
    time: Yup.string().required('Reservation time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'Minimum 1 guest'),
});

const ReservationForm = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form data:', values);
        resetForm();
    };

    return (
        <div className='form-background'>
            <Box className='reservation-form'>
                <Formik initialValues={initialValues} validationSchema={reservationSchema} onSubmit={handleSubmit}>
                    {({ isValid, dirty }) => (
                        <Form className='form-all'>
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <Field type="text" id="name" name="name" data-testid="name" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="email">Email Address</label>
                                <Field type="email" id="email" name="email" data-testid="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <Field type="tel" id="phone" name="phone" data-testid="phone" />
                                <ErrorMessage name="phone" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="date">Reservation Date</label>
                                <Field type="date" id="date" name="date" data-testid="date" />
                                <ErrorMessage name="date" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="time">Reservation Time</label>
                                <Field type="time" id="time" name="time" data-testid="time" />
                                <ErrorMessage name="time" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="guests">Number of Guests</label>
                                <Field type="number" id="guests" name="guests" min="1" data-testid="guests" />
                                <ErrorMessage name="guests" component="div" className="error" />
                            </div>

                            <button type="submit" disabled={!isValid || !dirty} data-testid="submit">Submit Reservation</button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </div>
    );
};

export default ReservationForm;
