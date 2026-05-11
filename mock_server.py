import json
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

WORKSPACE = Path(__file__).resolve().parent
OUTPUT_FILE = WORKSPACE / "mock_submissions.jsonl"
HOST = "127.0.0.1"
PORT = 8010


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(WORKSPACE), **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)

        if parsed.path == "/en/index":
            params = parse_qs(parsed.query)
            if params.get("handler", [""])[0] == "NewcomersSurvey":
                payload = {
                    "ts": datetime.now(timezone.utc).isoformat(),
                    "language": params.get("language", [""])[0],
                    "phone": params.get("phone", [""])[0],
                    "email": params.get("email", [""])[0],
                    "source": params.get("source", [""])[0],
                    "raw_query": parsed.query,
                    "referer": self.headers.get("Referer", ""),
                }

                with OUTPUT_FILE.open("a", encoding="utf-8") as f:
                    f.write(json.dumps(payload, ensure_ascii=False) + "\n")

                body = json.dumps({"ok": True, "saved": True}).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(body)
                return

        return super().do_GET()


def main():
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"Mock survey server running at http://{HOST}:{PORT}")
    print(f"Submissions file: {OUTPUT_FILE}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
