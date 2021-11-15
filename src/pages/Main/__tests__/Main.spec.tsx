import { render } from '@testing-library/react';

import Main from '../index';

describe('Main Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<Main />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <main
              class="sc-pVTFL dMzYpF"
            >
              <header
                class="sc-gsDKAQ ePwAsU"
              >
                <img
                  alt="Jüssi Logo"
                  src="logoJussiVectorGreen.svg"
                />
                <div
                  class="sc-dkPtRN bBJVyc"
                >
                  <nav
                    class="sc-hKwDye dTehpa"
                  >
                    <ul>
                      <li>
                        <a
                          href="/solucoes"
                        >
                          Nossas Soluções
                        </a>
                      </li>
                      <li>
                        <a
                          href="/sobre-nos"
                        >
                          Conheça a Jüssi
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div
                    class="sc-eCImPb beGlFc"
                  >
                    <div
                      class="sc-bdvvtL ieGvXA"
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
                    </div>
                    <a
                      href="/login"
                    >
                      Login
                    </a>
                    <svg
                      fill="none"
                      height="32"
                      stroke="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      />
                      <path
                        d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </header>
              <div
                class="sc-jRQBWg gGVfJW"
              >
                <section
                  class="sc-gKclnd gHyZyT"
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
                      class="sc-iCfMLu jacQNv"
                    >
                      <img
                        alt="Imagem do produto 1"
                        src="beater.png"
                      />
                      <button
                        class="sc-furwcr izUqLD"
                      >
                        Comprar em 2x
                      </button>
                    </div>
                    <div
                      class="sc-iCfMLu jacQNv"
                    >
                      <img
                        alt="Imagem do produto 2"
                        src="refrigerator.png"
                      />
                      <button
                        class="sc-furwcr izUqLD"
                      >
                        Mais Detalhes
                      </button>
                    </div>
                    <div
                      class="sc-iCfMLu jacQNv"
                    >
                      <img
                        alt="Imagem do produto 3"
                        src="whiskey.png"
                      />
                      <button
                        class="sc-furwcr izUqLD"
                      >
                        Adicionar à sacola
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </body>,
        "container": <div>
          <main
            class="sc-pVTFL dMzYpF"
          >
            <header
              class="sc-gsDKAQ ePwAsU"
            >
              <img
                alt="Jüssi Logo"
                src="logoJussiVectorGreen.svg"
              />
              <div
                class="sc-dkPtRN bBJVyc"
              >
                <nav
                  class="sc-hKwDye dTehpa"
                >
                  <ul>
                    <li>
                      <a
                        href="/solucoes"
                      >
                        Nossas Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sobre-nos"
                      >
                        Conheça a Jüssi
                      </a>
                    </li>
                  </ul>
                </nav>
                <div
                  class="sc-eCImPb beGlFc"
                >
                  <div
                    class="sc-bdvvtL ieGvXA"
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
                  </div>
                  <a
                    href="/login"
                  >
                    Login
                  </a>
                  <svg
                    fill="none"
                    height="32"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </header>
            <div
              class="sc-jRQBWg gGVfJW"
            >
              <section
                class="sc-gKclnd gHyZyT"
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
                    class="sc-iCfMLu jacQNv"
                  >
                    <img
                      alt="Imagem do produto 1"
                      src="beater.png"
                    />
                    <button
                      class="sc-furwcr izUqLD"
                    >
                      Comprar em 2x
                    </button>
                  </div>
                  <div
                    class="sc-iCfMLu jacQNv"
                  >
                    <img
                      alt="Imagem do produto 2"
                      src="refrigerator.png"
                    />
                    <button
                      class="sc-furwcr izUqLD"
                    >
                      Mais Detalhes
                    </button>
                  </div>
                  <div
                    class="sc-iCfMLu jacQNv"
                  >
                    <img
                      alt="Imagem do produto 3"
                      src="whiskey.png"
                    />
                    <button
                      class="sc-furwcr izUqLD"
                    >
                      Adicionar à sacola
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
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
