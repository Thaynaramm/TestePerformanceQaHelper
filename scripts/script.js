import http from "k6/http";
import { sleep, check, group } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 10 },   // subida
    { duration: "3m", target: 30 },   // carga estável
    { duration: "3m", target: 60 },   // carga alta
    { duration: "2m", target: 100 },  // stress
    { duration: "1m", target: 0 },    // cooldown
  ],
  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% < 2s
    http_req_failed: ["rate<0.05"],    // até 5% de erro
  },
};

export default function () {
  group("Página inicial QA Helper", function() {
    const res = http.get("https://thaynaramm.github.io/QaHelperFront/");

    check(res, {
      "status 200": (r) => r.status === 200,
      "tempo < 2s": (r) => r.timings.duration < 2000,
    });
  });

  sleep(1);
}
