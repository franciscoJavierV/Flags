import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ACTION-NAME', () => {
    const initialState = {
      cart: [], //NEW STATE
    };
    const payload = ProductMock; //MOCKNAME
    const action = {
      type: 'ACTION-NAME',
      payload,
    };
    //CAMBIO ESPERADO DE DEL INITIAL STATE
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
