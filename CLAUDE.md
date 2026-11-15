@AGENTS.md

## Git

Keep history linear. Integrate work by rebasing or squashing: `git pull --rebase`, `git rebase`, then `git merge --ff-only`. Merge commits are not allowed.

Commit messages follow Conventional Commits, enforced by a `commit-msg` hook. See `docs/agents/commit-conventions.md`.

## Factory

This repo runs the software factory with [botalot](https://github.com/paigelester/botalot), installed as a dev dependency (`npx botalot`). Its contract is `.factory/contract.json`: the stacks whose knowledge loads, the checks every change must pass, and which reviews a change gets.

- Check your work with `npx botalot verify`. It runs every check in the contract; exit 0 means the work passes.
- To implement a ticket, start its run with `npx botalot start implement <ticket>` rather than doing the steps by hand. `npx botalot next` carries a waiting run on.
- When a check is added to or removed from `package.json`, change `commands.verify` in the contract in the same commit, then run `npx botalot check`.
- To upgrade botalot, change its version in `package.json` and the `botalot` version in the contract together.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for paigelester/paigelesterwebsite (via `gh`). See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the default five triage labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
