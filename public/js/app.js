const socket = io();
const client = feathers();
const expiresAfterHours = 72;

client.configure(feathers.socketio(socket));

var listen_vue = new Vue({
  el: "#app",
  data: {
    isLoading: false,
    currentHookId: "",
    currentEndpoint: "",
    showRequests: false,
    showListener: false,
    willExpire: null,
    posts: [],
    staleHook: false
  },
  computed: {
    count: function() {
      return this.posts.length;
    }
  },
  methods: {
    copyText: function() {
      var copyText = document.getElementById("endpoint");
      copyText.select();

      if (typeof document.execCommand === "function") {
        document.execCommand("copy");
      }
    },
    addPost: function(post) {
      const time = dateFns.format(
        dateFns.parse(post.time),
        "MM/DD/YY hh:mm:ss a"
      );
      post.time = time;

      this.posts.unshift(post);

      // set expires at for webhook
      this.willExpire = dateFns.format(
        dateFns.addHours(dateFns.parse(post.createdAt), expiresAfterHours),
        "MM/DD/YY hh:mm:ss a"
      );

      sendNotification({
        title: "Listen Up - " + this.currentHookId,
        text: "New POST request from " + post.headers.host
      });
    },
    clearList: function(post) {
      this.posts = [];
    },
    createHook: async function(data) {
      const hook = await client.service("webhooks").create({});
      const url = `${location.protocol}//${location.host}${location.pathname}`;
      this.currentHookId = hook._id;
      window.location.href = url + `?listen=${hook._id}`;

      this.willExpire = dateFns.format(
        dateFns.addHours(dateFns.parse(hook.createdAt), expiresAfterHours),
        "MM/DD/YY hh:mm:ss a"
      );
    },
    renewHook: async function(data) {
      try {
        this.isLoading = true;
        const hook = await client.service("webhooks").create({
          _id: this.currentHookId
        });
        if (hook._id) {
          this.showRequests = true;
          this.staleHook = false;

          this.willExpire = dateFns.format(
            dateFns.addHours(dateFns.parse(hook.createdAt), expiresAfterHours),
            "MM/DD/YY hh:mm:ss a"
          );
        }
      } catch (e) {
        this.currentHookId = hook._id;
      }
      this.isLoading = false;
    }
  },
  mounted: async function(data) {
    // Setting up notifications on initial mount
    setupNotify();

    let hook;
    let _id = URI()
      .search()
      .split("=")[1];

    if (!_id) {
      this.showListener = false;
      this.showRequests = false;
      return;
    }

    try {
      this.isLoading = true;
      hook = await client.service("webhooks").get(_id);
      this.showRequests = true;
      // Set expires date
      this.willExpire = dateFns.format(
        dateFns.addHours(dateFns.parse(hook.updatedAt), expiresAfterHours),
        "MM/DD/YY hh:mm:ss a"
      );
    } catch (error) {
      this.staleHook = true;
      this.showRequests = false;
    }

    // Successfully found a hook

    this.isLoading = false;
    this.showListener = true;
    this.currentHookId = _id;

    this.currentEndpoint = `${location.protocol}//${location.host}${location.pathname}test/${_id}`;
  }
});

Vue.component("post-block", {
  props: ["post"],
  data: function() {
    return {
      showHeaders: false
    };
  },
  computed: {
    showHide: function() {
      return this.showHeaders ? "Hide" : "Show";
    }
  },
  methods: {
    toggleHeaders: function(e) {
      this.showHeaders = !this.showHeaders;
    }
  }
});

var postService = client.service("posts");

postService.on("created", listen_vue.addPost);
