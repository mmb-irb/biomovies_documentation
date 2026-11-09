# Trajectories

<!-- picture: the trajectory window next to a clip playing its trajectory -->

A project can have one **trajectory** of its structure: a molecular dynamics simulation, for example. Each clip
decides whether it **plays** it, and which frames, how fast and in which direction. A clip that does not play it shows
the first frame of its range, still.

## Adding a trajectory

* **New project with trajectory** on the start screen: the structure (the topology) and its trajectory (**XTC**,
  **DCD** or **NetCDF**), chosen together.
* **New project from MDposit**: a simulation of the MDposit database comes with its trajectory.
* **Project > Load Trajectory…**: adds a trajectory to the open project, if it has none yet.
* **Project > Remove Trajectory…** takes it out.

The trajectory must belong to the structure: same atoms, in the same order. A big trajectory takes a while to load,
and it is saved inside the **.biomovies** file, which grows with it.

## Playing it in a clip

At the bottom of the right panel, **Play trajectory for this clip** turns it on for the clip under the cursor. The clip
gets stripes in the timeline, and the **trajectory window** opens with its settings. The button next to the switch opens
the window again.

The window floats over the editor: the timeline and the stage stay usable, and it follows the clip the panel shows.
Move it by its title; **Esc** or its cross closes it.

| Setting | What it does |
| :-- | :-- |
| **Range** | The first and last frames the clip plays. Type them or drag the slider's handles: the stage shows the frame of the handle you drag. With the keyboard: ⌘+⌥+1 / 2 (Ctrl+Alt+1 / 2) move the first frame down or up, ⌘+⌥+3 / 4 (Ctrl+Alt+3 / 4) the last one. |
| **Step** | How many frames it moves at each playing step: 1 plays every frame, 2 every other frame... |
| **Timeout** | How many timeline steps (0.04 s each) between playing steps: 1 is the fastest. |
| **Play in reverse** | Plays the range from its last frame to its first. |

Below them, the window adds it up: how long the **clip** lasts, how long the **trajectory** needs with these settings
(and how many frames it plays), and the **speed** in frames per second. A line says how they match:

* the clip plays the **whole range**;
* the range ends **before the clip** does, and the last frame stays on screen for the rest of the clip;
* the clip is **too short**, and ends before the last frame of the range.

The bar under the slider shows the same over the frames. **Fit the clip to the trajectory** makes the clip exactly as
long as its range needs. When the next item is in the way, biomovies asks first, then moves everything after the clip
later to make room (a description that would be cut too short is removed, and the question names it).

With a trajectory, the right end of the timeline's toolbar shows which frame the cursor is on, among the frames the
clip plays (the trajectory's own frame number in its tooltip).

## Through transitions

When the clips on both sides of a transition play the trajectory, it keeps playing through the transition: both sides
show the same frame, going from the frame the first clip ends on to the frame the second starts on. With the cursor on
the transition, the trajectory window says how that goes:

* at the **clips' speed**, or staying on one frame when both clips meet at the same frame;
* **slower** or **faster** than the clips, when the frames between them do not match the transition's length. Buttons
  then offer to fix it, such as *Start Clip 2 at frame 120* or *End Clip 1 at frame 95*;
* **starting again**, when the second clip starts at an earlier frame than the one the first ends on: the transition
  then cross-fades the two frames instead of playing.

## Splitting and templates

* **Splitting** a clip that plays its trajectory keeps it going: the second part starts at the frame the first part
  reached.
* A **template** made from a project with a trajectory asks for a structure and a trajectory too. If the new trajectory
  has a different number of frames, the clips' ranges are fitted to it.
