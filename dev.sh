#!/bin/bash
echo Starting server at http://localhost:8000/
python3 << 'EOF'
from http.server import HTTPServer, SimpleHTTPRequestHandler

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

try:
    HTTPServer(('localhost', 8000), NoCacheHandler).serve_forever()
except KeyboardInterrupt:
    print("\nbye")
    exit()
EOF