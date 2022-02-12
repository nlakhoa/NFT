// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import './safemath.sol';
import "@openzeppelin/contracts/utils/Counters.sol";


contract StechNFT is ERC721 {
    Counters.Counter private _tokenIdCounter;
    using Strings for uint256;
    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;
    using Counters for Counters.Counter;
    event NftBought(address _seller, address _buyer, uint256 _price);
    event NewStechNFT(uint256 StechNFTId, string name, uint256 dna);

    mapping(uint256 => uint256) public tokenIdToPrice;
    mapping(uint256 => address) public StechNFTToOwner;
    mapping(address => uint256) public ownerStechNFTCount;
    mapping(uint256 => address) StechNFTApprovals;

    address public owner;
    uint256 public balance;
    uint256 public dnaDigits = 16;
    uint256 public dnaModulus = 10**dnaDigits;
    uint256 public cooldownTime = 1 days;
    uint256 public currentIndex;
    string domain;
    address ownerFragment;
    uint256 fragments;
    uint256 currentFragment;
    uint256 idOwner;

        struct StechNFT {
            string name;
            uint256 dna;
            uint256 index;
            address ownerCreate;
            address owner;
            uint256 price;
            string typeCoin;
            bool listing;
            string uri;
            uint256 idOwner;
            uint256 fragments;
            uint256 indexFragment;
        }

    StechNFT[] public StechNFTs;

    constructor() ERC721("StechNFT", "STECH") {
      owner = msg.sender;
    }
    function createNFT(string memory _name,string memory uri) external payable {
        require(msg.value == 0.01 ether, "Account not enough ether");
         uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        uint256 randDna = _generateRandomDna(_name);
        randDna = randDna - (randDna % 100);
        payable(owner).transfer(msg.value); 
        StechNFTs.push(
            StechNFT(
                 _name,
                 randDna,
                 tokenId,
                 msg.sender,
                 msg.sender,
                 0,
                 "ETH",
                 false,
                 uri,
                 tokenId,
                 fragments,
                 0
            )
        );
        StechNFTToOwner[tokenId] = msg.sender;
        _safeMint(msg.sender, tokenId);
        ownerStechNFTCount[msg.sender] = ownerStechNFTCount[msg.sender].add(1);
        currentIndex = currentIndex.add(1);
        emit NewStechNFT(tokenId, _name, randDna);
    }

    function fragmentNFT(uint256 _number,uint256 _id) external payable {
        require(msg.value == _number*0.01 ether, "Account not enough ether");
        
        ownerFragment = msg.sender;
        fragments = _number;
        currentFragment = 1;
        idOwner = _id;
        payable(owner).transfer(msg.value); 
    }
     function createNFTtoFragment(string memory _name,string memory uri) external {
        require(currentFragment <= fragments  , "Limit fragment");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        uint256 randDna = _generateRandomDna(_name);
        randDna = randDna - (randDna % 100);
        StechNFTs.push(
            StechNFT(
                _name,
                 randDna,
                 tokenId,
                 msg.sender,
                 msg.sender,
                 0,
                 "ETH",
                 false,
                 uri,
                 idOwner,
                 fragments,
                 currentFragment
            )
        );
        StechNFTToOwner[tokenId] = msg.sender;
        _safeMint(msg.sender, tokenId);
        ownerStechNFTCount[msg.sender] = ownerStechNFTCount[msg.sender].add(1);
        currentIndex = currentIndex.add(1);
        currentFragment++;
        emit NewStechNFT(tokenId, _name, randDna);
    }

    function inputDomain (string memory _domain) public returns(string memory) {
        return domain = _domain;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        require(_exists(tokenId), "Token id is not availble");
       return StechNFTs[tokenId].uri;
    }

    function createNFT(uint256 tokenId) external {
        _mint(msg.sender, tokenId);
    }
    
    
     function disallowBuy(uint256 _tokenId) public {
        require(msg.sender == ownerOf(_tokenId), "Not owner of this token");
        tokenIdToPrice[_tokenId] = 0;
        StechNFTs[_tokenId].price = 0;
    }

    function allowBuy(uint256 _tokenId, uint256 _price) public {
        require(msg.sender == ownerOf(_tokenId), 'Not owner of this token');
        require(_price > 0, 'Price zero');
        tokenIdToPrice[_tokenId] = _price;
    }
    function listing(uint256 _tokenId,uint256 _newPrice, string memory _newTypeCoin) public {
      require (StechNFTToOwner[_tokenId] == msg.sender || StechNFTApprovals[_tokenId] == msg.sender);
        allowBuy(_tokenId,_newPrice);
        StechNFTs[_tokenId].price = _newPrice;
        StechNFTs[_tokenId].typeCoin = _newTypeCoin;
        StechNFTs[_tokenId].listing = true;
    }

     function unListing(uint256 _tokenId) public {
        disallowBuy(_tokenId);
        StechNFTs[_tokenId].listing = false;
    }
    function buy(uint256 _tokenId) external payable {
        uint256 price = tokenIdToPrice[_tokenId];
        require(price > 0, "This token is not for sale");
        require(msg.value == price , "Incorrect value");
        address seller = ownerOf(_tokenId);

        _transfer(seller, msg.sender, _tokenId);
        StechNFTs[_tokenId].owner = msg.sender;
        StechNFTs[_tokenId].listing = false;

        ownerStechNFTCount[msg.sender] = ownerStechNFTCount[msg.sender].add(1);
        ownerStechNFTCount[seller] = ownerStechNFTCount[seller].sub(1);
        StechNFTToOwner[_tokenId] = msg.sender;

        tokenIdToPrice[_tokenId] = 0; // not for sale anymore
        payable(seller).transfer(msg.value); // send the ETH to the seller
        emit NftBought(seller, msg.sender, msg.value);
    }

    function getAllNFTListing() public view returns (StechNFT[] memory) {
        StechNFT[] memory result = new StechNFT[](currentIndex);
        for (uint256 i = 0; i < StechNFTs.length; i++) {
            result[i] = StechNFTs[i];
        }
        return result;
    }


    function _generateRandomDna(string memory _str)
        public
        view
        returns (uint256)
    {
        uint256 rand = uint256(keccak256(abi.encodePacked(_str, currentIndex)));
        return rand % dnaModulus;
    }
    function getStechNFTByOwner(address _owner)
        public
        view
        returns (StechNFT[] memory)
    {
        StechNFT[] memory result = new StechNFT[](ownerStechNFTCount[_owner]);
        uint256 counter = 0;
        for (uint256 i = 0; i < StechNFTs.length; i++) {
            if (StechNFTToOwner[i] == _owner) {
                result[counter] = StechNFTs[i];
                counter++;
            }
        }
        return result;
    }

}