import { render } from '@testing-library/react';

import Main from '../index';

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

describe('Main Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<Main />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <main
              class="sc-fFeiMQ jRdTPF"
            >
              <header
                class="sc-dkPtRN esNAWQ"
              >
                <img
                  alt="Jüssi Logo"
                  src="logoJussiVectorGreen.svg"
                />
                <div
                  class="sc-hKwDye cbpLsr"
                >
                  <nav
                    class="sc-eCImPb lneTWW"
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
                    class="sc-jRQBWg hliyXH"
                  >
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.
                            </div>
                          </li>
                        </ul>
                      </div>
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
                class="sc-gKclnd dpztIW"
              >
                <section
                  class="sc-iCfMLu lcryUz"
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
                      class="sc-furwcr bzulBY"
                    >
                      <img
                        alt="Imagem do produto 1"
                        src="beater.png"
                      />
                      <button
                        class="sc-pVTFL kCxDeE"
                      >
                        Comprar em 2x
                      </button>
                    </div>
                    <div
                      class="sc-furwcr bzulBY"
                    >
                      <img
                        alt="Imagem do produto 2"
                        src="refrigerator.png"
                      />
                      <button
                        class="sc-pVTFL kCxDeE"
                      >
                        Mais Detalhes
                      </button>
                    </div>
                    <div
                      class="sc-furwcr bzulBY"
                    >
                      <img
                        alt="Imagem do produto 3"
                        src="whiskey.png"
                      />
                      <button
                        class="sc-pVTFL kCxDeE"
                      >
                        Adicionar à sacola
                      </button>
                    </div>
                  </div>
                </section>
              </div>
              <div
                class="sc-jrQzAO iQcgzO"
              >
                <p>
                  Nossas principais lojas VTEX
                </p>
                <img
                  alt="Seta para direita"
                  src="arrow-right.svg"
                />
                <img
                  alt="Logo da Brastemp"
                  src="logo-brastemp.svg"
                />
                <img
                  alt="Logo da Compra Certa"
                  src="logo-compra-certa.svg"
                />
                <img
                  alt="Logo da Consul"
                  src="logo-consul.svg"
                />
                <img
                  alt="Logo da The Bar"
                  src="logo-thebar.svg"
                />
              </div>
              <section
                class="sc-crHmcD kUqLil"
              >
                <div
                  class="sc-egiyK ccKLzY"
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
                      class="sc-kDTinF ObFII"
                    >
                      <div
                        class="sc-iqseJM cYBgNp"
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
                      class="sc-kDTinF ObFII"
                    >
                      <div
                        class="sc-iqseJM cYBgNp"
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
              <section
                class="sc-bqiRlB erzGhz"
              >
                <div
                  class="text-column"
                >
                  <h1>
                    OLÁ, SOMOS A JÜSSI
                  </h1>
                  <p>
                    A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                  </p>
                  <button
                    type="button"
                  >
                    Conheça a Jüssi
                  </button>
                </div>
                <div
                  class="image-column"
                >
                  <img
                    alt="Imagem do escritório da Jüssi"
                    src="image-jussi.png"
                  />
                </div>
                <div
                  class="grey-background"
                />
              </section>
              <section
                class="sc-ksdxgE iiCrGQ"
              >
                <h1>
                  ESSA LOJA FOI CONSTRUÍDA USANDO UMAS DAS NOSSAS SOLUÇÕES DA PLATAFORMA VTEX. 
                  <br />
                  TENHA A SUA.
                </h1>
                <small>
                  Entre em contato
                </small>
                <p>
                  comercial@jussi.com.br
                </p>
              </section>
              <section
                class="sc-hBUSln fbaYJb"
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
              <footer
                class="sc-fotOHu fREEpi"
              >
                <img
                  alt="WPP Company Logo"
                  src="wppcompany.svg"
                />
                <div
                  class="icons-container"
                >
                  <img
                    alt="facebook.svg Logo"
                    src="facebook.svg"
                  />
                  <img
                    alt="instagram.svg Logo"
                    src="instagram.svg"
                  />
                  <img
                    alt="linkedin.svg Logo"
                    src="linkedin.svg"
                  />
                </div>
              </footer>
            </main>
          </div>
        </body>,
        "container": <div>
          <main
            class="sc-fFeiMQ jRdTPF"
          >
            <header
              class="sc-dkPtRN esNAWQ"
            >
              <img
                alt="Jüssi Logo"
                src="logoJussiVectorGreen.svg"
              />
              <div
                class="sc-hKwDye cbpLsr"
              >
                <nav
                  class="sc-eCImPb lneTWW"
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
                  class="sc-jRQBWg hliyXH"
                >
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac eros imperdiet, gravida arcu eget, varius diam.
                          </div>
                        </li>
                      </ul>
                    </div>
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
              class="sc-gKclnd dpztIW"
            >
              <section
                class="sc-iCfMLu lcryUz"
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
                    class="sc-furwcr bzulBY"
                  >
                    <img
                      alt="Imagem do produto 1"
                      src="beater.png"
                    />
                    <button
                      class="sc-pVTFL kCxDeE"
                    >
                      Comprar em 2x
                    </button>
                  </div>
                  <div
                    class="sc-furwcr bzulBY"
                  >
                    <img
                      alt="Imagem do produto 2"
                      src="refrigerator.png"
                    />
                    <button
                      class="sc-pVTFL kCxDeE"
                    >
                      Mais Detalhes
                    </button>
                  </div>
                  <div
                    class="sc-furwcr bzulBY"
                  >
                    <img
                      alt="Imagem do produto 3"
                      src="whiskey.png"
                    />
                    <button
                      class="sc-pVTFL kCxDeE"
                    >
                      Adicionar à sacola
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="sc-jrQzAO iQcgzO"
            >
              <p>
                Nossas principais lojas VTEX
              </p>
              <img
                alt="Seta para direita"
                src="arrow-right.svg"
              />
              <img
                alt="Logo da Brastemp"
                src="logo-brastemp.svg"
              />
              <img
                alt="Logo da Compra Certa"
                src="logo-compra-certa.svg"
              />
              <img
                alt="Logo da Consul"
                src="logo-consul.svg"
              />
              <img
                alt="Logo da The Bar"
                src="logo-thebar.svg"
              />
            </div>
            <section
              class="sc-crHmcD kUqLil"
            >
              <div
                class="sc-egiyK ccKLzY"
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
                    class="sc-kDTinF ObFII"
                  >
                    <div
                      class="sc-iqseJM cYBgNp"
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
                    class="sc-kDTinF ObFII"
                  >
                    <div
                      class="sc-iqseJM cYBgNp"
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
            <section
              class="sc-bqiRlB erzGhz"
            >
              <div
                class="text-column"
              >
                <h1>
                  OLÁ, SOMOS A JÜSSI
                </h1>
                <p>
                  A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                </p>
                <button
                  type="button"
                >
                  Conheça a Jüssi
                </button>
              </div>
              <div
                class="image-column"
              >
                <img
                  alt="Imagem do escritório da Jüssi"
                  src="image-jussi.png"
                />
              </div>
              <div
                class="grey-background"
              />
            </section>
            <section
              class="sc-ksdxgE iiCrGQ"
            >
              <h1>
                ESSA LOJA FOI CONSTRUÍDA USANDO UMAS DAS NOSSAS SOLUÇÕES DA PLATAFORMA VTEX. 
                <br />
                TENHA A SUA.
              </h1>
              <small>
                Entre em contato
              </small>
              <p>
                comercial@jussi.com.br
              </p>
            </section>
            <section
              class="sc-hBUSln fbaYJb"
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
            <footer
              class="sc-fotOHu fREEpi"
            >
              <img
                alt="WPP Company Logo"
                src="wppcompany.svg"
              />
              <div
                class="icons-container"
              >
                <img
                  alt="facebook.svg Logo"
                  src="facebook.svg"
                />
                <img
                  alt="instagram.svg Logo"
                  src="instagram.svg"
                />
                <img
                  alt="linkedin.svg Logo"
                  src="linkedin.svg"
                />
              </div>
            </footer>
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
