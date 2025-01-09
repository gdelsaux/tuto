# Google Auth for NextJs

### Requirement
- An existing NextJs app
- Next Aut
    - run ```npm i next-auth``` in root dir [doc](https://next-auth.js.org/getting-started/example)
- unable server action for your NextJs app
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Enable server actions
  },
};

module.exports = nextConfig;
```

### Create OAuth client ID
- Head over to the [Google Console](https://console.cloud.google.com/welcome) and create a new project
- Go to APIs & Services -> OAuth consent screen -> GO TO NEW EXPERIENCE and complete the set up
- When set up is done, go to client (left hand side menu)
    - Authorized JavaScript origins = http{s?}://{dev ? localhost:3000 : domain_name}
    - Authorized redirect URIs = http{s?}://{dev ? localhost:3000 : domain_name}/api/auth/callback/google
    - more info [here](https://next-auth.js.org/providers/google)
- click on client Download OAuth client to display the credentials

### Create the auth config
This tutorial only includes Google auth but multiple ones can be use, see [here](https://next-auth.js.org/providers/)

The demo file can be seen [here](lib/auth.ts)

### Create the route for the auth
Create a [file](app/api/auth/[...nextauth]/route.ts) call in inside a folder structure as follow
app  
├─ api  
│	├─ auth  
│	│	├─ [...nextauth]  
│	│ │	└─ route.ts

### Managing the session
To get the session we create a [server action](server/actions/getSession.ts)  
if no session is found we redirect to ```api/auth/signin```  
To sign out with use the built in function ```signout``` from ```next-aut```


#### notes:
in order to use the next Image component we need to modify our ```next config``` slightly
```javascript
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true, // Enable server actions
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  }
};

module.exports = nextConfig;
```


