---
layout: page
title: Templates
permalink: /templates/
---

Clicking on any of these images will bring you to a page with $$\LaTeX$$
template code. Copy and paste the code into your favorite editor, and you're
good to go!

<div class="template_container">
{% for image in site.static_files %}
    {% if image.path contains 'templates/preview' %}

<!-- Jekyll is silly and doesn't allow indentation here-->
<a href="{{ site.baseurl }}/templates/{{ image.name }}">
<img src="{{ site.baseurl }}{{ image.path }}" class="tile" />

    {% endif %}
{% endfor %}

<!-- Jekyll is silly and doesn't want me to close the div tag-->
