export type TreeProgram = {
  "version": "0.1.0",
  "name": "tree_program",
  "instructions": [
    {
      "name": "createTree",
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
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tree",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "date",
          "type": "string"
        }
      ]
    },
    {
      "name": "createCultivar",
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
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
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
        },
        {
          "name": "systemProgram",
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
          "name": "height",
          "type": "u64"
        },
        {
          "name": "width",
          "type": "u64"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createSeed",
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
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "initTreeAccounts",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
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
      "name": "checkHarvest",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "checkAndUpdate",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "harvestFruit",
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
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tree",
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
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "waterTree",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addNitrogen",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addPotassium",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addPhosphorus",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "consumeNutrients",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "calculateRequired",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeCultivar",
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
          "name": "cultivarMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cultivar",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeTree",
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
          "name": "cultivarMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cultivar",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
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
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
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
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
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
  ],
  "accounts": [
    {
      "name": "cultivar",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "imageUri",
            "type": "string"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "initHeight",
            "type": "u64"
          },
          {
            "name": "initWidth",
            "type": "u64"
          },
          {
            "name": "initRootArea",
            "type": "u64"
          },
          {
            "name": "initLeafArea",
            "type": "u64"
          },
          {
            "name": "scarcityPoints",
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "inputBalance",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "tree",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "cultivarName",
            "type": "string"
          },
          {
            "name": "nftUri",
            "type": "string"
          },
          {
            "name": "landNumber",
            "type": "u64"
          },
          {
            "name": "height",
            "type": "u64"
          },
          {
            "name": "girth",
            "type": "u64"
          },
          {
            "name": "age",
            "type": "u64"
          },
          {
            "name": "plantedTime",
            "type": "u64"
          },
          {
            "name": "health",
            "type": "f64"
          },
          {
            "name": "lastCheckTime",
            "type": "u64"
          },
          {
            "name": "lastFruitUpdate",
            "type": "u64"
          },
          {
            "name": "nextFruitMaturaturationTime",
            "type": "u64"
          },
          {
            "name": "expectedFruitCount",
            "type": "u64"
          },
          {
            "name": "isAlive",
            "type": "bool"
          },
          {
            "name": "leafArea",
            "type": "u64"
          },
          {
            "name": "rootArea",
            "type": "u64"
          },
          {
            "name": "lastConsumedUsed",
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
          },
          {
            "name": "createdDate",
            "type": "string"
          },
          {
            "name": "isPlanted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "requiredNutrients",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "firstCheck",
            "type": "bool"
          },
          {
            "name": "nitrogen",
            "type": "u64"
          },
          {
            "name": "percentAvailableNitrogen",
            "type": "u64"
          },
          {
            "name": "phosphorus",
            "type": "u64"
          },
          {
            "name": "percentAvailablePhosphorus",
            "type": "u64"
          },
          {
            "name": "potassium",
            "type": "u64"
          },
          {
            "name": "percentAvailablePotassium",
            "type": "u64"
          },
          {
            "name": "water",
            "type": "u64"
          },
          {
            "name": "percentAvailableWater",
            "type": "u64"
          },
          {
            "name": "lastCheckTime",
            "type": "u64"
          },
          {
            "name": "period",
            "type": "u64"
          },
          {
            "name": "consumed",
            "type": "bool"
          },
          {
            "name": "energy",
            "type": "f64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CultivarNotInitialized",
      "msg": "The Cultivar account is not initialized!"
    },
    {
      "code": 6001,
      "name": "TreeSlotError",
      "msg": "The Current Slot Is Less than the Planted Slot of the tree!"
    },
    {
      "code": 6002,
      "name": "FailedCalculatePeriod",
      "msg": "failed to subtract when calculating the period"
    },
    {
      "code": 6003,
      "name": "HealthAtZero",
      "msg": "The tree is already dead"
    },
    {
      "code": 6004,
      "name": "CalculateAgeError",
      "msg": "The Age factor is negetive value"
    },
    {
      "code": 6005,
      "name": "ReductoinGreaterThanOne",
      "msg": "The reduction factor is greater than Zero"
    },
    {
      "code": 6006,
      "name": "UseConsumed",
      "msg": "Use the calculated nutrients for growth"
    },
    {
      "code": 6007,
      "name": "TreeYoung",
      "msg": "The Tree Is Young"
    },
    {
      "code": 6008,
      "name": "CalculateRequired",
      "msg": "Calculate the required nutrients"
    },
    {
      "code": 6009,
      "name": "ValueOutOfRange",
      "msg": "Calculate the required nutrients"
    },
    {
      "code": 6010,
      "name": "TreeDead",
      "msg": "Attempt to update a dead tree"
    },
    {
      "code": 6011,
      "name": "ClockError"
    },
    {
      "code": 6012,
      "name": "ConsumeNutrients"
    },
    {
      "code": 6013,
      "name": "FailedToPlant"
    }
  ]
};

export const IDL: TreeProgram = {
  "version": "0.1.0",
  "name": "tree_program",
  "instructions": [
    {
      "name": "createTree",
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
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tree",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "date",
          "type": "string"
        }
      ]
    },
    {
      "name": "createCultivar",
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
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
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
        },
        {
          "name": "systemProgram",
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
          "name": "height",
          "type": "u64"
        },
        {
          "name": "width",
          "type": "u64"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createSeed",
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
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "initTreeAccounts",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
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
      "name": "checkHarvest",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "checkAndUpdate",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "harvestFruit",
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
          "name": "fruitMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tree",
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
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "waterTree",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addNitrogen",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addPotassium",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addPhosphorus",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "consumeNutrients",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "calculateRequired",
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
          "name": "waterMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nutrientMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landPiece",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "waterBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nitrogenBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "phosphorusBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "potassiumBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fruitBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "requiredNutrients",
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
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeCultivar",
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
          "name": "cultivarMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cultivar",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeTree",
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
          "name": "cultivarMeta",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cultivar",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seedsBalance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
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
          "name": "farm",
          "isMut": false,
          "isSigner": false
        },
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
          "name": "tree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treesMeta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
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
  ],
  "accounts": [
    {
      "name": "cultivar",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "imageUri",
            "type": "string"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "initHeight",
            "type": "u64"
          },
          {
            "name": "initWidth",
            "type": "u64"
          },
          {
            "name": "initRootArea",
            "type": "u64"
          },
          {
            "name": "initLeafArea",
            "type": "u64"
          },
          {
            "name": "scarcityPoints",
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "inputBalance",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "tree",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "cultivarName",
            "type": "string"
          },
          {
            "name": "nftUri",
            "type": "string"
          },
          {
            "name": "landNumber",
            "type": "u64"
          },
          {
            "name": "height",
            "type": "u64"
          },
          {
            "name": "girth",
            "type": "u64"
          },
          {
            "name": "age",
            "type": "u64"
          },
          {
            "name": "plantedTime",
            "type": "u64"
          },
          {
            "name": "health",
            "type": "f64"
          },
          {
            "name": "lastCheckTime",
            "type": "u64"
          },
          {
            "name": "lastFruitUpdate",
            "type": "u64"
          },
          {
            "name": "nextFruitMaturaturationTime",
            "type": "u64"
          },
          {
            "name": "expectedFruitCount",
            "type": "u64"
          },
          {
            "name": "isAlive",
            "type": "bool"
          },
          {
            "name": "leafArea",
            "type": "u64"
          },
          {
            "name": "rootArea",
            "type": "u64"
          },
          {
            "name": "lastConsumedUsed",
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
          },
          {
            "name": "createdDate",
            "type": "string"
          },
          {
            "name": "isPlanted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "requiredNutrients",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "firstCheck",
            "type": "bool"
          },
          {
            "name": "nitrogen",
            "type": "u64"
          },
          {
            "name": "percentAvailableNitrogen",
            "type": "u64"
          },
          {
            "name": "phosphorus",
            "type": "u64"
          },
          {
            "name": "percentAvailablePhosphorus",
            "type": "u64"
          },
          {
            "name": "potassium",
            "type": "u64"
          },
          {
            "name": "percentAvailablePotassium",
            "type": "u64"
          },
          {
            "name": "water",
            "type": "u64"
          },
          {
            "name": "percentAvailableWater",
            "type": "u64"
          },
          {
            "name": "lastCheckTime",
            "type": "u64"
          },
          {
            "name": "period",
            "type": "u64"
          },
          {
            "name": "consumed",
            "type": "bool"
          },
          {
            "name": "energy",
            "type": "f64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CultivarNotInitialized",
      "msg": "The Cultivar account is not initialized!"
    },
    {
      "code": 6001,
      "name": "TreeSlotError",
      "msg": "The Current Slot Is Less than the Planted Slot of the tree!"
    },
    {
      "code": 6002,
      "name": "FailedCalculatePeriod",
      "msg": "failed to subtract when calculating the period"
    },
    {
      "code": 6003,
      "name": "HealthAtZero",
      "msg": "The tree is already dead"
    },
    {
      "code": 6004,
      "name": "CalculateAgeError",
      "msg": "The Age factor is negetive value"
    },
    {
      "code": 6005,
      "name": "ReductoinGreaterThanOne",
      "msg": "The reduction factor is greater than Zero"
    },
    {
      "code": 6006,
      "name": "UseConsumed",
      "msg": "Use the calculated nutrients for growth"
    },
    {
      "code": 6007,
      "name": "TreeYoung",
      "msg": "The Tree Is Young"
    },
    {
      "code": 6008,
      "name": "CalculateRequired",
      "msg": "Calculate the required nutrients"
    },
    {
      "code": 6009,
      "name": "ValueOutOfRange",
      "msg": "Calculate the required nutrients"
    },
    {
      "code": 6010,
      "name": "TreeDead",
      "msg": "Attempt to update a dead tree"
    },
    {
      "code": 6011,
      "name": "ClockError"
    },
    {
      "code": 6012,
      "name": "ConsumeNutrients"
    },
    {
      "code": 6013,
      "name": "FailedToPlant"
    }
  ]
};
