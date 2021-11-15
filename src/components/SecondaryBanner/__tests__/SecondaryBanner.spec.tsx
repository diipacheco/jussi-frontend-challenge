import { render } from '@testing-library/react';

import SecondaryBanner from '../index';

describe('SecondaryBanner Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<SecondaryBanner />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdvvtL jeCutC"
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
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-bdvvtL jeCutC"
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