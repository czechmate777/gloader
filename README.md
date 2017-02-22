# gloader 1.0
A simple JS plugin that generates a nice Google-style loader animation.

##Usage

Include `gloader.js` in your html and simply add the `gloader` class to all elements you wish to bedazzle with the loader.

Note: requires JQuery

```
<div class="item gloader">
  ...
</div>
```

Additionally you can also use the `data-gloader-____` attribute to pass in quick css styling for the svg's circle like so:

```
<div class="item gloader" data-gloader-stroke="green">
  ...
</div>
```
