import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchInput } from '../components';

test('SearchInput', () => {
    const dataTable = render(<SearchInput searchText={""} setSearchText={jest.fn()} />);
    expect(dataTable).toBeDefined();
});

