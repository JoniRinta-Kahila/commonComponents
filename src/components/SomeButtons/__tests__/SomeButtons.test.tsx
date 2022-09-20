import React from 'react';
import {
  Instagram,
  SomeButtons,
  SomeButtonsProps,
  InstagramProps,
  Facebook,
  FacebookProps,
  WhatsappProps,
  Whatsapp,
} from '..';
import { render, screen } from '@testing-library/react';

const contSetup = (props: SomeButtonsProps) => render(<SomeButtons {...props} />);
const instaSetup = (props: InstagramProps) => render(<Instagram {...props} />);
const faceSetup = (props: FacebookProps) => render(<Facebook {...props} />);
const waSetup = (props: WhatsappProps) => render(<Whatsapp {...props} />);

describe('SomeButtons renders', () => {
  it('SomeButtons container renders', () => {
    contSetup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });

  it('Instagram renders', () => {
    const { container } = instaSetup({
      instagramLink: 'https://instagram.com',
      className: 'test-class',
    });
    expect(container.getElementsByClassName('test-class').length).toBe<number>(1);
  });

  it('Facebook renders', () => {
    const { container } = faceSetup({
      facebookLink: 'https://facebook.com',
      className: 'test-class',
    });
    expect(container.getElementsByClassName('test-class').length).toBe<number>(1);
  });

  it('Whatsapp renders', () => {
    const { container } = waSetup({
      whatsappLink: 'https://whatsapp.com',
      className: 'test-class',
    });
    expect(container.getElementsByClassName('test-class').length).toBe<number>(1);
  });
});

describe('SomeButtons branch test', () => {
  it('Happy path: facebook link href', () => {
    const expected = 'https://facebook.com/';
    const { container } = faceSetup({ facebookLink: expected, className: 'test-class' });
    const result = container.querySelector('a')!.href;
    expect(result).toBe(expected);
  });

  it('Happy path: Facebook link rel', () => {
    const { container } = faceSetup({ facebookLink: '', linkRel: 'noreferrer' });
    const result = container.querySelector('a')!.rel;
    expect(result).toBe('noreferrer');
  });

  it('Happy path: Facebook link target', () => {
    const { container } = faceSetup({ facebookLink: '', linkTarget: '_balnk' });
    const result = container.querySelector('a')!.target;
    expect(result).toBe('_balnk');
  });

  it('Happy path: Facebook icon size', () => {
    const { container } = faceSetup({ facebookLink: '', iconSize: 10 });
    const result = container.querySelector('[fill="currentColor"]')?.getAttribute('height');
    expect(result).toBe('10');
  });

  //
  it('Happy path: instagram link href', () => {
    const expected = 'https://instagram.com/';
    const { container } = instaSetup({ instagramLink: expected, className: 'test-class' });
    const result = container.querySelector('a')!.href;
    expect(result).toBe(expected);
  });

  it('Happy path: instagram link rel', () => {
    const { container } = instaSetup({ instagramLink: '', linkRel: 'noreferrer' });
    const result = container.querySelector('a')!.rel;
    expect(result).toBe('noreferrer');
  });

  it('Happy path: instagram link target', () => {
    const { container } = instaSetup({ instagramLink: '', linkTarget: '_balnk' });
    const result = container.querySelector('a')!.target;
    expect(result).toBe('_balnk');
  });

  it('Happy path: instagram icon size', () => {
    const { container } = instaSetup({ instagramLink: '', iconSize: 10 });
    const result = container.querySelector('[fill="currentColor"]')?.getAttribute('height');
    expect(result).toBe('10');
  });

  //
  it('Happy path: whatsapp link href', () => {
    const expected = 'https://whatsapp.com/';
    const { container } = waSetup({ whatsappLink: expected, className: 'test-class' });
    const result = container.querySelector('a')!.href;
    expect(result).toBe(expected);
  });

  it('Happy path: whatsapp link rel', () => {
    const { container } = waSetup({ whatsappLink: '', linkRel: 'noreferrer' });
    const result = container.querySelector('a')!.rel;
    expect(result).toBe('noreferrer');
  });

  it('Happy path: whatsapp link target', () => {
    const { container } = waSetup({ whatsappLink: '', linkTarget: '_balnk' });
    const result = container.querySelector('a')!.target;
    expect(result).toBe('_balnk');
  });

  it('Happy path: whatsapp icon size', () => {
    const { container } = waSetup({ whatsappLink: '', iconSize: 10 });
    const result = container.querySelector('[fill="currentColor"]')?.getAttribute('height');
    expect(result).toBe('10');
  });
});
