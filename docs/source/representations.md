# Representations

<!-- picture: the right panel with two representation cards -->

A **representation** is a set of atoms drawn in a style and a colour: the protein as a cartoon, a ligand in ball and
stick, the water as small spheres. **Each clip has its own**: a movie changes what it shows from clip to clip, and a
transition fades one clip's representations into the next one's.

The **right panel** shows the representations of the clip under the timeline cursor (with the timeline stopped and
nothing selected) or of the clip whose keyframe is selected, one card each, with the clip's name at the top. Changes
are saved into that clip at once, and the transitions and fades next to it follow them.

At the top of the panel:

| Button | What it does |
| :-- | :-- |
| **+** | A new representation in this clip: every atom, in ball and stick. |
| **Paste** | Appears after *Copy to other clips* on a card: adds that representation to this clip. |
| **Hide all** / **Show all** | Hides or shows every representation of the clip. |
| **Collapse all** / **Expand all** | Folds or unfolds every card. |

## A representation's card

The buttons at the top of each card:

| Button | What it does |
| :-- | :-- |
| **Hide** / **Show** | Hides the representation in this clip without removing it. |
| **Clone** | A copy of the representation in the same clip, to change from there. |
| **Copy to other clips** | Copies it, to paste it into other clips (see [Copying to other clips](#copying-to-other-clips)). |
| **Center in this representation** | Points the selected keyframe's camera at it. |
| **Remove** | Removes it from the clip. |
| **Collapse** / **Expand** | Folds or unfolds the card. |

Below them: **Selection** (which atoms), **Opacity**, **Mol. Representation** (the style), **Color**, **Radius** (for
some styles) and **Show interactions**.

## Selection

Which atoms the representation draws. The list offers the usual sets:

| Group | Entries |
| :-- | :-- |
| Everything | *All* |
| Kinds of molecule | *Protein*, *Nucleic*, *RNA*, *DNA*, *Polymer*, *Hetero*, *Ligand*, *Ion*, *Lipid* (the membrane lipids: POPC, DPPC, cholesterol...), *Saccharide / Sugar*, *Water*, *Hydrogen* |
| Parts of the protein | *Backbone*, *Side Chain*, *Side Chain Attached* (the side chains with the backbone trace they hang from) |
| Secondary structure | *Helix*, *Sheet*, *Turn* |
| Kinds of residue | *Small*, *Nucleophilic*, *Hydrophobic*, *Aromatic*, *Amid*, *Acidic*, *Basic*, *Charged*, *Polar*, *Non Polar*, *Cyclic*, *Aliphatic* |
| Others | *Bonded*, *Ring* |

### Custom selections

Choose **Custom** in the list to type a selection; the button on the left of the box goes back to the list. Residue
numbers and chain names are the file's own.

| Type | To select |
| :-- | :-- |
| `145` | Residue 145 (in every chain). |
| `-5` | A negative residue number. |
| `52A:H` | Residue 52 with insertion code A, in chain H. |
| `10-20` | Residues 10 to 20 (`-7--6` with negative numbers). |
| `:A` | Chain A. |
| `10-20:A` | Residues 10 to 20 of chain A. |
| `145:A.SG` | One atom: SG of residue 145 in chain A. |
| `ligand`, `water:A` | A keyword, in every chain or in one: `*` (all), `protein`, `nucleic`, `polymer`, `ligand`, `ion`, `lipid`, `sugar`, `water`, `backbone`, `sidechain`, `sidechainAttached`, `helix`, `sheet`, `ring`. |
| `ligand, 25:A` | Several of the above, separated by commas. |
| `not ion, protein` | Everything except what follows `not`. |

When a selection matches no atoms, biomovies says so, naming what was asked, and leaves the representation as it was.

### Atoms around a selection

The round button on the right of the custom box turns the selection into the atoms **within a distance** of it: for
example, `902:B` with a distance of 5 Å gives the pocket around a ligand. **Distance** sets how far (1 to 50 Å), and
**Whole residues** takes every residue with at least one atom in reach, whole, instead of only those atoms.

## Opacity

From 0 (invisible) to 100 (solid). Fading the context lets the subject of a clip stand out: for example, the protein at
20 to 40 while the ligand stays solid.

## Mol. Representation

<!-- picture: the styles side by side on one structure -->

The style:

| Style | Draws |
| :-- | :-- |
| **Cartoon** | Helices as spirals, sheets as arrows, loops as tubes: the usual view of a protein's fold. |
| **Ribbon**, **Rope**, **Tube**, **Trace**, **Backbone** | Simpler drawings of the chain's path. |
| **Ball and stick** | Atoms as balls, bonds as sticks. |
| **Licorice** | Bonds as smooth tubes with round joints, every atom the same size. |
| **Hyperball** | Atoms and bonds melting into each other. |
| **Line** | Bonds as thin lines: light, good for the surroundings of a ligand. |
| **Spacefill** | Every atom as a sphere of its own size: the volume a molecule fills. |
| **Surface** | The molecular surface. |
| **Base** | The bases of nucleic acids. |

**Radius** sets how thick the drawing is, for the styles that have one (Cartoon, Backbone, Ball and stick, Licorice,
Spacefill, Base).

## Color

The colour scheme:

| Scheme | Colours by |
| :-- | :-- |
| **Uniform** | One colour, chosen with the colour box next to the list: the usual way to make the subject of a clip stand out. |
| **Element** | The kind of atom (carbon grey, oxygen red, nitrogen blue...). |
| **Chain id**, **Chain index** | Chain. |
| **Secondary structure** | Helix, sheet, loop. |
| **Residue index** | Position along the chain: a rainbow from one end to the other. |
| **Residue name** | Kind of residue. |
| **Hydrophobicity** | How hydrophobic each residue is. |
| **B-factor** | The B-factor column of the file. |
| **pLDDT (confidence)** | A predicted structure's confidence, in AlphaFold's colours (see below). |
| **Atom index**, **Model index**, **Random** | Atom order, model, or at random. |

**pLDDT (confidence)** colours a predicted structure (AlphaFold, ColabFold, ESMFold) the way AlphaFold DB does: very
high confidence dark blue, confident light blue, low yellow, very low orange. It reads the file's own confidence scores,
or the B-factor column, where predictions store pLDDT. For an experimental structure (whose B-factors are not
confidence scores) or a file without scores, it is greyed out in the list, with the reason under its name.

## Show interactions

Draws the non-covalent interactions of the selection as dashed lines: hydrogen bonds, ionic, hydrophobic, π-stacking,
halogen bonds and metal coordination. The atoms involved are drawn in ball and stick, whatever the representation's
style. For example, a ligand with *Show interactions* on shows how it holds in its pocket.

## Copying to other clips

**Copy to other clips** on a card copies the representation. Then, in any other clip, the **Paste** button next to
**+** adds it, as many times as wanted. A clip that already has the same representation does not get it again, and a
message says so. The copy is kept until the project is closed.
