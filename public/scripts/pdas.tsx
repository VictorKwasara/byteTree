// import * as anchor from '@project-serum/anchor';
// import { Program } from '@project-serum/anchor';
// import { Farmer } from '../programs/farmer';
// import { Farm } from '../programs/farm';
// import { Tree } from '../programs/tree';
// import { FruitMarket } from '../programs/fruit_market';

// // let provider = anchor.AnchorProvider.env();
// // anchor.setProvider(provider);

// const farmerProgram = anchor.workspace.Farmer as Program<Farmer>;

// const farmProgram = anchor.workspace.Farm as Program<Farm>;

// const fruitMarketProgram = anchor.workspace.FruitMarket as Program<FruitMarket>;

// const treeProgram = anchor.workspace.Tree as Program<Tree>;


// 	if ( payer ==undefined 
// 	|| payer == null){throw "provide payer"}
// // farm
// let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('farm')],
// 	farmProgram.programId
// );

// // farmer
// let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('farmer'), payer.publicKey.toBuffer()],
// 	farmerProgram.programId
// );

// // land_meta
// let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('landmeta'), farm.toBuffer()],
// 	farmProgram.programId
// );

// //land_piece
// let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('landpiece'), landMeta.toBuffer(), farmer.toBuffer()],
// 	farmerProgram.programId
// );
// // cultivar_meta
// let [cultivarMeta] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('cultivarmeta'), farm.toBuffer()],
// 	farmProgram.programId
// );

// let cultivarName = 'Muti';
// let [cultivar] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('cultivar'), cultivarMeta.toBuffer(), Buffer.from(cultivarName)],
// 	treeProgram.programId
// );

// // trees_meta
// let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('treesmeta'), farm.toBuffer()],
// 	farmProgram.programId
// );

// //tree
// let [tree] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('tree'), treesMeta.toBuffer(), farmer.toBuffer()],
// 	treeProgram.programId
// );

// // water_mint
// let [waterMint] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('watermint')],
// 	treeProgram.programId
// );

// // nutrient_mint_authority

// let [nutrientMintAuthority] =
// 	anchor.web3.PublicKey.findProgramAddressSync(
// 		[Buffer.from('nutrientmintauthority')],
// 		treeProgram.programId
// 	);

// //vault
// let [vault] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('carbonvault')],
// 	farmProgram.programId
// );

// // 	inputBalance,
// let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('nutrientbalance'), tree.toBuffer()],
// 	treeProgram.programId
// );

// // nitrogenMint,
// let [nitrogenMint] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('nitrogenmint')],
// 	treeProgram.programId
// );

// // potassiumMint,
// let [potassiumMint] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('potassiummint')],
// 	treeProgram.programId
// );
// //phosphorusMint,
// let [phosphorusMint] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('phosphorusmint')],
// 	treeProgram.programId
// );

// //fruitMintAuthority,
// let [fruitMintAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('fruitmintauthority')],
// 	treeProgram.programId
// );
// //fruitMint,
// let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('fruitmint'), Buffer.from(cultivarName)],
// 	treeProgram.programId
// );

// //fruitBalance,
// let [fruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('fruit'), tree.toBuffer()],
// 	treeProgram.programId
// );

// //requiredNutrients
// let [requiredNutrients] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('requirednutrients'), tree.toBuffer()],
// 	treeProgram.programId
// );

// // waterBalance,
// let [waterBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('water'), inputBalance.toBuffer()],
// 	treeProgram.programId
// );

// // 	nitrogenBalance,
// let [nitrogenBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('nitrogen'), inputBalance.toBuffer()],
// 	treeProgram.programId
// );
// // 	phosphorusBalance,
// let [phosphorusBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('phosphorus'), inputBalance.toBuffer()],
// 	treeProgram.programId
// );
// // 	potassiumBalance,
// let [potassiumBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('potassium'), inputBalance.toBuffer()],
// 	treeProgram.programId
// );

// // // fruitMarket

// let [fruitMarket] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('fruitmarket'), Buffer.from(cultivarName)],
// 	fruitMarketProgram.programId
// );

// // // fruitVaultAuthority,
// // let [fruitVaultAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
// // 	[Buffer.from('fruitvaultauthority')],
// // 	fruitMarketProgram.programId
// // );

// // 	fruitVault,
// let [fruitVault] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('fruit'), Buffer.from(cultivarName)],
// 	farmerProgram.programId
// );

// // 	marketEntry,
// let [marketEntry] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[
// 		Buffer.from('marketentry'),
// 		fruitMarket.toBuffer(),
// 		payer.publicKey.toBuffer(),
// 	],
// 	fruitMarketProgram.programId
// );

// let [entryFruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('fruit'), marketEntry.toBuffer()],
// 	fruitMarketProgram.programId
// );

// let [seedsBalance] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('seedsbalance'), farmer.toBuffer(), Buffer.from(cultivarName)],
// 	treeProgram.programId
// );

// let [marketAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
// 	[Buffer.from('marketauthority')],
// 	fruitMarketProgram.programId
// );
