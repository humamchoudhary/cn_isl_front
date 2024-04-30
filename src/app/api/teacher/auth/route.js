import { get } from "@/functions/fetch";
import { headers } from "next/headers";
export async function GET(request, { params }) {
  // console.log(request.headers.cookies);
  const cookieHeader = headers().get("cookie");
  const { data } = await get(`/teacher/auth`, { cookie: cookieHeader });

  return Response.json(data);
}
