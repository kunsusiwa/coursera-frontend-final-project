// ReservationForm.test.js

import React from 'react';
import { render, fireEvent, screen, getByLabelText, getByText } from "@testing-library/react";
import ReservationForm from './ReservationForm';

test("Check form fields", () => {
    render(<ReservationForm />);

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('phone')).toBeInTheDocument();
    expect(screen.getByTestId('date')).toBeInTheDocument();
    expect(screen.getByTestId('time')).toBeInTheDocument();
    expect(screen.getByTestId('guests')).toBeInTheDocument();
});

test("Send invalid form", () => {
    render(<ReservationForm />);

    fireEvent.change(screen.getByTestId('name'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByTestId('phone'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('time'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('guests'), { target: { value: '0' } });

    expect(screen.getByTestId('submit')).toBeDisabled();
});

test("Send a valid form", () => {
    // Mock the handleSubmit function
    const mockSubmit = jest.fn();

    render(<ReservationForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByTestId('name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('phone'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2024-01-27' } });
    fireEvent.change(screen.getByTestId('time'), { target: { value: '12:00' } });
    fireEvent.change(screen.getByTestId('guests'), { target: { value: '4' } });

    fireEvent.click(screen.getByTestId('submit'));

    // Check if handleSubmit function is called
    expect(mockSubmit).toHaveBeenCalled();
});