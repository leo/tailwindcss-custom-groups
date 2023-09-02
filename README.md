# tailwindcss-custom-groups

> [!IMPORTANT]
> As of [version 3.2](https://tailwindcss.com/blog/tailwindcss-v3-2#nested-group-and-multiple-peer-support-using-variant-modifiers), Tailwind CSS now offers [named groups](https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups) natively.

Out of the box, [Tailwind CSS](https://tailwindcss.com/) comes with a `group-` utility that's [used](https://tailwindcss.com/docs/hover-focus-and-other-states) for styling elements depending on the state of their parents.

The plugin right here lets you generate custom group utilities in the form of `group-*-`, where `*` represents an arbitray name.

## Use Cases

In most scenarios, the default `group-` utility works just fine. As your app grows in complexity, however, you might find yourself looking for solutions to needs such as:

- Nesting several `group-` utilities
- Styling depending on a particular parent further up in the tree, not just the closest `group-` user
- More descriptive `group-` labels if many are used in the same component

If so, this plugin will help you.

## Setup

First, install the plugin:

```bash
npm install tailwindcss-custom-groups --save-dev
```

Then add the plugin to your [Tailwind CSS config file](https://tailwindcss.com/docs/configuration):

```javascript
theme: {
  customGroups: {
    // For example, `row` results in `group-row-`
    names: ['row']
  }
},
plugins: [
  require('tailwindcss-custom-groups')
]
```

## Additional Options

To avoid too much CSS being generated, every new `group-*-` utility only supports a [small list](https://github.com/leo/tailwindcss-custom-groups/blob/734ba18083d9b6f08e57ba58d1ab4ca353915a98/index.js#L5-L10) of pseudo-classes.

If you'd like to generate different ones, you can replace the defaults with `customGroups.variants`:

```javascript
variants: {
  'odd': 'nth-child(odd)'
}
```

## Credits

The package is based on [this comment](https://github.com/tailwindlabs/tailwindcss/issues/1192#issuecomment-1069149920) by [@maelquerre](https://github.com/maelquerre), with various additions by [@leo](https://github.com/leo).
