const socket = io();
const client = feathers();

client.configure(feathers.socketio(socket));

var listen_vue = new Vue({
  el: '#app',
  data: {
		currentHook: '',
		showListener: false,
    posts: [
			{
				message: 'Test message'
			},
			{
				message: 'Test message 2'
			}
		]
	},
	methods: {
		addPost: function (post) {
			this.posts.unshift(post);
		},
		clearList: function (post) {
			this.posts = [];
		},
		createHook: async function (data) {
			const hook = await client.service('webhooks').create({});
			const url = [location.protocol, '//', location.host, location.pathname].join('');
			this.currentHook = hook._id;
			window.location.href = url + `?listen=${hook._id}`;
		}
	},
	mounted: function (data) {
		const hook = URI().search().split('=')[1];
		if (hook) {
			this.showListener = true;
			this.currentHook = [location.protocol, '//', location.host, location.pathname].join('') + "test/" + hook;
		}
	}
});

var postService = client.service('posts');

postService.on('created', listen_vue.addPost);
