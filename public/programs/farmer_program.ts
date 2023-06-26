export type FarmerProgram = {
  "version": "0.1.0",
  "name": "farmer_program",
  "instructions": [
    {
      "name": "initializeFarmer",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userName",
          "type": "string"
        }
      ]
    },
    {
      "name": "addTreeCount",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addLandCount",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "listFruits",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEntry",
          "isMut": false,
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
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketProgram",
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
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createHarvestAccount",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitVault",
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
      "name": "buyLand",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
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
        }
      ],
      "args": []
    },
    {
      "name": "plant",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cultivarMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cultivar",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "farmer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "landCount",
            "type": "u64"
          },
          {
            "name": "treeCount",
            "type": "u64"
          },
          {
            "name": "profileNft",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "landPiece",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "number",
            "type": "u64"
          },
          {
            "name": "isPlanted",
            "type": "bool"
          },
          {
            "name": "location",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          }
        ]
      }
    }
  ]
};

export const IDL: FarmerProgram = {
  "version": "0.1.0",
  "name": "farmer_program",
  "instructions": [
    {
      "name": "initializeFarmer",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userName",
          "type": "string"
        }
      ]
    },
    {
      "name": "addTreeCount",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addLandCount",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "listFruits",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEntry",
          "isMut": false,
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
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketProgram",
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
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createHarvestAccount",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitVault",
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
      "name": "buyLand",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
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
        }
      ],
      "args": []
    },
    {
      "name": "plant",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "farmer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cultivarMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cultivar",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "farmer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "landCount",
            "type": "u64"
          },
          {
            "name": "treeCount",
            "type": "u64"
          },
          {
            "name": "profileNft",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "landPiece",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "number",
            "type": "u64"
          },
          {
            "name": "isPlanted",
            "type": "bool"
          },
          {
            "name": "location",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          }
        ]
      }
    }
  ]
};
