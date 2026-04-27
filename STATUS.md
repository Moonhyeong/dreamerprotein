# 프로젝트 현황 — Status & Next Steps

KIST 단백질공학·조절 연구실 (Seo Lab) 홈페이지 리뉴얼 프로젝트의 현재 진행 상황과 남은 작업을 정리한 문서입니다.

**다음 세션 시작 시**: 이 파일을 먼저 열어 어디까지 했는지 확인 → "Phase 3 — 배포 전 작업"부터 이어서 진행.

---

## 전체 단계 개요

| 단계 | 상태 | 내용 |
|---|---|---|
| **Phase 1** | ✅ 완료 | 4가지 디자인 시안 비교, 시안 A(Molecular Minimal) 선택 |
| **Phase 2** | ✅ 완료 | 영문 단일 사이트 6개 페이지 빌드, 콘텐츠·이미지·기능 적용 |
| **Phase 3** | ⏳ 남음 | 검수 → 미보완 콘텐츠 채움 → GitHub Pages 배포 → 기존 사이트 redirect |

---

## Phase 1·2에서 완료된 것 (이미 끝남)

### 사이트 구조
- 영문 단일 페이지 6개: `index` · `research` · `publications` · `members` · `lab-life` · `contact`
- 일부 한국어 병기 (멤버 한글명, PI 직책 "KIST 책임연구원", 주소, Lab Life 캡션 일부)

### 콘텐츠
- **PI 정보**: 학력 (KAIST B.S./Ph.D.) · 경력 5단계 · 소속 3단계 (KIST GINP / Natural Product Drug Development Division / Center for Natural Product Efficacy Optimization) · 위트 인용구 *"Securing research funding · Sustainable lab management — and figuring out where AI takes us next."*
- **현재 멤버 5명**: Yun Lim · Min-Seok Choi · Jiyul Kim · Jisoo Nam · Minhye Kim (한글명 병기)
- **동문 7명**: Jiyoung Nam(KRIBB) · Meong Il Kim · Jisung Oh · Da Sol Kim(KDCA) · Seon Young Lee(IBS) · Youn Hee Jung(AstraZeneca) · Ye-Bin Won
- **논문 23편 (2007–2025)** — 정확한 권/호/페이지/연도 + 모든 저자명 + 저널 페이지 직접 링크 + 별표 표기 (공동교신 [23][17] · 공동제1 [12][10][7][6])
- **신문 보도 16건** — 5개 그룹 (Adv.Sci. 2025 / Q-SHINE 2023 / Broadcast / Interviews / Tech transfer)
- **연구 3축 콘텐츠** — Targeting PPIs / Motif-mediated screening / Biosensors

### 디자인·이미지
- 연구 일러스트 4장 (`assets/images/research/`): hero-reductive · theme-01 PPI · theme-02 screening · theme-03 biosensor
- 멤버 사진 6장 (`assets/images/members/`): PI + 5명 (JPG/PNG 혼합)
- Lab Life 사진 10장 (`assets/images/lab-life/`): 2019–2025 시간 역순 정렬

### 자동화 기능
- **멤버 사진 자동 로더** (`assets/photos.js`): 파일명 베이스명만 적으면 `.jpg/.png/.jpeg/.webp` 어느 확장자든 자동 감지
- **사진 로드 시 placeholder 이니셜 자동 숨김** (`.has-photo` 클래스)
- **Lab Life 매니페스트** (`assets/lab-life-photos.js`): 한 파일에서 사진 캡션·날짜·색상 관리, 순서 변경·추가·삭제 가능
- **Lightbox**: Lab Life 폴라로이드 클릭 시 큰 이미지 + 캡션 표시 (ESC/배경 클릭으로 닫기)
- **Google Maps iframe** (Contact 페이지)
- **반응형 디자인** (데스크톱·태블릿·모바일)

### 폰트·스타일
- Inter (sans) · Lora (serif) · JetBrains Mono · Caveat (영문 손글씨) · Gaegu (한글 손글씨)
- 컬러 팔레트: navy `#1e3a5f` + accent blue `#3b82c4` + off-white `#fafafa`

---

## Phase 3 — 배포 전 작업 (남음)

### A. 콘텐츠 검수 (PI 검수 필요)

다음 항목을 PI 또는 멤버가 직접 확인 후 수정사항을 알려주시면 적용합니다:

- [ ] **PI 학력/경력 표** — 5개 경력 + 2개 학력 정확성
- [ ] **PI 인용구 톤** — *"…and figuring out where AI takes us next."* 만족하시는지
- [ ] **현재 멤버 5명** — 이름 영문/한글, 직책, 입사 시점, 이메일
- [ ] **동문 7명** — 이름 영문/한글, 재직 기간, 현재 소속 (특히 정윤희 → 아스트라제네카 확인됨 ✓)
- [ ] **논문 23편 인용** — 권/호/페이지/연도, 저자명, 저널 링크 동작
- [ ] **별표(*) 표기 위치** — 공동교신/공동제1 정확성
- [ ] **신문 보도 16건** — 모든 링크 클릭 동작 확인
- [ ] **소속 3단계 정식 명칭** — Center 이름 "Center for Natural Product Efficacy Optimization" 정확한지
- [ ] **Google Maps** — KIST 강릉 위치 정확
- [ ] **Lab Life 캡션** — 10장 사진의 캡션·날짜 정확성

### B. 미보완 콘텐츠 채우기

#### 1. 멤버 연구 관심사 (5명)
현재 모두 *"— research interests TBD —"* placeholder.
**필요한 정보**: 각 멤버의 연구 관심사 1-2줄 (영문 권장).
**적용 방법**: `members.html`에서 해당 카드의 `<p class="member-interests">` 텍스트 교체.

#### 2. 인턴 이메일
현재 Jisoo Nam, Minhye Kim 두 명은 *"contact via mhseo@kist.re.kr"*.
- 본인 이메일이 있으면 알려주시면 교체.
- 없으면 그대로 유지 (PI 경유로 충분).

#### 3. (선택) 추가 사진
- Lab Life에 새 사진을 더 넣고 싶으면 폴더에 저장 + 매니페스트에 한 항목 추가.
- 자세한 방법은 `README.md` 의 "Lab Life 사진" 섹션 참조.

### C. 도메인 및 호스팅 결정 ✅ 완료

- ✅ **GitHub 계정**: PI 개인 계정 `Moonhyeong` 사용
- ✅ **Repository**: `dreamerprotein` (Public)
- ✅ **도메인**: `https://Moonhyeong.github.io/dreamerprotein/` (무료, github.io)
- ✅ **mockups 처리**: `.gitignore`에 추가, GitHub에 업로드 안 됨 (로컬에만 보존)
- ⏸️ 커스텀 도메인 (예: `dreamerprotein.org`)은 추후 필요시 추가 가능

### D. 배포 작업 (진행 중)

#### 1. 로컬 준비 (✅ 일부 완료)
- ✅ `.gitignore` 생성 (mockups + OS 임시 파일 제외)
- ✅ `git init -b main` 완료
- [ ] git config user.name / user.email 설정 (PI 직접)
- [ ] `git add .` + `git commit` (config 설정 후)

#### 2. GitHub 저장소 생성 (PI 직접, GitHub.com에서)
- [ ] github.com에서 새 repository 생성
  - Name: `dreamerprotein`
  - Visibility: **Public**
  - README, .gitignore, License 모두 **추가 안 함** (이미 로컬에 있음)

#### 3. Push
```bash
git remote add origin https://github.com/Moonhyeong/dreamerprotein.git
git push -u origin main
```

#### 4. Pages 활성화 (PI 직접, GitHub Settings에서)
- [ ] Repository → Settings → Pages
- [ ] Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save
- [ ] 1-2분 후 URL 활성화 확인: https://Moonhyeong.github.io/dreamerprotein/

#### 배포 후 확인
- [ ] 모든 페이지 정상 로드
- [ ] 멤버·Lab Life·연구 일러스트 사진 표시
- [ ] Google Maps iframe 동작
- [ ] 외부 링크 (논문 저널 페이지, 신문 보도, ORCID 등) 동작
- [ ] 모바일 환경 (Chrome DevTools 또는 실제 폰)

### E. 기존 Google Sites 마이그레이션

- [ ] 기존 https://sites.google.com/site/dreamerprotein/ 에 "We've moved to {새 URL}" 안내 페이지 추가
- [ ] 일정 기간 (3-6개월) 둘 다 유지하여 인용된 기존 URL이 깨지지 않도록 보호
- [ ] 외부 프로필 URL 업데이트:
  - [ ] Google Scholar 프로필
  - [ ] PubMed (저자 페이지가 있다면)
  - [ ] ORCID
  - [ ] KIST 직원 페이지
  - [ ] LinkedIn / 학회 회원 페이지

---

## 현재 파일 구조

```
Hompage/
├── README.md                       # 사이트 운영 가이드 (사진 추가, 콘텐츠 수정, 배포)
├── STATUS.md                       # 이 파일 (현재 진행 상황 + 남은 작업)
├── index.html                      # Home
├── research.html
├── publications.html
├── members.html
├── lab-life.html
├── contact.html
├── assets/
│   ├── styles.css                  # 모든 페이지 공통 스타일
│   ├── photos.js                   # 멤버 사진 자동 로더 (확장자 감지)
│   ├── lab-life-photos.js          # Lab Life 매니페스트 (캡션·날짜·순서)
│   └── images/
│       ├── research/               # 연구 일러스트 4장
│       │   ├── hero-reductive.png
│       │   ├── theme-01-ppi-binder.png
│       │   ├── theme-02-screening.png
│       │   └── theme-03-biosensor.png
│       ├── members/                # 멤버 사진 6장
│       │   ├── seo.jpg
│       │   ├── yun-lim.png
│       │   ├── min-seok-choi.jpg
│       │   ├── jiyul-kim.png
│       │   ├── jisoo-nam.jpg
│       │   └── minhye-kim.jpg
│       └── lab-life/               # Lab Life 사진 10장
│           ├── 2025-11-lab-photo.jpg
│           ├── 2025-02-ceremony.jpg
│           ├── 2023-05-gangmun-beach.jpg
│           ├── 2022-12-year-end-dinner.jpg
│           ├── 2022-12-year-end-dinner-2.jpg
│           ├── 2022-07-center-dinner.jpg
│           ├── 2021-11-gangmun-beach.jpg
│           ├── 2021-04-lunch.jpg
│           ├── 2019-06-jeju-kmb.jpg
│           └── 2019-06-jeju-kmb-2.jpg
└── mockups/                        # Phase 1 시안 비교 자료 (보존, 배포 시 제외 가능)
    ├── index.html                  # 4개 시안 비교 게이트웨이
    ├── option-a-minimal.html       # 선택된 시안 A
    ├── option-b-canvas.html
    ├── option-c-korean.html
    ├── option-d-editorial.html
    ├── members.html                # 시안 A의 분리 멤버 페이지 mockup
    └── shared/content.js
```

---

## 다음 세션 시작 가이드

### 1단계 — 어디까지 했나 확인
이 STATUS.md 파일을 다시 열어 "완료된 것" 섹션 빠르게 훑기.

### 2단계 — 검수 진행
README.md 의 "검수 필요 항목" + 이 문서 "Phase 3 § A" 항목을 PI 또는 멤버에게 전달, 정정사항 회수.

### 3단계 — 정정사항 반영 + 미보완 채움
- 회수한 정정사항을 HTML에 반영 (Claude에게 "어디 어디 어떻게 바꿔줘" 요청)
- 멤버 연구 관심사 채움
- 추가 사진 있으면 폴더 + 매니페스트 업데이트

### 4단계 — 도메인/호스팅 결정
PI와 협의 후 GitHub 계정·도메인 결정.

### 5단계 — 배포
이 문서 "Phase 3 § D"의 git 명령어 실행. Claude에게 "배포 도와줘" 요청 가능 (그러면 git 명령 안내).

### 6단계 — 배포 후 검증
모든 외부 링크·사진·iframe 동작 확인. 모바일 환경 테스트.

### 7단계 — 마이그레이션
기존 Google Sites에 안내, 외부 프로필 URL 업데이트.

---

## 향후 확장 아이디어 (선택)

배포 후 운영하면서 추가하면 좋을 기능들:

- **News / Highlights 섹션**: 최근 논문 게재, 수상, 학회 발표 등 dated 카드 (Home 또는 별도 페이지)
- **Mol\* 단백질 뷰어 임베드**: Research 페이지에 대표 단백질 구조 인터랙티브 표시
- **Members 페이지에 동문 사진**: 현재 동문은 이니셜 아바타. 사진 추가 가능하게 디자인 확장
- **Publications 페이지 BibTeX 다운로드**: 각 논문에 .bib 파일 다운로드 버튼
- **사이트 분석**: Cloudflare Web Analytics 또는 GoatCounter (쿠키 없는 방문자 통계)
- **다국어 지원 재도입**: 한국어 학생 모집을 강화하려면 한국어 페이지 다시 추가
- **Jekyll/al-folio 마이그레이션**: BibTeX 자동 렌더링이 필요해지면 al-folio 테마로 전환

---

## 참고 — 작업 중 결정된 정책

다음 세션에서 일관성 유지를 위해 기억해두면 좋은 결정사항:

| 결정 사항 | 정책 |
|---|---|
| 사이트 언어 | **영문 단일** (한국어 페이지는 만들지 않기로 결정 — 한글 병기로 충분) |
| 호스팅 | **GitHub Pages** (Cloudflare Pages, Netlify 검토했으나 학계 표준 + 단순함으로 GitHub 선택) |
| 디자인 시안 | **시안 A (Molecular Minimal)** — 화이트 + 네이비 + 블루 액센트 |
| 폰트 | Inter + Lora (영문) + Caveat (영문 손글씨) + Gaegu (한글 손글씨) |
| 멤버 사진 | 4:5 portrait, 카드 폭 70%, 자동 확장자 감지 |
| Lab Life | 매니페스트 기반, 시간 역순(최신이 위), Lightbox로 원본 보기 |
| 인용구 정책 | 모든 저자 명시, et al. 미사용, Seo MH 굵게, 별표(*) 공동교신/공동제1 |
| 동문 정보 | 영문/한글명 병기, 재직 기간, 현재 소속 |
| 라이선싱 | 별도 LICENSE 파일 없음 (PI 결정 후 추가 가능) |

---

## 마지막 작업 일자

*2026-04-26* — Phase 2 (사이트 빌드) 완료, Phase 3 시작 직전.

다음 작업 시작 시 이 날짜 이후 변경사항이 있는지 (예: 새 논문 게재, 새 멤버 영입) 먼저 점검 필요.
