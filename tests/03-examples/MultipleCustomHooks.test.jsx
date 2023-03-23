const { render, screen, fireEvent } = require("@testing-library/react")
const { MultipleCustomHooks } = require("../../src/03-examples");
const { useCounter } = require("../../src/hooks/useCounter");
const { useFetch } = require("../../src/hooks/useFetch");

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });
    
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy;

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
    });

})