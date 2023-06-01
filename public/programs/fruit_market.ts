export type FruitMarket = {
  "version": "0.1.0",
  "name": "fruit_market",
  "instructions": [
    {
      "name": "initializeMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currentTopMarketEntry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entryFruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cultivarName",
          "type": "string"
        }
      ]
    },
    {
      "name": "buyFruits",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cultivarMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cultivar",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currentTopMarketEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "topEntryFruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cultivarName",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "marketEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maker",
            "type": "publicKey"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "nextMaker",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "fruitMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "topMaker",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bottomMaker",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalFruitBalance",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: FruitMarket = {
  "version": "0.1.0",
  "name": "fruit_market",
  "instructions": [
    {
      "name": "initializeMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createMarket",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currentTopMarketEntry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entryFruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cultivarName",
          "type": "string"
        }
      ]
    },
    {
      "name": "buyFruits",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cultivarMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cultivar",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currentTopMarketEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "topEntryFruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cultivarName",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "marketEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maker",
            "type": "publicKey"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "nextMaker",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "fruitMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "topMaker",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bottomMaker",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalFruitBalance",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
