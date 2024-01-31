// src/pages/api/handleFrameClick.js

// Handler for POST requests
export const POST = async ({ request }) => {
  const requestData = await request.json();
  // Process requestData, verify signature, etc.

  console.log(requestData);

  const svgString =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect fill="#fff" width="100%" height="100%"/><foreignObject width="600" height="500" x="300" y="65"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:24px;font-family:Arial,sans-serif;display:flex;align-items:center;height:100%">This is a new SVG for display in the Frame.</div></foreignObject></svg>';
  const base64EncodedSVG = btoa(svgString);

  // Return new frame metadata
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property='fc:frame:image' content={"data:image/svg+xml;base64," + ${base64EncodedSVG}} />
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
