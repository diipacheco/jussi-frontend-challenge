import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { api } from '../../services/api';
import { ProductsContextProvider, useProducts } from '../Products';

const apiMock = new MockAdapter(api);

describe('Products Hook', () => {
  it('should be able to fetch products', async () => {
    const apiResponse = [
      {
        id: 1,
        name: 'Produto 1',
        imageText: 'P1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.',
        features: ['.Feature 1', '.Feature 2', '.Feature 3'],
      },
      {
        id: 2,
        name: 'Produto 2',
        imageText: 'P2',
        description:
          'Vivamus non diam eu metus eleifend consequat. Vestibulum a tellus lacus.',
        features: ['.Feature 1', '.Feature 2', '.Feature 3'],
      },
    ];

    apiMock.onGet('/products').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsContextProvider,
    });

    result.current.handleFetchProducts();

    await waitForNextUpdate();

    expect(result.current.products).toEqual(apiResponse);
  });

  it('should be able to search products', async () => {
    const apiResponse = [
      {
        id: 1,
        name: 'Produto 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.',
        features: ['.Feature 1', '.Feature 2', '.Feature 3'],
      },
    ];

    apiMock.onGet('/products?name=Produto 1').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsContextProvider,
    });

    result.current.handleSearchProducts('Produto 1');

    result.current.handleFetchProducts();

    await waitForNextUpdate();

    expect(result.current.searchedProducts).toEqual(apiResponse);
  });
});
