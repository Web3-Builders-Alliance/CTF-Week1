import { Connection, Keypair, SystemProgram, PublicKey } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider, Address, BN } from "@project-serum/anchor"
import { Week1, IDL } from "./programs/week1";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";

import wallet from "./wallet/wba-wallet.json"

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create a devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// Create our anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment: "confirmed"});

// Create our program
const program = new Program<Week1>(IDL, "ctf1VWeMtgxa24zZevsXqDg6xvcMVy4FbP3cxLCpGha" as Address, provider);

// Use the PDA for our CTF-Week1 profile
const profilePda = PublicKey.findProgramAddressSync([Buffer.from("profile"), keypair.publicKey.toBuffer()], program.programId)[0];

// Use the PDA for the Auth account
// const authPda = ???

// Paste here the mint address for challenge1 token
const mint = new PublicKey("<Mint3 Address>");

// Create the PDA for the Challenge2 Vault
const vault = PublicKey.findProgramAddressSync([Buffer.from("vault2"), keypair.publicKey.toBuffer(), mint.toBuffer()], program.programId)[0];


(async () => {
    try {

        // NB if you get TokenAccountNotFoundError, wait a few seconds and try again!

        // // Create the ATA for your Wallet
        // const ownerAta = getOrCreateAssociatedTokenAccount(
        //     ???
        // );
    
        // Complete the Challenge!
        // const completeTx = await program.methods.completeChallenge3()
        // .accounts({
        //     owner: 
        //     ata: (await ownerAta).address,
        //     profile: 
        //     authority: 
        //     mint: mint,
        //     tokenProgram: 
        //     associatedTokenProgram: 
        //     systemProgram:
        // })
        // .signers([
        //     keypair
        // ]).rpc();

        // console.log(`Success! Check out your TX here: 
        // https://explorer.solana.com/tx/${completeTx}?cluster=devnet`);

    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();