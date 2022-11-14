/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useLocalization } from '../LocalizationContext';
import Translator from '../translator';
import LocalizationContextProvider from '../LocalizationContextProvider';
import Languages from './locals/languages';
import localesJson from './locals/locales.json';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: 'Display/Localization',
  component: LocalizationContextProvider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LocalizationContextProvider>;

const Template: ComponentStory<typeof LocalizationContextProvider> = (args) => (
  <LocalizationContextProvider {...args}></LocalizationContextProvider>
);

const LanguageSwitch: React.FC = () => {
  const localization = useLocalization();
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    localization.selectLanguage(event.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      <label htmlFor='en' style={{ position: 'static' }}>
        <input
          type='radio'
          value='EN'
          name='lang'
          id='en'
          checked={localization.language === 'EN'}
          onChange={radioHandler}
        />
        English
      </label>
      <label htmlFor='fi' style={{ position: 'static' }}>
        <input
          type='radio'
          value='FI'
          name='lang'
          id='fi'
          checked={localization.language === 'FI'}
          onChange={radioHandler}
        />
        Finnish
      </label>
    </div>
  );
};

const MyApp: React.FC = () => {
  const localization = useLocalization();
  const translator = new Translator(localesJson, 'MyApp', localization.language);
  return (
    <div>
      <LanguageSwitch />
      <h1>{translator.getLocalString('string_1')}</h1>
      <h1>{translator.getLocalString('string_2')}</h1>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  languageList: Languages,
  children: <MyApp />,
};

export default Story;
