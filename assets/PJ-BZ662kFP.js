const t={subTitle:"자유로운 P형 인간과 계획적인 J형 인간 모두를 위한",mainTitle:"맞춤형 여행 일정 관리 서비스",image:"/PJ/project.png",theme:{bg:"#296fef",text:"white"}},e={info:{date:"2024년 7월 19일 ~ 2024년 8월 16일 (4주)",content:["드래그 앤 드롭과 실시간 편집으로 친구와 여행 일정을 계획할 수 있습니다.","팀프로젝트(FE - react | BE - spring)"]},tech:["React, Vite, Zustand, Tanstack-query, styled-components"],role:["Kakao Map과 장소 검색을 활용한 여행 일정 CRUD 기능 개발","Stomp 프로토콜과 드래그 앤 드롭 기능을 활용한 실시간 일정 편집 구현"],site:"http://pj-client.s3-website.ap-northeast-2.amazonaws.com",github:"https://github.com/PJ-Plan-Journey/PJ-Plan-Journey-FE"},n=[{title:"일정 및 장소 선택",content:"일정을 선택하고 원하는 날짜의 장소를 선택할 수 있습니다.",image:"/PJ/add.gif"},{title:"친구 초대",content:"친구를 초대하여 함께 계획할 수 있습니다.",image:"/PJ/invite.gif"},{title:"실시간 편집",content:"실시간으로 친구와 편집할 수 있습니다.",image:"/PJ/edit.gif"},{title:"일정 공유",content:"나의 여행 일정을 다른 사람과 공유할 수 있습니다.",image:"/PJ/board.gif"}],i=[{name:"코드 분할",content:[{title:"문제",content:"Lighthouse 분석 결과 좋은 점수였지만 FCP와 LCP 속도 부분에서 아쉬운 부분이 있었습니다.",image:"/PJ/lazy_before.png"},{title:"해결 방법",content:"lazy 기능을 활용하여 번들 파일 크기를 줄이고, 파일 로딩 시간을 단축해 성능을 개선할 수 있다고 판단했습니다. 또한, 사용자 접근성을 고려하여 lazy 컴포넌트 로딩 기준을 설정하고, 로그인 여부에 따라 적용하도록 구현했습니다.",image:"/PJ/lazy_code.png"},{title:"결과",content:[`번들 파일 크기가 1.2MB에서 865KB로 감소
`,`FCP는 1.2초에서 0.5초로 단축
`,`LCP는 1.5초에서 1.0초로 단축
`],image:"/PJ/lazy_after.png"}]}],a={title:t,detail:e,intro:n,troubleshooting:i};export{a as default,e as detail,n as intro,t as title,i as troubleshooting};
