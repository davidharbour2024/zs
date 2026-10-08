export async function GET() {
  return Response.json({
    ok: true,
    app: "zahbro-sports",
    environment: process.env.NODE_ENV,
  });
}
