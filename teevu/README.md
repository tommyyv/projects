## tvu.dev - V6.0

### Tech Stack

- Astro w/ TypeScript
- Tailwind
- ESLint
- Prettier
- Stylelint
- Netlify

## 📱 Demo

You can preview the demo by scanning the QR code below or visiting my portfolio at [vinitshahdeo.com](https://vinitshahdeo.com). In case, you are not able to reach [vinitshahdeo.com](https://vinitshahdeo.com), please try [vinitshahdeo.netlify.app](https://vinitshahdeo.netlify.app).

<img src='./.assets/vinitshahdeo-portfolio-qr.png' alt='Vinit Shahdeo Portfolio QR Code' width='20%' height='20%' />

## 🚀 Getting Started - Installation & Setup

To use this template, execute one of the following commands based on your package manager:

```bash
# For npm 6.x
npm create astro@latest --template vinitshahdeo/portfolio

# For npm 7+ (note the extra double-dash):
npm create astro@latest -- --template vinitshahdeo/portfolio

# For yarn users
yarn create astro --template vinitshahdeo/portfolio
```

Follow the steps in the subsequent sections for local setup instructions or [open the source code](https://codespaces.new/vinitshahdeo/portfolio) in the codespace.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/vinitshahdeo/portfolio)

## 🛠️ Local Setup

1. Clone the repo

```
git clone https://github.com/vinitshahdeo/portfolio.git
cd portfolio
```

2. This requires Node 20 or higher.

```bash
nvm use
```

3. Install dependencies

```
npm i
```

4. Run the development server

```
npm run dev
```

## Production

## 🧞 Commands

Before running these commands, ensure you have Node.js and npm installed on your system. All commands should be executed from the root directory of the project, using a terminal.

| Command         | Action                                      | Notes                                                                                                                                              |
| :-------------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`   | Installs all necessary dependencies.        | This is the first command you should run after cloning the repository to install all the required packages.                                        |
| `npm run dev`   | Starts the local development server.        | Access the site at `http://localhost:4321`. The server will automatically reload if you make any changes to the source files.                      |
| `npm run build` | Builds the site for production.             | The output is stored in the `./dist/` directory. Use this command before deploying to ensure you're publishing the optimized version of your site. |
| `npm run lint`  | Lints your code to identify and fix issues. | It's recommended to run this command before committing your changes to ensure code quality and consistency.                                        |

## 🌐 Deployment

Deploying your site is a breeze with seamless support for both [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/). Choose your preferred platform by clicking the buttons below. These options also automatically create a new repository on GitHub for you. For more details, explore the documentation:

1. [Deploy your Astro Site to Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
2. [Deploy your Astro Site to Netlify](https://docs.astro.build/en/guides/deploy/netlify/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vinitshahdeo/portfolio) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/vinitshahdeo/portfolio)

Currently, this project is set up for deployment on **Netlify**. To switch to Vercel, update the adapter in [`astro.config.mjs`](./astro.config.mjs) after running `npx astro add vercel`.

```ts
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "hybrid",
  adapter: vercel()
  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },
});
```

## 📊 Google Analytics

To update your Google Analytics measurement ID, follow these steps in [analytics.ts](./src/config/analytics.ts). For detailed instructions, refer to [this guide](https://support.google.com/analytics/answer/9539598?hl=en). This setup includes optimization with [@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) to prevent page rendering delays.

```typescript
export const measurementId = "G-XXXXXXXX"; // Replace G-XXXXXXXX with your measurement ID.
```

> [!NOTE]
> Please update your [Google Site Verification](https://developers.google.com/site-verification/v1/getting_started) token in [analytics.ts](./src/config/analytics.ts).
>
> ```ts
> export const googleSiteVerification = "YOUR-VERIFICATION-TOKEN";
> ```

## 🤖 GitHub Stats

The GitHub Stats available on the `/now` page are powered by the [OSS Insight](https://ossinsight.io/) widget.

[![Vinit Shahdeo's GitHub Stats](https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=20594326&image_size=auto&color_scheme=dark)](https://github.com/vinitshahdeo)

To display your GitHub stats, update your GitHub user ID and username in the `config/github.ts` file as shown below:

```ts
export const gitHubUserId = "20594326";
export const gitHubUserName = "vinitshahdeo";
```

> [!TIP]
> You can find your user ID by hitting the following API endpoint: `https://api.github.com/users/<your-username>`. Replace `<your-username>` with your actual GitHub username.

Here's an example for user `vinitshahdeo`:

```sh
curl https://api.github.com/users/vinitshahdeo
```

This will return a JSON response containing your user ID among other details.

## 📝 License

The source code of this project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details. The words and images are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## 📫 Contact
