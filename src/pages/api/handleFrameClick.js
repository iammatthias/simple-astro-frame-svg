// src/pages/api/handleFrameClick.js

// Handler for POST requests
export const POST = async ({ request }) => {
  const requestData = await request.json();
  // Process requestData, verify signature, etc.

  // Return new frame metadata
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta
          property='fc:frame:image'
          content='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCI+PHJlY3QgZmlsbD0iI2ZmZiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxmb3JlaWduT2JqZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNTAwIiB4PSIzMDAiIHk9IjY1Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6QXJpYWwsc2Fucy1zZXJpZjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxMDAlIj5UaGlzIGlzIGEgbmV3IGZyYW1lIHRoYXQgZGlzcGxheXMgYSBuZXcgdXJpIGVuY29kZWQgc3ZnLjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L3N2Zz4='
        />
        <!-- Add more meta tags as needed -->
      </head>
    </html>
    `,
    { headers: { "Content-Type": "text/html" } }
  );
};

// Handler for GET requests (optional)
export const GET = async () => {
  // Return a simple message or handle accordingly
  return new Response("This endpoint is for POST requests only.", { status: 200 });
};
