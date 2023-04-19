import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { UserForm } from './UserForm.tsx';

test('should show two inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getAllByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});
