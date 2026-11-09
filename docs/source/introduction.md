<p align="center">
  <a href="https://mmb-irb.github.io/biomovies/">
    <img src="_static/logo.png" width="200" />
  </a>
</p>

# Introduction

[![version](https://img.shields.io/github/v/release/mmb-irb/biomovies-app?label=biomovies&color=6b9080&display_name=tag&include_prereleases&logo=data:image/gif;base64,R0lGODlhIAAgAOeJAAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKANMALAAAAAAgACAAAAj+AKcJFPivoMGDCBP+G8hwmsKHEAs2jEhR4cCKGBESxNhPm61RqpSpg+hw4UaF8lZVApVNXDhy8gwyPDgwHr+E8D5VUlXvXDtlqFDVSudupkyBqVQdW2fQHqlKpOz9E/ePHDpaqMyhMipRYLCgqILF81erEiZ0//Sl+xeuKrpglbgibIYrKDVplSpZQ1uuXz605LjlhRbxnjp+xXKpu1QJF76146r200duU6VX/SwK1OavHrt9qip5UsdsH76Rkfep3CRP7sDIkYvl/VaXGbV++Nz56zXb5Enfmc15y6uMHjNZQaGN6ye7EmHfJbs67FdOU6VamQu+C+fNmspP3Y78/j4oL1SlVfkQrru2DJq4fRn/jTMP6178h/4GWvIE7eZ91wLB449B6jQTTDDUfOPNN+xo9ttFBenzzDPw/GNNLrlU00wuydCjEYTSFYRPMeekteEvHP6DTi+7gOOOT/3IdZA+xKxlYS672ENMLg2yg2E14myjzDgDQuQMNwX5w0su2/xzTS7P9BONLrmAU1A/ycT04TTaIJMdPRi6wxaGQVaTyzLiReebL/UYdA+G5fzzDYbYxBNNLr+kSZNAbR504TE05iJMOfUEk6J0aoJ4UDvUoFhMPNgsg2FbiEqUUXaJ5cJMdgmNV1E/83hIkqf3dSpjqXs2pCaqDQUEADs=)](https://github.com/mmb-irb/biomovies-app/releases)
[![documentation](https://img.shields.io/readthedocs/biomovies-documentation/latest?label=documentation)](https://biomovies-documentation.readthedocs.io/en/latest/)
[![License: GPL](https://img.shields.io/badge/License-GPL_v3.0-green.svg)](https://opensource.org/license/gpl-3-0/)

**biomovies** is a desktop editor of **molecular movies** for **macOS**, **Windows** and **Linux**. Starting from a 3D
structure, you build a movie clip by clip, each clip with its own representations and camera, and export it as a video.

## What you can do

* **Start from** a **PDB** or **mmCIF** file, a **PDB code**, an **AlphaFold DB** model or a **UniProt** accession, an
  **MDposit** simulation, or a structure with its **trajectory** (**XTC**, **DCD** or **NetCDF**).
* **Build** the movie in clips: in each one, **representations** (what to show, how and in which colour) and the
  **camera**; between them, **transitions** and **fades**. Add **descriptions** (text on screen), **labels** and
  **measurements**, and play the **trajectory** inside the clips.
* **Export** an **MP4 video** (from 720p up to **4K**, also in **3D**), or an **animated GIF**, of the
  whole movie or of a part of it.
* **Save** the project in a **.biomovies** file, with the structure and the trajectory inside, to edit or share it.
  **Templates** make the same movie of another structure: start from a ready-made one or save your own.
* **Ask an AI assistant**: **Claude Code**, **Claude Desktop**, **opencode** or **VS Code's Copilot** can build and
  change movies in the open editor, from a request or from a paper.

biomovies is **non-profit experimental** software in its **Alpha** version: some **bugs** can happen. **Save** your
projects often and [**let us know** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://github.com/mmb-irb/biomovies-app/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=)
when something goes wrong.

Movies made with biomovies are in the [**website gallery** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://mmb-irb.github.io/biomovies/#gallery),
and step-by-step videos in its [**tutorials** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://mmb-irb.github.io/biomovies/#tutorials).

## Requirements

| | <i class="fa-brands fa-apple"></i> macOS | <i class="fa-brands fa-windows"></i> Windows | <i class="fa-brands fa-ubuntu"></i> Linux |
| :-- | :-- | :-- | :-- |
| **System** | macOS 12 (Monterey) or later | Windows 10 or 11 | Ubuntu 22.04 or later |
| **Processor** | Apple silicon (M1 or later) | 64-bit (x64) | 64-bit (x64) |
| **Memory** | 16 GB recommended | 16 GB recommended | 16 GB recommended |

A graphics card helps but is not required: on computers without one (virtual machines, remote desktops) biomovies
works, drawing more slowly. An internet connection is needed only to open structures from online databases (PDB,
AlphaFold DB, MDposit) and to check for updates.

## Installation

See the [**installation section**](installation.html).

## Technology

biomovies is built with [**Vue** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://vuejs.org/)
on top of [**Electron** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://www.electronjs.org/),
with the [**PrimeVue** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://primevue.org/)
components. The molecules are drawn by [**Mol\*** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://molstar.org/).

## Acknowledgements

biomovies is built on these libraries, among others (*Help > Third-Party Licenses* in the app lists them all):

* [**Mol\* Viewer: modern web app for 3D visualization and analysis of large biomolecular structures** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://pubmed.ncbi.nlm.nih.gov/33956157/)
* [**Mediabunny** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://mediabunny.dev/) (MP4 videos)
* [**gifenc** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://github.com/mattdesl/gifenc) (animated GIFs)
* [**Animation Timeline Control** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://github.com/ievgennaida/animation-timeline-control)

## Credits

Genís Bayarri, Adam Hospital.

## Copyright & licensing

This software has been developed by the [**MMB group** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://mmb.irbbarcelona.org/)
at the [**IRB Barcelona** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://irbbarcelona.org/).

© 2026 **Institute for Research in Biomedicine**

Licensed under the **GNU General Public License v3.0**.
