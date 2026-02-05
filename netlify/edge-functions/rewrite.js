export default async (request, context) => {
  return Response.redirect("https://example.com", 302)
}

export const config = {
  path: "/edge",
}
