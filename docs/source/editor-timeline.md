# The timeline

<!-- picture: the timeline with clips, a transition, a fade and descriptions -->

The **timeline**, at the bottom of the editor, is the movie in time. It has two rows:

* the **structure** (the row named after its file): **clips**, and the **transitions** and **fades** between them;
* **Descriptions**: the texts over the movie (see [Descriptions](descriptions.html)).

Every item starts and ends with a **keyframe**, the small diamond at each end of its bar. The **cursor** (the white
line) marks the time the stage shows, and the **timer** on the left says it in minutes, seconds and milliseconds. Times
go in steps of 0.04 s, 25 frames per second, and items keep at least one step apart.

## What each item is

| Item | What it does |
| :-- | :-- |
| **Clip** | Shows its own **representations**, **labels** and **measurements**, under a **camera** that goes from the view at its first keyframe to the view at its last while it plays. |
| **Transition** | Between two clips: the camera flies from where the first ends to where the second starts, and the first clip's representations fade into the second's. |
| **Fade in**, **fade out** | Before a clip, from an empty stage; after it, to an empty stage. |
| **Description** | A text over the movie, with its own times, effects to appear and disappear, and a place and size that can change along its time. |

## Moving around

* **Click** the timeline to move the cursor there, or drag the cursor.
* **Play** the movie with the player buttons on the right of the toolbar, or with the keyboard: **Shift+P** plays and
  pauses, **Shift+Left** and **Shift+Right** go one frame back or forward (hold the buttons to keep going), and
  **Shift+Up** and **Shift+Down** go to the first and last frame.
* **Zoom** the timeline with Ctrl+scroll or a trackpad pinch, or with the **Zoom** button (click to zoom in, ⌘+click or
  Ctrl+click to zoom out). The **Pan** button lets you drag the whole timeline sideways. **Reset timeline** puts the
  zoom back, leaves pan mode and takes the cursor to the start.

## Selecting

| Gesture | Selects |
| :-- | :-- |
| Click a keyframe | That keyframe. A single clip keyframe is what the stage's camera edits. |
| Double-click a bar, or ⌘+click / Ctrl+click it | The whole item (clip, transition, fade or description). |
| **Shift**+click | Adds a keyframe or a bar to the selection, or takes it out. |
| Drag a rectangle over an empty part | Every keyframe inside it. |
| **Select all keyframes** button | Every keyframe of the timeline. |

## Moving and resizing

* **Drag a keyframe** to make its item longer or shorter. A keyframe cannot go past the next one, so to make room,
  first move what follows.
* **Drag a selection** to move it: a whole item, or everything selected at once. To make room after a clip, drag a
  rectangle over everything after it and drag it to the right.
* **Move left** and **Move right** in the toolbar move the selected keyframes one step (0.04 s); hold them down to
  keep going.

## Adding items

The **+ New** button (and *Timeline > New Item* in the menu):

| Entry | Needs | What it adds |
| :-- | :-- | :-- |
| **Clip After**, **Clip Before** | A selected clip (or one of its keyframes). | A new clip, every atom in ball and stick, whose camera starts where the selected clip ends (or, before it, ends where it starts). *After* goes right after it, or at the end of the timeline when there is no room; *Before* only when there is room. |
| **Cloned Clip After**, **Cloned Clip Before** | A selected clip. | The same, but with a copy of the clip's representations, labels and measurements: the usual way to go on with a movie. |
| **Transition** | The last keyframe of a clip and the first of the next one, selected (click, then Shift+click), at least 0.4 s apart. | A transition filling the gap between them. |
| **Fade In** | A clip's first keyframe selected, with room before it (about 0.5 s). | A fade in before the clip. |
| **Fade Out** | A clip's last keyframe selected, with room after it (about 0.5 s). | A fade out after the clip. |
| **Description** | For the second one on, a selected description. | The first description goes at the start of the movie, 1 s long. Then *Description After* and *Description Before* add one next to the selected description, and the *Cloned* versions copy its text and style. See [Descriptions](descriptions.html). |

When something is missing (no clip selected, not enough room), a message says what to do.

## The toolbar

<!-- picture: the timeline toolbar, buttons numbered -->

From left to right, after **+ New**:

| Button | What it does |
| :-- | :-- |
| **Remove** | Removes the selected clip, transition, fade or description. Click it twice, so that a single click does not remove anything by mistake. |
| **Split** | Cuts the selected clip or description in two at the cursor. Double-click it (or ⌘/Ctrl+click it) where it must be cut: the cursor goes there. Nothing changes in what plays: the second part goes on with the same camera, trajectory and representations. |
| **Join** | Joins two consecutive clips, or descriptions, into one: select the last keyframe of the first, Shift+click the first keyframe of the second. |
| **Reset timeline** | Zoom back to the start, pan mode off, the cursor at the beginning. |
| **Pan** | Drag the whole timeline sideways. |
| **Zoom** | Click to zoom in, ⌘/Ctrl+click to zoom out. |
| **Align with the first**, **Align with the last** | With several keyframes selected: gives them all the camera of the first (or the last) of the selection. |
| **Align with the cursor keyframe** | Gives the selected keyframes the camera of the one under the cursor (click it first, then Shift+click the others). |
| **Select all keyframes** | Every keyframe of the timeline. |
| **Associate transition to clip** | Links a transition to a clip, for example after replacing the clip it went with. Select the transition's first keyframe and the last keyframe of the clip before it, or the transition's last keyframe and the first keyframe of the clip after it. |
| **Move left**, **Move right** | Move the selected keyframes one step. |
| **Player** | First frame, previous frame, play / pause, next frame, last frame. |

With a trajectory, the right end of the toolbar also shows the trajectory frame at the cursor (see
[Trajectories](trajectories.html)).

Every change can be undone with **Edit > Undo** (⌘Z, Ctrl+Z) and redone with **Edit > Redo**. All the shortcuts of the
*Timeline* menu are in [Tips and shortcuts](utilities.html#shortcuts).
