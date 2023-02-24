---
layout: template
title:  "Elegant template"
permalink: /templates/elegant/
---

<!--pdf-->
<iframe src="/latex-savvy/assets/static/templates/elegant.pdf#toolbar=0" width="100%" height="400px">
</iframe>

<br>

### Code

{% raw %}
```tex
%
% Prelude
%

\documentclass[10pt,notitlepage]{article}

% BEGIN HEADER SETTINGS -------------------------------------------------------

\usepackage[left=1.5cm, right=1.5cm, top=2cm, bottom=2cm,includehead,%
headheight=13pt,]{geometry}

\usepackage{fancyhdr}
\usepackage{fourier-orns}

\renewcommand{\headrule}{%
\vspace{-8pt}\hrulefill
\raisebox{-2.1pt}{\quad%
    % You can change the fourier ornament in the header here.
    % Try out some different letters!
    \FourierOrns V%
\quad}\hrulefill}

\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\rightmark\hfill\leftmark}
\fancyhead[R]{\leftmark\hfill\rightmark}

% END HEADER SETTINGS ---------------------------------------------------------

% We'll use mdframed to make some pretty boxes.

% BEGIN MDFRAMED SETTINGS -----------------------------------------------------

\usepackage[framemethod=TikZ]{mdframed}

% This code was adapted from the documentation for the mdframed package!
\newcounter{probcount}
\newenvironment{problem}{%
    % Increment problem counter
    \refstepcounter{probcount}%
    \mdfsetup{innertopmargin=10pt,innerbottommargin=20pt,
        linewidth=0.5pt,topline=true,roundcorner=2pt,%
        frametitleaboveskip=\dimexpr-\ht\strutbox\relax
    }
    \begin{mdframed}[backgroundcolor=gray!4!white]
    \textsc{%
    % This is the text that shows up at the top of the box:
        Problem%
    ~\arabic{probcount}}
    \vspace{10pt}
}{\end{mdframed}}

% END MDFRAMED SETTINGS -------------------------------------------------------

% Replace these with your headers. --------------------------------------------

\lhead{Homework 1}
\rhead{Your Name}

% -----------------------------------------------------------------------------

%
% Document
%

\begin{document}

\begin{problem}
% -----------------------------------------------------------------------------

Some text here...

% -----------------------------------------------------------------------------
\end{problem}

\begin{problem}
% -----------------------------------------------------------------------------

Some more text here...

% -----------------------------------------------------------------------------
\end{problem}

\end{document}
```
{% endraw %}
