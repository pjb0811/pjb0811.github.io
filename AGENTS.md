## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Comments

Write comments for someone reading the code now: say what the code does first, give a reason only when the code alone would invite the wrong change (as a present-tense constraint), and replace history with an issue number such as `(#N)`. The full rules and examples are in section "C. 주석 작성" of the shared `coding-style` skill.

## Changesets

- `changeset-draft.yml` drafts `.changeset/pr-<PR number>.md` for a PR that changes `src/` and has no file by that name, and pushes it to the PR branch. Its wording and bump come from a model and may not match the change. PRs that don't touch `src/` get no draft.
- For a PR that changes `src/` but deliberately has no changeset, make `.changeset/pr-<PR number>.md` an empty changeset (`---` and `---` with nothing between): create it once the PR number is known, or empty the file the bot pushed. The workflow only looks for that file name, so an empty changeset under another name doesn't stop the draft. An empty changeset adds no bump and no CHANGELOG entry.
- When confirming a merge, compare the PR head SHA with the local tip. If they differ, check the commits the PR gained (`git log <local>..<head>`): a bot-drafted changeset ships in the next Version PR's CHANGELOG and GitHub Release as written (this happened in pjb0811/live-editor 4.5.0).
- The whole version and release flow is in `.claude/skills/version-management/SKILL.md`.

## Shared skills

Procedures shared by every pjb0811 repository are global Claude Code skills in the private repository `pjb0811/skills`. Agents that can't read them follow the summaries in this file.

| Skill                                 | Use                                                                                             |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `commit`, `pr`, `issue`               | Commit messages, PR and issue bodies                                                            |
| `coding-style`                        | Conventions, renames, comments (C), boolean names (D), braces (E), subcomponent file layout (F) |
| `changesets-release`, `publish-check` | Release flow and pre-release checks                                                             |
| `shared-library-first`                | Reusable UI goes to ui-kit and hooks to use-hooks first                                         |
| `ref-verification`                    | Read repository state from git refs, not the worktree                                           |

### Commit messages

- `type(scope): summary`: English imperative, lowercase start, no period, no gitmoji.
- Add a scope only when the change stays in one area. Never use the branch name.
- A breaking change puts `!` after the type or scope (`refactor(api)!: …`).
- The body is `-` bullets saying concretely what changed; for a breaking change, what breaks and what replaces it.
- No trailers such as `Co-Authored-By`.

### Repository skills

| Skill                   | Path                                    | Use                                                         |
| ----------------------- | --------------------------------------- | ----------------------------------------------------------- |
| `version-management`    | `.claude/skills/version-management/`    | This site's release and deploy specifics                    |
| `react-best-practices`  | `.claude/skills/react-best-practices/`  | Vercel, React performance rules                             |
| `composition-patterns`  | `.claude/skills/composition-patterns/`  | Vercel, component composition patterns                      |
| `web-design-guidelines` | `.claude/skills/web-design-guidelines/` | Vercel, UI and accessibility review                         |
| `writing-guidelines`    | `.claude/skills/writing-guidelines/`    | Vercel, review of the site's copy                           |

The Vercel skills are copied unmodified from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) at `063bee9`. `.prettierignore` lists them so a formatter doesn't change them. To update, copy the directories again from a newer commit and change this commit. `deploy-to-vercel` isn't included: the site deploys to GitHub Pages.
