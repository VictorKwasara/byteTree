export type Farm = {
  "version": "0.1.0",
  "name": "farm",
  "instructions": [
    {
      "name": "initializeFarm",
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
          "name": "landMeta",
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
          "name": "vault",
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
        }
      ],
      "args": []
    },
    {
      "name": "updateTrees",
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
          "name": "cultivarMeta",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
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
      "name": "updateCultivars",
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
          "name": "cultivarMeta",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
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
      "name": "farm",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "cultivarMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cultivarsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "landMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "landPieceCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treesMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treeCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};

export const IDL: Farm = {
  "version": "0.1.0",
  "name": "farm",
  "instructions": [
    {
      "name": "initializeFarm",
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
          "name": "landMeta",
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
          "name": "vault",
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
        }
      ],
      "args": []
    },
    {
      "name": "updateTrees",
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
          "name": "cultivarMeta",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
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
      "name": "updateCultivars",
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
          "name": "cultivarMeta",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
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
      "name": "farm",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "cultivarMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cultivarsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "landMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "landPieceCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treesMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treeCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};
