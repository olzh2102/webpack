import Post from './Post'
import json from './assets/json.json'
import './styles/styles.css'

const post = new Post('Webpack Post Title')

console.log('Post to String: ', post.toString())
console.log('JSON:', json)
