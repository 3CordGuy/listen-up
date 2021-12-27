import { writable } from 'svelte/store'
import { goto } from '$app/navigation';

export const posts = writable([{
  headers: {
    "host": "heylistenup.app",
    "connection": "close",
    "content-type": "application/json",
    "user-agent": "PostmanRuntime/7.26.8",
    "accept": "*/*",
    "cache-control": "no-cache",
    "postman-token": "5966e2f0-2d36-4bc8-a505-7b4e2aa67420",
    "accept-encoding": "gzip, deflate, br",
    "x-request-id": "143cd173-78b4-42a3-806b-41cc848e57ed",
    "x-forwarded-for": "172.221.113.88",
    "x-forwarded-proto": "https",
    "x-forwarded-port": "443",
    "via": "1.1 vegur",
    "connect-time": "0",
    "x-request-start": "1640628268544",
    "total-route-time": "0",
    "content-length": "20"
  },
  body: {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
,
  time: new Date()
}, {
  headers: {
    "host": "heylistenup.app",
    "connection": "close",
    "content-type": "application/json",
    "user-agent": "PostmanRuntime/7.26.8",
    "accept": "*/*",
    "cache-control": "no-cache",
    "postman-token": "5966e2f0-2d36-4bc8-a505-7b4e2aa67420",
    "accept-encoding": "gzip, deflate, br",
    "x-request-id": "143cd173-78b4-42a3-806b-41cc848e57ed",
    "x-forwarded-for": "172.221.113.88",
    "x-forwarded-proto": "https",
    "x-forwarded-port": "443",
    "via": "1.1 vegur",
    "connect-time": "0",
    "x-request-start": "1640628268544",
    "total-route-time": "0",
    "content-length": "20"
  },
  body: {
    "glossary": {
        "title": "Another nice glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
,
  time: new Date()
}])

export const createNewEndpoint = () => {
  fetch("/endpoints/create", {
    method: "POST"
  })
  .then((data) => {
    console.log(data.json().then(data => {
      goto(`/${data.id}`)

    }))
  })
}

export const clear = () => {
  posts.set([])
}
