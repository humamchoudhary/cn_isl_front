export async function GET(request, { params }) {
  const { data } = await get(`/item/${params.slug}`);
  const product = await data.data;

  return Response.json(product);
}
