/**
 * destyle.css v4.0.0
 * Originally created by Nicolas Cusan
 * Repository: https://github.com/nicolas-cusan/destyle.css
 *
 * The MIT License (MIT)
 * Copyright (c) Nicolas Cusan
 */

import { globalStyle } from '@vanilla-extract/css';

// Reset box-model and set borders
globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
  borderStyle: 'solid',
  borderWidth: 0,
  minWidth: 0,
});

// Document
globalStyle('html', {
  lineHeight: 1.15,
  WebkitTextSizeAdjust: '100%',
  WebkitTapHighlightColor: 'transparent',
});

// Sections
globalStyle('body', {
  margin: 0,
});

globalStyle('main', {
  display: 'block',
});

// Vertical rhythm
globalStyle('p, table, blockquote, address, pre, iframe, form, figure, dl', {
  margin: 0,
});

// Headings
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  margin: 0,
});

// Lists (enumeration)
globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

// Lists (definition)
globalStyle('dt', {
  fontWeight: 'bold',
});

globalStyle('dd', {
  marginLeft: 0,
});

// Grouping content
globalStyle('hr', {
  boxSizing: 'content-box',
  height: 0,
  overflow: 'visible',
  borderTopWidth: '1px',
  margin: 0,
  clear: 'both',
  color: 'inherit',
});

globalStyle('pre', {
  fontFamily: 'monospace, monospace',
  fontSize: 'inherit',
});

globalStyle('address', {
  fontStyle: 'inherit',
});

// Text-level semantics
globalStyle('a', {
  backgroundColor: 'transparent',
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('abbr[title]', {
  textDecoration: 'underline dotted',
});

globalStyle('b, strong', {
  fontWeight: 'bolder',
});

globalStyle('code, kbd, samp', {
  fontFamily: 'monospace, monospace',
  fontSize: 'inherit',
});

globalStyle('small', {
  fontSize: '80%',
});

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

// Replaced content
globalStyle('svg, img, embed, object, iframe', {
  verticalAlign: 'bottom',
});

// Forms
globalStyle('button, input, optgroup, select, textarea', {
  WebkitAppearance: 'none',
  appearance: 'none',
  verticalAlign: 'middle',
  color: 'inherit',
  font: 'inherit',
  background: 'transparent',
  padding: 0,
  margin: 0,
  borderRadius: 0,
  textAlign: 'inherit',
  textTransform: 'inherit',
});

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  cursor: 'pointer',
});

globalStyle(
  'button:disabled, [type="button"]:disabled, [type="reset"]:disabled, [type="submit"]:disabled',
  {
    cursor: 'default',
  },
);

globalStyle(':-moz-focusring', {
  outline: 'auto',
});

globalStyle('select:disabled', {
  opacity: 'inherit',
});

globalStyle('option', {
  padding: 0,
});

globalStyle('fieldset', {
  margin: 0,
  padding: 0,
  minWidth: 0,
});

globalStyle('legend', {
  padding: 0,
});

globalStyle('progress', {
  verticalAlign: 'baseline',
});

globalStyle('textarea', {
  overflow: 'auto',
});

globalStyle(
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button',
  {
    height: 'auto',
  },
);

globalStyle('[type="search"]', {
  outlineOffset: '-2px',
});

globalStyle('[type="search"]::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

globalStyle('[type="number"]', {
  MozAppearance: 'textfield',
});

globalStyle('label[for]', {
  cursor: 'pointer',
});

// Interactive
globalStyle('details', {
  display: 'block',
});

globalStyle('summary', {
  display: 'listItem',
});

globalStyle('[contenteditable]:focus', {
  outline: 'auto',
});

// Tables
globalStyle('table', {
  borderColor: 'inherit',
  borderCollapse: 'collapse',
});

globalStyle('caption', {
  textAlign: 'left',
});

globalStyle('td, th', {
  verticalAlign: 'top',
  padding: 0,
});

globalStyle('th', {
  textAlign: 'left',
  fontWeight: 'bold',
});
