---
layout: post
title:  "Boxed template"
permalink: /boxed/
---

<!--pdf-->
<iframe src="/latex-savvy/assets/static/templates/boxed.pdf#toolbar=0" width="100%" height="400px">
</iframe>

<br>

### Code

{% raw %}
```tex
% A LaTeX template with boxes.
% Lines beginning with '%' are comments -- anything after the '%' is ignored.

%
% Prelude
%

\documentclass[10pt,notitlepage]{article}

% Margins and header
\usepackage[left=1.5cm, right=1.5cm, top=2.5cm, bottom=1.5cm]{geometry}
\usepackage{fancyhdr}

% We'll use mdframed to make some pretty boxes.

% BEGIN MDFRAMED SETTINGS -----------------------------------------------------
\usepackage[framemethod=TikZ]{mdframed}

\mdfdefinestyle{theo}{%
    frametitlebackgroundcolor = black!7,%
    frametitlerule=true,%
    roundcorner=5pt,%
    middlelinewidth=0.8pt,%
    innermargin=0.5cm,%
    outermargin=0.5cm,%
    innerleftmargin=0.5cm,%
    innerrightmargin=0.5cm,%
    innertopmargin=\topskip,%
    innerbottommargin=\topskip,%
}

\mdtheorem[style=theo]{definition}{\textbf{%
% This is the text that shows up in the grey part of the box:
    Problem%
}}
% END MDFRAMED SETTINGS -------------------------------------------------------

% Line thickness (for header and footer)
\renewcommand{\headrulewidth}{0.2pt}
\renewcommand{\footrulewidth}{0.2pt}

% Page number in footer
\cfoot{\thepage}

\pagestyle{fancy}

% Replace these with your headers. --------------------------------------------

\lhead{Homework 1}
\rhead{Your name}

% -----------------------------------------------------------------------------

%
% Document
%

\begin{document}

\begin{center}
    \section*{Homework 1}% TITLE
\end{center}

\begin{definition}
% -----------------------------------------------------------------------------

Some text here...

% -----------------------------------------------------------------------------
\end{definition}

\begin{definition}
% -----------------------------------------------------------------------------

Some more text here...

% -----------------------------------------------------------------------------
\end{definition}

\end{document}
```
{% endraw %}
