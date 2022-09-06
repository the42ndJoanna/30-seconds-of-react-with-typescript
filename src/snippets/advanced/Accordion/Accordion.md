---
title: Collapsible accordion
tags: components,children,state
expertise: advanced
cover: blog_images/beach-pineapple.jpg
firstSeen: 2019-03-02T10:46:34+02:00
lastUpdated: 2021-10-13T19:29:39+02:00
---

Renders an accordion menu with multiple collapsible content elements.

- Define an `AccordionItem` component, that renders a `<button>`. The button updates the component and notifies its parent via the `handleClick` callback.
- Use the `isCollapsed` prop in `AccordionItem` to determine its appearance and set its `className`.
- Define an `Accordion` component. Use the `useState()` hook to initialize the value of the `bindIndex` state variable to `defaultIndex`.
- Filter `children` to remove unnecessary nodes except for `AccordionItem` by identifying the function's name.
- Use `Array.prototype.map()` on the collected nodes to render the individual collapsible elements.
- Define `changeItem`, which will be executed when clicking an `AccordionItem`'s `<button>`.
- `changeItem` executes the passed callback, `onItemClick`, and updates `bindIndex` based on the clicked element.

### [Accordion: Original JavaScript Version](https://github.com/30-seconds/30-seconds-of-react/blob/master/snippets/Accordion.md)
