import { IHeaderInfo, ITechStack, IExp, IEducation } from "types/aboutTypes"

export const headerInfo : IHeaderInfo = {
    name: '박하은',
    job: 'Software Engineer',
    email: "haileyhe01@gmail.com",
    github: "https://github.com/pullingoff",
    // firstSentences는 문단 형식으로 나뉘게 했으므로 문장 길이보다 문단길이로 쓰는게 좋다.
    firstSentences: [
        '"거미는 자신의 실로써 공간의 자유에 이른다."',
        '새로운 언어와 기술에 관심이 많고, 질문을 통해 지식을 하나로 엮는 걸 좋아합니다.',
        '사람들에게서 동기와 에너지를 주로 얻으며 협업과 소통에 능합니다.',
        // '새로운 무언가에 파고들어 내 것으로 만드는 걸 좋아합니다. 개발도 그렇게 시작했고, 다양한 질문을 통해 지식을 하나로 엮는 습관이 있습니다. 프론트엔드를 주로 하지만 파이썬의 간결함을 좋아합니다.',
        // '혼자보단 함께 하는 개발과 공부를 좋아하고, 사람들에게서 동기와 에너지를 얻습니다. 능동적으로 다양한 개발 경험을 쌓고 있습니다.',
        // '깊게 파고들 개발 분야를 찾기 위해 많은 것을 겪어보려고 하고 있습니다.',
    ]
}

export const projectExperiences : IExp[] = [
    {
        organization: 'Dev6',
        description: 'Frontend Developer',
        period: '2021.01 ~ 현재',
        projects: [
            {
                title: 'LeadPet: 유기견 ',
                tech: ['React', 'Redux', 'TypeScript', 'Github', 'Figma'],
                description: '유기견...',
                details: [
                    '관리페이지 개발'
                ]
            },
        ]
    },
    {
        organization: 'JamToMer',
        description: 'Frontend Developer',
        period: '2021.01 ~ 현재',
        projects: [
            {
                title: 'Message To Me',
                tech: ['React', 'Redux', 'TypeScript', 'GitLab'],
                description: '메시지...',
                details: [
                    'Login 개발'
                ]
            },
        ]
    },
]


export const workExperiences : IExp[] = [
    {
        organization: '유클리드소프트',
        description: 'Software Engineer',
        period: '2020.12 ~ 현재',
        projects: [
            {
                title: '국가정보자원관리원 인공지능기반 서비스중심 종합관제 보안시스템 모니터링맵 (nMAPS)',
                tech: ['Python', 'Neo4j', 'FastAPI', 'Docker', 'Django', 'Go.js', ],
                link: 'https://pullingoff.github.io/til/Projects/nirs.html',
                description: '해당 기관 산하 호스트간의 관계를 시각화해 연결 상태 및 문제를 바로 관제할 수 있도록 한다.',
                details: [
                    'Host Node와 관계(Edge)를 GDB로 나타낼 수 있도록 파이썬으로 모델링',
                    'Docker로 서버 내 Neo4j에 데이터를 삽입할 수 있도록 Batch Job 구현',
                    'JS와 go.js로 네트워크 분류체계 관리자 조회용 웹의 이벤트, 인터랙션 개발'
                ]
            },
            {
                title: '한국과학기술원 딥러닝 기반 약물 상호작용 예측 시스템 구축 및 하이브리드 앱 개발',
                tech: ['PHP', 'JavaScript'],
                description: '유저가 선택한 의약품을 기준으로 함께 복용하면 위험한 의약품 (DUR) 조합을 보여준다.',
                details: [
                    'PHP로 필요한 데이터를 받아와 가공해 프론트엔드 단으로 전송',
                    'JavaScript로 위험 조합 노드 및 엣지를 시각화한 반응형 웹 개발'
                ]
            },
            {
                title: '창업진흥원 온라인 창업교육 플랫폼 구축',
                tech: ['JAVA', 'Spring', 'JSP', 'NAVER API'],
                description: '유저에게 선택적으로 메일, SMS와 카카오 알림톡으로 알림을 보낸다.',
                details: [
                    '관리자의 웹 알림 전송 및 보낸 알림 조회 페이지 개발',
                    '네이버 API 이용해 메일, SMS, 카카오 알림톡과 웹 사이트 내 알림 전송 기능 구현'
                ]
            }
        ]
    },
]

export const otherExperiences : IExp[] = [
    {
        organization: "Try! Flutter!",
        description: "GDG Korea 주최 Flutter 교육 이벤트",
        period: '2019.06-2019.07',
        details: [
           '이벤트 오거나이저 및 디자이너로서 배너와 로고 디자인 및 제작'
        ]
    },
    {
        organization: 'Junction X Seoul',
        description: '160명의 개발자, 기획자와 디자이너가 참가한 해커톤',
        link: 'https://haeun.vercel.app/blog/190513-junctx',
        period: '2019.05',
        details: [
           '해외 투자자와 국내 개발자 간 스타트업 미팅과 멘토링 세션에서 한-영 통역 담당',
           '해커톤 행사 준비, 참가자 안내 및 이벤트 기간 전반적인 활동'
        ]
    },
]

export const licenses : string[] = [
    'SQL Developer',
    '네트워크 관리사 2급'
]

export const education : IEducation[] = [
    {
        institute: '대덕인재개발원',
        period: '2020.04 ~ 2020.12',
        course: '응용SW 엔지니어링 실무 과정',
        details: [
                'WIX를 벤치마킹한 노코드 웹빌더 어플리케이션 개발 (JAVA, Spring, JSP)',
                'Spring의 Quartz로 메일 전송 Batch 구현, Chart.js로 그래프 시각화',
             ]
    },
    {
        institute: 'Humber College',
        period: '2018.07 ~ 2019.12',
        course: 'Marketing Diploma',
        details: []
    }
]
    


export const techStacks : ITechStack[] = [
    {
        type: 'Front-End',
        skill: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'SASS', 'HTML/CSS']
    },
    {
        type: 'Back-End',
        skill: ['Python', 'Django']
    },
    {
        type: 'Data',
        skill: ['SQL', 'Neo4j']
    },
    {
        type: 'Devops',
        skill: ['Git', 'Docker']
    },
    
]