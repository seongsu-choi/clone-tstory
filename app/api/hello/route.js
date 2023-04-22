export async function GET(request) {

  let a;
  return new Response(JSON.stringify({ res: a }))
}
export async function POST(request) {
  return new Response(JSON.stringify({ res: 'POST, Next.js!' }))
}