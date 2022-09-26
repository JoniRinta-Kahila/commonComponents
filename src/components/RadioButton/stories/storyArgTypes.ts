export const argTypes = {
  defaultChecked: {
    type: 'boolean',
    description: 'default check',
    defaultValue: false,
  },
  disabled: {
    type: 'boolean',
    description: 'disable radiobutton',
    defaultValue: false,
  },
  name: {
    type: 'string',
    description: 'used to group radiobuttons',
    defaultValue: '',
  },
  label: {
    defaultValue: '',
    description: 'radio button label text',
    type: 'string',
  },
  value: {
    defaultValue: '',
    description: 'value of the radio button',
  },
  variation: {
    description: 'theme of radio button',
    defaultValue: 'shutter',
  },
  styles: {
    description: 'styling properties for radio button',
  },
  onChange: {
    description: 'function onChange',
    type: 'function',
  },
};
