# WhoAdded

Here is the source code for `WhoAdded`!

If you would like to download the "precompiled" extension, you can go [here](https://github.com/GentlyTech/spicetify-extensions/tree/master/WhoAdded) instead. Alternatively, you can search for the extension on the Spicetify Marketplace.

## Building

To build the extension yourself, clone this repo, and then run the following commands (inside the folder you cloned it to):

```
npm install
npm run build-local
```

## Notes

- The extension will be output in `../marketplace/WhoAdded` by default. You can change this by editing `package.json` -> `scripts` -> `build-local` and setting the `--out=` parameter to a path of your choice.

- You will need the `spicetify-creator` npm package (but this should be handled automatically when you run `npm install`).

## TODO

- [ ] Remember whether widget should be open or not on app launch
- [X] Fix data retrieval when song is played from "Liked Songs" playlist
- [ ] Fix data retrieval when song is quick-played via folder
- [ ] Add full screen support
