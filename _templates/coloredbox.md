---
layout: template
title:  "Colored box template"
permalink: /templates/coloredbox/
---

<!--pdf-->
<iframe src="/latex-savvy/assets/static/templates/coloredbox.pdf#toolbar=0" width="100%" height="400px">
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

% Margins
\usepackage[left=1.5cm, right=1.5cm, top=2.5cm, bottom=2cm]{geometry}

% We'll use mdframed to make some pretty boxes.

% BEGIN MDFRAMED SETTINGS -----------------------------------------------------
\usepackage[framemethod=TikZ]{mdframed}

% This code was adapted from the documentation for the mdframed package!
\newcounter{probcount}
\newenvironment{problem}[1][]{%
    % Increment problem counter
    \refstepcounter{probcount}%
    \mdfsetup{%
        frametitle={%
            \tikz[baseline=(current bounding box.east),outer sep=0pt]
            \node[anchor=east,rectangle,fill=%
            % Feel free to change this color (and the one below):
                blue!20]
            {\strut%
            % This is the text that shows up in the little box:
                Problem%
            ~\arabic{probcount}};
        }%
    }%
    \mdfsetup{innertopmargin=10pt,innerbottommargin=20pt,linecolor=%
        % Feel free to change this color:
            blue!20,%
        linewidth=2pt,topline=true,%
        frametitleaboveskip=\dimexpr-\ht\strutbox\relax
    }
    \begin{mdframed}[]\relax%
}{\end{mdframed}}

% END MDFRAMED SETTINGS -------------------------------------------------------

%
% Document
%

\begin{document}

% Replace these with your headers. --------------------------------------------

\begin{center}
    \section*{Homework 1}
    \large{Your Name}
\end{center}

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
