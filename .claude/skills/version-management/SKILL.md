---
name: version-management
description: "pjb0811.github.io specifics for releases: the site is `private: true` and never goes to npm, so merging the 'Version Packages' PR is an ordinary main push that redeploys GitHub Pages; changesets only bump the version and CHANGELOG.md; the changeset-draft bot only drafts for PRs that change src/; npm instead of pnpm; the required checks and the Copilot review rule. The common changesets flow, the `action_required` approval and branch naming are in the shared `changesets-release` skill. Use with it when adding a changeset, merging a 'Version Packages' PR, or when the user says '버전 올려줘', '배포해줘'."
---

# Version Management (pjb0811.github.io)

공통 흐름(changeset → Version Packages PR), `action_required` 실행 승인, 브랜치 이름 규칙은 공유 `changesets-release` 스킬을 따른다. 이 문서는 이 저장소에만 있는 내용이다.

## 패키지와 배포 상태

- `private: true`인 개인 사이트(Astro)이고 **npm에 배포되지 않는다.** `publish.yml`이 없으므로 공유 `publish-check`는 해당하지 않는다.
- changesets는 `package.json` 버전 bump와 `CHANGELOG.md` 이력에만 쓴다.
- **Version Packages PR 머지는 일반 main push와 같다.** `deploy.yml`이 다른 커밋과 똑같이 GitHub Pages에 다시 배포할 뿐이라 별도 배포 확인이 필요 없다.
- 패키지 매니저는 pnpm이 아니라 **npm**이다. 다른 저장소의 명령을 옮길 때 `npm ci`, `npm exec changeset`처럼 바꿔 쓴다.

## changeset 초안 봇

`changeset-draft.yml`은 `src/`를 바꾸고 `.changeset/pr-<PR 번호>.md`가 없는 PR에만 초안을 만든다. `src/`를 건드리지 않는 PR에는 초안도, changeset도 필요 없다. 일부러 changeset을 넣지 않는 `src/` 변경 PR은 `AGENTS.md`의 "Changesets" 절대로 같은 이름의 빈 changeset을 둔다.

## 필수 상태 체크

브랜치 룰셋은 `draft`와 `lint-and-build`를 요구하고, Copilot 코드 리뷰 룰(`copilot_code_review`, `review_on_push: false`, `review_draft_pull_requests: false`)도 걸려 있다(`gh api repos/pjb0811/pjb0811.github.io/rulesets`로 확인).

## 워크플로

- `.github/workflows/changeset-draft.yml`, `version.yml`, `deploy.yml`(GitHub Pages: build → `actions/deploy-pages`), `release.yml`(태그는 있는데 Release가 없을 때 `workflow_dispatch`로 보충, `tag` 입력값 필요), `ci.yml`
- `version.yml`의 Version Packages PR 제목과 커밋에는 아직 gitmoji(`🔖`)가 붙어 있다. 정리는 #33에서 다룬다.
