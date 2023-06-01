export type Tree = {
  "version": "0.1.0",
  "name": "tree",
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
          "isMut": false,
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
      "args": []
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
          "name": "name",
          "type": "string"
        },
        {
          "name": "height",
          "type": "u64"
        },
        {
          "name": "width",
          "type": "u64"
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
        },
        {
          "name": "systemProgram",
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
        },
        {
          "name": "systemProgram",
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
        },
        {
          "name": "systemProgram",
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
        },
        {
          "name": "systemProgram",
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
      "name": "consumeNitrogen",
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
        },
        {
          "name": "systemProgram",
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
      "name": "consumePhosphorus",
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
        },
        {
          "name": "systemProgram",
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
      "name": "consumePotassium",
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
        },
        {
          "name": "systemProgram",
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
      "name": "cultivar",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
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
            "name": "cultivarName",
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
            "type": "u8"
          },
          {
            "name": "lastCheckTime",
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
    }
  ]
};

export const IDL: Tree = {
  "version": "0.1.0",
  "name": "tree",
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
          "isMut": false,
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
      "args": []
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
          "name": "name",
          "type": "string"
        },
        {
          "name": "height",
          "type": "u64"
        },
        {
          "name": "width",
          "type": "u64"
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
        },
        {
          "name": "systemProgram",
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
        },
        {
          "name": "systemProgram",
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
        },
        {
          "name": "systemProgram",
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
        },
        {
          "name": "systemProgram",
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
      "name": "consumeNitrogen",
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
        },
        {
          "name": "systemProgram",
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
      "name": "consumePhosphorus",
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
        },
        {
          "name": "systemProgram",
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
      "name": "consumePotassium",
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
        },
        {
          "name": "systemProgram",
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
      "name": "cultivar",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
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
            "name": "cultivarName",
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
            "type": "u8"
          },
          {
            "name": "lastCheckTime",
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
    }
  ]
};
