# Drip v0

Drip is a minimal CSS library designed to be a base stylesheet for globalized projects.
It supports all common writing directions with reasonable default styles.

## Quick Start

These options are available for getting Drip:

* Clone the repo: `git clone https://github.com/subtributary/drip.git`

Include Drip in your website simply by including the CSS file:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Drip example</title>
  <link rel="stylesheet" href="drip.css">
</head>
<body>
<!-- website content goes here -->
</body>
</html>
```

Lay out your website with semantic HTML and Drip's layout classes:

* `.container` — adds padding to a block element and limits its size along the axis of text flow.
* `.container-full` — adds padding to a block element.
* `.row` — arranges elements on the same line.

The semantic HTML and layout classes will automatically adapt to the writing mode and text direction.
These can be set on the `html` tag:

```html
<html lang="en" dir="ltr" class="horizontal-tb">
```

The `dir` attribute is the standard way to set the writing direction.
To set the writing mode, use one of these Drip classes:

* `horizontal-tb`
* `sideways-lr`
* `sideways-rl`
* `vertical-lr`
* `vertical-rl`

You can wire these up to change according to the user's locale! 🙂

## Classes and components

The layout classes are discussed in "Quick Start" above.
These are the rest of the classes:

* `dropdown` — creates a dropdown component similar to a `select`.
* `form-group` — wraps a form label, input, and help text together.
  * `help-text` — when used inside a `form-group`, renders help text in small, muted text.
* `sr-only` — hides an element from view but makes it readable by screen readers.
* `text-muted` — renders text in a muted color.

## Dropdown

Use the `dropdown` class to create a customizable dropdown component.

```html
<div class="dropdown">
  <button popovertarget="dropdown" aria-expanded="false" aria-controls="dropdown">
    Toggle dropdown
  </button>
  <div id="dropdown" popover>
    Dropdown contents go here.
  </div>
</div>
```

Drip only positions the dropdown.
Its contents are not styled any different from content outside the dropdown.
You can use the CSS target `.dropdown>[popover]` to specially style the content.

### Forms

Forms can be created without using Drip's form classes.
Use the form classes when multiple elements should be kept together.

```html
<div class="row">
  <div class="form-group">
    <label for="date">Date</label>
    <input type="date" id="date" name="date">
  </div>
  <div class="form-group">
    <label for="time">Time</label>
    <input type="time" id="time" name="time">
    <p class="help-text">This is help text.</p>
  </div>
</div>
```

## License

Drip is free and unencumbered software released into the public domain.
For more information, see [https://unlicense.org](https://unlicense.org) or the [LICENSE](LICENSE) file.
