import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('With React Testing Library', () => {
    const initialState = {
      // Initialize cities slice
      cities: {
        selectedCities: [
            { id: 'c1', name: 'Budapest' },
        ],
        currentCity: '',
    }
    };
    const mockStore = configureStore();
    let store;

    it('renders Budapest as default city', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const linkElement = getByText(/Budapest/i);
        expect(linkElement).toBeInTheDocument();    
      });
});

// test('renders Budapest as default city', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Budapest/i);
//   expect(linkElement).toBeInTheDocument();
// });
