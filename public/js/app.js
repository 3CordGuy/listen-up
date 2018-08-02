const socket = io();
const client = feathers();

client.configure(feathers.socketio(socket));

var listen_vue = new Vue({
  el: '#app',
  data: {
		currentHookId: '',
		currentEndpoint: '',
		showRequests: false,
		showListener: false,
		posts: [],
		staleHook: false
	},
	computed: {
    count: function () {
      return this.posts.length;
    }
  },
	methods: {
		addPost: function (post) {
			const time = dateFns.format(dateFns.parse(post.time), 'MM/DD/YY hh:mm:ss a');
			post.time = time;
			
			this.posts.unshift(post);
		},
		clearList: function (post) {
			this.posts = [];
		},
		createHook: async function (data) {
			const hook = await client.service('webhooks').create({});
			const url = [location.protocol, '//', location.host, location.pathname].join('');
			this.currentHookId = hook._id;
			window.location.href = url + `?listen=${hook._id}`;
		},
		renewHook: async function (data) {
			try {
				const hook = await client.service('webhooks').create({
					_id: this.currentHookId
				});
				if (hook._id) {
					this.showRequests = true;
					this.staleHook = false;
				}
			}
			catch (e) {
				this.currentHookId = hook._id;
			}
		}
	},
	mounted: async function (data) {
		const _id = URI().search().split('=')[1];
		let hook;

		try {
			hook = await client.service('webhooks').get(_id);
			console.log(hook)
			this.showRequests = true
		} 
		catch (error) {
			this.staleHook = true
			this.showRequests = false
		}

		this.showListener = true;
		this.currentHookId = _id;
		this.currentEndpoint = [location.protocol, '//', location.host, location.pathname].join('') + "test/" + _id;
	}
});

Vue.component('post-block', {
	props: ['post'],
	data: function () {
		return {
			showHeaders: false
		};
	},
	methods: {
		toggleHeaders: function (e) {
			console.log('clicked!!')
			this.showHeaders = !this.showHeaders;
		}
	}
})

var postService = client.service('posts');

postService.on('created', listen_vue.addPost);
