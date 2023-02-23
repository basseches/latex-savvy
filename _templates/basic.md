---
layout: template
title:  "Basic template"
permalink: /templates/basic/
---

If you're unfamiliar with $$\LaTeX$$, this is a good place to start.

<div class="padding"></div>

<!--pdf-->
<iframe src="/latex-savvy/assets/static/templates/basic.pdf#toolbar=0" width="100%" height="400px">
</iframe>

<br>

### Code

{% raw %}
```tex
% A basic LaTeX template.
% Lines beginning with '%' are comments -- anything after the '%' is ignored.

%
% Prelude
%

\documentclass[12pt]{exam}

% Here, you can put any packages you need, like this:
\usepackage{amsmath}

% Replace these with your headers. --------------------------------------------

\header{Homework 1}{}{Your name}
\title{Homework 1}
\author{Your name}

% To add a specific date, uncomment the following line:
%\date{February 20, 2023}

% To omit the date, uncomment this line.
%\date{}

% -----------------------------------------------------------------------------

\pagestyle{head}

%
% Document
%

\begin{document}

\maketitle
\thispagestyle{empty} % to omit page number on the title page

\section*{Problem 1}
% -----------------------------------------------------------------------------

Some text here...

% -----------------------------------------------------------------------------

\pagebreak

\section*{Problem 2}
% -----------------------------------------------------------------------------

Some more text here...

% -----------------------------------------------------------------------------

\end{document}
```
{% endraw %}
