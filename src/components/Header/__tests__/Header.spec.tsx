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
              class="sc-bdvvtL eLKUGd"
            >
              <img
                alt="Jüssi Logo"
                src="logoJussiVectorGreen.svg"
              />
              <div
                class="sc-gsDKAQ bFhWKE"
              >
                <nav
                  class="sc-dkPtRN fTkLQp"
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
                  class="sc-hKwDye fiPdFg"
                >
                  <a
                    href="/login"
                  >
                    Login
                  </a>
                  <svg
                    fill="none"
                    height="22"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    width="22"
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
          </div>
        </body>,
        "container": <div>
          <header
            class="sc-bdvvtL eLKUGd"
          >
            <img
              alt="Jüssi Logo"
              src="logoJussiVectorGreen.svg"
            />
            <div
              class="sc-gsDKAQ bFhWKE"
            >
              <nav
                class="sc-dkPtRN fTkLQp"
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
                class="sc-hKwDye fiPdFg"
              >
                <a
                  href="/login"
                >
                  Login
                </a>
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="22"
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
