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

Write comments for someone reading the code now: say what the code does first, give a reason only when the code alone would invite the wrong change (as a present-tense constraint), and replace history with an issue number such as `(#N)`. The full rules and examples are in section "C. 주석 작성" of `.claude/skills/coding-style/SKILL.md`.

## Changesets

- `changeset-draft.yml` drafts `.changeset/pr-<PR number>.md` for a PR that changes `src/` and has no file by that name, and pushes it to the PR branch. Its wording and bump come from a model and may not match the change. PRs that don't touch `src/` get no draft.
- For a PR that changes `src/` but deliberately has no changeset, make `.changeset/pr-<PR number>.md` an empty changeset (`---` and `---` with nothing between): create it once the PR number is known, or empty the file the bot pushed. The workflow only looks for that file name, so an empty changeset under another name doesn't stop the draft. An empty changeset adds no bump and no CHANGELOG entry.
- When confirming a merge, compare the PR head SHA with the local tip. If they differ, check the commits the PR gained (`git log <local>..<head>`): a bot-drafted changeset ships in the next Version PR's CHANGELOG and GitHub Release as written (this happened in pjb0811/live-editor 4.5.0).
- The whole version and release flow is in `.claude/skills/version-management/SKILL.md`.
