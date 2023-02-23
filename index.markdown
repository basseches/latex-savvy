---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# Hi, there!

This website isn't quite done yet. For now, you can check out these templates:

<div class="padding"></div>

<div class="template_container">
{% for image in site.static_files %}
    {% if image.path contains 'templates/preview' %}

<!-- Jekyll is silly and doesn't allow indentation here-->
<a href="{{ site.baseurl }}/templates/{{ image.name }}">
<img src="{{ site.baseurl }}{{ image.path }}" class="tilehome" />

    {% endif %}
{% endfor %}

<!-- Jekyll is silly and doesn't want me to close the div tag-->

<div class="padding"></div>
