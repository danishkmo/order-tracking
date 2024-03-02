import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppHeader } from '../components';

test('AppHeader', () => {
    const comp = render(<AppHeader />);
    expect(comp).toBeDefined();
});

test('AppHeader - Verify the branch name', () => {
    render(<AppHeader />);
    const pageName = screen.getByText(/Home/i);
    expect(pageName).toBeInTheDocument();
});


