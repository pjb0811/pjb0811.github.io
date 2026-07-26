---
name: component-naming
description: "ui-kit에서 검증된 컴포넌트 폴더/export 네이밍 및 배럴 파일 규칙(kebab-case 폴더 + PascalCase export + 서브컴포넌트 배럴)을 이 저장소의 향후 목표 컨벤션으로 문서화. 현재는 `src/components/`에 폴더 없이 `ProjectCard.tsx` 같은 단일 파일만 있어 아직 적용 대상이 없음 — 서브컴포넌트를 가진 컴포넌트를 처음 추가하게 될 때 참고. Use when 새 컴포넌트에 서브컴포넌트가 필요해질 때, 컴포넌트를 폴더로 분리해야 할 때."
---

# Component Naming (목표 컨벤션 — pjb0811.github.io)

이 문서는 [ui-kit](https://github.com/pjb0811/ui-kit)에서 실제로 적용/검증된 컴포넌트 네이밍·배럴 파일 규칙을 참고용으로 가져온 것이다.

## 현재 상태

`src/components/`는 아직 `ProjectCard.tsx` 하나뿐인 flat 구조라(폴더 없음), 이 규칙이 실제로 적용될 대상이 없다. Astro 프로젝트 특성상 `.astro` 파일도 섞여 쓰인다는 점을 감안해서 적용한다.

⚠️ **소급 적용 아님**: 기존 `ProjectCard.tsx` 등을 이 규칙에 맞춰 리네임하지 않는다. 아래는 앞으로 **서브컴포넌트가 필요한 컴포넌트**를 처음 추가하게 될 때만 적용한다.

## 서브컴포넌트가 필요해지면

폴더/파일명은 kebab-case, export 식별자(컴포넌트명)는 PascalCase로 유지한다:

```
some-thing/
├── some-thing.tsx  # 메인 구현 (또는 .astro)
├── sub-part.tsx     # 서브컴포넌트
└── index.ts          # 순수 배럴, 구현 없음 (.tsx/.ts 컴포넌트에 한함 — .astro는 배럴 재export 문법이 다르므로 이 패턴을 그대로 쓰지 않는다)
```

TSX 컴포넌트의 배럴은 명시적 교차 타입 캐스팅으로 서브컴포넌트를 부착한다 (import된 바인딩에는 TS expando property가 안 먹혀서 `Main.Sub = Sub` 직접 대입은 `TS2339` 에러):

```ts
type MainComponent = typeof MainImpl & { SubPart: typeof SubPart };
const Main = MainImpl as MainComponent;
Main.SubPart = SubPart;
```

## 관련

- 케이스 무관 일반 절차(기존 컨벤션 파악, 안전한 일괄 리네임)는 `coding-style` 스킬 참고.
- 원본 규칙과 채택 배경: ui-kit `.claude/skills/component-naming/SKILL.md`.
