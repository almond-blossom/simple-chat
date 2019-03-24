# SIMPLE CHAT
간단한 채팅 앱으로 스케일 아웃에 따른 세션 이슈를 테스트 해보기 위한 프로젝트입니다.

0. 1개의 인스턴스, (로드밸런서 없이) 정상 동작하는 버전
0. Docker swarm으로 3개의 인스턴스 스케일 아웃, 세션 이슈가 발생하는 버전
0. Docker swarm과 Redis를 이용한 스케일 아웃, 정상 동작하는 버전

## START APP

### 각 버전 실행 방법

`npm run app1` 1번 앱<br>
`npm run app2` 2번 앱, 끝나면 삭제 필요 `docker stack rm server`

실행 후 `http://localhost:3131`에서 앱 확인.
