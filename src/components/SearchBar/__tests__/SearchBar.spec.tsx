import { render, fireEvent, act } from '@testing-library/react';

import SearchBar from '../index';

jest.mock('../../../hooks/Products', () => ({
  useProducts: () => ({
    products: [
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
    ],
    searchedProducts: [
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição 1',
        features: ['.Feature 1', '.Feature 2', '.Feature 3'],
      },
    ],
    handleFetchProducts: jest.fn(),
    handleSearchProducts: jest.fn(),
  }),
}));

describe('SearchBar Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<SearchBar />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdvvtL fkBhEC"
            >
              <input
                placeholder="Buscar"
                type="text"
              />
              <svg
                fill="currentColor"
                height="16"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
              <div
                class="sc-gsDKAQ fgrVXR"
              >
                <div
                  class="title"
                >
                  <h4>
                    Produtos
                  </h4>
                </div>
                <ul>
                  <li>
                    <div
                      class="product-name"
                    >
                      Produto 1
                    </div>
                    <div
                      class="product-description"
                    >
                      Descrição 1
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-bdvvtL fkBhEC"
          >
            <input
              placeholder="Buscar"
              type="text"
            />
            <svg
              fill="currentColor"
              height="16"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <div
              class="sc-gsDKAQ fgrVXR"
            >
              <div
                class="title"
              >
                <h4>
                  Produtos
                </h4>
              </div>
              <ul>
                <li>
                  <div
                    class="product-name"
                  >
                    Produto 1
                  </div>
                  <div
                    class="product-description"
                  >
                    Descrição 1
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
  it('should be able to search products and result in a list', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);

    const searchInput = getByPlaceholderText('Buscar');

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'Produto 1' } });
    });

    const productTitle = getByText('Produto 1');
    const productDescription = getByText('Descrição 1');

    expect(productTitle).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });
});
