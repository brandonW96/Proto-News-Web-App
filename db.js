const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');
// my schema goes here!
mongoose.connect('mongodb://localhost/hw06');

const Image = new mongoose.Schema({
	caption: String,
	url: String,
});

const ImagePost = new mongoose.Schema({
	title: String,
	images: [Image]
});

ImagePost.plugin(URLSlugs('title', 'images'));

mongoose.model('Image', Image);
mongoose.model('ImagePost', ImagePost);