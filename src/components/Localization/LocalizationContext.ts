import { createContext, useContext } from 'react';

export interface ILanguageList {
  [countryCode: string]: string;
}

export type LocalizationContextType = {
  language: string;
  selectLanguage: (Language: string) => void;
  supportedLanguages: ILanguageList;
};

export const LocalizationContext: React.Context<LocalizationContextType> =
  createContext<LocalizationContextType>({
    language: 'EN',
    selectLanguage: () =>
      console.warn(
        "invalid use of 'LocalizationContext'",
        "Using 'LocalizationContext' outside of 'LocalizationContextProvider'"
      ),
    supportedLanguages: {},
  });

export const useLocalization = () => useContext(LocalizationContext);
