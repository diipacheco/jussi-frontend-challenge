import { render } from '@testing-library/react';

import Banner from '../index';

describe('Banner Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<Banner />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdvvtL eKnNvf"
            >
              <section
                class="sc-gsDKAQ dytrGp"
              >
                <div
                  class="text-column"
                >
                  <h1>
                    CRIAMOS LOJAS QUE VENDEM MAIS.
                  </h1>
                  <p>
                    A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
                  </p>
                  <button
                    type="button"
                  >
                    Veja nossas soluções
                  </button>
                </div>
                <div
                  class="cards-column"
                >
                  <div
                    class="sc-dkPtRN cFJdKo"
                  >
                    <img
                      alt="Imagem do produto 1"
                      src="beater.png"
                    />
                    <button
                      class="sc-hKwDye ghFEZo"
                    >
                      Comprar em 2x
                    </button>
                  </div>
                  <div
                    class="sc-dkPtRN cFJdKo"
                  >
                    <img
                      alt="Imagem do produto 2"
                      src="refrigerator.png"
                    />
                    <button
                      class="sc-hKwDye ghFEZo"
                    >
                      Mais Detalhes
                    </button>
                  </div>
                  <div
                    class="sc-dkPtRN cFJdKo"
                  >
                    <img
                      alt="Imagem do produto 3"
                      src="whiskey.png"
                    />
                    <button
                      class="sc-hKwDye ghFEZo"
                    >
                      Adicionar à sacola
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-bdvvtL eKnNvf"
          >
            <section
              class="sc-gsDKAQ dytrGp"
            >
              <div
                class="text-column"
              >
                <h1>
                  CRIAMOS LOJAS QUE VENDEM MAIS.
                </h1>
                <p>
                  A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
                </p>
                <button
                  type="button"
                >
                  Veja nossas soluções
                </button>
              </div>
              <div
                class="cards-column"
              >
                <div
                  class="sc-dkPtRN cFJdKo"
                >
                  <img
                    alt="Imagem do produto 1"
                    src="beater.png"
                  />
                  <button
                    class="sc-hKwDye ghFEZo"
                  >
                    Comprar em 2x
                  </button>
                </div>
                <div
                  class="sc-dkPtRN cFJdKo"
                >
                  <img
                    alt="Imagem do produto 2"
                    src="refrigerator.png"
                  />
                  <button
                    class="sc-hKwDye ghFEZo"
                  >
                    Mais Detalhes
                  </button>
                </div>
                <div
                  class="sc-dkPtRN cFJdKo"
                >
                  <img
                    alt="Imagem do produto 3"
                    src="whiskey.png"
                  />
                  <button
                    class="sc-hKwDye ghFEZo"
                  >
                    Adicionar à sacola
                  </button>
                </div>
              </div>
            </section>
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
