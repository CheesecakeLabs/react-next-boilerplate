# react-next-boilerplate

Welcome to our React/Next boilerplate, we are really anxious to start a new app development using these technologies.
So we are inviting you to ride with us on this document to learn how to grow up your app scratching from here.

[Let's do it together!!!](https://www.youtube.com/watch?v=ZXsQAXx_ao0)

## Getting Started

### First step - Run the boilerplate

So, in the first moment you should clone this repo into your work dir:

```sh
$ git clone git@github.com:CheesecakeLabs/react-next-boilerplate.git
```

ok, now we have a copy of `react-next-boilerplate`, let's rename it:

```sh
$ mv react-next-boilerplate <project-name>
```

and go there...

```sh
$ cd <project-name>
```

Now, we are ready to serve our dev server, to do this, please run this command:
```sh
$ yarn dev
```

### Image upload component

**Context**

With image upload component is possible to show a preview of the current chosen image from the 💻 or taken from a 📸 . Also is possible to ✂ the image according to aspect ratio, ✅ dimensions on the client side, and upload to a server 🎉🎉🎉

Preview of the docs:
This component allows the use to choose imagens from the local computer, or from the user media device (noticed that it's possible to disable the camera device by setting `false` to `userMediaEnabled`)

All images format are allowed, and can be restricted by passing a Array of strings on the prop `accept`  / `acceptedImgExtensions` (Todo make just one parameter).

It's possible to restrict some parameter of the image as `Width`, `Height` and `File size` (all options possible are available at the table below).

When some of this images parameter is invalid an error message will be displayed on the component dialog, currently, it's possible to customize the warning messages through the props invalidFileSizeText, invalidFileDimensionsText and invalidFileExtension.

As mentioned before, the component can take images from the local computer or from the user media device, in both methods it's possible to enable image visualization with post-processing image (currently just cropping it's available).

It's possible to customize the properties of the video track by customizing the MediaStreamConstraints(s) for the video (for more details look at the docs (link please))
````
{ //needs more information abour each parameter and perhaps a link to the msdn page
	height (Number),
	width (Number),
	scrennshotFormat:  PropTypes.string,
	videoConstraints:  PropTypes.shape({
		width:  PropTypes.number, // needs more information
		height:  PropTypes.number, // needs more information
		facingMode:  PropTypes.string,
}
````

For the post-processing, It's possible to customize the behavior of the crop by passing a "Crop Object" that could have the following parameters:
```
   crop = {
	aspect: 1,
	x: 10,  		# in percentage
	y: 10, 			# in percentage
	width: 80,		# in percentage
	height: 80,		# in percentage
}
```


**Available Props**

| Parameter | Type | Default Value | Description |
| --- | --- | --- | --- |
| `minWidth` | Number | 0 | A minimum width accepted of the image width property |
| `maxWidth` | Number | 500 | A maximum width accepted of the image width property |
| `minHeight` | Number | 0 | A minimum height accepted of the image height property |
| `maxHeight` | Number | 500 | A maximum height accepted of the image height property |
| `minFileSize` | Number | 0 | Minimum image size |
| `maxFileSize` | Number | 15000 | Maximum image size |
| `accept` | String | image/* | Atributes accepted for image input  |
| `withPreview` | Boolean | true | Show a dialog with the selected image |
| `withCrop` | Boolean | false | Enable crop image according aspect ratio |
| `label` | String | 'Max file size 15kb, accepted png, jpg, max width: 500px and max height 500px. Accepted: jpg, jpeg, png, gif' |  Brief description |
| `buttonText` | String | 'Choose image from computer' | Action text |
| `acceptedImgExtensions` | Array | ['.jpg', '.png'] | Accepted image extensions that will be used on validation |
| `crop` | Object | undefined | An object with properties to add a crop on image |
| `userMediaEnabled` | Boolean | true | Enable device camera |
| `userMedia` | Object |undefined | User media properties |


**Note:** if you don't have yarn installed go to this [link](https://yarnpkg.com/lang/en/docs/getting-started/) and follow the instructions.

Congratulations, your server is running on [http://localhost:5000](http://localhost:5000)!!!

The **first** step of our work is done.

### Second step - Configure the git

[WIP]

### Third sted - Replace files

[WIP]

## How to...

[WIP]

## Articles

[WIP]

## How to Contribute

[WIP]

## License

[WIP]
