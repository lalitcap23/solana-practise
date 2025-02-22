 import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MySolanaProject16 } from "../target/types/my_solana_project16";

describe("my-solana-project16", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MySolanaProject16 as Program<MySolanaProject16>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
