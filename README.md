# Protein Engineering & Regulation Lab — Homepage

KIST 단백질공학·조절 연구실 (PI: Moon-Hyeong Seo · 서문형) 홈페이지 production 빌드.

기존 사이트: https://sites.google.com/site/dreamerprotein/ (마이그레이션 후 redirect 예정)

영문 단일 페이지 구조이며, 멤버·동문 한글명, 주소 한글 표기 등 일부 정보는 한글로 병기됩니다.

---

## 빠른 시작

### 로컬에서 미리보기

```bash
# Python 3 필요
python -m http.server 8000
```

브라우저에서 http://localhost:8000 접속.

### 또는 그냥 더블클릭

`index.html`을 더블클릭하여 브라우저에서 열기.

---

## 사이트 구조

```
Hompage/
├── README.md
├── index.html              # Home
├── research.html           # Research
├── publications.html       # Publications
├── members.html            # Members
├── lab-life.html           # Lab Life
├── contact.html            # Contact
├── assets/
│   ├── styles.css              # 모든 페이지 공통 스타일시트
│   ├── photos.js               # 멤버 사진 자동 로더 (확장자 자동 감지)
│   ├── lab-life-photos.js      # Lab Life 사진 매니페스트 (캡션·날짜·색상)
│   └── images/
│       ├── research/           # 연구 일러스트 4장 (hero + theme 1·2·3)
│       ├── members/            # 멤버 사진 (사용자가 추가)
│       └── lab-life/           # Lab Life 사진 (사용자가 추가)
└── mockups/                # Phase 1 시안 비교 자료 (보존)
```

각 페이지는 `<link rel="stylesheet" href="assets/styles.css">`로 공통 스타일을 사용하며, 멤버 사진이 들어가는 페이지(`index.html`, `members.html`)는 `<script src="assets/photos.js"></script>`로 자동 로더를 사용합니다.

---

## 페이지별 콘텐츠

### Home — `index.html`
- **Hero 배너 이미지** (`assets/images/research/hero-reductive.png`) + Hero 텍스트
- Research at a glance (연구 3축 짧은 카드, 클릭 시 research.html#테마앵커로 이동)
- Latest publication (Featured Adv. Sci. 2025 + 23편 카운트)
- Meet the team (PI + 5명 미니 배지 — 사진 자동 로드)
- Hiring 배너

### Research — `research.html`
연구 3축 자세히. 각 카드는 좌측 정사각형 일러스트 + 우측 본문(배경 단락 + "Our approach" 박스 + 키워드)으로 구성됩니다.

| 테마 | 제목 | 이미지 파일 |
|---|---|---|
| 01 | Targeting Protein–Protein Interactions | `assets/images/research/theme-01-ppi-binder.png` |
| 02 | PPI study by screening motif-mediated protein interactions | `assets/images/research/theme-02-screening.png` |
| 03 | High-Sensitivity Biosensors | `assets/images/research/theme-03-biosensor.png` |

### Publications — `publications.html`
페이지 구성 (위에서 아래로):
1. External profiles (Google Scholar, PubMed)
2. **Author key**: <strong>Seo MH</strong> = lab PI · `*` Co-corresponding or co-first author
3. **01 Selected Publications** (대표 논문 7편)
4. **02 Press & Media** (16건의 보도)
5. **03 All Publications** (23편 전체, 연도별)

각 논문에는:
- **모든 저자명** (et al. 미사용), **Seo MH 굵게**
- 정확한 권/호/페이지/연도 (예: Adv. Sci. 12, 2406018 (2025))
- **저널 페이지 직접 링크**

별표(*) 표기:
- **공동교신저자**: [23] Seo MH\*, [17] Seo MH\* / Kim HS\*
- **공동제1저자**: [12] Davey NE\* / Seo MH\* / Yadav VK\*, [10] Sun MG\* / Seo MH\*, [7] Choi JM\* / Seo MH\*, [6] Kim J\* / Seo MH\*

### Members — `members.html`
- **PI Hero 카드** — 240×300 사진 영역 + 약력 + 위트 인용구
  - PI quote: *"Securing research funding · Sustainable lab management — and figuring out where AI takes us next."*
- **Professional Experience 표** (5개 행) + **Education 표** (2개 행)
- **현재 구성원 5명** (영문 + 한글명 병기, 카드 폭 70% 사진):
  - Yun Lim · 임 윤 (Postdoctoral Fellow · since March 2022)
  - Min-Seok Choi · 최민석 (Postdoctoral Fellow · since November 2025)
  - Jiyul Kim · 김지율 (Ph.D. Student · since March 2023)
  - Jisoo Nam · 남지수 (Intern · since November 2024)
  - Minhye Kim · 김민혜 (Intern · since January 2025)
- **Former Members 7명** (영문 + 한글명 병기, 재직 기간·현재 소속):
  - Jiyoung Nam · 남지영 — Postdoc · 2018.05–2020.04 · Now: KRIBB
  - Meong Il Kim · 김명일 — Postdoc · 2021.10–2024.03
  - Jisung Oh · 오지성 — M.S. & Intern · 2021.12–2024.11
  - Da Sol Kim · 김다솔 — Intern · 2018.05–2020.02 · Now: KDCA
  - Seon Young Lee · 이선영 — Intern · 2019.06–2020.11 · Now: IBS
  - **Youn Hee Jung · 정윤희** — Intern · 2020.03–2021.04 · **Now: AstraZeneca**
  - Ye-Bin Won · 원예빈 — Intern · 2020.05–2022.02

### Lab Life — `lab-life.html`
- 폴라로이드 보드 (비대칭 회전 + hover 시 펼쳐짐)
- 손글씨 폰트 (Caveat) 캡션
- **사진 자동 표시**: `assets/images/lab-life/` 폴더에 실제 사진 파일이 있는 폴라로이드만 자동 표시. 사진이 없는 카드는 자동 숨김. 사진이 0장이면 "Memories will be added here" 빈 상태 메시지 표시.

### Contact — `contact.html`
- 주소·전화·이메일·연구실 합류 문의 (4개 카드, 주소는 영문/한글 병기)
- **Google Maps iframe 임베드** + Open in Google Maps · Get directions 링크
- Getting here: KTX·자가용 안내

---

## 한글 표기 위치

이 사이트는 영문이 기본이지만, 다음 위치에 한글이 병기됩니다:

| 페이지 | 한글 표기 |
|---|---|
| Members | PI 한글명 (서문형) · PI 직책 (KIST 책임연구원) · 현재 멤버 5명 한글명 · 동문 7명 한글명 |
| Contact | 주소 한글 표기 (강원도 강릉시 사임당로 679 · 한국과학기술연구원 강릉분원 천연물연구소) |

---

## 사진 업로드 가이드

### 멤버 사진 — `assets/images/members/`

다음 베이스명(확장자 제외)으로 저장하면 자동으로 사이트에 표시됩니다. **확장자는 `.jpg`, `.png`, `.jpeg`, `.webp` 중 어느 것이든 자동 인식**됩니다.

| 파일 베이스명 | 누구 |
|---|---|
| `seo` | PI Moon-Hyeong Seo · 서문형 |
| `yun-lim` | Yun Lim · 임 윤 |
| `min-seok-choi` | Min-Seok Choi · 최민석 |
| `jiyul-kim` | Jiyul Kim · 김지율 |
| `jisoo-nam` | Jisoo Nam · 남지수 |
| `minhye-kim` | Minhye Kim · 김민혜 |

**규약**:
- 권장 크기: **800×1000 px** (4:5 portrait), JPG / PNG / JPEG / WEBP
- 조명: 자연광 또는 부드러운 실내 조명, 단색 배경 권장
- 파일명: 소문자 + 하이픈 (`{firstname-lastname}.{확장자}`)
- 파일이 없으면: 색상 그라데이션 + 이니셜 placeholder 자동 표시 (깨진 이미지 없음)
- 사진이 추가되면: JavaScript가 자동 로드하고 placeholder 이니셜도 자동 숨김 (HTML 수정 불필요)

#### 멤버별 사진 위치(crop) 미세조정

`members.html`의 해당 멤버 카드 `style="background-position: ..."` 값으로 조정하세요. 현재 적용된 값:

| 멤버 | background-position | 이유 |
|---|---|---|
| Jisoo Nam | `35% center` | 정사각형 사진의 인물이 약간 좌측에 위치 |
| Minhye Kim | `center 25%` | 정사각형 사진의 얼굴이 약간 위쪽에 위치 |
| 그 외 | (지정 없음, `center` 기본값) | 4:5 또는 3:4 비율로 자연스럽게 들어맞음 |

값 의미: `좌우% 상하%`. `0% 0%` = 좌상단, `100% 100%` = 우하단. 보통 `center`(=`50% 50%`) 기준에서 5~15% 단위로 조정합니다.

### Lab Life 사진 — `assets/images/lab-life/` + 매니페스트

Lab Life 페이지는 **JavaScript 매니페스트 파일** (`assets/lab-life-photos.js`) 을 읽어 폴라로이드를 동적으로 생성합니다. HTML을 직접 수정할 필요 없이, **이 한 파일만 편집**하면 사진을 추가·변경·재정렬할 수 있습니다.

**사진 사양**:
- 권장 크기: **1000×1000 px** (1:1 square), JPG 또는 PNG
- 파일명 규칙: `YYYY-MM-{short-description}.jpg`

**현재 매니페스트** (`assets/lab-life-photos.js`):

| file | caption | date | color |
|---|---|---|---|
| `2025-12-lab-dinner.jpg` | Lab dinner @ Gangneung | Dec · 2025 | warm |
| `2024-03-first-spr.jpg` | Yun's first SPR run | Mar · 2024 | cool |
| `2024-07-data-point.jpg` | Finally — that data point | Jul · 2024 | green |
| `2024-10-ksmb-jeju.jpg` | KSMB conference, Jeju | Oct · 2024 | dusk |
| `2025-11-welcome-min-seok.jpg` | Welcome, Min-Seok! | Nov · 2025 | gold |
| `2025-01-snowy-kist.jpg` | Snowy day at KIST | Jan · 2025 | (default) |
| `2025-05-bench-picnic.jpg` | Picnic by the bench | May · 2025 | warm |
| `2024-08-paper-submitted.jpg` | First paper submitted! | Aug · 2024 | green |
| `2025-02-late-sequencing.jpg` | Late-night sequencing | Feb · 2025 | cool |

#### 새 추억 추가하기 (2단계)

**1) 사진 파일을 폴더에 저장**:
`assets/images/lab-life/` 에 1000×1000 px 정사각 사진을 `YYYY-MM-{short-description}.jpg` 형태로 저장.

**2) 매니페스트에 한 항목 추가**:
`assets/lab-life-photos.js` 파일을 메모장 등으로 열어 배열 안에 한 블록을 추가:

```javascript
{
  file:    "2026-05-lab-retreat.jpg",        // 폴더에 저장한 파일명 그대로
  caption: "Lab retreat in Sokcho",          // 손글씨 캡션 (한글·이모지 OK)
  date:    "May · 2026",                     // 작은 날짜 글씨
  color:   "warm"                            // 'warm'·'cool'·'green'·'dusk'·'gold'·'' 중 택
}
```

배열의 **위에서 아래 순서가 페이지 표시 순서**입니다. 가장 최근 추억을 맨 위로 두려면 배열 첫 항목으로 추가.

#### 자동 처리 동작

- 매니페스트에 등록되었지만 **사진 파일이 없는 항목은 자동 숨김** (placeholder 표시 안 함)
- 사진이 한 장도 로드되지 않으면 "Memories will be added here" 빈 상태 메시지 표시
- 매니페스트 순서대로 폴라로이드가 표시되며, 누락된 슬롯이 있어도 빈 자리 없이 자연스럽게 이어짐
- `color` 필드는 사진 파일이 없을 때만 보이는 placeholder 그라데이션 색상 (실제 사진이 있으면 무시됨)

#### 필드 의미

| 필드 | 설명 | 필수 |
|---|---|---|
| `file` | `assets/images/lab-life/` 안의 파일명 (확장자 포함) | ✓ |
| `caption` | 손글씨체로 표시되는 큰 캡션 텍스트 | ✓ |
| `date` | 모노 폰트로 표시되는 작은 날짜 라벨 | ✓ |
| `color` | placeholder 그라데이션 색상 (`warm`/`cool`/`green`/`dusk`/`gold`/`''`). 실제 사진이 있으면 영향 없음 | 권장 |

### 연구 일러스트 — `assets/images/research/`

이미 4장의 일러스트가 적용되어 있습니다. 교체하실 경우 아래 파일명을 그대로 사용하시면 됩니다:

| 파일명 | 사용 위치 | 권장 비율 |
|---|---|---|
| `hero-reductive.png` | `index.html` Hero 배너 | 16:9 가로형 |
| `theme-01-ppi-binder.png` | `research.html` Theme 01 | 1:1 정사각형 |
| `theme-02-screening.png` | `research.html` Theme 02 | 1:1 정사각형 |
| `theme-03-biosensor.png` | `research.html` Theme 03 | 1:1 정사각형 |

---

## 사진 자동 로더 동작 방식 (`assets/photos.js`)

HTML에 `data-photo="베이스명"` 속성이 있는 모든 요소에 적용:

```html
<div class="member-photo" data-photo="yun-lim">YL</div>
```

스크립트가 다음 순서로 확장자를 시도:
1. `assets/images/members/yun-lim.jpg`
2. `assets/images/members/yun-lim.png`
3. `assets/images/members/yun-lim.jpeg`
4. `assets/images/members/yun-lim.webp`
5. `JPG`, `PNG` 대문자 변형

**처음 로드되는 파일을 사용**하며, 로드 성공 시 요소에 `has-photo` 클래스가 붙어 placeholder 이니셜이 자동 숨겨집니다. 모든 확장자가 실패하면 placeholder 그대로 유지됩니다.

기본 폴더는 `assets/images/members`이며, `data-photo-path="다른/경로"` 속성으로 변경 가능합니다 (예: 향후 동문 사진 적용 시).

---

## 검수 필요 항목

### 우선 확인
- [x] 정윤희 (Youn Hee Jung) — 현재 소속 아스트라제네카 ✓
- [x] 별표(*) 표기 — 공동교신 [23], [17] · 공동제1 [12], [10], [7], [6] ✓
- [x] PI 인용구 — *"Securing research funding · Sustainable lab management — and figuring out where AI takes us next."* ✓
- [ ] PI 학력/경력 표 (5개 경력 + 2개 학력)
- [ ] 신문 보도 16건 링크 동작
- [ ] Google Maps 임베드 위치
- [ ] 멤버 사진 6장 모두 정상 표시 (Jisoo Nam 좌측 정렬, Minhye Kim 위쪽 정렬 자연스러운지)

### 잠정 표기 / 추후 보완
- [ ] **멤버 연구 관심사** — 모든 멤버가 "research interests TBD" placeholder. 본인이 작성 후 HTML의 `member-interests` 텍스트 교체 필요
- [ ] **Lab Life 사진** — 폴더에 실제 사진 파일을 넣어주시면 자동 표시됨
- [ ] 인턴 두 명(Jisoo Nam · Minhye Kim)의 개별 이메일이 있다면 PI 이메일 경유 표기를 본인 이메일로 교체

---

## 배포 (GitHub Pages)

이 디렉토리를 GitHub repo에 push하면 즉시 배포됩니다.

**계정 / 저장소 / URL**:
- GitHub username: `Moonhyeong`
- Repository: `dreamerprotein` (Public)
- 배포 URL: **https://Moonhyeong.github.io/dreamerprotein/**

```bash
# 처음 배포 시 (이미 git init 완료)
git add .
git commit -m "Initial production site"
git remote add origin https://github.com/Moonhyeong/dreamerprotein.git
git push -u origin main
```

이후 콘텐츠 업데이트 시:
```bash
git add .
git commit -m "Update {변경 내용}"
git push
```

GitHub repo Settings → Pages → Source: `main` branch / `/ (root)` → Save → 1-2분 후 위 URL에 자동 배포.

기존 Google Sites는 한동안 유지하면서 "We've moved to https://Moonhyeong.github.io/dreamerprotein/" 안내 페이지로 사용하면 인용된 기존 URL이 깨지지 않습니다.

---

*Last updated: 2026-04-26*
