# Descriptions

<!-- picture: a description over the stage and its settings in the right panel -->

A **description** is a text over the movie: a title, a sentence that explains what the clip shows. Descriptions have
their own row in the timeline, **Descriptions**, with their own times: usually those of a clip, but they can start and
end anywhere, and several can follow one another during one clip. They are part of the exported video.

## Adding one

**+ New > Description** adds the first description at the start of the movie, 1 second long. After that, select a
description (click one of its keyframes) and choose:

* **Description After** or **Description Before**: a new one next to it;
* **Cloned Description After** or **Before**: a copy of it, with its text and style, as long as it.

Drag its keyframes to set when it starts and ends, as for a clip (see [The timeline](editor-timeline.html)). **Split**
and **Join** in the timeline's toolbar also work on descriptions.

## Its settings

Click one of a description's keyframes: the right panel shows its settings.

| Setting | What it does |
| :-- | :-- |
| **Description text** | The text. Short reads best: a title under 8 words, a sentence under 12. |
| **Font family** | *Figtree*, *Arial*, *Anton*, *Caveat*, *Merriweather* or *Quicksand*. |
| **Font color** | The colour of the text. |
| **Background color** | The colour of the box behind the text. |
| **Background visibility** | Shows the box, or leaves the text alone over the stage. |
| **Position** | Where it sits on the stage: top, middle or bottom, each left, centre or right. You can also drag it on the stage; the list then says *moved*, and the button next to it puts it back where the list says. |
| **Font size** | From 20 to 80. |
| **Opacity** | From 0 (invisible) to 100. |
| **Appear** | How it comes in from its first keyframe, and for how long: *None* (at once), *Fade*, *Slide* from any side, *Grow*, *Typewriter* (letter by letter) or *Highlight* (its background sweeps in behind the text; it needs the background on). |
| **Disappear** | How it goes until its last keyframe, and for how long: *None*, *Fade*, *Slide* to any side, or *Shrink*. |

## Moving along its time

<!-- picture: an animated title rising from the middle to the top -->

With **Animate** on, a description can change while it is on screen: its **position**, **size** and **opacity** are
set at its **first keyframe** and at its **last**, and it goes from one to the other along its time. For example, a
title that starts big in the middle of the stage and rises to the top as it shrinks.

* The **First keyframe** and **Last keyframe** buttons move the cursor to each end; the settings you change then are
  that end's. Between the two, the panel asks you to go to one of them.
* **Easing** sets how the change speeds up and slows down: *Linear*, *Ease in*, *Ease out*, or *Ease in and out*.
* Dragging the text on the stage moves it at the keyframe the cursor is on, and the button next to *Position* undoes
  that drag at that end only.

With **Animate** off, the description stays the same from its first keyframe to its last.
