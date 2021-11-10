import { render } from '@testing-library/react';

import Header from '../index';

describe('Header Component', () => {
  it('should be able to render the elements tree correctly', () => {
    const wrapper = render(<Header />);

    expect(wrapper).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <header
              class="sc-bdvvtL"
            >
              <img
                alt="Jüssi Logo"
                src="logoJussiVectorGreen.svg"
              />
            </header>
          </div>
        </body>,
        "container": <div>
          <header
            class="sc-bdvvtL"
          >
            <img
              alt="Jüssi Logo"
              src="logoJussiVectorGreen.svg"
            />
          </header>
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

  it('should able to render the Jüssi logo', () => {
    const { getByAltText } = render(<Header />);

    const jussiLogoAlt = getByAltText('Jüssi Logo');

    expect(jussiLogoAlt).toBeInTheDocument();
  });
});
