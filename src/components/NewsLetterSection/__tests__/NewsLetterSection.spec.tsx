import { render } from '@testing-library/react';

import NewsLetterSection from '../index';

describe('NewsLetterSection Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<NewsLetterSection />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <section
              class="sc-bdvvtL hLNKhH"
            >
              <h1>
                RECEBA NOVIDADES DA NOSSA ÁREA DE PRODUTOS DIGITAIS.
              </h1>
              <div
                class="input-container"
              >
                <input
                  placeholder="Digite seu email"
                  type="text"
                />
                <button
                  type="button"
                >
                  CADASTRAR
                </button>
              </div>
            </section>
          </div>
        </body>,
        "container": <div>
          <section
            class="sc-bdvvtL hLNKhH"
          >
            <h1>
              RECEBA NOVIDADES DA NOSSA ÁREA DE PRODUTOS DIGITAIS.
            </h1>
            <div
              class="input-container"
            >
              <input
                placeholder="Digite seu email"
                type="text"
              />
              <button
                type="button"
              >
                CADASTRAR
              </button>
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
