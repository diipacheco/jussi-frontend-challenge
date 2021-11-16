import { render } from '@testing-library/react';

import SolutionsSection from '../index';

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
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.',
        features: ['.Feature 1', '.Feature 2', '.Feature 3'],
      },
    ],
    handleFetchProducts: jest.fn(),
    handleSearchProducts: jest.fn(),
  }),
}));

describe('SolutionsSection Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<SolutionsSection />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <section
              class="sc-dkPtRN iiYbHB"
            >
              <div
                class="sc-hKwDye cezTVh"
              >
                <h1>
                  <strong>
                    /
                  </strong>
                  <strong>
                    /
                  </strong>
                  NOSSAS SOLUÇÕES
                </h1>
                <div
                  class="card-container"
                >
                  <div
                    class="sc-bdvvtL bOQnWo"
                  >
                    <div
                      class="sc-gsDKAQ iyKXwr"
                    >
                      <strong>
                        P1
                      </strong>
                    </div>
                    <p
                      class="product-name"
                    >
                      Produto 1
                    </p>
                    <p
                      class="product-description"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.
                    </p>
                    <ul
                      class="features-list"
                    >
                      <li>
                        .Feature 1
                      </li>
                      <li>
                        .Feature 2
                      </li>
                      <li>
                        .Feature 3
                      </li>
                    </ul>
                    <button
                      type="button"
                    >
                      Ver solução
                    </button>
                  </div>
                  <div
                    class="sc-bdvvtL bOQnWo"
                  >
                    <div
                      class="sc-gsDKAQ iyKXwr"
                    >
                      <strong>
                        P2
                      </strong>
                    </div>
                    <p
                      class="product-name"
                    >
                      Produto 2
                    </p>
                    <p
                      class="product-description"
                    >
                      Vivamus non diam eu metus eleifend consequat. Vestibulum a tellus lacus.
                    </p>
                    <ul
                      class="features-list"
                    >
                      <li>
                        .Feature 1
                      </li>
                      <li>
                        .Feature 2
                      </li>
                      <li>
                        .Feature 3
                      </li>
                    </ul>
                    <button
                      type="button"
                    >
                      Ver solução
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </body>,
        "container": <div>
          <section
            class="sc-dkPtRN iiYbHB"
          >
            <div
              class="sc-hKwDye cezTVh"
            >
              <h1>
                <strong>
                  /
                </strong>
                <strong>
                  /
                </strong>
                NOSSAS SOLUÇÕES
              </h1>
              <div
                class="card-container"
              >
                <div
                  class="sc-bdvvtL bOQnWo"
                >
                  <div
                    class="sc-gsDKAQ iyKXwr"
                  >
                    <strong>
                      P1
                    </strong>
                  </div>
                  <p
                    class="product-name"
                  >
                    Produto 1
                  </p>
                  <p
                    class="product-description"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.
                  </p>
                  <ul
                    class="features-list"
                  >
                    <li>
                      .Feature 1
                    </li>
                    <li>
                      .Feature 2
                    </li>
                    <li>
                      .Feature 3
                    </li>
                  </ul>
                  <button
                    type="button"
                  >
                    Ver solução
                  </button>
                </div>
                <div
                  class="sc-bdvvtL bOQnWo"
                >
                  <div
                    class="sc-gsDKAQ iyKXwr"
                  >
                    <strong>
                      P2
                    </strong>
                  </div>
                  <p
                    class="product-name"
                  >
                    Produto 2
                  </p>
                  <p
                    class="product-description"
                  >
                    Vivamus non diam eu metus eleifend consequat. Vestibulum a tellus lacus.
                  </p>
                  <ul
                    class="features-list"
                  >
                    <li>
                      .Feature 1
                    </li>
                    <li>
                      .Feature 2
                    </li>
                    <li>
                      .Feature 3
                    </li>
                  </ul>
                  <button
                    type="button"
                  >
                    Ver solução
                  </button>
                </div>
              </div>
            </div>
          </section>
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
});
