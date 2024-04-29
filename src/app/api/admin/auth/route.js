import { get } from "@/functions/fetch";

// import { get } from "@/function/fetch";

export async function GET(request, { params }) {
  const { data } = await get(`/admin/auth`);
  return Response.json(data);
}
