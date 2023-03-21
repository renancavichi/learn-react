#### GitHub Action Setup to Deploy on Cloudflare Page

1. Create a Cloudflare Account.
2. On dashboard add a new site (Add site). Ex. renancavichi.com
3. Get Account Id on dashboard > Websites > renancavichi.com > Account ID
4. Create a token for Github action CI/CD:
   - Select My Profile from the dropdown menu of your user icon on the top right
     of your dashboard.
   - Select API Tokens > Create Token.
   - Under Custom Token, select Get started.
   - Name your API Token in the Token name field.
   - Under Permissions, select Account, Cloudflare Pages and Edit:
   - Select Continue to summary > Create Token.
5. Create Repository Secrets:
   - Go to your project’s repository in GitHub.
   - Under your repository’s name, select Settings.
   - Select Secrets > Actions > New repository secret.
   - Create one secret and put CLOUDFLARE_ACCOUNT_ID as the name with the value
     being your Cloudflare account ID.
   - Create another secret and put CLOUDFLARE_API_TOKEN as the name with the
     value being your Cloudflare API token.
6. Create the file .github/workflows/cloudflare-page-deploy.yml

[More](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
