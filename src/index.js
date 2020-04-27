import Post from './Post'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post(
	'Webpack Post Title',
	WebpackLogo
)

console.log('Post to String: ', post.toString())
console.log('JSON:', json)
