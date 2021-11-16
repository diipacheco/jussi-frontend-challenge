import { render } from '@testing-library/react';

import JussiSection from '../index';

describe('JussiSection Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<JussiSection />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <section
              class="sc-bdvvtL hVwwnz"
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
          </div>
        </body>,
        "container": <div>
          <section
            class="sc-bdvvtL hVwwnz"
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
