# Svelte Sample App

Integrate Descope Authentication in Svelte with SvelteKit Auth by building a company landing page. 

##  🎨 Features
- [Descope](https://descope.com/) SvelteKit authentication 🔐
- Customizable landing page.
- Protected Profile page with SvelteKit Auth.
- Fully responsive UI (mobile, tablet, computer).


## ✨ Made with...
- [Descope](https://www.descope.com/)
- [SvelteKit Auth](https://authjs.dev/reference/sveltekit)

## ⚙️ Setup

1. Clone the repository:

```
git clone https://github.com/descope-sample-apps/svelte-sample-app.git
```

2. Install dependencies:

```
npm install
```

3. Setup environment variables:

```
DESCOPE_ID="YOUR_DESCOPE_PROJECT_ID"
DESCOPE_SECRET="YOUR_DESCOPE_ACCESS_KEY"
AUTH_SECRET="YOUR_AUTH_SECRET"
```
- ```DESCOPE_ID```: can be found in your Descope's account under the [Project page](https://app.descope.com/settings/project)
- ```DESCOPE_SECRET```: can be generated in your Descope's account under the [Access Keys page](https://app.descope.com/accesskeys)
- ```AUTH_SECRET```: can be generated by the following command in your terminal (do not use the same generated value for both):
```
$ openssl rand -base64 32
```

4. Setup SSO:

Navigate to Descope Project --> Authentication methods --> Identity Provider. <br />
To enable SSO and add Descope as an Identity Provider (IdP), we need to add our flow hosting URL: 
```
https://auth.descope.io/<YOUR_DESCOPE_PROJECT_ID>
```

<img src="./readme-assets/sso.png" />

## 🔮 Running the Application 

To start the application, run:

```
npm run dev
```

## 🚀 Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdescope-sample-apps%2Fsvelte-sample-app&env=DESCOPE_ID,DESCOPE_SECRET,AUTH_SECRET)

## ⚠️ Issue Reporting

Descope Explorer allows you to test, demo, and interact with your authentication flow. For any issues or suggestions, feel free to open an issue in the GitHub repository.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
