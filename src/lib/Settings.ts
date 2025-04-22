export namespace Settings {
  enum Keys {
    VISIBLE = "visible"
  }

  export function isOpen(): boolean {
    console.log(`isOpen: ${Spicetify.Platform.LocalStorageAPI.getItem(Keys.VISIBLE)}`);
    return Spicetify.Platform.LocalStorageAPI.getItem(Keys.VISIBLE) == "true";
  }

  export function setOpen(state: boolean) {
    Spicetify.Platform.LocalStorageAPI.setItem(Keys.VISIBLE, state);
  }
}
