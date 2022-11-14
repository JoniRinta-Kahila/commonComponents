import React from 'react';
import { render, screen } from '@testing-library/react';
import LocalizationContextProvider, {
  LocalizationContextProviderProps,
} from '../LocalizationContextProvider';
import Languages from '../stories/locals/languages';
import Translator from '../translator';
import localesJson from '../stories/locals/locales.json';

const providerProps: LocalizationContextProviderProps = {
  languageList: Languages,
};

type childProps = {
  language: 'FI' | 'EN';
};

const Children: React.FC<childProps> = ({ language }) => {
  const translator = new Translator(localesJson, 'MyApp', language);
  return (
    <div>
      <p>{translator.getLocalString('string_1')}</p>
    </div>
  );
};

const setup = (props = providerProps) => render(<LocalizationContextProvider {...props} />);

describe('Localization', () => {
  it('renders English locales', () => {
    setup({ languageList: Languages, children: <Children language='EN' />, defaultLanguage: 'EN' });
    expect(screen.getByText('Hello, World!'));
  });

  it('renders Finnish locales', () => {
    setup({ languageList: Languages, children: <Children language='FI' />, defaultLanguage: 'FI' });
    expect(screen.getByText('Hei, Maailma!'));
  });
});
