---
title: Blog
type: blog
layout: default
excerpt: my blog
---

<ul class="blog-list">
{% for post in collections.blog %}
  <li class="blog-list-item">
    <a style="text-decoration: underline;" class="blog-list-item__title" href="{{ post.url }}">
      {{ post.data.title | nbsp }}
    </a>
  {% if forloop.first %}
  <a class="blog-list-item__cta" href="{{ post.url }}">Read the article</a>
  {% endif %}
  </li>
{% endfor %}
</ul>

<p class="blog-links">
  <a class="blog-links__archive" href="/archive/">See all articles</a>
</p>
