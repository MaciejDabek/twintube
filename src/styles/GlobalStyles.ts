import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --color-primary: #10B981;

    --radius-sm: 0.4rem;
    --radius-md: 0.8rem;
    --radius-lg: 1.2rem;
    --radius-xl: 1.6rem;
    

    &.light-theme {
      --color-gray-50: #f9fafb;
      --color-gray-100: #f3f4f6;
      --color-gray-200: #e5e7eb;
      --color-gray-300: #d1d5db;
      --color-gray-400: #9ca3af;
      --color-gray-500: #6b7280;
      --color-gray-600: #4b5563;
      --color-gray-700: #374151;
      --color-gray-800: #1f2937;
      --color-gray-900: #111827;
      --color-gray-950: #030712;

    }

    &.dark-theme {
      --color-gray-50: #030712;
      --color-gray-100: #111827;
      --color-gray-200: #1f2937;
      --color-gray-300: #374151;
      --color-gray-400: #4b5563;
      --color-gray-500: #6b7280;
      --color-gray-600: #9ca3af;
      --color-gray-700: #d1d5db;
      --color-gray-800: #e5e7eb;
      --color-gray-900: #f3f4f6;
      --color-gray-950: #f9fafb;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff0020;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
    background-color: var(--color-gray-50);

    &::-webkit-scrollbar-thumb {
      background-color: red;
    }

  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;

    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  /* scrollbar */
  ::-webkit-scrollbar {
    height: 0px;
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: inherit;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-300);
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-400);
  }

  /* media queries */

  .mq-show-eq-sm {
    @media (min-width: 745px) {
      display: none;
    }
  }

  .mq-show-eq-md {
    @media (max-width: 744px) {
      display: none !important;
    }

    @media (min-width: 1245px) {
      display: none !important;
    }
  }

  .mq-show-eq-lg {
    @media (max-width: 1244px) {
      display: none !important; 
    }
  }

  .mq-show-eq-md-or-lg {
    @media (max-width: 744px) {
      display: none !important;
    }
  }

  .mq-show-never {
    display: none !important;
  }
  
`;

export default GlobalStyles;
