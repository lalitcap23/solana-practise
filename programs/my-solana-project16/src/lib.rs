use anchor_lang::prelude::*;

declare_id!("7Jq9AXrEwQkjMz2WQNk5kc7ryajWr23xZ86JsqccWTFL");

#[program]
pub mod my_solana_project16 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
