# SIMPLE CHAT
간단한 채팅 앱으로 스케일 아웃에 따른 세션 이슈를 테스트 해보기 위한 프로젝트입니다.

|No.|Instances|Transport|Redis|Usage|Etc.|
|---|---|---|---|---|---|
|1|1|Polling|X|`npm run app1`|인스턴스가 하나라서 잘 동작한다.|
|2|4|Polling|X|`npm run app2`|인스턴스가 다수라서 채팅이 공유되지 않으며,  연결도 불안정하다.|
|3|4|Polling|O|`npm run app3`|Redis를 사용해서 채팅이 공유되지만, 연결은 불안정하다.|
|4|4|Websocket|X|`npm run app4`|Websocket을 사용하여 연결은 안정적이지만, 공유되지 않는다.|
|5|4|Websocket|O|`npm run app5`|채팅공유도 되고 연결도 안정적이다.|

실행 후 `http://localhost:3131`에서 앱 확인.

로그확인: `npm run logs`

실행종료: `npm run rm`
