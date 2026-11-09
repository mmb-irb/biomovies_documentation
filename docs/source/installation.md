# Installation

Download the file for your computer from the [**website** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://mmb-irb.github.io/biomovies/#download)
or from the [**latest release** <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i>](https://github.com/mmb-irb/biomovies-app/releases)
on GitHub:

| System | File |
| :-- | :-- |
| <i class="fa-brands fa-apple"></i> **macOS** (Apple silicon) | `biomovies-X.Y.Z-arm64.dmg` |
| <i class="fa-brands fa-windows"></i> **Windows** (64-bit) | `biomovies-X.Y.Z-x64.exe` |
| <i class="fa-brands fa-ubuntu"></i> **Ubuntu** (64-bit) | `biomovies-X.Y.Z-amd64.deb` |

biomovies is free software made by a research group, and its installers are not signed with a paid certificate from
Apple or Microsoft. So the first time, your computer warns you that it does not know the app. The steps below show how
to open it anyway. You do this only once.

## macOS

1. Open the **.dmg** file and drag **biomovies** onto the **Applications** folder.
2. Open **Applications** and double-click **biomovies**. macOS says it could not verify that biomovies is free of
   malware: click **Done**.
3. Open **System Settings > Privacy & Security** and scroll down to **Security**. Next to *"biomovies" was blocked to
   protect your Mac*, click **Open Anyway**. Confirm with **Open Anyway** and your password or Touch ID.

From then on, biomovies opens with a double-click like any other app.

On **macOS 12 to 14**, steps 2 and 3 are simpler: right-click (or Control-click) **biomovies** in **Applications**,
choose **Open**, then **Open** again.

If macOS says that biomovies *is damaged and can't be opened*, the file is fine: it is how macOS sometimes treats apps
from the internet that are not notarized by Apple. Open the **Terminal** app, paste this line, press Enter, and open
biomovies again:

```bash
xattr -cr /Applications/biomovies.app
```

## Windows

1. If your browser warns about the download, choose **Keep**.
2. Double-click the **.exe** file. Windows shows *Windows protected your PC*: click **More info**, then **Run anyway**.
3. biomovies installs for your user (no administrator password needed) and opens. It leaves a shortcut on the desktop
   and in the Start menu.

To uninstall it: **Settings > Apps**, **biomovies**, **Uninstall**.

## Ubuntu

1. If your browser warns that the file may be dangerous, open the browser's downloads list and choose **Keep** (in
   Chrome, sometimes under **⋮** as *Download dangerous file*). Browsers warn about any installer that few people
   have downloaded yet.
2. Double-click the **.deb** file. It opens in **App Center** (**Ubuntu Software** in Ubuntu 22.04): click **Install**
   and enter your password.
3. biomovies is in your applications: click **Show Applications** and search for *biomovies*.

If the .deb file opens in another program, right-click it and choose **Open With > App Center** (or **Software
Install**). If installing that way fails, open the **Terminal** app in the folder of the file and type:

```bash
sudo apt install ./biomovies-X.Y.Z-amd64.deb
```

with the name of the file you downloaded.

To uninstall it: find **biomovies** in **App Center > Manage** and click **Uninstall**.

## Updates

biomovies tells you when a new version is out, on its start screen and in the editor's status bar. You can also ask:
**biomovies > Check for Updates…** in the menu.

* **macOS:** biomovies downloads the new version for you. **Quit and Install** opens it: drag **biomovies** onto
  **Applications** again and replace the old one.
* **Windows** and **Ubuntu:** biomovies opens the release page. Download the new file and install it as the first time:
  it replaces the old version.

Your projects are not touched by an update.
