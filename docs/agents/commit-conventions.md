# Commit Conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). A `commit-msg` hook runs commitlint with `@commitlint/config-conventional` and rejects a message that doesn't conform. CI doesn't check commit messages.

## Message format

```
<type>(<scope>): <subject>

<body>

<footer>
```

- **Header**: the whole first line is 100 characters or fewer.
- **Subject**: imperative, starting lower case, no trailing full stop. Say what the commit does, e.g. `add the Skills CV Section`.
- **Body** (optional): why the change was made, or a short list of what it covers. Wrap lines at 100 characters or fewer.
- **Footer** (optional): issue references and trailers, after a blank line.

## Types

| Type       | Use for                                                   |
| ---------- | --------------------------------------------------------- |
| `feat`     | A new feature visible on the site                         |
| `fix`      | A bug fix                                                 |
| `docs`     | Documentation only                                        |
| `style`    | Formatting that doesn't change behaviour                  |
| `refactor` | A code change that neither adds a feature nor fixes a bug |
| `perf`     | A performance improvement                                 |
| `test`     | Adding or correcting tests                                |
| `build`    | The build system or dependencies                          |
| `ci`       | CI configuration and workflows                            |
| `chore`    | Other maintenance that doesn't touch the site's code      |
| `revert`   | Reverting an earlier commit                               |

## Scopes

A scope is optional and there is no fixed list. Add one when it narrows down where the change lands, e.g. `feat(links): add LinkedIn`. Leave it out when the change is broad.

## Issue references

Reference the GitHub issue in the footer:

- `Closes #N` when the commit completes the issue. GitHub closes it when the commit reaches `master`.
- `Refs #N` when the commit contributes to the issue without finishing it.

```
feat: show the Work Experience CV Section

Closes #12
```

## Branching

Commit directly to `master`. For keeping history linear, see the Git section of `CLAUDE.md`.

## Hooks

Husky installs the hooks on `npm install`.

- `pre-commit` runs lint-staged on staged files only: ESLint (with `--fix`) then Prettier on JS and TS files, and Prettier on everything else it can format. Fixes are added to the commit; an unfixable lint error aborts it.
- `commit-msg` runs commitlint on the message.
