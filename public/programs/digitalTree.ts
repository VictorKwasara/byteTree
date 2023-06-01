export type DigitalTree = {
	version: '0.1.0';
	name: 'starter';
	instructions: [
		{
			name: 'initializeFarm';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'cultivarMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'vault';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [];
		},
		{
			name: 'initializeFarmer';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farmer';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'userName';
					type: 'string';
				}
			];
		},
		{
			name: 'buyLand';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'vault';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [];
		},
		{
			name: 'plantTree';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'cultivarMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'cultivar';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'associatedTokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'cultivarName';
					type: 'string';
				}
			];
		},
		{
			name: 'createCultivar';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'cultivarMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'cultivar';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMarket';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'marketEntry';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'name';
					type: 'string';
				},
				{
					name: 'height';
					type: 'u64';
				},
				{
					name: 'width';
					type: 'u64';
				}
			];
		},
		{
			name: 'checkAndUpdate';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [];
		},
		{
			name: 'waterTree';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'addNitrogen';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'addPotassium';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'addPhosphorus';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'consumeNitrogen';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'consumePhosphorus';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'consumePotassium';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'calculateRequired';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'waterMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nutrientMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'landMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'landPiece';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'inputBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'waterBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'nitrogenBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'phosphorusBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'potassiumBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'requiredNutrients';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [];
		},
		{
			name: 'listFruits';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farmer';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'treesMeta';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tree';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'fruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMarket';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'marketEntry';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'currentTopMarketEntry';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'entryFruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'amount';
					type: 'u64';
				}
			];
		},
		{
			name: 'buyFruits';
			accounts: [
				{
					name: 'payer';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'farmer';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'farm';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'cultivarMeta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'cultivar';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMintAuthority';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMint';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'seedsBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'fruitMarket';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'currentTopMarketEntry';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'topEntryFruitBalance';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'cultivarName';
					type: 'string';
				}
			];
		}
	];
	accounts: [
		{
			name: 'MarketEntry';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'maker';
						type: 'publicKey';
					},
					{
						name: 'count';
						type: 'u64';
					},
					{
						name: 'nextMaker';
						type: {
							option: 'publicKey';
						};
					}
				];
			};
		},
		{
			name: 'FruitMarket';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'topMaker';
						type: {
							option: 'publicKey';
						};
					},
					{
						name: 'bottomMaker';
						type: {
							option: 'publicKey';
						};
					},
					{
						name: 'totalFruitBalance';
						type: 'u64';
					},
					{
						name: 'price';
						type: 'u64';
					}
				];
			};
		},
		{
			name: 'Farm';
			type: {
				kind: 'struct';
				fields: [];
			};
		},
		{
			name: 'CultivarMeta';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'cultivarsCount';
						type: 'u64';
					}
				];
			};
		},
		{
			name: 'LandMeta';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'landPieceCount';
						type: 'u64';
					}
				];
			};
		},
		{
			name: 'TreesMeta';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'treeCount';
						type: 'u64';
					}
				];
			};
		},
		{
			name: 'Cultivar';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'name';
						type: 'string';
					},
					{
						name: 'count';
						type: 'u64';
					},
					{
						name: 'initHeight';
						type: 'u64';
					},
					{
						name: 'initWidth';
						type: 'u64';
					},
					{
						name: 'scarcityPoints';
						type: 'u64';
					},
					{
						name: 'isInitialized';
						type: 'bool';
					}
				];
			};
		},
		{
			name: 'LandPiece';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'owner';
						type: 'publicKey';
					},
					{
						name: 'number';
						type: 'u64';
					},
					{
						name: 'isPlanted';
						type: 'bool';
					}
				];
			};
		},
		{
			name: 'Vault';
			type: {
				kind: 'struct';
				fields: [];
			};
		},
		{
			name: 'SeedVault';
			type: {
				kind: 'struct';
				fields: [];
			};
		},
		{
			name: 'Farmer';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'name';
						type: 'string';
					},
					{
						name: 'address';
						type: 'publicKey';
					},
					{
						name: 'landCount';
						type: 'u64';
					},
					{
						name: 'treeCount';
						type: 'u64';
					}
				];
			};
		},
		{
			name: 'InputBalance';
			type: {
				kind: 'struct';
				fields: [];
			};
		},
		{
			name: 'Tree';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'cultivarName';
						type: 'string';
					},
					{
						name: 'landNumber';
						type: 'u64';
					},
					{
						name: 'height';
						type: 'u64';
					},
					{
						name: 'girth';
						type: 'u64';
					},
					{
						name: 'age';
						type: 'u64';
					},
					{
						name: 'plantedTime';
						type: 'u64';
					},
					{
						name: 'health';
						type: 'u8';
					},
					{
						name: 'lastCheckTime';
						type: 'u64';
					},
					{
						name: 'nextFruitMaturaturationTime';
						type: 'u64';
					},
					{
						name: 'expectedFruitCount';
						type: 'u64';
					},
					{
						name: 'isAlive';
						type: 'bool';
					},
					{
						name: 'leafArea';
						type: 'u64';
					},
					{
						name: 'rootArea';
						type: 'u64';
					}
				];
			};
		},
		{
			name: 'RequiredNutrients';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'nitrogen';
						type: 'u64';
					},
					{
						name: 'percentAvailableNitrogen';
						type: 'u64';
					},
					{
						name: 'phosphorus';
						type: 'u64';
					},
					{
						name: 'percentAvailablePhosphorus';
						type: 'u64';
					},
					{
						name: 'potassium';
						type: 'u64';
					},
					{
						name: 'percentAvailablePotassium';
						type: 'u64';
					},
					{
						name: 'water';
						type: 'u64';
					},
					{
						name: 'percentAvailableWater';
						type: 'u64';
					},
					{
						name: 'lastCheckTime';
						type: 'u64';
					}
				];
			};
		}
	];
	metadata: {
		address: 'E77dkm2gqBYsPeJzdbvFWDrMP2zvKhnKg4J8uP9UV164';
	};
};

export const IDL: DigitalTree = {
	version: '0.1.0',
	name: 'starter',
	instructions: [
		{
			name: 'initializeFarm',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'cultivarMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'vault',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [],
		},
		{
			name: 'initializeFarmer',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farmer',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'userName',
					type: 'string',
				},
			],
		},
		{
			name: 'buyLand',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'vault',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [],
		},
		{
			name: 'plantTree',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'cultivarMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'cultivar',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'associatedTokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'cultivarName',
					type: 'string',
				},
			],
		},
		{
			name: 'createCultivar',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'cultivarMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'cultivar',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMarket',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'marketEntry',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'name',
					type: 'string',
				},
				{
					name: 'height',
					type: 'u64',
				},
				{
					name: 'width',
					type: 'u64',
				},
			],
		},
		{
			name: 'checkAndUpdate',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [],
		},
		{
			name: 'waterTree',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'addNitrogen',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'addPotassium',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'addPhosphorus',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'consumeNitrogen',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'consumePhosphorus',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'consumePotassium',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'calculateRequired',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'waterMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nutrientMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'landMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'landPiece',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'inputBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'waterBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nitrogenBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'phosphorusBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'potassiumBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'requiredNutrients',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [],
		},
		{
			name: 'listFruits',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farmer',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'treesMeta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tree',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'fruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMarket',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'marketEntry',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'currentTopMarketEntry',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'entryFruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'amount',
					type: 'u64',
				},
			],
		},
		{
			name: 'buyFruits',
			accounts: [
				{
					name: 'payer',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'farmer',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'farm',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'cultivarMeta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'cultivar',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMintAuthority',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'seedsBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'fruitMarket',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'currentTopMarketEntry',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'topEntryFruitBalance',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'cultivarName',
					type: 'string',
				},
			],
		},
	],
	accounts: [
		{
			name: 'MarketEntry',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'maker',
						type: 'publicKey',
					},
					{
						name: 'count',
						type: 'u64',
					},
					{
						name: 'nextMaker',
						type: {
							option: 'publicKey',
						},
					},
				],
			},
		},
		{
			name: 'FruitMarket',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'topMaker',
						type: {
							option: 'publicKey',
						},
					},
					{
						name: 'bottomMaker',
						type: {
							option: 'publicKey',
						},
					},
					{
						name: 'totalFruitBalance',
						type: 'u64',
					},
					{
						name: 'price',
						type: 'u64',
					},
				],
			},
		},
		{
			name: 'Farm',
			type: {
				kind: 'struct',
				fields: [],
			},
		},
		{
			name: 'CultivarMeta',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'cultivarsCount',
						type: 'u64',
					},
				],
			},
		},
		{
			name: 'LandMeta',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'landPieceCount',
						type: 'u64',
					},
				],
			},
		},
		{
			name: 'TreesMeta',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'treeCount',
						type: 'u64',
					},
				],
			},
		},
		{
			name: 'Cultivar',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'name',
						type: 'string',
					},
					{
						name: 'count',
						type: 'u64',
					},
					{
						name: 'initHeight',
						type: 'u64',
					},
					{
						name: 'initWidth',
						type: 'u64',
					},
					{
						name: 'scarcityPoints',
						type: 'u64',
					},
					{
						name: 'isInitialized',
						type: 'bool',
					},
				],
			},
		},
		{
			name: 'LandPiece',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'owner',
						type: 'publicKey',
					},
					{
						name: 'number',
						type: 'u64',
					},
					{
						name: 'isPlanted',
						type: 'bool',
					},
				],
			},
		},
		{
			name: 'Vault',
			type: {
				kind: 'struct',
				fields: [],
			},
		},
		{
			name: 'SeedVault',
			type: {
				kind: 'struct',
				fields: [],
			},
		},
		{
			name: 'Farmer',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'name',
						type: 'string',
					},
					{
						name: 'address',
						type: 'publicKey',
					},
					{
						name: 'landCount',
						type: 'u64',
					},
					{
						name: 'treeCount',
						type: 'u64',
					},
				],
			},
		},
		{
			name: 'InputBalance',
			type: {
				kind: 'struct',
				fields: [],
			},
		},
		{
			name: 'Tree',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'cultivarName',
						type: 'string',
					},
					{
						name: 'landNumber',
						type: 'u64',
					},
					{
						name: 'height',
						type: 'u64',
					},
					{
						name: 'girth',
						type: 'u64',
					},
					{
						name: 'age',
						type: 'u64',
					},
					{
						name: 'plantedTime',
						type: 'u64',
					},
					{
						name: 'health',
						type: 'u8',
					},
					{
						name: 'lastCheckTime',
						type: 'u64',
					},
					{
						name: 'nextFruitMaturaturationTime',
						type: 'u64',
					},
					{
						name: 'expectedFruitCount',
						type: 'u64',
					},
					{
						name: 'isAlive',
						type: 'bool',
					},
					{
						name: 'leafArea',
						type: 'u64',
					},
					{
						name: 'rootArea',
						type: 'u64',
					},
				],
			},
		},
		{
			name: 'RequiredNutrients',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'nitrogen',
						type: 'u64',
					},
					{
						name: 'percentAvailableNitrogen',
						type: 'u64',
					},
					{
						name: 'phosphorus',
						type: 'u64',
					},
					{
						name: 'percentAvailablePhosphorus',
						type: 'u64',
					},
					{
						name: 'potassium',
						type: 'u64',
					},
					{
						name: 'percentAvailablePotassium',
						type: 'u64',
					},
					{
						name: 'water',
						type: 'u64',
					},
					{
						name: 'percentAvailableWater',
						type: 'u64',
					},
					{
						name: 'lastCheckTime',
						type: 'u64',
					},
				],
			},
		},
	],
	metadata: {
		address: 'E77dkm2gqBYsPeJzdbvFWDrMP2zvKhnKg4J8uP9UV164',
	},
};