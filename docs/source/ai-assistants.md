# AI assistants

An **AI assistant** can build and change movies in biomovies for you: ask it in its own chat (*"make a 20-second movie
of 1HSG showing how the inhibitor sits in the protease"*) and watch the movie being made in the editor. It opens the
structure, plans the clips, builds them, looks at the result and corrects it.

biomovies works with four assistants, which you use with your own account:

* **Claude Code** (Anthropic's assistant in the terminal, or in VS Code);
* **Claude Desktop** (its chats, Cowork and its Code tab);
* **opencode** (with any model it can reach, including models running on your own computer or your institution's
  servers);
* **VS Code's Copilot** (its chat in Agent mode).

biomovies includes no AI and no account of its own: the assistant's own plan or provider applies.

## Connecting an assistant

<img src="_static/pictures/connection-window.png" alt="The connection window" style="max-width:500px; margin-bottom:0;" />

<span style="font-size:12px;">The connection window</span>

**Assistant > Connection…** opens the connection window, on the start screen or in the editor.

1. Turn the **Connection** on. While it is on, the assistants can work on the open project (or start one from the
   start screen) when you ask them. biomovies remembers it, also after a restart, until you turn it off.
2. For each assistant installed on this computer that does not have the biomovies tools yet, the window offers a
   button: **Add to Claude Code**, **Add to Claude Desktop**, **Add to opencode** or **Add to VS Code**. Done once per
   assistant.
3. Start a new session of the assistant (Claude Code, opencode), reopen Claude Desktop, or open VS Code's chat in Agent
   mode: biomovies' tools are now among its tools.

A few details:

* **Claude Desktop** must be closed while you add biomovies to it: it keeps its settings in the same file.
* **opencode** and **Claude Desktop** settings are edited only if they are plain files biomovies can read; a copy of
  the file as it was stays next to it (*.biomovies-backup*).
* **VS Code** asks you to trust the biomovies server the first time it starts it.
* When adding fails, the window shows the lines to paste (or the command to run) instead, with a **Copy** button.
* When biomovies is moved or updated, the window may say an assistant's tools *run a copy of biomovies that is no
  longer there*: click **Update** next to it.

## Asking for a movie

Ask in plain words, in the assistant's chat:

* *"Make a movie of PDB 1HSG: the whole protease, then a close-up of the inhibitor."*
* *"The AlphaFold model of P69905 coloured by confidence, turning slowly."*
* *"Make clip 2 longer and colour the ligand yellow."* (on the open project)

Claude Code, opencode and Copilot also offer two ready requests:

| Request | Claude Code, opencode | VS Code's Copilot | What happens |
| :-- | :-- | :-- | :-- |
| **movie** | `/biomovies:movie 1HSG` | `/mcp.biomovies.movie` | The assistant proposes a plan for a movie of that structure and builds it when you agree. |
| **paper** | `/biomovies:paper` followed by the PDF's path | `/mcp.biomovies.paper` | It reads the paper, finds its structure, proposes a storyboard with the paper's own words and builds it when you agree. |

In Claude Desktop, ask in plain words: its chats do not list these requests.

A few things to know:

* **New movies** start from the start screen: if a project is open, the assistant asks you to save and close it first.
* For a **PDB entry** whose biological assembly differs from the structure as deposited, the assistant asks which one
  you want.
* A movie shows **one structure**: comparing two (with and without a drug) is not possible yet.

## While it works

While the assistant changes the movie, a card at the top says what it is doing, and the editor is locked so that
nothing changes under it; you watch the movie being built. To stop it, stop the assistant in its own window (Esc in
Claude Code); if the editor stays locked, the card says when it unlocks, or press **Esc** on it.

When it is done:

* **Edit > Undo** (⌘Z, Ctrl+Z) undoes the **whole request** in one step.
* Everything it made can be changed in the editor as usual.
* The assistant tells what it made, clip by clip, what it checked and what it corrected.

## Pictures

To check its work, the assistant looks at pictures of the movie's key moments, with measurements of how its subject
sits in each one (cut at an edge, too small, under a text).

* **Claude Code**, **Claude Desktop** and **Copilot** get the pictures.
* **opencode** gets the measurements only, as many of its models read text only. With a model that reads images, turn
  **Pictures** on under opencode in the connection window.

## Scripts

What an assistant does is a list of commands, and biomovies can keep it as a **script** (a .json file):
*Debugging > Save the Assistant's Commands as Script…* saves what the assistants ran since biomovies opened, and
*Debugging > Run Script…* runs a script on the start screen or on the open project. A way to make the same movie
again, or to share how it was made.
