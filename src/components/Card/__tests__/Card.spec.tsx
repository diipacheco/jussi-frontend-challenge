import { render } from '@testing-library/react';

import Card from '../index';

describe('Card Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(
      <Card
        imageText="p1"
        title="Nome do Produto #1"
        description="Descrição do produto #1"
        features={['.Feature 1', '.Feature 2', '.Feature 3']}
      />,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdvvtL inQXij"
            >
              <div
                class="sc-gsDKAQ iyKXwr"
              >
                <strong>
                  P1
                </strong>
              </div>
              <p
                class="product-title"
              >
                Nome do Produto #1
              </p>
              <p
                class="product-description"
              >
                Descrição do produto #1
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
        </body>,
        "container": <div>
          <div
            class="sc-bdvvtL inQXij"
          >
            <div
              class="sc-gsDKAQ iyKXwr"
            >
              <strong>
                P1
              </strong>
            </div>
            <p
              class="product-title"
            >
              Nome do Produto #1
            </p>
            <p
              class="product-description"
            >
              Descrição do produto #1
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
