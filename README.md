<p align="center">
  <a href="https://mmb-irb.github.io/biomovies/">
    <img src="docs/source/_static/logo.png" width="200" />
  </a>
</p>

# biomovies documentation

[![version](https://img.shields.io/github/v/release/mmb-irb/biomovies-app?label=biomovies&color=6b9080&display_name=tag&include_prereleases&logo=data:image/gif;base64,R0lGODlhIAAgAOeJAAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKANMALAAAAAAgACAAAAj+AKcJFPivoMGDCBP+G8hwmsKHEAs2jEhR4cCKGBESxNhPm61RqpSpg+hw4UaF8lZVApVNXDhy8gwyPDgwHr+E8D5VUlXvXDtlqFDVSudupkyBqVQdW2fQHqlKpOz9E/ePHDpaqMyhMipRYLCgqILF81erEiZ0//Sl+xeuKrpglbgibIYrKDVplSpZQ1uuXz605LjlhRbxnjp+xXKpu1QJF76146r200duU6VX/SwK1OavHrt9qip5UsdsH76Rkfep3CRP7sDIkYvl/VaXGbV++Nz56zXb5Enfmc15y6uMHjNZQaGN6ye7EmHfJbs67FdOU6VamQu+C+fNmspP3Y78/j4oL1SlVfkQrru2DJq4fRn/jTMP6178h/4GWvIE7eZ91wLB449B6jQTTDDUfOPNN+xo9ttFBenzzDPw/GNNLrlU00wuydCjEYTSFYRPMeekteEvHP6DTi+7gOOOT/3IdZA+xKxlYS672ENMLg2yg2E14myjzDgDQuQMNwX5w0su2/xzTS7P9BONLrmAU1A/ycT04TTaIJMdPRi6wxaGQVaTyzLiReebL/UYdA+G5fzzDYbYxBNNLr+kSZNAbR504TE05iJMOfUEk6J0aoJ4UDvUoFhMPNgsg2FbiEqUUXaJ5cJMdgmNV1E/83hIkqf3dSpjqXs2pCaqDQUEADs=)](https://github.com/mmb-irb/biomovies-app/releases)
[![documentation](https://img.shields.io/readthedocs/biomovies-documentation/latest?label=documentation)](https://biomovies-documentation.readthedocs.io/en/latest/)
[![License: GPL](https://img.shields.io/badge/License-GPL_v3.0-green.svg)](https://opensource.org/license/gpl-3-0/)

## Brief description

The sources of the documentation of **biomovies**, the desktop editor of **molecular movies** for **macOS**, **Windows**
and **Linux**, published on [**Read the Docs**](https://biomovies-documentation.readthedocs.io/en/latest/).

The pages are Markdown files in `docs/source` (with `index.rst` as the table of contents), built with Sphinx; the
pictures are in `docs/source/_static`. The *Releases* page is read from the
[releases of biomovies](https://github.com/mmb-irb/biomovies-app/releases) on GitHub.

To build it on your computer:

```bash
pip install sphinx -r docs/requirements.txt
cd docs && make html
```

and open `docs/build/html/index.html`.

## Links

* [The documentation](https://biomovies-documentation.readthedocs.io/en/latest/)
* [The website](https://mmb-irb.github.io/biomovies/)
* [The downloads](https://github.com/mmb-irb/biomovies-app/releases)

## Credits

Genís Bayarri, Adam Hospital.

## Copyright & licensing

This software has been developed by the [MMB group](https://mmb.irbbarcelona.org) at the [IRB Barcelona](https://irbbarcelona.org).

© 2026 **Institute for Research in Biomedicine**

Licensed under the **GNU General Public License v3.0**.
