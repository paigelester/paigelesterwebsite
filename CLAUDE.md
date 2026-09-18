@AGENTS.md

## Git

Keep history linear. Integrate work by rebasing or squashing: `git pull --rebase`, `git rebase`, then `git merge --ff-only`. Merge commits are not allowed.

Commit messages follow Conventional Commits, enforced by a `commit-msg` hook. See `docs/agents/commit-conventions.md`.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for paigelester/paigelesterwebsite (via `gh`). See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the default five triage labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
