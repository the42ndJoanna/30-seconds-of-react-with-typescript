---
title: Controlled input field
tags: components,input
expertise: intermediate
cover: blog_images/digital-nomad-5.jpg
firstSeen: 2019-08-21T13:09:10+03:00
lastUpdated: 2020-11-03T21:08:39+02:00
---

Renders a controlled `<input>` element that uses a callback function to inform its parent about value updates.

- Use the `value` passed down from the parent as the controlled input field's value.
- Use the `onChange` event to fire the `onValueChange` callback and send the new value to the parent.
- The parent must update the input field's `value` prop in order for its value to change on user input.

### [ControlledInput: Original JavaScript Version](https://github.com/30-seconds/30-seconds-of-react/blob/master/snippets/ControlledInput.md)
