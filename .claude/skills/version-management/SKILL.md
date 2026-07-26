---
name: version-management
description: "changesets 기반 버전 관리 흐름(Version Packages PR → GitHub Pages 배포, npm publish는 없음)과, PR 머지 시 changeset 봇 커밋 때문에 발생하는 GitHub Actions 'action_required' 승인 이슈 대응법. Use when 새 changeset을 추가할 때, 'Version Packages' PR을 머지해야 할 때, PR이 CI는 다 통과한 것 같은데 mergeStateStatus가 BLOCKED로 안 풀릴 때, 또는 '버전 올려줘', '배포해줘' 같은 요청이 있을 때."
---

# Version Management (pjb0811.github.io)

이 저장소는 `private: true`인 개인 사이트(Astro, npm 패키지 매니저)이고 **npm에 배포되지 않는다.** changesets는 오직 `CHANGELOG.md` 이력 관리 + 버전 번호 bump용으로만 쓰인다.

## 릴리스 흐름

1. **changeset 추가**: 눈에 띄는 변경이 있는 PR에는 `.changeset/*.md`가 필요하다. `npm exec changeset`으로 수동 생성하거나, `changeset-draft.yml`(필수 상태 체크 `draft`)이 PR별로 초안을 자동 생성/갱신해준다.
2. **Version Packages PR**: main에 push될 때마다 `version.yml`이 돌면서, 누적된 changeset들로 `changeset-release/main` 브랜치에 "🔖 chore: version packages" PR을 열고 유지한다. `package.json` 버전 bump + `CHANGELOG.md` 갱신.
3. **머지 시 동작**: 이 저장소는 `publish.yml`이 없다 — Version Packages PR을 머지하는 것도 그냥 평범한 main push라서, `deploy.yml`(GitHub Pages 배포: build → `actions/deploy-pages`)이 다른 커밋과 동일하게 실행될 뿐이다. 별도의 배포 승인/확인 절차가 필요 없다 (npm publish 같은 외부 공개 행위가 없음).

즉 이 저장소에서는 Version Packages PR 머지를 다른 일반 PR 머지와 동일하게 취급해도 된다 — use-hooks/ui-kit처럼 "머지 = npm 공개 배포"라는 긴장감은 없다.

## 필수 상태 체크와 "action_required" 함정

이 저장소의 브랜치 룰셋은 `draft`와 `lint-and-build (Node v24.x)`를 필수로 요구하고, 추가로 Copilot 코드 리뷰 룰(`copilot_code_review`, 현재 `review_on_push: false`)도 걸려 있다 (`gh api repos/pjb0811/pjb0811.github.io/rulesets`로 확인 가능).

PR을 열면 `changeset-draft.yml` 봇이 그 브랜치에 커밋을 하나 더 push해서(draft changeset 추가/갱신) `synchronize` 이벤트가 발생할 수 있다. 이 새 커밋에 대해 재트리거된 CI/Changeset Draft 실행이 **`conclusion: action_required`, job 0개**로 멈추는 경우가 있는데, 실제로는 문제 없는 정상 재실행이다. 이러면 필수 체크가 "완료"로 안 잡혀 PR의 `mergeStateStatus`가 계속 `BLOCKED`로 남는다.

**해결 절차:**

```bash
gh run list --branch <branch> --json databaseId,name,status,conclusion,headSha,event
gh api -X POST repos/pjb0811/pjb0811.github.io/actions/runs/<run_id>/approve
gh run watch <run_id> --exit-status
gh pr view <n> --json mergeable,mergeStateStatus   # CLEAN이면 머지 가능
```

## 브랜치 네이밍

Conventional Commits 접두어를 브랜치명에도 쓴다: `feat/*`, `fix/*`, `refactor/*`, `chore/*`.

⚠️ **함정**: git은 `feat`이라는 이름의 브랜치와 `feat/foo`라는 이름의 브랜치를 동시에 가질 수 없다 (ref 경로 충돌). 새 브랜치를 만들기 전에 `git branch -a`로 겹치는 bare 브랜치가 남아있는지 확인하고, 있으면 대체 이름을 쓰거나 삭제 여부를 사용자에게 먼저 물어본다.

## 참고

- 관련 워크플로우: `.github/workflows/changeset-draft.yml`, `.github/workflows/version.yml`, `.github/workflows/deploy.yml`, `.github/workflows/ci.yml`
- 패키지 매니저는 `npm`(다른 저장소는 대부분 `pnpm`) — 커맨드 예시를 그대로 복붙하지 말고 이 저장소는 `npm ci`/`npm exec` 계열을 쓴다는 점 유의.
