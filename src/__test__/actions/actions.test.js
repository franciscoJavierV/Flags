/* eslint-disable no-undef */
import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('', () => {
    const payload = ProductMock;
    const expected = {
      type: '',
      payload,
    };
    //expect the actioname to be === to expected
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
