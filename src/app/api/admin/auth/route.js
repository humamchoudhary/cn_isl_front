import { get } from "@/functions/fetch";
export async function GET(request, { params }) {
  const { data } = await get(`/admin/auth`);

  return Response.json(data);
}
