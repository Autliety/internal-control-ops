# internal-control-ops
open-source demo of Internal Control Service & Web client

To run it, run the gradle task `bundle` on root project:
```
cd task-assessment
./gradlew bundle
```
Waiting until finished, and run the Jar package in `./bundle` with profile `dev`:
```
cd bundle
java -jar taserver-1.0.0.jar --spirng.profiles.active=dev
```
Access `http://localhost:8080`.
