import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';


test('next and previous buttons working', () => {
    const { getByText } = render(<StarWarsCharacters />);

    const nextButton = getByText(/next/i)
    fireEvent.click(nextButton);

    const previousButton = getByText(/previous/i)
    fireEvent.click(previousButton);
})

