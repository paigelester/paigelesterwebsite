---
name: implement-local
description: "Implement a piece of work based on a spec or set of tickets."
disable-model-invocation: true
---

Implement the work described by the user in the spec or tickets.

Use /tdd where possible, at pre-agreed seams.

Run typechecking regularly, single test files regularly, and the full test suite once at the end. Those are your only checks: ESLint and Prettier belong to the pre-commit hook, which fixes staged files when the work is committed.

Once done, use /code-review to review the work.

Do not stage or commit your work without asking; leave all changes unstaged in the working tree. Work and commit on whichever branch is checked out, including the default branch; create a branch only when the user asks for one. When the work is done, tell the user and give them the commit message you propose to use.

Keep that final message short and to the point: a line or two saying the work is done and how it was verified, only the review findings the user needs to act on or decide about, then the proposed commit message. Leave out process narration, per-file breakdowns, findings you've already resolved or that are out of scope, and the full review reports; the user can ask for detail.
