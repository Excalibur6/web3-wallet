# Krypt - Web 3.0 Blockchain Application
![Krypt](https://i.ibb.co/DVF4tNW/image.png)


Using Web 3.0 methodologies, Solidity and Metamask you'll learn how to build a your first real Web 3.0 Application - from start to finish.


Project Documentation

---

**1. Cloning the Repository**

- Clone the GitHub repository or unzip the files.
  - Open your terminal and navigate to the desired directory.
  - Execute the following command:

```bash
git clone https://github.com/Excalibur6/web3-wallet.git
```

**2. Frontend Setup**

- Navigate to the client folder and install dependencies.
  - Execute the following commands:

```bash
cd web3-wallet/client
npm install
```

- After installing dependencies, run the development server.
  - Execute the following command:

```bash
npm run dev
```

- Open the website in your browser; it will be running on localhost:3000.

**3. Blockchain Setup**

- Navigate to the smart contracts folder in the project directory.
  - Execute the following command:

```bash
cd ../smart-contract
npm install
```

**Faucet Test Network**

- Visit the following website to obtain test Ethereum (Sepolia) for the network:
  [Sepolia Faucet](https://sepolia-faucet.pk910.de/)

- Enter your MetaMask wallet address.
- Mining should start within 5-10 minutes, providing you with enough Sepolia Ethereum to test the network. You can also use Ganache as an alternative.

**Alchemy Deployment**

- Sign up on Alchemy's website and create a new app on the dashboard.
  - Enter the app's name and description.
  - Select Ethereum chain and Sepolia Network.

- Once the app is created, navigate to app details and copy the HTTP key of the Alchemy app.

- Replace the HTTPS link in the file `hardhat.config.js` at line 7.
  - URL: "your Alchemy app HTTP key link"

- Also, copy your MetaMask account private key and replace it in `hardhat.config.js` line 8.
  - Account: "your private key"

- After completing the above steps, navigate to the client folder and run the following command:
  ```bash
  npm run dev
  ```

- Connect your MetaMask wallet on the website.

**Deploying the Contract on Blockchain**

- In the `smart_contract` folder, execute the following command:
  ```bash
  npx hardhat run scripts/deploy.js --network sepolia
  ```

- Once the smart contract is deployed successfully, you will receive a transaction address like:
  ```
  Transaction address: 0xd1D1c1A449C97d2a464aDe56e4D44E0446CBFEd0
  ```

- Copy and paste this address in `Client -> src -> utils -> Constants.js`.
  - Line 3 in `constants.js`

Now, your application is ready to store transactions on the blockchain. Use test Ethereum to make transactions, and they will be deployed on the Alchemy app.
