import MetaMask from "../wallet/metamask";

function Header({url})
{
    return (
        <>
        <header className="p-3 text-bg-dark">
                <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className={"nav-link px-2 " + (url == "home" ? "text-secondary" : "text-white")}>Home</a></li>
                    <li><a href="/nft-721" className={"nav-link px-2 " + (url == "nft-721" ? "text-secondary" : "text-white")}>NFT-721</a></li>
                    <li><a href="/nft-1155" className={"nav-link px-2 " + (url == "nft-1155" ? "text-secondary" : "text-white")}>NFT-1155</a></li>
                    <li><a href="/nft-marketplace" className={"nav-link px-2 " + (url == "nft-marketplace" ? "text-secondary" : "text-white")}>NFT Marketplace</a></li>
                    <li><a href="/ticket-nft" className={"nav-link px-2 " + (url == "ticket-nft" ? "text-secondary" : "text-white")}>Ticket NFT</a></li>
                    </ul>

                    <div className="text-end">
                        <MetaMask></MetaMask>
                    </div>
                </div>
                </div>
            </header>
        </>
    );
}

export default Header;